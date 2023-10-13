import { readBlockConfig } from '../../scripts/aem.js';
import { isMobile, createTag, decorateIcons } from '../../scripts/scripts.js';

/**
 * collapses all open nav sections
 * @param {Element} sections The container element
 */
function collapseAllNavSections(sections) {
  sections.querySelectorAll('.nav-menu > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', 'false');
  });
}

function onScroll() {
  const header = document.querySelector('.header');
  if (header) {
    if (document.documentElement.scrollTop >= 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch nav content
  let navPath = cfg.nav || '/nav';

  // Load from storybook directory if running on github.io
  if (window.location.host.includes('github.io') || window.__STORYBOOK_PREVIEW__) { // eslint-disable-line no-underscore-dangle
    navPath = 'https://main--rosalind-boilerplate--dylandepass.hlx.page/storybook/nav';
  }

  const resp = await fetch(`${navPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = createTag('nav', {}, html);
    nav.innerHTML = html;

    const classes = ['brand', 'menu', 'tools'];
    classes.forEach((e, j) => {
      const section = nav.children[j];
      if (section) section.classList.add(`nav-${e}`);
    });

    const brand = nav.querySelector('.nav-brand p');
    const logo = createTag('span', { class: 'logo' });
    brand?.prepend(logo);
    logo.style.setProperty('background-image', `url(${getComputedStyle(document.documentElement)
      .getPropertyValue('--ros-semantic-assets-logo')}`);

    const navMenu = [...nav.children][1];
    if (navMenu) {
      navMenu.querySelectorAll(':scope > ul > li').forEach((navSection) => {
        navSection.classList.add('top-level');
        navSection.addEventListener('mouseover', () => {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          collapseAllNavSections(navMenu);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        });

        navSection.addEventListener('click', (event) => {
          const parent = event.target.parentElement;
          const hasChildren = parent.querySelector('ul') !== null;
          if (isMobile()) {
            // If we clicked on a top level element don't navigate and expand instead
            if (hasChildren && parent.classList.contains('top-level')) {
              event.preventDefault();
            }
          }

          if (hasChildren) {
            const child = navSection.querySelector(':scope > ul');
            child?.classList.toggle('open');
          }
        });
      });
    }

    // hamburger for mobile
    const hamburger = createTag('div', { class: 'nav-hamburger' });
    hamburger.innerHTML = /* html */`
          <div>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
    `;
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      document.body.style.overflowY = expanded ? '' : 'hidden';
      nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
    nav.prepend(hamburger);
    nav.setAttribute('aria-expanded', 'false');
    block.append(nav);

    const themesBuffer = await fetch('../../themes.txt');
    const themes = await themesBuffer.json();

    const toolsContainer = createTag('div', { class: 'nav-tools' });
    const themeSelectContainer = createTag('div', { class: 'select theme-switcher' });
    const themeSelect = createTag('select');
    const defaultOption = createTag('option');

    defaultOption.value = '0';
    defaultOption.innerText = 'Select a Theme';
    themeSelect.append(defaultOption);

    themes.forEach((theme) => {
      const option = createTag('option');
      option.value = theme.name;
      option.innerText = theme.name;
      themeSelect.append(option);
    });

    themeSelectContainer.append(themeSelect);

    toolsContainer.append(themeSelectContainer);

    nav.appendChild(toolsContainer);

    themeSelect.addEventListener('change', (event) => {
      const theme = document.getElementById('theme');
      if (theme && event.target && event.target.value !== '0') {
        const selection = event.target.value;
        theme.setAttribute('href', `/styles/themes/${selection}.css`);
        localStorage.setItem('theme', selection);
        const el = document.querySelector('.logo');
        el.style.display = 'none';
        setTimeout(() => {
          if (el) {
            el.style.setProperty('background-image', `url(${getComputedStyle(document.documentElement).getPropertyValue('--ros-semantic-assets-logo')}`);
            el.style.display = 'block';
          }
        }, 300);
      }
    });

    decorateIcons(nav);

    window.addEventListener('scroll', (ev) => {
      ev.preventDefault();
      onScroll();
    });
  }
}
