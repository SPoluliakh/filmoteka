"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[44],{8044:function(n,e,t){t.r(e),t.d(e,{Favorite:function(){return k}});var r,o,i,a,c,u,s=t(885),l=t(2791),d=t(168),h=t(6444),f=t(6731),m=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -","px;\n  margin-top: -","px;\n  padding: ","px;\n  padding-top: ","px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[6]})),p=h.ZP.li(o||(o=(0,d.Z)(["\n  position: relative;\n  flex-basis: calc(100% / 5 - ","px);\n  margin-left: ","px;\n  margin-top: ","px;\n  display: flex;\n  flex-direction: column;\n\n  transition: scale, 250ms, liner;\n  :hover,\n  :focus {\n    scale: 1.02;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]})),x=h.ZP.img(i||(i=(0,d.Z)(["\n  width: 100%;\n  object-fit: cover;\n  border-top-left-radius: ",";\n  border-top-right-radius: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal})),g=h.ZP.h2(a||(a=(0,d.Z)(["\n  border-bottom-left-radius: ",";\n  border-bottom-right-radius: ",";\n  padding: ","px;\n  background-color: ",";\n  margin: ","px;\n  font-size: ","px;\n  text-decoration: none;\n  color: ",";\n\n  flex-grow: 1;\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.primary})),v=(0,h.ZP)(f.OL)(c||(c=(0,d.Z)(["\n  text-decoration: none;\n  box-shadow: ",";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])),(function(n){return n.theme.shadows.boxShadow})),b=h.ZP.div(u||(u=(0,d.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.activeText}),(function(n){return n.theme.colors.navBcg}),(function(n){return n.theme.radii.ratingVew}),(function(n){return n.theme.fontWeights.medium})),w=t(2204),Z=t(184),_=function(n){var e=n.list;return(0,Z.jsx)(m,{children:e.map((function(n){return(0,Z.jsxs)(p,{children:[(0,Z.jsxs)(v,{to:"/movies/".concat(n.data.id),children:[(0,Z.jsx)(x,{src:n.data.poster_path?"https://image.tmdb.org/t/p/original/".concat(n.data.poster_path):w,alt:n.data.title}),(0,Z.jsx)(g,{children:n.data.title})]}),(0,Z.jsx)(b,{children:n.data.vote_average.toFixed(2)})]},n.data.id)}))})},j=t(2816),k=function(){var n=(0,l.useRef)("myFilms"),e=(0,l.useState)((function(){var e=JSON.parse(localStorage.getItem(n.current));return null!==e&&void 0!==e?e:[]})),t=(0,s.Z)(e,1)[0];return(0,Z.jsx)("div",{children:t.length>0?(0,Z.jsx)(_,{list:t}):(0,Z.jsx)(j.h,{children:" There is no favotite movies yet. "})})}}}]);
//# sourceMappingURL=44.d4bd849f.chunk.js.map