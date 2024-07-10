import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as r}from"./index-DjKt9u9V.js";import{M as s,C as i}from"./index-BKeb2w6Q.js";import{P as d,D as c}from"./Popover.stories-CHwBV4Q4.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function n(t){const o={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Popover"})," component allows you to display additional content when users click on an element. It's useful for providing more information or options without cluttering the UI."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["To use the ",e.jsx(o.code,{children:"Popover"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Popover } from '@aj-codes2020/ui-kit';

const App = () => (
  <Popover content="This is a popover" position="bottom">
    <button>Click me</button>
  </Popover>
);
`})}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"Popover"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"content"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"The content to display inside the popover."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"The element that triggers the popover when clicked."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"position"})}),e.jsx("td",{children:"'top' | 'bottom' | 'left' | 'right'"}),e.jsx("td",{children:"The position of the popover relative to the trigger element."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"'bottom'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the popover."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(o.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(o.p,{children:["You can customize the ",e.jsx(o.code,{children:"Popover"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"popover-container"}),": The main container for the popover.",e.jsx(o.br,{}),`
`,e.jsx(o.code,{children:"popover-box"}),": The container for the popover content.",e.jsx(o.br,{}),`
`,e.jsx(o.code,{children:"popover-top"}),": Applied when the popover is positioned at the top.",e.jsx(o.br,{}),`
`,e.jsx(o.code,{children:"popover-bottom"}),": Applied when the popover is positioned at the bottom.",e.jsx(o.br,{}),`
`,e.jsx(o.code,{children:"popover-left"}),": Applied when the popover is positioned at the left.",e.jsx(o.br,{}),`
`,e.jsx(o.code,{children:"popover-right"}),": Applied when the popover is positioned at the right."]})]})}function P(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{P as default};
