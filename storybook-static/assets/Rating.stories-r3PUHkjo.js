import{j as x}from"./jsx-runtime-CGpYA4L6.js";import{r as y}from"./index-CleY8y_P.js";import{R as s}from"./Navbar-4_7D3pOY.js";const f={title:"Components/UI Elements/Rating",component:s,render:n=>{const[p,R]=y.useState(n.value||0);return x.jsx(s,{...n,value:p,onChange:R})},parameters:{layout:"centered"},argTypes:{maxRating:{control:"number"},value:{control:"number"},onChange:{action:"changed"},className:{control:"text"},readOnly:{control:"boolean"}}},a={args:{maxRating:5,value:3,className:"",readOnly:!1}},e={args:{maxRating:5,value:4,className:"",readOnly:!0}},r={args:{maxRating:10,value:7,className:"",readOnly:!1}};var t,o,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    maxRating: 5,
    value: 3,
    className: '',
    readOnly: false
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,c,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    maxRating: 5,
    value: 4,
    className: '',
    readOnly: true
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,g,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    maxRating: 10,
    value: 7,
    className: '',
    readOnly: false
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const O=["Default","ReadOnly","CustomMaxRating"],b=Object.freeze(Object.defineProperty({__proto__:null,CustomMaxRating:r,Default:a,ReadOnly:e,__namedExportsOrder:O,default:f},Symbol.toStringTag,{value:"Module"}));export{a as D,b as R};
