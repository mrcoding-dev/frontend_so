(self.webpackChunkinforme_so=self.webpackChunkinforme_so||[]).push([[739],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9235:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},s={unversionedId:"BackEnd/manage-docs-versions",id:"BackEnd/manage-docs-versions",isDocsHomePage:!1,title:"Main",description:"Go Logo",source:"@site/docs/BackEnd/manage-docs-versions.md",sourceDirName:"BackEnd",slug:"/BackEnd/manage-docs-versions",permalink:"/docs/BackEnd/manage-docs-versions",editUrl:"https://github.com/MrCoding-cl/informe_so/docs/BackEnd/manage-docs-versions.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/FrontEnd/congratulations"},next:{title:"Server",permalink:"/docs/BackEnd/server"}},l=[],p={toc:l};function u(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://danielrosiles.com/wp-content/uploads/2020/05/Golang.png",alt:"Go Logo"})),(0,a.kt)("p",null,"Un main simple de una sola linea para iniciar el programa. Al ser parte de el package main\ncomparte todos las variables globales"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},"package main\n\nfunc main() {\n    FiberRoutes()\n}\n\n")),(0,a.kt)("p",null,"La idea de inicializar el programa asi es lanzar el servidor utilizando el Framework Fiber de Golang\nel cual es el framework mas rapido del lenguaje. (",(0,a.kt)("a",{parentName:"p",href:"https://docs.gofiber.io/"},"Fiber Docs"),")"))}u.isMDXComponent=!0}}]);