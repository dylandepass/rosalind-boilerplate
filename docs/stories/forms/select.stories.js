/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import dedent from 'dedent';

export default {
  title: 'Design System/Atoms/Forms/Select',
};

const SelectExample = ({
  label, required, disabled, help,
}) => dedent/* html */`
    <form>
        <div class="group">
            <label for="car">${label}</label>
            <div class="select">
                <select id="car" ${required ? 'required' : ''}  ${disabled ? 'disabled' : ''}>
                <option value="" disabled selected hidden>Select car:</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
                <option value="6">Jaguar</option>
                <option value="7">Land Rover</option>
                <option value="8">Mercedes</option>
                <option value="9">Mini</option>
                <option value="10">Nissan</option>
                <option value="11">Toyota</option>
                <option value="12">Volvo</option>
                </select>
            </div>
            <span>${help}</span>
        </div>
    </form>`;

export const Default = {
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: (args) => SelectExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Favorite Car Manufacturer')).toBeInTheDocument();
    expect(canvas.getByText('Select car:')).toBeInTheDocument();
    expect(canvas.getByText('BMW')).toBeInTheDocument();
    expect(canvas.getByText('A clever desciption of this field')).toBeInTheDocument();
  },
};

export const Selected = {
  args: {
    label: 'Favorite Car Manufacturer',
    value: 'Airplane Mode',
    help: 'A clever desciption of this field',
    required: false,
    disabled: false,
  },
  render: (args) => SelectExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = document.querySelector('select');
    await userEvent.selectOptions(select, 'BMW');
    expect(select?.value).toEqual('2');
  },
};

export const Disabled = {
  args: {
    label: 'Favorite Car Manufacturer',
    help: 'A clever desciption of this field',
    required: false,
    disabled: true,
  },
  render: (args) => SelectExample(args),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const select = document.querySelector('select');
    await userEvent.selectOptions(select, 'BMW');
    expect(select.value).toEqual('');
  },
};
