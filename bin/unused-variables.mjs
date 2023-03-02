/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable import/no-extraneous-dependencies, no-restricted-syntax */
/* eslint-disable no-await-in-loop, no-loop-func, no-console */

import { promises as fs } from 'fs';

const tokenThemesBuffer = await fs.readFile('./tokens/$themes.json');
const themesJson = JSON.parse(tokenThemesBuffer.toString());

const systemCSS = await fs.readFile('./styles/system.css');

const excludes = [
  '--ros-theme',
  '--ros-semantic-drop-shadow',
  '--ros-semantic-spacing-gap-component',
  '--ros-semantic-spacing-around-component',
  '--ros-semantic-border-width',
  '--ros-semantic-size-icon',
  '--ros-semantic-size-breakpoints-screen',
  '--ros-pattern',
  '--ros-semantic-inner-shadow',
  '--ros-semantic-text-decoration-line-through',
  '--ros-semantic-text-decoration-underline',
  '--ros-semantic-text-decoration-none',
  '--ros-semantic-text-case-display',
  '--ros-semantic-text-case-none',
  '--ros-semantic-font-weight-black',
  '--ros-semantic-font-weight-extra-bold',
  '--ros-semantic-font-weight-bold',
  '--ros-semantic-font-weight-semi-bold',
  '--ros-semantic-font-weight-medium',
  '--ros-semantic-font-weight-normal',
  '--ros-semantic-font-weight-light',
  '--ros-semantic-font-weight-extra-light',
  '--ros-semantic-font-weight-thin',
  '--ros-semantic-border-radius-none',
  '--ros-semantic-border-radius-round',
  '--ros-semantic-assets-logo',
  '--ros-semantic-font-size-body-lg',
  '--ros-semantic-font-size-body-sm',
  '--ros-semantic-font-size-body-xs',
];

for (const theme of themesJson) {
  const themeVariableFile = await fs.readFile(`./styles/themes/${theme.name}.css`);
  const themeVariables = themeVariableFile.toString();

  const regex = /(--)[^\,\:\)]+/g;
  const matches = themeVariables.match(regex);

  if (matches) {
    const variables = matches.map((match) => match.replace(/:.*/, '').trim())
      .filter((variable) => !excludes.some((subString) => variable.includes(subString)));

    console.log(`\nFinding unused variables for theme ${theme.name}...`);
    variables.forEach((variable) => {
      if (!systemCSS.includes(variable)) {
        console.log('Unused variable', variable);
      }
    });
  }
}
