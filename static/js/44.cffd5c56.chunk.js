"use strict";(self.webpackChunkfilmoteka=self.webpackChunkfilmoteka||[]).push([[44],{8044:function(n,e,t){t.r(e),t.d(e,{Favorite:function(){return F}});var r,o,i,a,c,u,s=t(885),l=t(2791),d=t(168),f=t(6444),p=t(6731),m=f.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -","px;\n  margin-top: -","px;\n  padding: ","px;\n  padding-top: ","px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[6]})),h=f.ZP.li(o||(o=(0,d.Z)(["\n  position: relative;\n  flex-basis: calc(100% / 5 - ","px);\n  margin-left: ","px;\n  margin-top: ","px;\n  display: flex;\n  flex-direction: column;\n\n  transition: scale, 250ms, liner;\n  :hover,\n  :focus {\n    scale: 1.02;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]})),x=f.ZP.img(i||(i=(0,d.Z)(["\n  width: 100%;\n  object-fit: cover;\n  border-top-left-radius: ",";\n  border-top-right-radius: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal})),g=f.ZP.h2(a||(a=(0,d.Z)(["\n  border-bottom-left-radius: ",";\n  border-bottom-right-radius: ",";\n  padding: ","px;\n  background-color: ",";\n  margin: ","px;\n  font-size: ","px;\n  text-decoration: none;\n  color: ",";\n\n  flex-grow: 1;\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.primary})),b=(0,f.ZP)(p.OL)(c||(c=(0,d.Z)(["\n  text-decoration: none;\n  box-shadow: ",";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])),(function(n){return n.theme.shadows.boxShadow})),v=f.ZP.div(u||(u=(0,d.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.activeText}),(function(n){return n.theme.colors.navBcg}),(function(n){return n.theme.radii.ratingVew}),(function(n){return n.theme.fontWeights.medium})),Z=t(2204),w=t(7689),j=t(1076),k=t(184),y=function(n){var e=n.list,t=(0,w.TH)();return(0,k.jsx)(m,{children:e.map((function(n){return(0,k.jsxs)(h,{children:[(0,k.jsxs)(b,{to:"/movies/".concat(n.data.id),state:{from:t},children:[(0,k.jsx)(x,{src:n.data.poster_path?"https://image.tmdb.org/t/p/w".concat(j.V,"/").concat(n.data.poster_path):Z,alt:n.data.title}),(0,k.jsx)(g,{children:n.data.title})]}),(0,k.jsx)(v,{children:n.data.vote_average.toFixed(2)})]},n.data.id)}))})},P=t(2816),S=t(5656),F=function(){var n=(0,l.useRef)("myFilms"),e=(0,l.useState)((function(){var e=JSON.parse(localStorage.getItem(n.current));return null!==e&&void 0!==e?e:[]})),t=(0,s.Z)(e,1)[0];return(0,k.jsx)(S.x,{className:"container",pt:"43px",pb:"13px",children:t.length>0?(0,k.jsx)(y,{list:t}):(0,k.jsx)(P.h,{children:" There is no favorite movies yet. "})})}}}]);
//# sourceMappingURL=44.cffd5c56.chunk.js.map