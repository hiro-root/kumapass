if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kumapass"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/about.72b331df.css",revision:null},{url:"css/app.6abe7826.css",revision:null},{url:"img/xxxhdpi.d2ec7f8e.png",revision:null},{url:"index.html",revision:"8795c0427f68cd9bf2f9840d97e8dc10"},{url:"js/about.29814a20.js",revision:null},{url:"js/app.ef0088e4.js",revision:null},{url:"js/chunk-vendors.0f9e2142.js",revision:null},{url:"manifest.json",revision:"3a4f1a64bcee87b991f21596a49a6d1d"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
