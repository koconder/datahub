(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9548],{4137:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),h=p(n),u=i,c=h["".concat(s,".").concat(u)]||h[u]||m[u]||r;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2331:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(2122),i=n(9756),r=(n(7294),n(4137)),l=["components"],o={title:"Entities",sidebar_label:"Entities",slug:"/what/entity",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/entity.md"},s="Entities",p={unversionedId:"docs/what/entity",id:"docs/what/entity",isDocsHomePage:!1,title:"Entities",description:"What is an entity?",source:"@site/genDocs/docs/what/entity.md",sourceDirName:"docs/what",slug:"/what/entity",permalink:"/docs/what/entity",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/entity.md",version:"current",frontMatter:{title:"Entities",sidebar_label:"Entities",slug:"/what/entity",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/entity.md"}},d=[{value:"What is an entity?",id:"what-is-an-entity",children:[]},{value:"When to model something as an entity?",id:"when-to-model-something-as-an-entity",children:[]},{value:"How to delete an entity?",id:"how-to-delete-an-entity",children:[]}],m={toc:d};function h(t){var e=t.components,o=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entities"},"Entities"),(0,r.kt)("h2",{id:"what-is-an-entity"},"What is an entity?"),(0,r.kt)("p",null,"An entity is very similar to the concept of a ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#writing-resources"},"resource")," in ",(0,r.kt)("a",{parentName:"p",href:"http://rest.li/"},"Rest.li"),". Generally speaking, an entity should have a defined ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/urn"},"URN")," and a corresponding ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD")," API for the metadata associated with a particular instance of the entity. A particular instance of an entity is essentially a node in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/graph"},"metadata graph"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metadata-modeling",src:n(3014).Z})),(0,r.kt)("p",null,"In the above example graph, ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," are entities. A specific dataset, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/tracking/ImportantEvent"),", is an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," entity, much like how the LDAP group ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-team")," is an instance of Group entity."),(0,r.kt)("p",null,"Unlike rest.li, there\u2019s no concept of sub-entity (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/wiki/Rest.li-User-Guide#sub-resources"},"sub-resource")," in rest.li). In other words, entities are always top-level and non-nesting. Instead, nestedness is modeled using ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/relationship"},"relationships"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Contains"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IsPartOf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HasA"),"."),(0,r.kt)("p",null,"Entities may also contain attributes, which are in the form of key-value pairs. Each attribute is indexed to support fast attribute-based querying, e.g. find all the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users"),' that have the job title "Software Engineer". There may be a size limitation on the value imposed by the underlying indexing system, but it suffices to assume that the values should kept at relatively small in size, say less than 1KB.'),(0,r.kt)("p",null,"The value of each attribute is expected to be derived from either the entity\u2019s URN or\nfrom the metadata associated with the entity. Another way to understand the attributes of an entity is to treat them as a complex virtual view over the URN and metadata with indexing support on each column of the view. Just like a virtual view where one is not supposed to store data in the view directly, but to derive it from the underlying tables, the value for the attributes should also be derived. How the actual derivation happens is covered in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/architecture#metadata-serving"},"Metadata Serving")," section."),(0,r.kt)("p",null,"There\u2019s no need to explicitly create or destroy entity instances. An entity instance will be automatically created in the graph whenever a new relationship involving the instance is formed, or when a new metadata aspect is attached to the instance.\nEach entity has a special boolean attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"removed"),', which is used to mark the entity as "soft deleted",\nwithout destroying existing relationships and attached metadata. See ',(0,r.kt)("a",{parentName:"p",href:"#how-to-delete-an-entity"},"How to delete an entity?")," for more details."),(0,r.kt)("p",null,"An example ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"PDL")," schema for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," entity is shown below. Note that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each entity is expected to have a ",(0,r.kt)("inlineCode",{parentName:"li"},"urn")," field with an entity-specific URN type."),(0,r.kt)("li",{parentName:"ol"},"The optional ",(0,r.kt)("inlineCode",{parentName:"li"},"removed")," field is captured in BaseEntity, which is expected to be included by all entities."),(0,r.kt)("li",{parentName:"ol"},"All other fields are expected to be of primitive types or enum only.\nWhile it may be possible to support other complex types, namely array, union, map, and record,\nthis mostly depends on the underlying indexing system. For simplicity, we only allow numeric or string-like values for now."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"urn"),' field is non-optional, while all other fields must be optional.\nThis is to support "partial update" when only a selective number of attributes need to be altered.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.entity\n\n/**\n * Common fields that apply to all entities\n */\nrecord BaseEntity {\n\n  /** Whether the entity has been removed or not */\n  removed: optional boolean = false\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.entity\n\nimport com.linkedin.common.DataPlatformUrn\nimport com.linkedin.common.DatasetUrn\nimport com.linkedin.common.FabricType\n\n/**\n * Data model for a dataset entity\n */\nrecord DatasetEntity includes BaseEntity {\n\n  /** Urn of the dataset */\n  urn: DatasetUrn\n\n  /** Dataset native name */\n  name: optional string\n\n  /** Platform urn for the dataset */\n  platform: optional DataPlatformUrn\n\n  /** Fabric type where dataset belongs to */\n  origin: optional FabricType\n}\n")),(0,r.kt)("h2",{id:"when-to-model-something-as-an-entity"},"When to model something as an entity?"),(0,r.kt)("p",null,"A lot of time it may not be obvious if something should be modeled as an entity, a ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"metadata aspect"),", or even a field in a metadata aspect. One way to think of it is using the concept of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Third_normal_form"},"Third Normal Form"),". We'll use the example from the Wikipedia entry to illustrate the idea."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tournament Table")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tournament"),(0,r.kt)("th",{parentName:"tr",align:null},"Year"),(0,r.kt)("th",{parentName:"tr",align:null},"Winner"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indiana Invitational"),(0,r.kt)("td",{parentName:"tr",align:null},"1998"),(0,r.kt)("td",{parentName:"tr",align:null},"Al Fredrickson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cleveland Open"),(0,r.kt)("td",{parentName:"tr",align:null},"1999"),(0,r.kt)("td",{parentName:"tr",align:null},"Bob Albertson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Des Moines Masters"),(0,r.kt)("td",{parentName:"tr",align:null},"1999"),(0,r.kt)("td",{parentName:"tr",align:null},"Al Fredrickson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indiana Invitational"),(0,r.kt)("td",{parentName:"tr",align:null},"1999"),(0,r.kt)("td",{parentName:"tr",align:null},"Chip Masterson")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Winner Table")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Winner"),(0,r.kt)("th",{parentName:"tr",align:null},"Date of birth"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chip Masterson"),(0,r.kt)("td",{parentName:"tr",align:null},"14 March 1977")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Al Fredrickson"),(0,r.kt)("td",{parentName:"tr",align:null},"21 July 1975")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bob Albertson"),(0,r.kt)("td",{parentName:"tr",align:null},"28 September 1968")))),(0,r.kt)("p",null,"When fully normalized, it becomes clear that each table corresponds to an entity (",(0,r.kt)("inlineCode",{parentName:"p"},"Tournament")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Winner"),") and is identifiable by its respective key (",(0,r.kt)("inlineCode",{parentName:"p"},"{Tournament, Year}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Winner"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"Date of birth"),' column in the second table is the "metadata aspect" of the ',(0,r.kt)("inlineCode",{parentName:"p"},"Winner")," entity. There also exists a relationship between ",(0,r.kt)("inlineCode",{parentName:"p"},"Tournament")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Winner")," through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Winner")," column in the first table."),(0,r.kt)("p",null,'In other words, when you start asking yourself "Should I normalize this thing so it doesn\'t end up repeated data that can potentially become inconsistent?", chances are that "thing" should probably be made an entity. For example, if we need to associate a specific birthday with additional facts, such as the corresponding star sign or ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Birth_flower"},"birth flower"),", we'll end up introducing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Birthday")," table & entity and further denormalize the ",(0,r.kt)("inlineCode",{parentName:"p"},"Winner")," table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Winner Table")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Winner"),(0,r.kt)("th",{parentName:"tr",align:null},"Birthday"),(0,r.kt)("th",{parentName:"tr",align:null},"Birth year"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chip Masterson"),(0,r.kt)("td",{parentName:"tr",align:null},"14 March"),(0,r.kt)("td",{parentName:"tr",align:null},"1977")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Al Fredrickson"),(0,r.kt)("td",{parentName:"tr",align:null},"21 July"),(0,r.kt)("td",{parentName:"tr",align:null},"1975")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bob Albertson"),(0,r.kt)("td",{parentName:"tr",align:null},"28 September"),(0,r.kt)("td",{parentName:"tr",align:null},"1968")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Birthday Table")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Birthday"),(0,r.kt)("th",{parentName:"tr",align:null},"Star sign"),(0,r.kt)("th",{parentName:"tr",align:null},"Birth flower"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 January"),(0,r.kt)("td",{parentName:"tr",align:null},"Capricorn"),(0,r.kt)("td",{parentName:"tr",align:null},"Carnation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 July"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancer"),(0,r.kt)("td",{parentName:"tr",align:null},"Larkspur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31 December"),(0,r.kt)("td",{parentName:"tr",align:null},"Capricorn"),(0,r.kt)("td",{parentName:"tr",align:null},"Poinsettia")))),(0,r.kt)("h2",{id:"how-to-delete-an-entity"},"How to delete an entity?"),(0,r.kt)("p",null,"We purposely made all ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"metadata aspects")," immutable, i.e. each edit results in a new version created with no easy way to remove a specific version. However, since the existance of an entity is determined by the existance of its associated metadata aspects, it seems that there's no easy way to delete an entity. In fact, this is echoed by the fact that ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/gms"},"GMS")," doesn't actually provide any ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#delete"},"DELETE")," API!"),(0,r.kt)("p",null,"The main reason for choosing this append-only design is that a lot of metadata is valuable and irrecoverable once lost, e.g. information curated by human or a lineage produced by a one-off pipeline. Audit trail is also extremely important when it comes to sensitive metadata such as privacy settings, access control etc. We really don't want to wipe out the metadata aspects thinking that the entity is no longer needed\u2014to then regret the decision a year later."),(0,r.kt)("p",null,"Having said that, cluterring your catalog or graph with deleted entities is also undesirable and can lead to a lot of confusion. To strike a balance, we decided to introduce a special ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Status.pdl"},(0,r.kt)("inlineCode",{parentName:"a"},"Status")),' aspect to indicate if the entity is deleted or not. All aspects of an entity can now live forever, while the entity itself can be "soft deleted" by flipping a flag in the ',(0,r.kt)("inlineCode",{parentName:"p"},"Status")," aspect. The flag is then respected by the search index & graph builders when populating the indicies. To keep the storage space in check, one can even implement a garbage collector, which reguarly clears out aspects of entities that have been soft-deleted for a long time."))}h.isMDXComponent=!0},3014:function(t,e,n){"use strict";e.Z=n.p+"assets/images/metadata-modeling-92c9ff3f89f50361a40b60173fe223c3.png"}}]);