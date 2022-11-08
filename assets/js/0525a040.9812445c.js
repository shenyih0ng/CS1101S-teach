"use strict";(self.webpackChunkcs_1101_teach=self.webpackChunkcs_1101_teach||[]).push([[58],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,h=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(2081),r=(n(9496),n(9613));const o={id:"recursion-with-hof",title:"Recursion using Higher-Order Functions"},i=void 0,c={unversionedId:"extras/recursion-with-hof",id:"extras/recursion-with-hof",title:"Recursion using Higher-Order Functions",description:"This is a question from the AY1718 midterm where observe how we can express a recursive function with higher order functions instead, without the use of a explicit recursive call to the function.",source:"@site/docs/extras/recursion-with-hof.md",sourceDirName:"extras",slug:"/extras/recursion-with-hof",permalink:"/CS1101S-teach/extras/recursion-with-hof",draft:!1,editUrl:"https://github.com/shenyih0ng/CS1101S-teach/tree/main/docs/extras/recursion-with-hof.md",tags:[],version:"current",frontMatter:{id:"recursion-with-hof",title:"Recursion using Higher-Order Functions"},sidebar:"tutorialSidebar",previous:{title:"Reading Assessment 1 Review",permalink:"/CS1101S-teach/extras/ra1-review"},next:{title:"Mastery Check 1",permalink:"/CS1101S-teach/mastery-check/mastery-check-1"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a question from the AY1718 midterm where observe how we can express a recursive function with higher order functions instead, without the use of a explicit recursive call to the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(f => f(f))(\n    make_factorial => \n        n => n === 0 \n                ? 1 \n                : n * (make_factorial(make_factorial))(n-1)\n)(5);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(f => f(f))")," is also called the ",(0,r.kt)("a",{parentName:"p",href:"https://www.tfeb.org/fragments/2020/03/09/the-u-combinator/"},"U-Combinator"),", which means we can also write the above program as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const U = f => f(f);\n\nU(make_factorial => \n    n => n === 0 \n            ? 1 \n            : n * U(make_factorial)(n-1)\n)(5);\n")),(0,r.kt)("p",null,"Note that unlike the conventional ",(0,r.kt)("inlineCode",{parentName:"p"},"fact")," function that we used to writing, which takes only a single argument ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),", our function here takes in 2 arguments (",(0,r.kt)("inlineCode",{parentName:"p"},"make_factorial"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"). Why do we need this extra ",(0,r.kt)("inlineCode",{parentName:"p"},"make_factorial"),"?"),(0,r.kt)("p",null,"Intuitively, when we want to express a recursive function, we will need to have ",(0,r.kt)("strong",{parentName:"p"},"a reference to the function")," so that we can make a recursive call. Therefore, with the U-Combinator implementation, we will need to somehow achieve that same effect."),(0,r.kt)("p",null,"When we apply the U-Combinator with our function ",(0,r.kt)("inlineCode",{parentName:"p"},"make_factorial => n => {...}"),", we can get the following form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))\n    (make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))(5);\n")),(0,r.kt)("p",null,"From this application, you can see that argument ",(0,r.kt)("inlineCode",{parentName:"p"},"make_factorial")," in the first lambda expression will be a ",(0,r.kt)("strong",{parentName:"p"},"reference (almost like a self-reference) to the function that is exactly the same as itself"),". Hopefully at this point, you can see how this will slowly build towards a recursive function."),(0,r.kt)("p",null,"Another round of application,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(5 === 0) ? 1 : 5 * U(make_factorial)(4);\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"make_factorial")," refers to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))\n")),(0,r.kt)("p",null,"which makes ",(0,r.kt)("inlineCode",{parentName:"p"},"U(make_factorial)(4)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))\n    (make_factorial => n => (n === 0) ? 1 : n * U(make_factorial)(n-1))(4)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that we originally started off with ",(0,r.kt)("inlineCode",{parentName:"p"},"U(make_factorial)(5)")," and now we have ",(0,r.kt)("inlineCode",{parentName:"p"},"U(make_factorial)(4)"),". Magic \ud83e\ude84")),(0,r.kt)("p",null,"Looks familiar \ud83e\udd14? "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Observe that ",(0,r.kt)("inlineCode",{parentName:"strong"},"U(make_factorial)(4)")," now becomes a evaluation for the factorial of 4, hence ",(0,r.kt)("inlineCode",{parentName:"strong"},"5 * U(make_factorial)(4)")," expresses the same intend as the conventional ",(0,r.kt)("inlineCode",{parentName:"strong"},"5 * fact(4)"),"!")," This process will continue until we reached the base case."),(0,r.kt)("p",null,"And thats how we do recursion without recursive calls but with our favorite HOFs \ud83e\udd73"))}u.isMDXComponent=!0}}]);