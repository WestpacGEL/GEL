(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1427:function(e,n,t){"use strict";t.r(n);var r=t(216),o=t(213),l=t(433),i=t(215);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default=function(e){var n=e.context,t=(e.showCode,e.showDemo,{});return t["@westpac/well"]={Well:{styles:function(e){return c({},e,{outline:"1px solid red"})}}},Object(o.jsx)(r.a,{context:n,brand:t,scope:{Playground:r.a,context:n,overridesWithTokens:t,Intopia:i.a,Well:l.Well},code:"<>\n  <Intopia ignore />\n\n  <h2>With overrides applied</h2>\n  <Well>Look, I'm in a well.</Well>\n\n  <hr />\n\n  <Well>\n    I am outside\n    <Well>I am inside</Well>\n  </Well>\n\n  <h2>With overrides and component overrides</h2>\n  <Well\n    overrides={{\n      Well: {\n        styles: styles => ({\n          ...styles,\n          outline: \"1px solid blue\"\n        })\n      }\n    }}\n  >\n    Look, I'm in a well.\n  </Well>\n</>;\n"},Object(o.jsx)(i.a,{ignore:!0}),Object(o.jsx)("h2",null,"With overrides applied"),Object(o.jsx)(l.Well,null,"Look, I'm in a well."),Object(o.jsx)("hr",null),Object(o.jsx)(l.Well,null,"I am outside",Object(o.jsx)(l.Well,null,"I am inside")),Object(o.jsx)("h2",null,"With overrides and component overrides"),Object(o.jsx)(l.Well,{overrides:{Well:{styles:function(e){return c({},e,{outline:"1px solid blue"})}}}},"Look, I'm in a well."))}},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(213);function o(e){var n=e.ignore,t=e.props;return Object(r.jsx)("div",Object.assign({},t,{css:{background:n?"#f3cccc":"#ffffe5",border:"1px solid #000",padding:"1rem",color:"#000",fontSize:"16px",marginBottom:"1rem","& p:last-child":{marginBottom:0}}}),Object(r.jsx)("strong",null,"INTOPIA NOTES"),Object(r.jsx)("p",null,n?"Ignore this component please":"This component is ready to be tested!"))}}}]);