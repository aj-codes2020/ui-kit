import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as s}from"./index-DjKt9u9V.js";import{M as r,C as o}from"./index-BKeb2w6Q.js";import{P as a,D as d}from"./Pagination.stories-CO2q7V_9.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function i(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Pagination"})," component allows you to manage navigation through pages of content, providing controls for moving between pages and indicating the current page."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Pagination"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Pagination } from '@aj-codes2020/ui-kit';

const handlePageChange = (page: number) => {
  console.log(\`Current page is \${page}\`);
};

<Pagination
  totalItems={50}
  itemsPerPage={10}
  currentPage={1}
  onPageChange={handlePageChange}
  className=""
/>
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Pagination"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"totalItems"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The total number of items to paginate."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"itemsPerPage"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The number of items to display per page."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"currentPage"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The current active page."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"onPageChange"})}),e.jsx("td",{children:"(page: number) => void"}),e.jsx("td",{children:"Callback function that is called when the page changes."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the pagination container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Pagination"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pagination-container"}),": The main container for the pagination component.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"pagination-button"}),": The button element for each page and navigation control.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"pagination-button.active"}),": The button element for the active page.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"pagination-button:disabled"}),": The button element when navigation is disabled."]})]})}function v(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{v as default};
