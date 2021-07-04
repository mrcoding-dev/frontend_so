(self.webpackChunkinforme_so=self.webpackChunkinforme_so||[]).push([[898],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3886:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var t=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},c={unversionedId:"BackEnd/server",id:"BackEnd/server",isDocsHomePage:!1,title:"Server",description:"Server Go",source:"@site/docs/BackEnd/server.md",sourceDirName:"BackEnd",slug:"/BackEnd/server",permalink:"/docs/BackEnd/server",editUrl:"https://github.com/MrCoding-cl/informe_so/docs/BackEnd/server.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Main",permalink:"/docs/BackEnd/manage-docs-versions"},next:{title:"FibberRoutes",permalink:"/docs/BackEnd/translate-your-site"}},l=[],u={toc:l};function p(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/2000/1*Sl4b95G63Vxm31TY4CmAFQ.png",alt:"Server Go"})),(0,a.kt)("p",null,"En go no existen los 'Objetos', pero si existe otra alternativa a estos llamados Estructuras o denominados\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"struct"))," los cuales las reemplazan."),(0,a.kt)("p",null,"Con esto dicho se crea una estructura la cual pasar\xe1 a ser lo que se ocupar\xe1 como 'Servidor' del programa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Server.go"',title:'"Server.go"'},"type ServeraddClient func(server2 *Server) int\n\ntype Server struct {\n    clients    map[int]*Client\n    add_client ServeraddClient\n}\n")),(0,a.kt)("p",null,"Go adem\xe1s tiene otra peculiaridad, la cual es poder definir otros tipos de variables al igual que las estructuras en\neste caso se define una funci\xf3n como un tipo de variable que puede ser asignado (Al igual que los tipos String, Int,\nBool, etc), en este caso a la variable ",(0,a.kt)("inlineCode",{parentName:"p"},"add_client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Server.go"',title:'"Server.go"'},"func createServer() Server {\n    return Server{\n        clients: make(map[int]*Client),\n        add_client: func(server2 *Server) int {\n            id := len(server2.clients) + 1\n            for {\n                if _, ok := server2.clients[id]; ok {\n                    id += 1\n                } else {\n                    break\n                }\n            }\n            newClient := Client{\n                Id:    id,\n                World: nil, // Is going to be set when the socket get the word 'start'\n                Config: Configurations{\n                    RunType: 3,\n                    Pram:    false,\n                    Ubers:   make([]UberFormat, 1),\n                    Request: make([]RequestFormat, 1),\n                },\n            }\n            server2.clients[id] = &newClient\n            return id\n        },\n    }\n}\n")))}p.isMDXComponent=!0}}]);