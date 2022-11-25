import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

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
  const navPath = cfg.nav || '/nav';
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

    const navMenu = [...nav.children][1];
    if (navMenu) {
      navMenu.querySelectorAll(':scope > ul > li').forEach((navSection) => {
        navSection.classList.add('top-level');
        navSection.addEventListener('mouseover', () => {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          collapseAllNavSections(navMenu);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        });

        navSection.addEventListener('click', () => {
          const child = navSection.querySelector(':scope > ul');
          child?.classList.toggle('open');
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

    const toolsContainer = document.createElement('div');
    toolsContainer.classList.add('nav-tools');

    const themeSwitchContainer = document.createElement('div');
    themeSwitchContainer.classList.add('theme-switcher');

    const themeSwitch = document.createElement('input');
    themeSwitch.type = 'checkbox';
    themeSwitch.classList.add('switch');

    const label = document.createElement('label');
    label.innerHTML = '&nbsp;';

    const darkIcon = document.createElement('span');
    darkIcon.classList.add('icon');
    darkIcon.classList.add('icon-moon');
    label.append(darkIcon);

    const lightIcon = document.createElement('span');
    lightIcon.classList.add('icon');
    lightIcon.classList.add('icon-sun');
    label.append(lightIcon);

    themeSwitchContainer.append(themeSwitch);
    themeSwitchContainer.append(label);

    toolsContainer.append(themeSwitchContainer);

    nav.appendChild(toolsContainer);

    themeSwitch.addEventListener('change', (event) => {
      const theme = document.getElementById('theme');
      if (event.target && theme) {
        if (event.target.checked === true) {
          theme.setAttribute('href', '/styles/dark-theme.css');
        } else {
          theme.setAttribute('href', '/styles/light-theme.css');
        }
      }
    });

    decorateIcons(nav);

    window.addEventListener('scroll', (ev) => {
      ev.preventDefault();
      onScroll();
    });
  }
}
