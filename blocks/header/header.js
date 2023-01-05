import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';
import { isMobile } from '../../scripts/scripts.js';

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
  if (window.location.host.includes('github.io')) {
    navPath = 'https://rosalind.experience-adobe.com/nav';
  }

  const resp = await fetch(`${navPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.innerHTML = html;

    const classes = ['brand', 'menu', 'tools'];
    classes.forEach((e, j) => {
      const section = nav.children[j];
      if (section) section.classList.add(`nav-${e}`);
    });

    const brand = nav.querySelector('.nav-brand p');
    const logo = document.createElement('span');
    logo.classList.add('logo');
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
    const hamburger = document.createElement('div');
    hamburger.classList.add('nav-hamburger');
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

    const toolsContainer = document.createElement('div');
    toolsContainer.classList.add('nav-tools');

    const themeSelectContainer = document.createElement('div');
    themeSelectContainer.classList.add('select');
    themeSelectContainer.classList.add('theme-switcher');

    const themeSelect = document.createElement('select');

    const defaultOption = document.createElement('option');
    defaultOption.value = '0';
    defaultOption.innerText = 'Select a Theme';
    themeSelect.append(defaultOption);

    themes.forEach((theme) => {
      const option = document.createElement('option');
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
