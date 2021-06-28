(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4823],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8794:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var a=n(2122),r=n(9756),i=(n(7294),n(4137)),o=["components"],s={title:"High Cardinality Relationships",sidebar_label:"High Cardinality Relationships",slug:"/advanced/high-cardinality",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/high-cardinality.md"},l="High Cardinality Relationships",d={unversionedId:"docs/advanced/high-cardinality",id:"docs/advanced/high-cardinality",isDocsHomePage:!1,title:"High Cardinality Relationships",description:"As explained in What is a Relationship, the raw metadata for forming relationships is captured directly inside of a Metadata Aspect. The most natural way to model this is using an array, e.g. a group membership aspect contains an array of user URNs. However, this poses some challenges when the cardinality of the relationship is expected to be large (say, greater than 10,000). The aspect becomes large in size, which leads to slow update and retrieval. It may even exceed the underlying limit of the document store, which is often in the range of a few MBs. Furthermore, sending large messages (> 1MB) over Kafka requires special tuning and is generally discouraged.",source:"@site/genDocs/docs/advanced/high-cardinality.md",sourceDirName:"docs/advanced",slug:"/advanced/high-cardinality",permalink:"/docs/advanced/high-cardinality",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/advanced/high-cardinality.md",version:"current",frontMatter:{title:"High Cardinality Relationships",sidebar_label:"High Cardinality Relationships",slug:"/advanced/high-cardinality",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/high-cardinality.md"},sidebar:"overviewSidebar",previous:{title:"Elasticsearch upgrade from 5.6.8 to 7.9.3",permalink:"/docs/advanced/es-7-upgrade"},next:{title:"Strongly Consistent Secondary Index",permalink:"/docs/how/scsi-onboarding-guide"}},c=[{value:"1:N Relationships",id:"1n-relationships",children:[]},{value:"M:N Relationships",id:"mn-relationships",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"high-cardinality-relationships"},"High Cardinality Relationships"),(0,i.kt)("p",null,"As explained in ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/relationship"},"What is a Relationship"),", the raw metadata for forming relationships is captured directly inside of a ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"Metadata Aspect"),". The most natural way to model this is using an array, e.g. a group membership aspect contains an array of user ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/urn"},"URNs"),". However, this poses some challenges when the cardinality of the relationship is expected to be large (say, greater than 10,000). The aspect becomes large in size, which leads to slow update and retrieval. It may even exceed the underlying limit of the document store, which is often in the range of a few MBs. Furthermore, sending large messages (> 1MB) over Kafka requires special tuning and is generally discouraged."),(0,i.kt)("p",null,"Depending on the type of relationships, there are different strategies for dealing with high cardinality. "),(0,i.kt)("h3",{id:"1n-relationships"},"1:N Relationships"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is large, simply store the relationship as a reverse pointer on the ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," side, instead of an ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),"-element array on the ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," side. In other words, instead of doing this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"record MemberList {\n  members: array[UserUrn]\n}\n")),(0,i.kt)("p",null,"do this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"record Membership {\n  group: GroupUrn\n}\n")),(0,i.kt)("p",null,"One drawback with this approach is that batch updating the member list becomes multiple DB operations and non-atomic. If the list is provided by an external metadata provider via ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe"},"MCEs"),", this also means that multiple MCEs will be required to update the list, instead of having one giant array in a single MCE."),(0,i.kt)("h3",{id:"mn-relationships"},"M:N Relationships"),(0,i.kt)("p",null,"When one side of the relation (",(0,i.kt)("inlineCode",{parentName:"p"},"M")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),") has low cardinality, you can apply the same trick in ","[1:N Relationship]"," by creating the array on the side with low-cardinality. For example, assuming a user can only be part of a small number of groups but each group can have a large number of users, the following model will be more efficient than the reverse."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"record Membership {\n  groups: array[GroupUrn]\n}\n")),(0,i.kt)("p",null,"When both ",(0,i.kt)("inlineCode",{parentName:"p"},"M")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),' are of high cardinality (e.g. millions of users, each belongs to million of groups), the only way to store such relationships efficiently is by creating a new "Mapping Entity" with a single aspect like this'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"record UserGroupMap {\n  user: UserUrn\n  group: GroupUrn\n}\n")),(0,i.kt)("p",null,"This means that the relationship now can only be created & updated at a single source-destination pair granularity."))}h.isMDXComponent=!0}}]);