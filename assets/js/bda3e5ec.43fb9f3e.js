"use strict";(self.webpackChunkcs_1101_teach=self.webpackChunkcs_1101_teach||[]).push([[347],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(2081),a=(r(9496),r(9613));const o={id:"ra1-review",title:"Reading Assessment 1 Review"},i=void 0,l={unversionedId:"extras/ra1-review",id:"extras/ra1-review",title:"Reading Assessment 1 Review",description:"Source R2L",source:"@site/docs/extras/ra1-review.md",sourceDirName:"extras",slug:"/extras/ra1-review",permalink:"/CS1101S-teach/extras/ra1-review",draft:!1,editUrl:"https://github.com/shenyih0ng/CS1101S-teach/tree/main/docs/extras/ra1-review.md",tags:[],version:"current",frontMatter:{id:"ra1-review",title:"Reading Assessment 1 Review"},sidebar:"tutorialSidebar",previous:{title:"Orders of Growth",permalink:"/CS1101S-teach/extras/orders-of-growth"},next:{title:"Studio 2",permalink:"/CS1101S-teach/studio-2"}},p={},s=[{value:"Source R2L",id:"source-r2l",level:2},{value:"What is the evaluation process in &quot;normal&quot; Source?",id:"what-is-the-evaluation-process-in-normal-source",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"source-r2l"},"Source R2L"),(0,a.kt)("h3",{id:"what-is-the-evaluation-process-in-normal-source"},'What is the evaluation process in "normal" Source?'),(0,a.kt)("p",null,"What will be the output of ",(0,a.kt)("inlineCode",{parentName:"p"},"foo()"),"?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"display(x)")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," (",(0,a.kt)("a",{parentName:"p",href:"https://docs.sourceacademy.org/source_1/global.html#display"},"https://docs.sourceacademy.org/source_1/global.html#display"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function foo() {\n    return display(1) + display(2) * display(3); \n}\n\nfoo(); // "1", "2", "3"\n')),(0,a.kt)("p",null,"The important point to note is how operator precedence is handled. When we talk about operator precedence, it actually does not affect the order of evaluation of its operands. This means that even though ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," has higher precedence to ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", it ",(0,a.kt)("strong",{parentName:"p"},"does not")," mean that the operands of ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," will be evaluated first."),(0,a.kt)("p",null,"Instead, what operator precedence means is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"1 + 2 * 3 === 1 + (2 * 3);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"With operator precedence, ",(0,a.kt)("inlineCode",{parentName:"strong"},"2 * 3")," as a whole will be treated as the right operand to the binary operator ",(0,a.kt)("inlineCode",{parentName:"strong"},"+"),".")," In contrast if ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," are of the same precedence, ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," alone will be consider as the right operand."),(0,a.kt)("p",null,"Therefore, when we are looking at the evaluation of operands, it will still be ",(0,a.kt)("strong",{parentName:"p"},"left to right"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Order of evaluation")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'display(1) // "1"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"(display(2) * display(3))")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'display(2) // "2"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'display(3) // "3"'))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is also related to the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"AST")," of the program."),(0,a.kt)("p",{parentName:"admonition"},"If you are interested, you can look at AST generated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"parse")," function under Source 4"),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"You will learn about this towards the end of module")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'parse("display(1) + display(2) * display(3);");\n'))))}d.isMDXComponent=!0}}]);