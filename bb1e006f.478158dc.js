(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(159),a=t(160),o=(t(0),t(161)),c={title:"Datahub GMS GraphQL Service Docker Image",hide_title:!0,slug:"/docker/datahub-gms-graphql-service",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms-graphql-service/README.md"},i={unversionedId:"docker/datahub-gms-graphql-service/README",id:"docker/datahub-gms-graphql-service/README",isDocsHomePage:!1,title:"Datahub GMS GraphQL Service Docker Image",description:"Datahub GMS GraphQL Service Docker Image",source:"@site/genDocs/docker/datahub-gms-graphql-service/README.md",slug:"/docker/datahub-gms-graphql-service",permalink:"/docs/docker/datahub-gms-graphql-service",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms-graphql-service/README.md",version:"current"},u=[{value:"Run",id:"run",children:[]}],p={rightToc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"datahub-gms-graphql-service-docker-image"},"Datahub GMS GraphQL Service Docker Image"),Object(o.b)("h2",{id:"run"},"Run"),Object(o.b)("p",null,"To start ",Object(o.b)("inlineCode",{parentName:"p"},"Datahub GMS GraphQL Service")," along with all the dependencies"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose.dev.yml up datahub-gms-graphql-service\n")),Object(o.b)("p",null,"To start ",Object(o.b)("inlineCode",{parentName:"p"},"Datahub GMS GraphQL Service")," only without any dependencies"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose.dev.yml up --no-deps datahub-gms-graphql-service\n")),Object(o.b)("p",null,"For more details refer ",Object(o.b)("a",{parentName:"p",href:"/docs/docker"},"Docker README")))}l.isMDXComponent=!0},159:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,"a",(function(){return n}))},160:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(r,"a",(function(){return n}))},161:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),b=n,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return t?a.a.createElement(m,i(i({ref:r},p),{},{components:t})):a.a.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);