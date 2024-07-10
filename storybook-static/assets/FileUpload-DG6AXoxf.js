import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as i}from"./index-DjKt9u9V.js";import{M as t,C as o}from"./index-BKeb2w6Q.js";import{F as d,D as r}from"./FileUpload.stories-BG4cjY3n.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function s(l){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(n.h1,{id:"file-upload",children:"File Upload"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FileUpload"})," component allows you to upload files, with support for multiple files and custom class names."]}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"FileUpload"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { FileUpload } from '@aj-codes2020/ui-kit';

const handleFileSelect = (file: File | null) => {
  console.log(file);
};

<FileUpload onFileSelect={handleFileSelect} />;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FileUpload"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"onFileSelect"})}),e.jsx("td",{children:"(file: File | null) => void"}),e.jsx("td",{children:"Callback function to handle file selection."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"accept"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The types of files that the server accepts (that can be submitted through the file upload)."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"multiple"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Allows the user to select more than one file."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the file upload container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"FileUpload"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"file-upload"}),": The main container for the file upload component.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"file-input"}),": The input element for file selection.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"file-info"}),": The container for displaying selected file information.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"file-info p"}),": The paragraph displaying the file names.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"file-info button"}),": The button to remove selected files."]})]})}function T(l={}){const{wrapper:n}={...i(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}export{T as default};
