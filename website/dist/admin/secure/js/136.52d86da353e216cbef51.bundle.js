(window.webpackJsonp=window.webpackJsonp||[]).push([[136,213],{1341:function(t,e,o){"use strict";o.r(e);var n=o(216),l=o(213),s=o(272),i=o(256),c=o(215);e.default=function(t){var e=t.context,o=t.showCode,r=t.showDemo;return Object(l.jsx)(n.a,{context:e,showCode:o,showDemo:r,scope:{Playground:n.a,context:e,showCode:o,showDemo:r,Intopia:c.a,Grid:s.Grid,Cell:s.Cell,Box:i.Box},code:"<>\n  <Intopia />\n\n  <Grid columns={3}>\n    <Cell>\n      <Box>Top Left</Box>\n    </Cell>\n    <Cell left={3}>\n      <Box>Top Right</Box>\n    </Cell>\n    <Cell left={2} top={2}>\n      <Box>Middle</Box>\n    </Cell>\n    <Cell top={3}>\n      <Box>Bottom Left</Box>\n    </Cell>\n    <Cell top={3} left={3}>\n      <Box>Bottom Right</Box>\n    </Cell>\n  </Grid>\n</>;\n"},Object(l.jsx)(c.a,null),Object(l.jsx)(s.Grid,{columns:3},Object(l.jsx)(s.Cell,null,Object(l.jsx)(i.Box,null,"Top Left")),Object(l.jsx)(s.Cell,{left:3},Object(l.jsx)(i.Box,null,"Top Right")),Object(l.jsx)(s.Cell,{left:2,top:2},Object(l.jsx)(i.Box,null,"Middle")),Object(l.jsx)(s.Cell,{top:3},Object(l.jsx)(i.Box,null,"Bottom Left")),Object(l.jsx)(s.Cell,{top:3,left:3},Object(l.jsx)(i.Box,null,"Bottom Right"))))}},215:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(213);function l(t){var e=t.ignore,o=t.props;return Object(n.jsx)("div",Object.assign({},o,{css:{background:e?"#f3cccc":"#ffffe5",border:"1px solid #000",padding:"1rem",color:"#000",fontSize:"16px",marginBottom:"1rem","& p:last-child":{marginBottom:0}}}),Object(n.jsx)("strong",null,"INTOPIA NOTES"),Object(n.jsx)("p",null,e?"Ignore this component please":"This component is ready to be tested!"))}},256:function(t,e,o){"use strict";o.r(e),o.d(e,"Box",(function(){return s})),o.d(e,"GridOverlay",(function(){return i}));var n=o(213),l=o(288),s=function(t){var e=Object(n.useBrand)().COLORS;return Object(n.jsx)("div",Object.assign({css:{alignItems:"center",backgroundColor:e.tints.hero10,borderRadius:1,color:e.hero,display:"flex",height:"100%",justifyContent:"center",minHeight:60}},t))},i=function(t){var e=t.children,o=t.columns,s=void 0===o?12:o,i=t.gap;return Object(n.jsx)("div",{css:{height:"100%",position:"relative"}},Object(n.jsx)(l.Grid,{columns:s,gap:i,css:{bottom:"-1.5em",height:"auto",left:0,opacity:.1,pointerEvents:"none",position:"absolute",right:0,top:"-1.5em","@media (min-width: 420px)":{bottom:"-2em",top:"-2em"}}},new Array(s).fill(1).map((function(t,e){return Object(n.jsx)(l.Cell,{key:e,css:{backgroundColor:"rgba(0, 116, 196, 0.3)"}})}))),e)}}}]);