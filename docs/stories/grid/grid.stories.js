export default {
  title: 'Design System/Atoms/Grid',
};

export const Demo = {
  render: () => /* html */`<div class="story grid-demo">
      <div>
        <div class="nav">Nav</div>
        <div class="heading">Heading</div>
        <div class="content">Content</div>
        <div class="content">Content</div>
        <div class="content">Content</div>
        <div class="sidebar">Sidebar</div>
      </div>
    </div>
    `,
};

export const TwelveColumns = {
  render: () => /* html */`<div class="story grid-demo-12-column">
      <div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
        <div>col</div>
      </div>
    </div>
    `,
};

export const TwoColumns = {
  render: () => /* html */`<div class="story grid-demo-2-column">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `,
};

export const SpanColumns = {
  render: () => /* html */`<div class="story grid-demo-span-columns">
      <div>
          <div>col (span 3)</div>
          <div>col (span 9)</div>
          <div>col (span 3)</div>
          <div>col (span 9)</div>
      </div>
    </div>
    `,
};

export const SpanRows = {
  render: () => /* html */`<div class="story grid-demo-span-rows">
      <div>
        <div>col (row 3)</div>
        <div>col (span 9)</div>
        <div>col (span 9)</div>
        <div>col (span 9)</div>
      </div>
    </div>
    `,
};

export const Gap = {
  render: () => /* html */`<div class="story grid-demo-gap">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `,
};

export const GapX = {
  render: () => /* html */`<div class="story grid-demo-gap-x">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `,
};

export const GapY = {
  render: () => /* html */`<div class="story grid-demo-gap-y">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `,
};

export const ResponsiveColumns = {
  render: () => /* html */`<div class="story grid-demo-responsive">
      <div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
          <div>col</div>
      </div>
    </div>
    `,
};
