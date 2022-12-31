/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */
import { FranklinTemplate } from '@dylandepass/franklin-storybook-addon';
import { decorateIcons } from '../../../scripts/lib-franklin.js';
import { loadPage } from '../../../scripts/scripts.js';
import style from '../../system.css';

const GridExamples = () => /* html */`<div>
    <h2>12 column grid</h2>
    <div class="twelve-col-grid">
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
    </div>
    
    <h2>12 column grid (spans)</h2>
    <div class="twelve-col-grid">
      <div class="col span8">Col (Span 8)</div>
      <div class="col span4">Col (Span 4)</div>
    </div>

    <h2>Auto Grid</h2>
    <div class="auto-grid">
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
    </div>

    <h2>Auto Flex</h2>
    <div class="auto-flex">
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
      <div class="col">Col</div>
    </div>
</div>`;

function decorate(block) {
  const grid = document.createElement('div');
  grid.innerHTML = GridExamples();

  block.append(grid);
}

export const Grid = (args, context) => FranklinTemplate(loadPage, args, context, decorate);

Grid.parameters = {
  path: '/storybook/grid.plain.html',
  selector: 'div',
  index: 0,
};

Grid.storyName = 'Grid';

Grid.args = {
  content: GridExamples(),
};

export default {
  title: 'CSS Mixins/Grid',
};
