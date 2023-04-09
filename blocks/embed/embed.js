const loadScript = (url, callback, type) => {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  if (type) {
    script.setAttribute('type', type);
  }
  head.append(script);
  script.onload = callback;
  return script;
};

const getDefaultEmbed = (url) => `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
    <iframe src="${url.href}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen=""
      scrolling="no" allow="encrypted-media" title="Content from ${url.hostname}" loading="lazy">
    </iframe>
  </div>`;

const embedYoutube = (url) => {
  const usp = new URLSearchParams(url.search);
  let vid = usp.get('v');
  const embed = url.pathname;
  if (url.origin.includes('youtu.be')) {
    vid = url.pathname.substring(1);
  }
  const embedHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://www.youtube.com${
  vid ? `/embed/${vid}?rel=0&amp;v=${vid}` : embed
}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allow="encrypted-media; accelerometer; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" title="Content from Youtube" loading="lazy"></iframe>
    </div>`;
  return embedHTML;
};

const embedInstagram = (url) => {
  const endingSlash = url.pathname.endsWith('/') ? '' : '/';
  const location = window.location.href.endsWith('.html') ? window.location.href : `${window.location.href}.html`;
  const src = `${url.origin}${url.pathname}${endingSlash}embed/?cr=1&amp;v=13&amp;wp=1316&amp;rd=${location}`;
  const embedHTML = `<div style="width: 100%; position: relative; display: flex; justify-content: center">
      <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="${src}"
        allowtransparency="true" allowfullscreen="true" frameborder="0" loading="lazy">
      </iframe>
    </div>`;
  return embedHTML;
};

const embedVimeo = (url) => {
  const video = url.pathname.split('/')[2];
  const embedHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://player.vimeo.com/video/${video}" 
      style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
      frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  
      title="Content from Vimeo" loading="lazy"></iframe>
    </div>`;
  return embedHTML;
};

const embedTwitter = (url) => {
  const embedHTML = `<blockquote class="twitter-tweet"><a href="${url}"></a></blockquote>`;
  loadScript('https://platform.twitter.com/widgets.js');
  return embedHTML;
};

const embedTiktok = (url) => {
  const resultHtml = document.createElement('div');
  resultHtml.setAttribute('id', 'tiktok');

  const tiktokBuild = async (fetchUrl) => {
    loadScript('https://www.tiktok.com/embed.js');
    const response = await fetch(fetchUrl);
    const json = await response.json();
    const tiktok = document.getElementById('tiktok');
    tiktok.outerHTML = json.html; // veracode-ignore
  };
  tiktokBuild(`https://www.tiktok.com/oembed?url=${url}`);

  return resultHtml.outerHTML;
};

const embedSlideShare = (url) => {
  const resultHtml = document.createElement('div');
  resultHtml.setAttribute('id', 'slideShare');

  const slideShareBuild = async () => {
    const response = await fetch(url);
    const body = await response.text();
    const el = document.createElement('div');
    el.innerHTML = body; // veracode-ignore
    const slideShowInfo = el.querySelector('.slideshow-info meta[itemprop="embedURL"]');
    if (slideShowInfo) {
      const embedUrl = el.querySelector('.slideshow-info meta[itemprop="embedURL"]').content;
      const slideShare = document.getElementById('slideShare');
      slideShare.outerHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
          <iframe src="${embedUrl}" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen loading="lazy"> </iframe>
        </div>`;
    }
  };
  slideShareBuild(url);

  return resultHtml.outerHTML;
};

const EMBEDS_CONFIG = {
  youtube: {
    type: 'youtube',
    embed: embedYoutube,
  },
  wistia: {
    type: 'wistia',
    embed: getDefaultEmbed,
  },
  instagram: {
    type: 'instagram',
    embed: embedInstagram,
  },
  vimeo: {
    type: 'vimeo',
    embed: embedVimeo,
  },
  twitter: {
    type: 'twitter',
    embed: embedTwitter,
  },
  tiktok: {
    type: 'tiktok',
    embed: embedTiktok,
  },
  slideshare: {
    type: 'slideshare',
    embed: embedSlideShare,
  },
};

const loadEmbed = (block) => {
  if (block.classList.contains('is-loaded')) {
    return;
  }

  const a = block.querySelector('a');

  if (a) {
    const url = new URL(a.href.replace(/\/$/, ''));
    const hostnameArr = url.hostname.split('.');

    // trimed domain name (ex, www.google.com -> google)
    const simpleDomain = hostnameArr[hostnameArr.length - 2];

    // getting config
    let config = EMBEDS_CONFIG[simpleDomain];

    // for different config for same domain:
    if (url.hostname.includes('youtu')) {
      config = EMBEDS_CONFIG.youtube;
    }

    // loading embed function for given config and url.
    if (config) {
      a.outerHTML = config.embed(url); // veracode-ignore
      block.classList = `block embed embed-${config.type}`;
    } else {
      a.outerHTML = getDefaultEmbed(url); // veracode-ignore
      block.classList = `block embed embed-${simpleDomain}`;
    }
    block.classList.add('is-loaded');
  }
};

export default function decorate(block) {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      loadEmbed(block);
    }
  });
  observer.observe(block);
}
