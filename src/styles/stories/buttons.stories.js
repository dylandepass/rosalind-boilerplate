export default {
  title: 'Buttons',
};

const Template = ({ content }) => content;

export const Headings = Template.bind({});
Headings.parameters = {
  title: 'Buttons',
};
Headings.args = {
  content: /* html */`
        <div class="section">
          <div class="block-wrapper">
            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Primary
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button primary">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button primary">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button primary">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button primary">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Primary (Large)
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button primary large">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button primary large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button primary large">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button primary large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Primary (Small)
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button primary small">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button primary small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button primary small">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button primary small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>


            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Secondary
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button secondary">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button secondary">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button secondary">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button secondary">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Secondary (Large)
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button secondary large">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button secondary large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button secondary large">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button secondary large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Secondary (Small)
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button secondary small">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button secondary small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button secondary small">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button secondary small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

                        <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Quiet
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button quiet">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button quiet">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button quiet">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button quiet">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Quiet (Large)
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button quiet large">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button quiet large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button quiet large">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button quiet large">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="row justify-content-flex-start gap-lg mb-lg">
              <div class="col-1 align-items-center">
                Quiet (Small)
              </div>
              <div class="col-2 align-items-center">
                <a title="Button Primary" class="button quiet small">Button</a>
              </div>
              <div class="col-3 align-items-center">
                <a title="Button Primary" class="button quiet small">
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                  <span>Button<span>
                </a>
              </div>
              <div class="col-3 align-items-center">
                <a class="button quiet small">
                  <span>Button</span>
                  <span class="icon icon-search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                      <rect id="Canvas" opacity="0" width="18" height="18" /><path class="fill" fill="currentColor" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div class="col-1 align-items-center">
                <a class="button quiet small">
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
