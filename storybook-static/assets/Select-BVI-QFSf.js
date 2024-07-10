import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as o}from"./index-DjKt9u9V.js";import{M as l,C as c}from"./index-BKeb2w6Q.js";import{S as r,a as d}from"./Select.stories-B2wb2GCr.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function t(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component allows users to choose from a list of options, with support for single or multiple selections."]}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Select"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Select } from '@aj-codes2020/ui-kit';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const App = () => {
  const handleSelectChange = (selected) => {
    console.log(\`Selected value(s): \${selected}\`);
  };

  return (
    <Select
      options={options}
      isMulti={false}
      placeholder="Select a fruit..."
      onChange={handleSelectChange}
    />
  );
};
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"options"})}),e.jsx("td",{children:"Option[]"}),e.jsx("td",{children:"An array of options to select from."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"isMulti"})}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["If ",e.jsx(n.code,{children:"true"}),", allows multiple selections."]}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"placeholder"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Placeholder text to display when no option is selected."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"'Select...'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"onChange"})}),e.jsx("td",{children:"(selected: string | string[]) => void"}),e.jsx("td",{children:"Callback function to handle the selection change."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the select component."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Select"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"select-container"}),": The main container for the select component.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"select-control"}),": The control area of the select component, showing the selected value(s) and the dropdown arrow.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"select-control .placeholder"}),": The placeholder text when no value is selected.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"select-control .arrow"}),": The arrow icon indicating the dropdown state.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"select-menu"}),": The dropdown menu containing the list of options.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"select-option"}),": Each individual option in the dropdown menu.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"select-option:hover"}),": The option when hovered over.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"select-option.selected"}),": The option when selected."]})]})}function v(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};
