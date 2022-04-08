"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[622],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.createElement(e,a({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,f=u["".concat(o,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{O1:function(){return o},EO:function(){return l},Rr:function(){return c}});var r,i=t(67294),a=t(44256);function o(e){return i.createElement("a",{href:r+e.file},e.file)}function l(e){return i.createElement("a",{href:r+e.file},e.children)}r=(0,a.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var c=function(e){e.children;var n=e.internal,t=e.external;return(0,a.fbContent)({internal:i.createElement("code",null,n),external:i.createElement("code",null,t)})}},37578:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=(t(44256),t(12038)),l=["components"],c={id:"flow",title:"JavaScript (Flow)",sidebar_label:"JavaScript (Flow)"},d=void 0,u={unversionedId:"indexer/flow",id:"indexer/flow",isDocsHomePage:!1,title:"JavaScript (Flow)",description:"The JavaScript/Flow indexer is built into the",source:"@site/docs/indexer/flow.md",sourceDirName:"indexer",slug:"/indexer/flow",permalink:"/docs/indexer/flow",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/indexer/flow.md",tags:[],version:"current",frontMatter:{id:"flow",title:"JavaScript (Flow)",sidebar_label:"JavaScript (Flow)"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/indexer/intro"},next:{title:"Hack",permalink:"/docs/indexer/hack"}},p=[{value:"Run the indexer",id:"run-the-indexer",children:[],level:2},{value:"Derived predicates",id:"derived-predicates",children:[],level:2},{value:"In the shell",id:"in-the-shell",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2}],m={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The JavaScript/Flow indexer is built into the\n",(0,a.mdx)("a",{parentName:"p",href:"https://flow.org/"},"Flow")," system.  It's also included\nin the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/trying"},"Glean demo Docker image")," to try out."),(0,a.mdx)("h2",{id:"run-the-indexer"},"Run the indexer"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"flow glean DIR --output-dir JSON --write-root PREFIX\n")),(0,a.mdx)("p",null,"where"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the JavaScript/Flow files"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"JSON")," is the directory in which to write the output ",(0,a.mdx)("inlineCode",{parentName:"li"},".json")," files"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"PREFIX")," is a prefix to add to the files in the Glean index (this\ncan be empty if you don't need a prefix)")),(0,a.mdx)("p",null,"The generated files can be ingested into a Glean database using ",(0,a.mdx)("a",{parentName:"p",href:"/docs/cli#glean-create"},(0,a.mdx)("inlineCode",{parentName:"a"},"glean create")),"."),(0,a.mdx)("h2",{id:"derived-predicates"},"Derived predicates"),(0,a.mdx)("p",null,"Several predicates should be derived after indexing. For each ",(0,a.mdx)("inlineCode",{parentName:"p"},"stored")," predicate in the ",(0,a.mdx)("a",{parentName:"p",href:"#schema"},"schema")," you should ",(0,a.mdx)("a",{parentName:"p",href:"/docs/cli#glean-derive"},(0,a.mdx)("inlineCode",{parentName:"a"},"glean derive"))," the predicate."),(0,a.mdx)("h2",{id:"in-the-shell"},"In the shell"),(0,a.mdx)("p",null,"Flow source can also be indexed directly from the Glean shell:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},":index flow DIR\n")),(0,a.mdx)("h2",{id:"schema"},"Schema"),(0,a.mdx)("p",null,"The schema is in ",(0,a.mdx)(o.O1,{file:"glean/schema/source/flow.angle",mdxType:"SrcFile"})))}s.isMDXComponent=!0}}]);