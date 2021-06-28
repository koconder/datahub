(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5489],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1796:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(4137)),o=["components"],l={title:"Developing on Metadata Ingestion",sidebar_label:"Developing on Metadata Ingestion",slug:"/metadata-ingestion/developing",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/developing.md"},s="Developing on Metadata Ingestion",d={unversionedId:"metadata-ingestion/developing",id:"metadata-ingestion/developing",isDocsHomePage:!1,title:"Developing on Metadata Ingestion",description:"If you just want to use metadata ingestion, check the user-centric guide.",source:"@site/genDocs/metadata-ingestion/developing.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/developing",permalink:"/docs/metadata-ingestion/developing",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/developing.md",version:"current",frontMatter:{title:"Developing on Metadata Ingestion",sidebar_label:"Developing on Metadata Ingestion",slug:"/metadata-ingestion/developing",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/developing.md"},sidebar:"overviewSidebar",previous:{title:"MetadataChangeEvent (MCE) Consumer Job",permalink:"/docs/metadata-jobs/mce-consumer-job"},next:{title:"No Code Metadata",permalink:"/docs/advanced/no-code-modeling"}},u=[{value:"Architecture",id:"architecture",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Set up your Python environment",id:"set-up-your-python-environment",children:[]},{value:"Common setup issues",id:"common-setup-issues",children:[]},{value:"Using Plugins in Development",id:"using-plugins-in-development",children:[]}]},{value:"Code layout",id:"code-layout",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Testing",id:"testing",children:[]},{value:"Sanity check code before committing",id:"sanity-check-code-before-committing",children:[]}]}],p={toc:u};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developing-on-metadata-ingestion"},"Developing on Metadata Ingestion"),(0,r.kt)("p",null,"If you just want to use metadata ingestion, check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"user-centric")," guide."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metadata ingestion framework layout",src:n(7987).Z})),(0,r.kt)("p",null,"The architecture of this metadata ingestion framework is heavily inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://gobblin.apache.org/"},"Apache Gobblin")," (also originally a LinkedIn project!). We have a standardized format - the MetadataChangeEvent - and sources and sinks which respectively produce and consume these objects. The sources pull metadata from a variety of data systems, while the sinks are primarily for moving this metadata into DataHub."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Python 3.6+ must be installed in your host environment."),(0,r.kt)("li",{parentName:"ol"},"On MacOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"brew install librdkafka")),(0,r.kt)("li",{parentName:"ol"},"On Debian/Ubuntu: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt install librdkafka-dev python3-dev python3-venv")),(0,r.kt)("li",{parentName:"ol"},"On Fedora (if using LDAP source integration): ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo yum install openldap-devel"))),(0,r.kt)("h3",{id:"set-up-your-python-environment"},"Set up your Python environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'../gradlew :metadata-ingestion:installDev\nsource venv/bin/activate\ndatahub version  # should print "version: unavailable (installed via git)"\n')),(0,r.kt)("h3",{id:"common-setup-issues"},"Common setup issues"),(0,r.kt)("p",null,"Common issues (click to expand):"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"datahub command not found with PyPI install"),(0,r.kt)("p",null,"If you've already run the pip install, but running ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," in your command line doesn't work, then there is likely an issue with your PATH setup and Python."),(0,r.kt)("p",null,"The easiest way to circumvent this is to install and run via Python, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 -m datahub")," in place of ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade acryl-datahub\npython3 -m datahub --help\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,'Wheel issues e.g. "Failed building wheel for avro-python3" or "error: invalid command \'bdist_wheel\'"'),(0,r.kt)("p",null,"This means Python's ",(0,r.kt)("inlineCode",{parentName:"p"},"wheel")," is not installed. Try running the following commands and then retry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install --upgrade pip wheel setuptools\npip cache purge\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Failure to install confluent_kafka: \"error: command 'x86_64-linux-gnu-gcc' failed with exit status 1\""),(0,r.kt)("p",null,"This sometimes happens if there's a version mismatch between the Kafka's C library and the Python wrapper library. Try running ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install confluent_kafka==1.5.0")," and then retrying.")),(0,r.kt)("h3",{id:"using-plugins-in-development"},"Using Plugins in Development"),(0,r.kt)("p",null,"The syntax for installing plugins is slightly different in development. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- pip install 'acryl-datahub[bigquery,datahub-rest]'\n+ pip install -e '.[bigquery,datahub-rest]'\n")),(0,r.kt)("h2",{id:"code-layout"},"Code layout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The CLI interface is defined in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/entrypoints.py"},"entrypoints.py"),"."),(0,r.kt)("li",{parentName:"ul"},"The high level interfaces are defined in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api"},"API directory"),"."),(0,r.kt)("li",{parentName:"ul"},"The actual ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source"},"sources")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/sink"},"sinks")," have their own directories. The registry files in those directories import the implementations."),(0,r.kt)("li",{parentName:"ul"},"The metadata models are created using code generation, and eventually live in the ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/datahub/metadata")," directory. However, these files are not checked in and instead are generated at build time. See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/scripts/codegen.sh"},"codegen")," script for details."),(0,r.kt)("li",{parentName:"ul"},"Tests live in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/tests"},(0,r.kt)("inlineCode",{parentName:"a"},"tests"))," directory. They're split between smaller unit tests and larger integration tests.")),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Contributions welcome!"),(0,r.kt)("p",null,"Also take a look at the guide to ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/adding-source"},"adding a source"),"."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Follow standard install from source procedure - see above.\n\n# Install, including all dev requirements.\npip install -e '.[dev]'\n\n# Run unit tests.\npytest -m 'not slow'\n\n# Run Docker-based integration tests.\npytest -m 'slow'\n")),(0,r.kt)("h3",{id:"sanity-check-code-before-committing"},"Sanity check code before committing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Assumes: pip install -e '.[dev]'\nblack .\nisort .\nflake8 .\nmypy .\npytest\n\n# These steps are all included in the gradle build:\n../gradlew :metadata-ingestion:lintFix\n../gradlew :metadata-ingestion:check\n")))}c.isMDXComponent=!0},7987:function(e,t,n){"use strict";t.Z=n.p+"assets/images/datahub-metadata-ingestion-framework-17ea65cd4913f08cb69942bf3a41eb1d.png"}}]);