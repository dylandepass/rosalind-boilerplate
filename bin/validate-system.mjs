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

const excludes = ['--fluid-screen', '--fluid-min-width', '--fluid-max-width', '--min', '--max', '--fluid-bp', '--x,0'];

const regex = /var\(([a-z-0-9,\s]+)\)/g;
const matches = systemCSS.toString().match(regex);
if (matches) {
  const allVariables = matches.map((match) => match.replace(/:.*/, '').trim().replace('var(', '').replace(')', ''))
    .filter((variable) => !excludes.includes(variable));

  const variables = [...new Set(allVariables)];

  let success = true;

  for (const theme of themesJson) {
    const themeVariableFile = await fs.readFile(`./styles/themes/${theme.name}.css`);
    const themeVariables = themeVariableFile.toString();

    console.log(`\nValidating Theme ${theme.name}...`);
    variables.forEach((variable) => {
      if (!themeVariables.includes(variable)) {
        success = false;
        console.log('Unresolved variable', variable);
      }
    });
  }

  if (!success) {
    throw new Error('Design system is not valid, system contains variables not defined in a theme.');
  }

  console.log('Design System Validated!');
}
