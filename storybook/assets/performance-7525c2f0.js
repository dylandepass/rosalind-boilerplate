function o(n,i=new Date-performance.timing.navigationStart,a=""){const p={general:"#888",cls:"#c50",lcp:"green",tbt:"red",paint:"#b73",franklin:"#586AE8"}[a]||"#888";console.log(`%c${Math.round(i).toString().padStart(5," ")}%c %c${a}%c ${n}`,"background-color: #444; padding: 3px; border-radius: 3px;","",`background-color: ${p}; padding: 3px 5px; border-radius: 3px;`,"")}function f(){try{new PerformanceObserver(t=>{t.getEntries().forEach(e=>{o(JSON.stringify(e),e.startTime,"lcp"),console.log(e.element)})}).observe({type:"largest-contentful-paint",buffered:!0}),new PerformanceObserver(t=>{t.getEntries().forEach(e=>{const s=e.sources[0].currentRect,c=e.sources[0].previousRect;o(`${Math.round(e.value*1e5)/1e5}
          from: ${c.top} ${c.right} ${c.bottom} ${c.left}
          to:   ${s.top} ${s.right} ${s.bottom} ${s.left}`,e.startTime,"cls"),console.log(e.sources[0].node)})}).observe({type:"layout-shift",buffered:!0}),new PerformanceObserver(t=>{t.getEntries().forEach(r=>{o(JSON.stringify(r),r.startTime,"tbt")})}).observe({type:"longtask",buffered:!0}),new PerformanceObserver(t=>{t.getEntries().forEach(r=>{o(JSON.stringify(r),r.startTime,"paint")})}).observe({type:"paint",buffered:!0}),new PerformanceObserver(t=>{t.getEntries().forEach(e=>{o(`${e.name} loaded`,Math.round(e.startTime+e.duration))})}).observe({type:"resource",buffered:!0})}catch{}document.body.addEventListener("section-display",n=>{o("section displayed",new Date-performance.timing.navigationStart,"franklin"),console.log(n.detail.section)})}function g(){o("helix performance logging started"),f()}export{g as default};
//# sourceMappingURL=performance-7525c2f0.js.map