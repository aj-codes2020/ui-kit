import{j as S}from"./jsx-runtime-CGpYA4L6.js";import{r as x}from"./index-CleY8y_P.js";import{F as t}from"./Navbar-4_7D3pOY.js";const N={title:"Components/UI Elements/File Upload",component:t,render:d=>{const[,f]=x.useState(null),g=F=>{f(F)};return S.jsx(t,{...d,onFileSelect:g})},parameters:{layout:"centered"},argTypes:{onFileSelect:{action:"fileSelected"},accept:{control:"text"},multiple:{control:"boolean"},className:{control:"text"}}},e={args:{accept:"",multiple:!1,className:""}},s={args:{accept:"",multiple:!0,className:""}},a={args:{accept:"",multiple:!1,className:"custom-class"}};var r,l,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    accept: '',
    multiple: false,
    className: ''
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var c,n,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accept: '',
    multiple: true,
    className: ''
  }
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,u,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accept: '',
    multiple: false,
    className: 'custom-class'
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const _=["Default","MultipleFiles","CustomClass"],y=Object.freeze(Object.defineProperty({__proto__:null,CustomClass:a,Default:e,MultipleFiles:s,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{e as D,y as F};
