(()=>{"use strict";var e,t,r,o,a,n={},d={};function i(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=d,e=[],i.O=(t,r,o,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var d=!0,f=0;f<r.length;f++)(!1&a||n>=a)&&Object.keys(i.O).every((e=>i.O[e](r[f])))?r.splice(f--,1):(d=!1,a<n&&(n=a));if(d){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&o&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(a,n),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({32:"1d37a6cd",53:"935f2afb",284:"325a96f3",401:"1a3632e6",514:"1be78505",671:"0e384e19",719:"2297580d",800:"a75b64da",886:"edd6dc7d",918:"17896441"}[e]||e)+"."+{32:"0b537b1e",53:"06b83c47",284:"d996c443",401:"ff347862",514:"e8544deb",671:"311f198c",719:"70fa7a62",755:"7c9eda4f",800:"d2eb1b80",886:"8864e575",918:"e27f37e1"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="cs-1101-teach:",i.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var d,f;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){d=l;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",a+r),d.src=e),o[e]=[t];var s=(t,r)=>{d.onerror=d.onload=null,clearTimeout(p);var a=o[e];if(delete o[e],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),f&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/CS1101S-teach/",i.gca=function(e){return e={17896441:"918","1d37a6cd":"32","935f2afb":"53","325a96f3":"284","1a3632e6":"401","1be78505":"514","0e384e19":"671","2297580d":"719",a75b64da:"800",edd6dc7d:"886"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=i.p+i.u(t),d=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],d=r[1],f=r[2],c=0;if(n.some((t=>0!==e[t]))){for(o in d)i.o(d,o)&&(i.m[o]=d[o]);if(f)var u=f(i)}for(t&&t(r);c<n.length;c++)a=n[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},r=self.webpackChunkcs_1101_teach=self.webpackChunkcs_1101_teach||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();