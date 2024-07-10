import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as t}from"./index-DjKt9u9V.js";import{M as i,C as r}from"./index-BKeb2w6Q.js";import{A as s,D as d}from"./Accordion.stories-CglE-bum.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function c(o){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Accordion"})," component allows you to create expandable and collapsible sections, useful for presenting information in a compact and organized manner."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Accordion"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Accordion } from '@aj-codes2020/ui-kit';

const items = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
];

<Accordion items={items} />;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Accordion"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"items"})}),e.jsx("td",{children:"title: string; content: React.ReactNode;"}),e.jsx("td",{children:"An array of items to be displayed in the accordion. Each item should have a title and content."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the accordion container. Use this prop to further customize the accordion's appearance."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Accordion"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"accordion"}),": The main container for the accordion.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"accordion-item"}),": The container for each accordion item.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"accordion-title"}),": The title of each accordion item.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"accordion-title.active"}),": The title of the active accordion item.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"accordion-icon"}),": The icon displayed at the end of the accordion title.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"accordion-content"}),": The content area of each accordion item.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"accordion-content.active"}),": The content area of the active accordion item."]})]})}function y(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{y as default};
