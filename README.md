<div align="center">

  <img src="https://i.imgur.com/KXoW4Em.png" alt="logo" width="50" height="auto" />
  <h1>Rosalind Boilerplate</h1>
  
  <p>
    A Customizable Design System for Franklin Based Websites 
  </p>
  
<!-- Badges -->
<p>
  <a href="https://github.com/Louis3797/awesome-readme-template/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/dylandepass/rosalind-boilerplate" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/dylandepass/rosalind-boilerplate" alt="last update" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/network/members">
    <img src="https://img.shields.io/github/forks/dylandepass/rosalind-boilerplate" alt="forks" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/dylandepass/rosalind-boilerplate" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://main--rosalind-boilerplate--dylandepass.hlx.live/">View Demo</a>
  <span> · </span>
    <a href="https://dylandepass.github.io/rosalind-boilerplate/?path=/docs/introduction--docs">Documentation</a>
  <span> · </span>
    <a href="https://github.com/dylandepass/rosalind-boilerplate/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/dylandepass/rosalind-boilerplate/issues/">Request Feature</a>
  </h4>
</div>

<br />

<div align="center"> 
  <img src="https://i.imgur.com/M4Iqceh.png" alt="screenshot" />
</div>

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Running Tests](#test_tube-running-tests)
  * [Run Locally](#running-run-locally)
- [Contributing](#wave-contributing)
  * [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)

<!-- About the Project -->
## :star2: About the Project

When you are managing user experiences, it can be quite challenging to keep styles consistent and synchronized across multiple development platforms and devices. Rosalind offers a boilerplate setup to help get your company's design system started with an end-to-end designer/developer workflow across any platform.

With Rosalind, design decisions start in Figma, which is where designers feel most at home. They can then customize the design system to their liking and, with the click of a button, give developers access to these decisions in code on any platform iOS, Android, CSS, JS, HTML etc.

<!-- Features -->
### :dart: Features

- Manage design system in figma
- Sync design tokens across multiple development platforms with Style Dictionary
- Develop your Franklin blocks in isolation using Storybook JS
- Leverage the latest css features with PostCSS integration.
- Optimized for the best performance on AEM Franklin
- Fluid Typography that resizes smoothly to match any device width
- Light and dark themes included. Fully customizable
- Includes the incredible open source feather icons set

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/dylandepass/rosalind-boilerplate.git
```

Go to the project directory

```bash
  cd rosalind-boilerplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<!-- Running Tests -->
### :test_tube: Running Tests

To run tests, run the following command. Storybook must be running locally.

```bash
  npm run storybook
  npm run test
```

<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/dylandepass/rosalind-boilerplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dylandepass/rosalind-boilerplate" />
</a>


Contributions are always welcome!

See `contributing.md` for ways to get started.


<!-- Code of Conduct -->
### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/dylandepass/rosalind-boilerplate/blob/main/CODE_OF_CONDUCT.md)

<!-- FAQ -->
## :grey_question: FAQ

- How do you managing the tokens?

  + The design tokens are managed in Figma and transformed into variable files (css, scss, swift etc) using [StyleDictionary](https://amzn.github.io/style-dictionary/#/). Currently rosalind is only setup to work with [Token Studio](https://docs.tokens.studio/) for Figma but could be setup to work with other token management software.

- How do you apply tokens to franklin blocks?

  + The tokens can be applied using standard css variables. Rosalind also includes a set of [mixins](https://dylandepass.github.io/rosalind-boilerplate/?path=/docs/docs-developers-mixins-introduction--docs) that can be used instead of css variables. These mixins abstract the complexities of having to remember token names.

- How do you keep the design and the code in sync?  i.e if a component gets a new token added/removed

  + Rosalind includes some utility scripts that can to detect if the core design system css is out of date with the tokens. [unused-variables.mjs](https://github.com/dylandepass/rosalind-boilerplate/blob/main/bin/unused-variables.mjs) will detect if a variable is not used in the core design system. For a lot of variables this is ok and expected. [validate-system.mjs](https://github.com/dylandepass/rosalind-boilerplate/blob/main/bin/validate-system.mjs) will check if any variables are used in the core design system that no longer exists. This check runs as part of CI and will stop a build if a token is not found.


<!-- License -->
## :warning: License

Distributed under the Apache 2-0 License. See [LICENSE.txt](https://github.com/dylandepass/rosalind-boilerplate/blob/main/LICENSE) for more information.


<!-- Contact -->
## :handshake: Contact

Dylan Depass - [@dylandepass](https://twitter.com/dylandepass) - dyland@adobe.com
