import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as r}from"./index-DjKt9u9V.js";import{M as d,C as c}from"./index-BKeb2w6Q.js";import{T as i,D as l}from"./TextArea.stories-DOqjevq4.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function s(n){const t={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(t.h1,{id:"text-area",children:"Text Area"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TextArea"})," component is used for multiline text input, allowing users to enter large amounts of text."]}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["To use the ",e.jsx(t.code,{children:"TextArea"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { TextArea } from '@aj-codes2020/ui-kit';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      value={value}
      onChange={setValue}
      placeholder="Enter text here..."
      rows={4}
      cols={50}
    />
  );
};
`})}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TextArea"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"value"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The value of the textarea."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"onChange"})}),e.jsx("td",{children:"(value: string) => void"}),e.jsx("td",{children:"Callback function to handle value changes."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"placeholder"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Placeholder text for the textarea."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"rows"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of rows to display."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"cols"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Number of columns to display."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"50"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the textarea element."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(t.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(t.p,{children:["You can customize the ",e.jsx(t.code,{children:"TextArea"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"textarea"}),": The main container for the textarea element.",e.jsx(t.br,{}),`
`,e.jsx(t.code,{children:"textarea:focus"}),": The focused state of the textarea element."]})]})}function b(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{b as default};
