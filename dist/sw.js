if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const u=s=>i(s,l),o={module:{uri:l},exports:t,require:u};e[l]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Alert-DIAFFkqV.js",revision:null},{url:"assets/Button-Df8OsmAj.js",revision:null},{url:"assets/Container-BGBRRZGq.js",revision:null},{url:"assets/Group-CKS0MZxr.js",revision:null},{url:"assets/HomePage-BrIL5KRi.js",revision:null},{url:"assets/index-0Lhd04Fn.js",revision:null},{url:"assets/index-6lR3FErR.css",revision:null},{url:"assets/LoginPage-rpjIzAF_.js",revision:null},{url:"assets/Navigation-D9ufwqZb.js",revision:null},{url:"assets/NotFoundPage-DrM03DOR.js",revision:null},{url:"assets/Offline-DU3kdVBf.js",revision:null},{url:"assets/RegisterPage-DzyX38Za.js",revision:null},{url:"assets/Title-ChMd51wg.js",revision:null},{url:"assets/use-form-C-50Oe0Y.js",revision:null},{url:"assets/use-id-C5jsMmcq.js",revision:null},{url:"index.html",revision:"0f9eadde58611ee957693bac3f56c419"},{url:"registerSW.js",revision:"bf9a30bb72a31bcc62fe94811d2e7e8f"},{url:"manifest.webmanifest",revision:"6a18411e9bd3bfbc3daba31c3112dc79"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
