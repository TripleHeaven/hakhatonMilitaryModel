(this["webpackJsonphakhaton-military-model"]=this["webpackJsonphakhaton-military-model"]||[]).push([[0],{21:function(e,t,n){e.exports={canvasContainer:"styles_canvasContainer__1oELG",buttonBlockContainer:"styles_buttonBlockContainer__I9xRl",buttonBlockContainerOne:"styles_buttonBlockContainerOne__1K6sS"}},48:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(37),o=n(11),s=n(12),a=n(58),i=n(59),u=n(60),j=n(21),b=n.n(j),l=(n(48),n(3)),O="cube_base_color.png",x="brm_blue_ocean.png",d="green_brm.png",h="dawn",p="warehouse",m="forest",C="city",k=Object(r.createContext)(),g=n(44),f=n(10),v=function(e){var t=e.textureCurrent,n=e.roughnessMap,c=Object(s.c)(l.TextureLoader,t),o=Object(s.c)(l.TextureLoader,n),i=Object(a.a)("brdm_textured_hard.fbx"),u=Object(r.useMemo)((function(){return i.clone(!0)}),[i]),j=new l.MeshPhysicalMaterial({map:c,roughnessMap:o,roughness:1});return console.log("MAT",j),u.traverse((function(e){e&&(e.material=j,e.material.roughnessMap=o)})),Object(f.jsx)("primitive",{object:u,scale:.02})},_=function(){var e=Object(r.useContext)(k),t=e.setTexture,n=e.setPreset;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:b.a.buttonBlockContainer,children:[Object(f.jsx)("p",{children:"\u0424\u043e\u043d"}),Object(f.jsxs)("div",{className:b.a.buttonBlock,children:[Object(f.jsx)("button",{onClick:function(){return n(C)},children:"1"}),Object(f.jsx)("button",{onClick:function(){return n(p)},children:"2"}),Object(f.jsx)("button",{onClick:function(){return n(m)},children:"3"}),Object(f.jsx)("button",{onClick:function(){return n(h)},children:"4"})]})]}),Object(f.jsxs)("div",{className:b.a.buttonBlockContainerOne,children:[Object(f.jsx)("p",{children:"\u0426\u0432\u0435\u0442"}),Object(f.jsxs)("div",{className:b.a.buttonBlock,children:[Object(f.jsx)("button",{onClick:function(){return t(O)},children:"1"}),Object(f.jsx)("button",{onClick:function(){return t(x)},children:"2"}),Object(f.jsx)("button",{onClick:function(){return t(d)},children:"3"})]})]}),Object(f.jsx)("div",{className:b.a.canvasContainer,children:Object(f.jsx)(M,{})})]})},M=function(){var e=Object(r.useContext)(k),t=e.texture,n=e.color,c=e.preset,o=e.roughnessMap;return Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)("div",{style:{margin:"auto"},children:Object(f.jsx)(g.a,{strokeColor:"green",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}),children:Object(f.jsxs)(s.a,{onCreated:function(e){var t=e.camera;t.rotation.x=25,t.rotation.y=150,t.rotation.z=2.33},children:[Object(f.jsx)("ambientLight",{intensity:.1,color:"#f8ede0"}),Object(f.jsx)("pointLight",{position:[10,100,100]}),Object(f.jsx)(v,{textureCurrent:t,color:n,roughnessMap:o}),c&&Object(f.jsx)(i.a,{preset:c,background:!0}),Object(f.jsx)(u.a,{})]})})};function y(){var e=Object(r.useState)(O),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)("#FFFFFF"),a=Object(o.a)(s,2),i=a[0],u=a[1],j=Object(r.useState)(C),b=Object(o.a)(j,2),l=b[0],x=b[1],d=Object(r.useState)("cube_roughness.png"),h=Object(o.a)(d,2),p=h[0],m=h[1];return Object(f.jsx)(k.Provider,{value:{texture:n,color:i,setTexture:c,preset:l,setPreset:x,setColor:u,roughnessMap:p,setRoughnessMap:m},children:Object(f.jsx)(_,{})})}var B=document.getElementById("root");Object(c.render)(Object(f.jsx)(r.StrictMode,{children:Object(f.jsx)(y,{})}),B)}},[[56,1,2]]]);
//# sourceMappingURL=main.1835cee9.chunk.js.map