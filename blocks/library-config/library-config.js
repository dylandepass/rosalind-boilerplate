const LIBRARY_PATH = '/docs/library/library.json';

async function loadBlocks(content, list) {
  const { default: blocks } = await import('./lists/blocks.js');
  blocks(content, list);
}

async function loadPlaceholders(content, list) {
  const { default: placeholders } = await import('./lists/placeholders.js');
  placeholders(content, list);
}

async function loadIcons(content, list) {
  const { default: icons } = await import('./lists/icons.js');
  icons(content, list);
}

async function loadAssets(content, list) {
  const { default: assets } = await import('./lists/assets.js');
  assets(content, list);
}

async function loadList(type, content, list) {
  list.innerHTML = '';
  switch (type) {
    case 'blocks':
      loadBlocks(content, list);
      break;
    case 'placeholders':
      loadPlaceholders(content, list);
      break;
    case 'icons':
      loadIcons(content, list);
      break;
    case 'assets':
      loadAssets(content, list);
      break;
    default:
      await import('../../utils/lana.js');
      window.lana.log(`Library type not supported: ${type}`, { clientId: 'milo', sampleRate: 100 });
  }
}
