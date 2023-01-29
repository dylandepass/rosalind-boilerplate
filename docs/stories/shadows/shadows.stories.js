export default {
  title: 'Design System/Atoms/Shadows',
};

export const Small = {
  title: 'sm',
  render: ({ label, ...args }) => /* html */`<div class="shadow-demo">
        <div class="shadow-sm">shadow-sm</div>
    </div>
    `,
};

export const Medium = {
  title: 'md',
  render: ({ label, ...args }) => /* html */`<div class="shadow-demo">
        <div class="shadow-md">shadow-md</div>
    </div>
    `,
};

export const Large = {
  title: 'lg',
  render: ({ label, ...args }) => /* html */`<div class="shadow-demo">
        <div class="shadow-lg">shadow-lg</div>
    </div>
    `,
};

export const XLarge = {
  title: 'xl',
  render: ({ label, ...args }) => /* html */`<div class="shadow-demo">
        <div class="shadow-xl">shadow-xl</div>
    </div>
    `,
};
