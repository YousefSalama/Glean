"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[224],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return p},mdx:function(){return u},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){return function(n){var t=m(n.components);return a.createElement(e,r({},n,{components:t}))}},m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(t),p=i,h=c["".concat(l,".").concat(p)]||c[p]||f[p]||r;return t?a.createElement(h,d(d({ref:n},s),{},{components:t})):a.createElement(h,d({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=h;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},73070:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=(t(44256),["components"]),d={id:"efficiency",title:"Query Efficiency",sidebar_label:"Query Efficiency"},o=void 0,s={unversionedId:"angle/efficiency",id:"angle/efficiency",isDocsHomePage:!1,title:"Query Efficiency",description:"There are two important aspects of a query that affect its efficiency;",source:"@site/docs/angle/efficiency.md",sourceDirName:"angle",slug:"/angle/efficiency",permalink:"/docs/angle/efficiency",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/angle/efficiency.md",tags:[],version:"current",frontMatter:{id:"efficiency",title:"Query Efficiency",sidebar_label:"Query Efficiency"},sidebar:"someSidebar",previous:{title:"Guide",permalink:"/docs/angle/guide"},next:{title:"Advanced Query Features",permalink:"/docs/angle/advanced"}},c=[{value:"Efficient matching of facts",id:"efficient-matching-of-facts",children:[],level:2},{value:"Making queries efficient using a derived predicate",id:"making-queries-efficient-using-a-derived-predicate",children:[],level:2},{value:"The order of statements is important",id:"the-order-of-statements-is-important",children:[],level:2}],m={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"There are two important aspects of a query that affect its efficiency;"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Which fields are specified in a pattern"),(0,r.mdx)("li",{parentName:"ol"},"The ordering of statements")),(0,r.mdx)("p",null,"We\u2019ll cover each of these in the following sections."),(0,r.mdx)("h2",{id:"efficient-matching-of-facts"},"Efficient matching of facts"),(0,r.mdx)("p",null,"The order of fields in the schema matters a lot for efficiency. Glean indexes facts by a prefix of their keys, so if we know the prefix when searching for facts this will be a lot faster. Often this difference is absolutely crucial; the difference is between ",(0,r.mdx)("em",{parentName:"p"},"O(log n)")," and ",(0,r.mdx)("em",{parentName:"p"},"O(n)"),", so when the database is large this can be many orders of magnitude."),(0,r.mdx)("p",null,"For example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," predicate we saw ",(0,r.mdx)("a",{parentName:"p",href:"/docs/angle/guide#matching-nested-facts"},"earlier")," is defined as"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Parent :\n  {\n    child : Person,\n    parent : Person,\n  }\n")),(0,r.mdx)("p",null,"We should think of this as a mapping from ",(0,r.mdx)("inlineCode",{parentName:"p"},"child")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"parent"),". Glean won\u2019t stop you writing a query for ",(0,r.mdx)("inlineCode",{parentName:"p"},"{ parent = ... }"),", but such a query will examine all of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," facts in the database. We can see how many facts are searched for our query using ",(0,r.mdx)("inlineCode",{parentName:"p"},":profile full")," in the shell (see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/angle/debugging"},"debugging")," for more details):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'facts> :profile full\nfacts> example.Parent { parent = { name = "Pet" }}\n(snip)\n2 results, 2 facts, 0.40ms, 159440 bytes, 988 compiled bytes\nFacts searched:\n                        example.Parent.1 : 3\n')),(0,r.mdx)("p",null,"This tells us that although it found the 2 results we expected, it searched all 3 ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," facts in the process."),(0,r.mdx)("h2",{id:"making-queries-efficient-using-a-derived-predicate"},"Making queries efficient using a derived predicate"),(0,r.mdx)("p",null,"What if we wanted to efficiently map from ",(0,r.mdx)("inlineCode",{parentName:"p"},"parent")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"child"),"? That\u2019s easy to accomplish using a ",(0,r.mdx)("em",{parentName:"p"},"derived predicate"),". We\u2019re going to define a new predicate with a different field ordering, and automatically generate the facts of our new predicate by deriving them from the facts of the existing predicate.  For full details see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/derived"},"Derived Predicates"),", what follows will be a walkthrough showing how to use a derived predicate to make our queries more efficient."),(0,r.mdx)("p",null,"First we\u2019ll define our derived predicate in the schema, like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Child :\n  {\n    parent : Class,\n    child : Class,\n  }\n  stored\n  { P, C } where Parent { C, P }\n")),(0,r.mdx)("p",null,"We can try this out in the shell. First we have to create a new database to hold the derived facts that is ",(0,r.mdx)("em",{parentName:"p"},"stacked")," on top of the old database. Drop out of the shell and run this command to create the new database:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"glean create --db-root /tmp/glean/db --db-schema dir:/tmp/glean/schema --repo derived/1 --stacked facts/1\n")),(0,r.mdx)("p",null,"Now start the shell again and load the stacked database. Note that we can still query facts from the original database:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'> :db derived/1\nderived> example.Parent _\n{ "id": 1028, "key": { "child": { "id": 1025 }, "parent": { "id": 1024 } } }\n{ "id": 1029, "key": { "child": { "id": 1026 }, "parent": { "id": 1024 } } }\n{ "id": 1030, "key": { "child": { "id": 1027 }, "parent": { "id": 1026 } } }\n')),(0,r.mdx)("p",null,"Initially we have no facts of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Child")," predicate:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"derived> example.Child _\n0 results, 0 facts, 0.91ms, 812952 bytes, 664 compiled bytes\n")),(0,r.mdx)("p",null,"But we can create them automatically:"),(0,r.mdx)("p",null,"(TODO: check this still works, do we need a ",(0,r.mdx)("inlineCode",{parentName:"p"},":derive")," command now?)"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'derived> * example.Child _\n{ "id": 1037, "key": { "parent": { "id": 1024 }, "child": { "id": 1025 } } }\n{ "id": 1038, "key": { "parent": { "id": 1024 }, "child": { "id": 1026 } } }\n{ "id": 1039, "key": { "parent": { "id": 1026 }, "child": { "id": 1027 } } }\n')),(0,r.mdx)("p",null,"(the ",(0,r.mdx)("inlineCode",{parentName:"p"},"*")," means \u201cderive and store\u201d the facts produced by the query. To derive facts for a production database you would use either ",(0,r.mdx)("inlineCode",{parentName:"p"},"glean derive")," from the command line, or the appropriate Thrift API in whatever language you\u2019re using to talk to the Glean server)."),(0,r.mdx)("p",null,"Now we have 3 facts of our derived predicate:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"derived> :stat\nexample.Child.1\n  count: 3\n  size:  87 (87 bytes) 100.0000%\n")),(0,r.mdx)("p",null,"And finally we can make efficient queries to find a parent\u2019s children:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'derived> example.Child { parent = { name = "Pet" }}\n{ "id": 1037, "key": { "parent": { "id": 1024 }, "child": { "id": 1025 } } }\n{ "id": 1038, "key": { "parent": { "id": 1024 }, "child": { "id": 1026 } } }\n\n2 results, 2 facts, 0.41ms, 160992 bytes, 1013 compiled bytes\nFacts searched:\n                         example.Child.1 : 2\n                         example.Class.1 : 1\n')),(0,r.mdx)("p",null,"We found the correct 2 results, and only searched 2 ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Child")," facts."),(0,r.mdx)("p",null,"This idea of adding extra indices to your database using derived predicates is common practice when working with Glean data, so it\u2019s worthwhile getting familiar with it."),(0,r.mdx)("h2",{id:"the-order-of-statements-is-important"},"The order of statements is important"),(0,r.mdx)("p",null,"Suppose we want to find the grandparent of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Goldfish")," class using our example schema. We would probably write it like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'Q where\n    example.Parent { child = { name = "Goldfish" }, parent = P };\n    example.Parent { child = P, parent = Q }\n')),(0,r.mdx)("p",null,"Generally speaking the statements are matched top-to-bottom. For each of the facts that match the first statement, bind the variables in the pattern and then proceed with the second statement, and so on."),(0,r.mdx)("p",null,"As written, this query works by ",(0,r.mdx)("em",{parentName:"p"},"first")," finding the parent of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Goldfish")," and ",(0,r.mdx)("em",{parentName:"p"},"then")," finding its parent, which is exactly what we want. This query will be efficient, because both stages are matching on the first field of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," predicate."),(0,r.mdx)("p",null,"If instead we swapped the order of the statements:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'Q where\n    example.Parent { child = P, parent = Q };\n    example.Parent { child = { name = "Goldfish" }, parent = P }\n')),(0,r.mdx)("p",null,"The query still works, and means exactly the same thing, but it\u2019s much less efficient. This query works as follows:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"for each ",(0,r.mdx)("inlineCode",{parentName:"li"},"example.Parent")," fact, call the child ",(0,r.mdx)("inlineCode",{parentName:"li"},"P")," and the parent ",(0,r.mdx)("inlineCode",{parentName:"li"},"Q")),(0,r.mdx)("li",{parentName:"ul"},"search for an ",(0,r.mdx)("inlineCode",{parentName:"li"},"example.Parent")," fact with child ",(0,r.mdx)("inlineCode",{parentName:"li"},'{ name = "Goldfish" }')," and parent ",(0,r.mdx)("inlineCode",{parentName:"li"},"P")),(0,r.mdx)("li",{parentName:"ul"},"if it exists, then ",(0,r.mdx)("inlineCode",{parentName:"li"},"Q")," is a result")),(0,r.mdx)("p",null,"This is going to involve searching all of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," facts, instead of just the ones for the parent of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Goldfish"),"."),(0,r.mdx)("p",null,"The general rule of thumb is to do the more specific searches first. The search for ",(0,r.mdx)("inlineCode",{parentName:"p"},'example.Parent { child = { name = "Goldfish" }, parent = P }')," is efficient because we know the ",(0,r.mdx)("inlineCode",{parentName:"p"},"child"),", this binds he value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"P")," which makes the search for ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent { child = P, parent = Q }")," also fast."),(0,r.mdx)("hr",null))}p.isMDXComponent=!0}}]);