import{j as t}from"./jsx-runtime-CGpYA4L6.js";import{e as s}from"./Navbar-4_7D3pOY.js";import"./index-CleY8y_P.js";const l={title:"Components/UI Elements/Popover",component:s,render:m=>t.jsx(s,{...m,children:t.jsx("button",{children:"Click me"})}),parameters:{layout:"centered"},argTypes:{content:{control:"text"},position:{control:"select",options:["top","bottom","left","right"]},className:{control:"text"}}},o={args:{content:"This is a popover",position:"bottom",className:""}},e={args:{content:t.jsxs("div",{children:[t.jsx("h4",{children:"Popover Title"}),t.jsx("p",{children:"This is some custom content in the popover."})]}),position:"right",className:""}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    content: 'This is a popover',
    position: 'bottom',
    className: ''
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: <div>
       <h4>Popover Title</h4>
       <p>This is some custom content in the popover.</p>
     </div>,
    position: 'right',
    className: ''
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const d=["Default","CustomContent"],g=Object.freeze(Object.defineProperty({__proto__:null,CustomContent:e,Default:o,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{o as D,g as P};
