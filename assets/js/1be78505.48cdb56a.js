(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9514,8177],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,b=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6381:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var a=n(7294),r=n(4137),i=n(9962),o=n(7401),l=n(4791),c=n(2122),s=n(9756),d=n(6010),u=n(2433),m=n(9729),p=n(3301),b=n(5717),h=n(2511),f=n(2735),v=n(2827),E=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(6416),C=n(6681),k=n(7130),y="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",_="sidebarHidden_2kNb",N="sidebarLogo_3h0W",S="menu_Bmed",I="menuLinkText_2aKo",O="menuWithAnnouncementBar_2WvA",w="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",P="sidebarMenuIcon_fgN0",x="sidebarMenuCloseIcon_1lpH",M=["items"],A=["item","onItemClick","collapsible","activePath"],R=["item","onItemClick","activePath","collapsible"],L=function e(t,n){return"link"===t.type?(0,u.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},j=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,M);return t.map((function(e,t){return a.createElement(D,(0,c.Z)({key:t,item:e},n))}))}));function D(e){switch(e.item.type){case"category":return a.createElement(B,e);case"link":default:return a.createElement(H,e)}}function B(e){var t,n=e.item,r=e.onItemClick,i=e.collapsible,o=e.activePath,l=(0,s.Z)(e,A),m=n.items,p=n.label,b=L(n,o),h=(0,u.D9)(b),f=(0,a.useState)((function(){return!!i&&(!b&&n.collapsed)})),v=f[0],E=f[1],g=(0,a.useRef)(null),C=(0,a.useState)(void 0),k=C[0],y=C[1],Z=function(e){var t;void 0===e&&(e=!0),y(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){b&&!h&&v&&E(!1)}),[b,h,v]);var _=(0,a.useCallback)((function(e){e.preventDefault(),k||Z(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[k]);return 0===m.length?null:a.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},a.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&b},t[I]=!i,t)),onClick:i?_:void 0,href:i?"#!":void 0},l),p),a.createElement("ul",{className:"menu__list",ref:g,style:{height:k},onTransitionEnd:function(){v||Z(!1)}},a.createElement(j,{items:m,tabIndex:v?"-1":"0",onItemClick:r,collapsible:i,activePath:o})))}function H(e){var t=e.item,n=e.onItemClick,r=e.activePath,i=(e.collapsible,(0,s.Z)(e,R)),o=t.href,l=t.label,u=L(t,r);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(h.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:o},(0,f.Z)(o)&&{isNavLink:!0,exact:!0,onClick:n},i),(0,f.Z)(o)?l:a.createElement("span",null,l,a.createElement(C.Z,null))))}function W(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",w),onClick:t},a.createElement(E,{className:T}))}function F(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,d.Z)(P,x)},"\xd7"):a.createElement(g.Z,{className:P,height:24,width:24}))}var K=function(e){var t,n,r=e.path,i=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,u.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,b.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),f=(0,u.LU)(),E=f.navbar.hideOnScroll,g=f.hideableSidebar,C=(0,u.nT)().isClosed,I=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var r=(0,p.Z)();return(0,a.useEffect)((function(){r===p.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),w=I.showResponsiveSidebar,T=I.closeResponsiveSidebar,P=I.toggleResponsiveSidebar;return a.createElement("div",{className:(0,d.Z)(y,(t={},t[Z]=E,t[_]=s,t))},E&&a.createElement(v.Z,{tabIndex:-1,className:N}),a.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":w},n[O]=!C&&h,n)),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(F,{responsiveSidebarOpened:w,onClick:P}),a.createElement("ul",{className:"menu__list"},a.createElement(j,{items:i,onItemClick:T,collapsible:l,activePath:r}))),g&&a.createElement(W,{onClick:c}))},U=n(2210),V=n(5607),z={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(U.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(h.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(U.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,V.Z)("h1"),h2:(0,V.Z)("h2"),h3:(0,V.Z)("h3"),h4:(0,V.Z)("h4"),h5:(0,V.Z)("h5"),h6:(0,V.Z)("h6")},J=n(8177),X=n(5977),Y={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function G(e){var t,n,o,c,s,m=e.currentDocRoute,p=e.versionMetadata,b=e.children,h=(0,i.Z)(),f=h.siteConfig,v=h.isClient,g=p.pluginId,C=p.version,y=function(e){var t,n=e.versionMetadata,a=e.currentDocRoute,r=n.permalinkToSidebar,i=n.docsSidebars,o=r[a.path]||r[(t=a.path,t.endsWith("/")?t:t+"/")]||r[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];return{sidebar:i[o],sidebarName:o}}({versionMetadata:p,currentDocRoute:m}),Z=y.sidebarName,_=y.sidebar,N=(0,a.useState)(!1),S=N[0],I=N[1],O=(0,a.useState)(!1),w=O[0],T=O[1],P=(0,a.useCallback)((function(){w&&T(!1),I(!S)}),[w]);return a.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:C,tag:(0,u.os)(g,C)}},a.createElement("div",{className:Y.docPage},_&&a.createElement("aside",{className:(0,d.Z)(Y.docSidebarContainer,(t={},t[Y.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Y.docSidebarContainer)&&S&&T(!0)}},a.createElement(K,{key:Z,sidebar:_,path:m.path,sidebarCollapsible:null==(n=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||n,onCollapse:P,isHidden:w}),w&&a.createElement("div",{className:Y.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},a.createElement(E,{className:Y.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,d.Z)(Y.docMainContainer,(c={},c[Y.docMainContainerEnhanced]=S||!_,c))},a.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",Y.docItemWrapper,(s={},s[Y.docItemWrapperEnhanced]=S,s))},a.createElement(r.Zo,{components:z},b)))))}var Q=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,X.LX)(r.pathname,e)}));return i?a.createElement(G,{currentDocRoute:i,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n})):a.createElement(J.default,e)}},5607:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var a=n(9756),r=n(2122),i=n(7294),o=n(6010),l=n(7130),c=n(2433),s="enhancedAnchor_2LWZ",d="h1Heading_27L5",u=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,u),m=(0,c.LU)().navbar.hideOnScroll;return r?i.createElement(t,d,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(n={},n[s]=!m,n)),id:r}),d.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,d)});var t}},8177:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(4791),i=n(7130);t.default=function(){return a.createElement(r.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);