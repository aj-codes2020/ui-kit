import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as s}from"./index-DjKt9u9V.js";import{M as n,C as c}from"./index-BKeb2w6Q.js";import{G as t,D as o}from"./Grid.stories-BiGopDJ9.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function d(i){const r={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:t}),`
`,e.jsx(r.h1,{id:"grid",children:"Grid"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Grid"})," component allows you to create a flexible grid layout with customizable gap between items. It is useful for displaying content in a structured and responsive manner."]}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(r.p,{children:["To use the ",e.jsx(r.code,{children:"Grid"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Grid } from '@aj-codes2020/ui-kit';

const gridChildren = (
  <div className="grid-container">
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#f0f0f0', height: '50px'}}>Item 1</div>
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#c0c0c0', height: '50px' }}>Item 2</div>
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#f0f0f0', height: '50px'}}>Item 3</div>
     <div className="grid-d-6 grid-t-3 grid-m-12" style={{ backgroundColor: '#c0c0c0', height: '50px'}}>Item 4</div>
   </div>
);

<Grid className="">
  {gridChildren}
</Grid>
`})}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Grid"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the grid container. Use this prop to further customize the grid's appearance."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r.code,{children:"children"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"The grid items to be displayed within the grid container."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]})]})]})}),`
`,e.jsx(r.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(r.p,{children:["You can customize the ",e.jsx(r.code,{children:"Grid"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"grid-container"}),": The main container for the grid.",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-1"})," to ",e.jsx(r.code,{children:"grid-12"}),": The class names for column widths."]}),`
`,e.jsx(r.h3,{id:"breakpoints",children:"Breakpoints:"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"grid-m-*"}),": (min-width: 320px)",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-t-*"}),": (min-width: 480px)",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-d-*"}),": (min-width: 768px)"]}),`
`,e.jsx(r.h3,{id:"class-selectors-and-their-widths",children:"Class Selectors and Their Widths"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"grid-*-1"}),`: 8.33%\\
`,e.jsx(r.code,{children:"grid-*-2"}),": 16.66%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-3"}),": 25%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-4"}),": 33.33%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-5"}),": 41.66%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-6"}),": 50%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-7"}),": 58.33%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-8"}),": 66.66%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-9"}),": 75%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-10"}),": 83.33%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-11"}),": 91.66%",e.jsx(r.br,{}),`
`,e.jsx(r.code,{children:"grid-*-12"}),": 100%"]})]})}function C(i={}){const{wrapper:r}={...s(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(d,{...i})}):d(i)}export{C as default};
