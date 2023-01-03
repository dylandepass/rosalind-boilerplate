import React from 'react';
import { ColorItem } from '@storybook/addon-docs';

export function GroupColorItem({title, tokenGroup, tokenName}) {
  return <ColorItem
      key={title}
      title={title}
      subtitle={tokenName}
      colors={Object.entries(tokenGroup).reduce(
        (acc, [key, value]) =>
          typeof value === 'string' &&
          (value.match(/^#/) ||
            value.match(/^rgb/) ||
            key.match(/color/i))
            ? { ...acc, [key]: value }
            : acc,
        {}
      )}
    />;
}