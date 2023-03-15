import React from 'react';
import { ColorItem } from '@storybook/blocks';

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

export function al() {
  console.log('a');
}

export function TokenList({tokens, prefix}) {
  return Object.entries(tokens).map(([k, value]) => {
      if(k === 'typography')
        return
        
      if(typeof value === 'object') {
        return(
            <TokenList k={k} tokens={value} prefix={`${prefix}-${k}`}/>
        )
      } else {
        return(
            <TokenRow k={k} value={value} prefix={`${prefix}-${k}`}/>
        )
      }
    })
}

export function TokenRow({k, value, prefix}) {
  const isColor = prefix.match(/color/i);
  return(
      <div>
        <div>{prefix}</div>
        <div>{value}</div>
        {isColor && (<div><div className="color-demo" style={{ backgroundColor: `var(${prefix})` }}>&nbsp;</div></div>)}
        <div><button className="button secondary small" onClick={() => navigator.clipboard.writeText(`${prefix}`)}>Copy Token</button></div>
      </div>
  ) 
}

export function ColorDot() {
  return <span className='color'></span>;
}

export function Code({k, value, url, isColor}) {
  if((window.location.href.includes('github.io'))) {
    url = `Rosalind-dna/docs/storybook${url}`;
  }
  return(
      <code title={value}><a href={url}>{isColor ? <span className="color" style={{backgroundColor: value}}></span> : ``}{k}</a></code>
  )
}

export const SystemName = "Rosalind Design System";

export function SystemNameLabel() { return SystemName };
