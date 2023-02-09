/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import dedent from 'dedent';

export default {
  title: 'Design System/Atoms/Forms/Checkbox',
};

const CheckboxExample = ({
  label, required, checked, disabled, help, value,
}) => dedent/* html */`
    <form>
      <div class="group">
        <label for="terms">${label}</label>
        <div>
          <input type="checkbox" id="terms" ${checked ? 'checked' : ''}  ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''} onclick="(event) => event.target.checked = true">
          <label for="terms">${value}</label>
        </div>
        <span>${help}</span>
      </div>
    </form>`;

export const Default = {
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    checked: false,
    required: false,
    disabled: false,
  },
  render: (args) => CheckboxExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Completed Task')).toBeInTheDocument();
    expect(canvas.getByText('Agree to Terms')).toBeInTheDocument();
    expect(canvas.getByText('A clever desciption of this field')).toBeInTheDocument();
  },
};

export const Selected = {
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: (args) => CheckboxExample(args),
  play: async ({ canvasElement }) => {
    const checkbox = document.querySelector('#terms');
    await userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  },
};

export const Disabled = {
  args: {
    label: 'Agree to Terms',
    value: 'Completed Task',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true,
  },
  render: (args) => CheckboxExample(args),
  play: async ({ canvasElement }) => {
    const checkbox = document.querySelector('#terms');
    await userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  },
};
