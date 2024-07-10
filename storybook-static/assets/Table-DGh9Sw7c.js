import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as r}from"./index-DjKt9u9V.js";import{M as i,C as d}from"./index-BKeb2w6Q.js";import{T as o,D as l}from"./Table.stories-UbgxkUfb.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function s(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Table"})," component allows you to display and manipulate tabular data with features such as sorting, filtering, and pagination."]}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Table"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Table } from '@aj-codes2020/ui-kit';

const columns = ['Name', 'Age', 'Country'];
const data = [
  { Name: 'John Doe', Age: '28', Country: 'USA' },
  { Name: 'Anna Smith', Age: '22', Country: 'UK' },
  { Name: 'Paul Brown', Age: '35', Country: 'Canada' },
];

<Table
  columns={columns}
  data={data}
  itemsPerPage={10}
  showFilter={true}
  showNavigation={true}
/>;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Table"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"columns"})}),e.jsx("td",{children:"string[]"}),e.jsx("td",{children:"An array of column names for the table."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"data"})}),e.jsx("td",{children:"[key: string]: string "}),e.jsx("td",{children:"An array of data objects to populate the table."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"itemsPerPage"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The number of items to display per page."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"showFilter"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether to show the filter input field."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"true"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"showNavigation"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether to show the pagination controls."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"true"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the table container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Table"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"table-container"}),": The main container for the table.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"table-filter"}),": The filter input field.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"table"}),": The table element.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"table th, table td"}),": Table header and data cells.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"table th:hover"}),": Hover state for table headers.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"pagination"}),": The container for pagination controls.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"pagination button"}),": Pagination buttons.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"pagination button:disabled"}),": Disabled state for pagination buttons.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"pagination span"}),": Pagination information text."]})]})}function N(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{N as default};
