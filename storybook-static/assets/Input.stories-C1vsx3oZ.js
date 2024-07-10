import{j as h}from"./jsx-runtime-CGpYA4L6.js";import{r as v}from"./index-CleY8y_P.js";import{I as n}from"./Navbar-4_7D3pOY.js";const N={title:"Components/UI Elements/Input",component:n,render:s=>{const[b,y]=v.useState(s.value);return h.jsx(n,{...s,value:b,onChange:y})},parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["text","email","password","number"]},value:{control:"text"},onChange:{action:"changed"},placeholder:{control:"text"},className:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"}}},e={args:{type:"text",value:"",placeholder:"Enter text...",className:""}},r={args:{type:"email",value:"",placeholder:"Enter email...",className:""}},a={args:{type:"password",value:"",placeholder:"Enter password...",className:""}},t={args:{type:"number",value:"",placeholder:"Enter number...",className:"",min:0,max:100,step:1}};var o,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'text',
    value: '',
    placeholder: 'Enter text...',
    className: ''
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'email',
    value: '',
    placeholder: 'Enter email...',
    className: ''
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,i,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'password',
    value: '',
    placeholder: 'Enter password...',
    className: ''
  }
}`,...(x=(i=a.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var g,E,I;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'number',
    value: '',
    placeholder: 'Enter number...',
    className: '',
    min: 0,
    max: 100,
    step: 1
  }
}`,...(I=(E=t.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const S=["TextInput","EmailInput","PasswordInput","NumberInput"],j=Object.freeze(Object.defineProperty({__proto__:null,EmailInput:r,NumberInput:t,PasswordInput:a,TextInput:e,__namedExportsOrder:S,default:N},Symbol.toStringTag,{value:"Module"}));export{j as I,e as T};
