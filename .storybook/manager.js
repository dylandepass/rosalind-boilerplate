import React from 'react';
import { addons, types } from '@storybook/addons';
import { ThemesSwitcher } from './addons/ThemesSwitcher';
import rosalindTheme from './RosalindTheme.js';

addons.setConfig({
  theme: rosalindTheme,
});

addons.register('Brand', () => {
  addons.add('Brand', {
    title: 'Brand',
    type: types.TOOL,
    render: () => <ThemesSwitcher />,
  });
});
