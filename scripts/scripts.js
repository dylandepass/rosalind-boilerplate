import {
  sampleRUM,
  buildBlock,
  loadHeader,
  loadFooter,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  decorateIcons,
  waitForLCP,
  loadBlocks,
  loadCSS,
  getMetadata,
} from './lib-franklin.js';

const LCP_BLOCKS = ['hero']; // add your LCP blocks to the list
window.hlx.RUM_GENERATION = 'project-1'; // add your RUM generation information here

function build2ColHero(main) {
  const firstDiv = main.querySelector(':scope > div:first-of-type');
  const picture = firstDiv.querySelector('picture');
  const section = document.createElement('div');
  const heroBlock = buildBlock('hero', [[{ elems: [...firstDiv.children] }, picture]]);
  heroBlock.classList.add('hero-2-cols');
  section.append(heroBlock);
  firstDiv.remove();
  main.prepend(section);
}

/**
 * Loads JS and CSS for a template.
 */
export async function loadTemplate(main, template) {
  if (template) {
    try {
      const cssLoaded = new Promise((resolve) => {
        loadCSS(`${window.hlx.codeBasePath}/templates/${template}/${template}.css`, resolve);
      });
      const decorationComplete = new Promise((resolve) => {
        (async () => {
          try {
            const mod = await import(`../templates/${template}/${template}.js`);
            if (mod.default) {
              await mod.default(main);
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`failed to load module for ${template}`, error);
          }
          resolve();
        })();
      });
      await Promise.all([cssLoaded, decorationComplete]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`failed to load block ${template}`, error);
    }
  }
}

async function decorateTemplate(main) {
  const template = getMetadata('template');
  if (template && template !== 'home') {
    await loadTemplate(main, template);
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    // noop
    const template = getMetadata('template');
    if (!template) {
      return;
    }

    if (template === 'home') {
      build2ColHero(main);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */

export function decorateButtons(element) {
  element.querySelectorAll('a').forEach((a) => {
    a.title = a.title || a.textContent;
    if (a.href !== a.textContent) {
      const up = a.parentElement;
      const twoup = a.parentElement.parentElement;
      if (!a.querySelector('img')) {
        if (up.childNodes.length === 1 && (up.tagName === 'P' || up.tagName === 'DIV')) {
          a.className = 'button primary'; // default
          up.classList.add('button-container');
        }
        if (up.childNodes.length === 1 && up.tagName === 'STRONG'
          && twoup.childNodes.length === 1 && twoup.tagName === 'P') {
          a.className = 'button primary';
          twoup.classList.add('button-container');
        }
        if (up.childNodes.length === 1 && up.tagName === 'EM'
          && twoup.childNodes.length === 1 && twoup.tagName === 'P') {
          a.className = 'button secondary';
          twoup.classList.add('button-container');
        }

        if (a.textContent === '') {
          a.classList.add('icon-only');
        }
      }
    }
  });
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

export function loadTheme() {
  const themeLink = document.getElementById('theme');
  const theme = localStorage.getItem('theme');
  if (theme && themeLink) {
    themeLink.setAttribute('href', `${window.hlx.codeBasePath}/styles/themes/${theme}.css`);
  }
}

export function isMobile() {
  return window.innerWidth < 900;
}

/**
 * loads everything needed to get to LCP.
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  loadTheme();
  const main = doc.querySelector('main');
  await decorateTemplate(main);
  if (main) {
    decorateMain(main);
    await waitForLCP(LCP_BLOCKS);
  }
}

/**
 * Adds the favicon.
 * @param {string} href The favicon URL
 */
export function addFavIcon(href) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = href;
  const existingLink = document.querySelector('head link[rel="icon"]');
  if (existingLink) {
    existingLink.parentElement.replaceChild(link, existingLink);
  } else {
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}

/**
 * loads everything that doesn't need to be delayed.
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadBlocks(main);

  decorateIcons(main);
  const { hash } = window.location;
  const element = hash ? main.querySelector(hash) : false;
  if (hash && element) element.scrollIntoView();

  if (!window.STORIES) {
    loadHeader(doc.querySelector('header'));
    loadFooter(doc.querySelector('footer'));
  }

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  addFavIcon(`${window.hlx.codeBasePath}/styles/favicon.svg`);
  sampleRUM('lazy');
  sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
  sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * loads everything that happens a lot later, without impacting
 * the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  if (!window.hlx.performance) window.setTimeout(() => import('./delayed.js'), 4000);
  // load anything that can be postponed to the latest here
}

export async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

if (!window.STORIES) {
  loadPage();
}

const params = new URLSearchParams(window.location.search);
if (params.get('performance')) {
  window.hlx.performance = true;
  import('./performance.js').then((mod) => {
    if (mod.default) mod.default();
  });
}
