import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as r}from"./index-DjKt9u9V.js";import{M as o,C as c}from"./index-BKeb2w6Q.js";import{T as a,D as i}from"./Tabs.stories-DEM050-A.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function s(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tabs"})," component allows you to create tabbed navigation for organizing content into separate views. Each tab can be clicked to display its associated content."]}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Tabs"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Tabs } from '@aj-codes2020/ui-kit';

const tabs = [
  { label: 'Tab 1', content: 'Content for tab 1' },
  { label: 'Tab 2', content: 'Content for tab 2' },
  { label: 'Tab 3', content: 'Content for tab 3' },
];

<Tabs tabs={tabs} />
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Tabs"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"tabs"})}),e.jsx("td",{children:"abel: string, content: React.ReactNode"}),e.jsxs("td",{children:["An array of tab objects with ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"content"})," properties."]}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the tabs container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Tabs"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tabs-container"}),": The main container for the tabs.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"tabs-header"}),": The container for the tab headers.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"tab"}),": The tab header.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"tab.active"}),": The active tab header.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"tabs-content"}),": The content area for the active tab."]})]})}function y(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{y as default};
