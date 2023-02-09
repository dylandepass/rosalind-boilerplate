/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import dedent from 'dedent';

export default {
  title: 'Design System/Atoms/Forms/Switch',
};

const SwitchExample = ({
  label, required, checked, disabled, help, value,
}) => dedent/* html */`
    <form>
      <div class="group">
        <label for="wifi">${label}</label>
        <div>
          <input type="checkbox" id="wifi" class="switch" ${checked ? 'checked' : ''} ${required ? 'required' : ''} ${disabled ? 'disabled' : ''}>
          <label for="wifi">${value}</label>
        </div>
        <span>${help}</span>
      </div>
    </form>`;

export const Default = {
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false,
  },
  render: (args) => SwitchExample(args),
};

export const Selected = {
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: (args) => SwitchExample(args),
  play: async ({ canvasElement }) => {
    const switchElement = document.querySelector('#wifi');
    await userEvent.click(switchElement);
    expect(switchElement.checked).toEqual(true);
  },
};

export const Disabled = {
  args: {
    label: 'Wifi Settings',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true,
  },
  render: (args) => SwitchExample(args),
  play: async ({ canvasElement }) => {
    const switchElement = document.querySelector('#wifi');
    await userEvent.click(switchElement);
    expect(switchElement.checked).toEqual(false);
  },
};
