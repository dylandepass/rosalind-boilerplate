var s={},c={get exports(){return s},set exports(l){s=l}};(function(l){function g(o){var a=void 0;typeof o=="string"?a=[o]:a=o.raw;for(var e="",n=0;n<a.length;n++)e+=a[n].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),n<(arguments.length<=1?0:arguments.length-1)&&(e+=arguments.length<=n+1?void 0:arguments[n+1]);var u=e.split(`
`),t=null;return u.forEach(function(r){var f=r.match(/^(\s+)\S+/);if(f){var d=f[1].length;t?t=Math.min(t,d):t=d}}),t!==null&&(e=u.map(function(r){return r[0]===" "?r.slice(t):r}).join(`
`)),e=e.trim(),e.replace(/\\n/g,`
`)}l.exports=g})(c);const i=s;export{i as d};
//# sourceMappingURL=dedent-8ac136a4.js.map
