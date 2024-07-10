import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as d}from"./index-DjKt9u9V.js";import{M as s,C as r}from"./index-BKeb2w6Q.js";import{M as i,D as l}from"./Modal.stories-BBSFkuni.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function t(o){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Modal"})," component provides a way to create modal dialogs for user interactions such as forms, notifications, or confirmations."]}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Modal"})," component, import it and use it directly in your component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Modal } from '@aj-codes2020/ui-kit';

const App = () => {
  return (
    <Modal
      title="Modal Title"
      trigger={<button>Open Modal</button>}
    >
      <p>This is the content of the modal.</p>
    </Modal>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Modal"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"title"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The title of the modal."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"children"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"The content to display inside the modal."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"trigger"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"The element that triggers the modal when clicked."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the modal."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Modal"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"modal-overlay"}),": The overlay behind the modal.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"modal-overlay.open"}),": The class to apply when the modal is open.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"modal"}),": The main container for the modal content.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"modal-header"}),": The header of the modal, containing the title.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"modal-body"}),": The body of the modal, containing the main content.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"modal-close"}),": The button to close the modal."]})]})}function T(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{T as default};
