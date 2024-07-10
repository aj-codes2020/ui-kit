import{j as p}from"./jsx-runtime-CGpYA4L6.js";import{r as m}from"./index-CleY8y_P.js";import{f as r}from"./Navbar-4_7D3pOY.js";const u={title:"Components/UI Elements/Search Bar",component:r,render:s=>{const[,n]=m.useState(""),c=l=>{n(l)};return p.jsx(r,{...s,onSearch:c})},parameters:{layout:"centered"},argTypes:{suggestions:{control:{type:"select"}},placeholder:{control:"text"},className:{control:"text"}}},d=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew"],e={args:{suggestions:d,placeholder:"Search for a fruit...",className:""}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    suggestions,
    placeholder: 'Search for a fruit...',
    className: ''
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const i=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:u},Symbol.toStringTag,{value:"Module"}));export{e as D,h as S};
