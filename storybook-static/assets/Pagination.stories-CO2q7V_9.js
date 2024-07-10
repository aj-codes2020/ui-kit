import{j as g}from"./jsx-runtime-CGpYA4L6.js";import{r as l}from"./index-CleY8y_P.js";import{P as a}from"./Navbar-4_7D3pOY.js";const u={title:"Components/Page Elements/Pagination",component:a,render:t=>{const[c,m]=l.useState(t.currentPage);return g.jsx(a,{...t,currentPage:c,onPageChange:r=>{m(r),t.onPageChange(r)}})},parameters:{layout:"centered"},argTypes:{totalItems:{control:"number"},itemsPerPage:{control:"number"},currentPage:{control:"number"},onPageChange:{action:"changed"},className:{control:"text"}}},e={args:{totalItems:50,itemsPerPage:10,currentPage:1,className:""}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    totalItems: 50,
    itemsPerPage: 10,
    currentPage: 1,
    className: ''
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const P=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:P,default:u},Symbol.toStringTag,{value:"Module"}));export{e as D,f as P};
