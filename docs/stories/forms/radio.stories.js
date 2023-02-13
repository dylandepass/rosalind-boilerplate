/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import dedent from 'dedent';

export default {
  title: 'Design System/Atoms/Forms/Radio',
};

const RadioExample = ({
  label, required, checked, disabled, help, values,
}) => dedent/* html */`
    <form>
        <div class="group">
        <label for="meal">${label}</label>
        <div>
            ${values.map((value) => /* html */`
                        <input id="${value.toLowerCase()}" type="radio" name="meal" ${checked ? 'checked' : ''} ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>
                        <label for="${value.toLowerCase()}">${value}</label>
                    `).join(' ')}
        </div>
        <span>${help}</span>
        </div>
    </form>`;

export const Default = {
  args: {
    label: 'Meal Preference',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false,
  },
  render: (args) => RadioExample(args)
  ,
};

export const Selected = {
  args: {
    label: 'Agree to Terms',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: (args) => RadioExample(args),
  play: async ({ canvasElement }) => {
    const chicken = document.querySelector('#chicken');
    await userEvent.click(chicken);
    const beef = document.querySelector('#beef');
    await userEvent.click(beef);
    expect(chicken.checked).toEqual(false);
    expect(beef.checked).toEqual(true);
  },
};

export const Required = {
  args: {
    label: 'Agree to Terms',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    required: true,
    disabled: false,
  },
  render: (args) => RadioExample(args),
  play: async ({ canvasElement }) => {
  },
};

export const Disabled = {
  args: {
    label: 'Agree to Terms',
    values: ['Beef', 'Chicken', 'Fish'],
    help: 'A clever desciption of this field',
    required: false,
    disabled: true,
  },
  render: (args) => RadioExample(args),
  play: async ({ canvasElement }) => {
    const radio = document.querySelector('#chicken');
    await userEvent.click(radio);
    expect(radio.checked).toEqual(false);
  },
};
