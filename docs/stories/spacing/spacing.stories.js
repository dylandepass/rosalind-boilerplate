/* eslint-disable import/extensions */

import theme from '../../../styles/themes/rosalind-light.json';

export default {
  title: 'Design System/Atoms/Spacing',
};

export const Spacing = {
  title: 'Spacing',
  render: () => {
    const options = Object.entries(theme.semantic.spacing.around.component).map(([key, value]) => /* html */`<div class='space'>
        <div>${key} (${value})</div>
        <div><span style="width:${value}"/></div>
      </div>`).join(' ');
    return options;
  },
};

export const Gaps = {
  title: 'Gaps',
  render: () => {
    const options = Object.entries(theme.semantic.spacing.gap.component).map(([key, value]) => /* html */`<div class='space'>
        <div>${key} (${value})</div>
        <div><span style="width:${value}"/></div>
      </div>`).join(' ');
    return options;
  },
};
