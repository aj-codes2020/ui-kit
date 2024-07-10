import{j as u}from"./jsx-runtime-CGpYA4L6.js";import{g as t}from"./Navbar-4_7D3pOY.js";import"./index-CleY8y_P.js";const i=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],m={title:"Components/UI Elements/Select",component:t,render:p=>u.jsx(t,{...p}),parameters:{layout:"centered"},argTypes:{options:{control:"object"},isMulti:{control:"boolean"},placeholder:{control:"text"},onChange:{action:"changed"},className:{control:"text"}}},e={args:{options:i,isMulti:!1,placeholder:"Select a fruit...",className:""}},a={args:{options:i,isMulti:!0,placeholder:"Select fruits...",className:""}};var r,l,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    options,
    isMulti: false,
    placeholder: 'Select a fruit...',
    className: ''
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var s,n,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    options,
    isMulti: true,
    placeholder: 'Select fruits...',
    className: ''
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const d=["SingleSelect","MultiSelect"],f=Object.freeze(Object.defineProperty({__proto__:null,MultiSelect:a,SingleSelect:e,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{f as S,e as a};
