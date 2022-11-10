export default {
  title: 'Buttons',
};

const Template = ({content}) => {
  return content;
};

export const Headings = Template.bind({});
Headings.parameters = {
  title: "Buttons",
};
Headings.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <div class="row justify-content-flex-start gap-sm mb-lg">
              <div class="col-2">
                CTA
              </div>
              <div class="col-8 gap-sm">
                <a title="Button CTA" class="button cta">Button</a>
                <a title="Button CTA" class="button cta">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button CTA" class="button cta">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button CTA" class="button cta">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg">
              <div class="col-2">
                CTA (Large)
              </div>
              <div class="col-8 gap-sm">
                <a title="Button CTA" class="button cta large">Button</a>
                <a title="Button CTA" class="button cta large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button CTA" class="button cta large">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button CTA" class="button cta large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg">
              <div class="col-2">
                CTA (Small)
              </div>
              <div class="col-8 gap-sm">
                <a title="Button CTA" class="button cta small">Button</a>
                <a title="Button CTA" class="button cta small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button CTA" class="button cta small">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button CTA" class="button cta small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg mt-xl">
              <div class="col-2">
                Secondary
              </div>
              <div class="col-8 gap-sm">
                <a title="Button Secondary" class="button secondary">Button</a>
                <a title="Button Secondary" class="button secondary">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button CTA" class="button secondary">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button CTA" class="button secondary">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg">
              <div class="col-2">
                Secondary (Large)
              </div>
              <div class="col-8 gap-sm">
                <a title="Button Secondary" class="button secondary large">Button</a>
                <a title="Button Secondary" class="button secondary large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button Secondary" class="button secondary large">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button Secondary" class="button secondary large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg">
              <div class="col-2">
                Secondary (Small)
              </div>
              <div class="col-8 gap-sm">
                <a title="Button Secondary" class="button secondary small">Button</a>
                <a title="Button Secondary" class="button secondary small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button Secondary" class="button secondary small">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button Secondary" class="button secondary small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg mt-xl">
              <div class="col-2">
                Quiet
              </div>
              <div class="col-8 gap-sm">
                <a title="Button Quiet" class="button quiet">Button</a>
                <a title="Button Quiet" class="button quiet">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button CTA" class="button quiet">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button CTA" class="button quiet">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg">
              <div class="col-2">
                Quiet (Large)
              </div>
              <div class="col-8 gap-sm">
                <a title="Button Quiet" class="button quiet large">Button</a>
                <a title="Button Quiet" class="button quiet large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button Quiet" class="button quiet large">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button Quiet" class="button quiet large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-sm mb-lg">
              <div class="col-2">
                Quiet (Small)
              </div>
              <div class="col-8 gap-sm">
                <a title="Button Quiet" class="button quiet small">Button</a>
                <a title="Button Quiet" class="button quiet small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
                <a title="Button Quiet" class="button quiet small">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
                <a title="Button Quiet" class="button quiet small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>`,
};