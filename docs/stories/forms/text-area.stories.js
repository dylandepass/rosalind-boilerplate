/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { within, waitFor, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import dedent from 'dedent';

export default {
  title: 'Design System/Atoms/Forms/TextArea',
};

const TextAreaExample = ({
  label, required, disabled, help,
}) => dedent/* html */`
  <form>
    <div class="group">
      <label for="name">${label}</label>
      <textarea type="text" id="name" placeholder="Placeholder" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}></textarea>
      <span>${help}</span>
    </div>
  </form>`;

export const Default = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: (args) => TextAreaExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('First Name')).toBeInTheDocument();
    expect(canvas.getByPlaceholderText('Placeholder')).toBeInTheDocument();
    expect(canvas.getByText('A clever desciption of this field')).toBeInTheDocument();
  },
};

export const Filled = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: (args) => TextAreaExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');

    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('Johnny Appleseed');
  },
};

export const Required = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: true,
    disabled: false,
  },
  render: (args) => TextAreaExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');

    expect(input.hasAttribute('required')).toBeTruthy();
    userEvent.click(input);
  },
};

export const Valid = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: true,
    disabled: false,
  },
  render: (args) => TextAreaExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');

    expect(input.hasAttribute('required')).toBeTruthy();
    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('Johnny Appleseed');
  },
};

export const Disabled = {
  args: {
    label: 'First Name',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true,
  },
  render: (args) => TextAreaExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Placeholder');

    userEvent.type(input, 'Johnny Appleseed');
    expect(input.value).toEqual('');
  },
};
