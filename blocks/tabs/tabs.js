import { createTag } from '../../scripts/scripts.js';

const isElementInContainerView = (targetEl) => {
  const rect = targetEl.getBoundingClientRect();
  const docEl = document.documentElement;
  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || /* c8 ignore next */ docEl.clientHeight)
    && rect.right <= (window.innerWidth || /* c8 ignore next */ docEl.clientWidth)
  );
};

const scrollTabIntoView = (e) => {
  const isElInView = isElementInContainerView(e);
  /* c8 ignore next */
  if (!isElInView) e.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
};

function changeTabs(e) {
  const { target } = e;
  const parent = target.parentNode;
  const grandparent = parent.parentNode.nextElementSibling;
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach((t) => t.setAttribute('aria-selected', false));
  target.setAttribute('aria-selected', true);
  scrollTabIntoView(target);
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach((p) => p.setAttribute('hidden', true));
  grandparent.parentNode
    .querySelector(`#${target.getAttribute('aria-controls')}`)
    .removeAttribute('hidden');
}

function getStringKeyName(str) {
  /*
    The [^...] character class is used to match any character
    that is not a valid CSS selector character.
    The \p{L} and \p{N} Unicode properties are used to match any
    letter or digit character in any language.
  */
  const regex = /[^\p{L}\p{N}_-]/gu;
  return str.trim().toLowerCase().replace(/\s+/g, '-').replace(regex, '');
}

function getUniqueId(el, rootElem) {
  const tabs = rootElem.querySelectorAll('.tabs');
  return [...tabs].indexOf(el) + 1;
}

function configTabs(config, rootElem) {
  const defaultActiveConfig = config['active-tab'];
  const activeTab = defaultActiveConfig && `#tab-${CSS.escape(config['tab-id'])}-${CSS.escape(getStringKeyName(defaultActiveConfig))}`;
  const { hash } = window.location;

  if (hash) {
    const selectedTab = rootElem.querySelector(hash);
    if (selectedTab) selectedTab.click();
  } else if (activeTab) {
    const selectedTab = rootElem.querySelector(activeTab);
    if (selectedTab) selectedTab.click();
  }
}

function initTabs(elm, config, rootElem) {
  const tabs = elm.querySelectorAll('[role="tab"]');
  const tabLists = elm.querySelectorAll('[role="tablist"]');
  tabLists.forEach((tabList) => {
    let tabFocus = 0;
    tabList.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        if (e.key === 'ArrowRight') {
          tabFocus += 1;
          /* c8 ignore next */
          if (tabFocus >= tabs.length) tabFocus = 0;
        } else if (e.key === 'ArrowLeft') {
          tabFocus -= 1;
          /* c8 ignore next */
          if (tabFocus < 0) tabFocus = tabs.length - 1;
        }
        tabs[tabFocus].setAttribute('tabindex', 0);
        tabs[tabFocus].focus();
      }
    });
  });
  tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabs);
  });
  if (config) configTabs(config, rootElem);
}

const handleDeferredImages = (block) => {
  const loadLazyImages = () => {
    const images = block.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      /* c8 ignore next */
      img.removeAttribute('loading');
    });
  };
  document.addEventListener('milo:deferred', loadLazyImages, { once: true, capture: true });
};

export default function decorate(block) {
  const rootElem = block.closest('.fragment') || document;
  const rows = block.querySelectorAll(':scope > div');
  const parentSection = block.closest('.section');
  /* c8 ignore next */
  if (!rows.length) return;

  // Tab Config
  const config = {};
  const configRows = [...rows];
  configRows.splice(0, 1);
  configRows.forEach((row) => {
    const rowKey = getStringKeyName(row.children[0].textContent);
    const rowVal = row.children[1].textContent.trim();
    config[rowKey] = rowVal;
    row.remove();
  });
  const tabId = config.id || getUniqueId(block, rootElem);
  config['tab-id'] = tabId;
  block.id = `tabs-${tabId}`;
  parentSection?.classList.add(`tablist-${tabId}-section`);

  // Tab Content
  const tabContentContainer = createTag('div', { class: 'tab-content-container' });
  const tabContent = createTag('div', { class: 'tab-content' }, tabContentContainer);
  block.append(tabContent);

  // Tab List
  const tabList = rows[0];
  tabList.classList.add('tabList');
  tabList.setAttribute('role', 'tablist');
  const tabListContainer = tabList.querySelector(':scope > div');
  tabListContainer.classList.add('tab-list-container');
  const tabListItems = rows[0].querySelectorAll(':scope li');

  if (tabListItems) {
    const { hash } = window.location;
    const btnClass = [...block.classList].includes('quiet') ? 'heading-xs' : 'heading-xs';
    const select = createTag('select');

    tabListItems.forEach((item, i) => {
      const tabName = config.id ? i + 1 : getStringKeyName(item.textContent);
      const tabIdString = `tab-${tabId}-${tabName}`;
      const tabPanelId = `tab-panel-${tabId}-${tabName}`;

      // eslint-disable-next-line no-mixed-operators
      const selected = hash === `#${tabIdString}` || i === 0 && !hash;
      const tabBtnAttributes = {
        role: 'tab',
        class: btnClass,
        id: tabIdString,
        tabindex: '0',
        'aria-selected': selected,
        'aria-controls': tabPanelId,
      };
      const tabBtn = createTag('button', tabBtnAttributes);
      tabBtn.classList.add('button');
      tabBtn.innerText = item.textContent;

      const hr = createTag('hr');
      tabBtn.append(hr);

      tabListContainer.append(tabBtn);

      const tabContentAttributes = {
        id: tabPanelId,
        role: 'tabpanel',
        class: 'tabpanel',
        tabindex: '0',
        'aria-labelledby': `tab-${tabId}-${tabName}`,
      };
      const tabListContent = createTag('div', tabContentAttributes);
      tabListContent.setAttribute('aria-labelledby', `tab-${tabId}-${tabName}`);
      if (i > 0) tabListContent.setAttribute('hidden', '');
      tabContentContainer.append(tabListContent);

      const option = createTag('option', { value: `tab-panel-${tabId}-${tabName}` });
      option.textContent = item.textContent;
      select.append(option);

      if (selected) {
        select.value = tabPanelId;
      }
    });

    const selectContainer = createTag('div', { class: 'select' });

    select.addEventListener('change', (e) => {
      const selected = e.target.value;
      document.querySelectorAll('[aria-selected="true"]')
        .forEach((t) => t.setAttribute('aria-selected', false));

      const newSelection = document.querySelector(`[aria-controls=${selected}`);
      newSelection.setAttribute('aria-selected', true);

      document.querySelectorAll('[role="tabpanel"]:not([hidden])')
        .forEach((t) => t.setAttribute('hidden', true));

      document.querySelectorAll(`#${selected}`)
        .forEach((t) => t.removeAttribute('hidden'));
    });
    selectContainer.append(select);
    tabListContainer.append(selectContainer);
    tabListItems[0].parentElement.remove();
  }

  // Tab Sections
  const allSections = Array.from(rootElem.querySelectorAll('div.section'));
  allSections.forEach((e) => {
    const tabData = e.getAttribute('data-tab');
    if (tabData) {
      const dataArr = tabData.split(', ');
      const [tabItemId, tabItemIndex] = dataArr;
      if (!tabItemId || !tabItemIndex) return;

      e.removeAttribute('style');
      e.setAttribute('data-section-status', 'loaded');
      const assocTabItem = rootElem.querySelector(`#tab-panel-${tabItemId}-${tabItemIndex}`);
      if (assocTabItem) {
        assocTabItem.append(e);
      }
    }
  });
  handleDeferredImages(block);
  initTabs(block, config, rootElem);
}
