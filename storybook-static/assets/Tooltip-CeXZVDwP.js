import{j as t}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as i}from"./index-DjKt9u9V.js";import{M as s,C as r}from"./index-BKeb2w6Q.js";import{T as l,D as d}from"./Tooltip.stories-CtYfRou2.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function n(e){const o={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
`,t.jsx(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"Tooltip"})," component provides additional information when users hover over or focus on an element, typically with a short description or hint."]}),`
`,t.jsx(r,{of:d}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(o.p,{children:["To use the ",t.jsx(o.code,{children:"Tooltip"})," component, import it and wrap it around the element you want to have a tooltip:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import { Tooltip, Button } from '@aj-codes2020/ui-kit';

const App = () => {
  return (
    <Tooltip content="This is a tooltip" position="top">
      <Button label="Hover Over Me" onClick={() => {}} primary />
    </Tooltip>
  );
};
`})}),`
`,t.jsx(o.h2,{id:"props",children:"Props"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"Tooltip"})," component accepts the following props:"]}),`
`,t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Required"}),t.jsx("th",{children:"Default"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(o.code,{children:"content"})}),t.jsx("td",{children:"string"}),t.jsx("td",{children:"The content to display inside the tooltip."}),t.jsx("td",{children:"Yes"}),t.jsx("td",{children:"N/A"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(o.code,{children:"position"})}),t.jsx("td",{children:"'top' | 'bottom' | 'left' | 'right'"}),t.jsx("td",{children:"The position of the tooltip relative to the wrapped element."}),t.jsx("td",{children:"No"}),t.jsx("td",{children:"'top'"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(o.code,{children:"className"})}),t.jsx("td",{children:"string"}),t.jsx("td",{children:"Additional CSS classes to apply to the tooltip container."}),t.jsx("td",{children:"No"}),t.jsx("td",{children:"''"})]})]})]})}),`
`,t.jsx(o.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,t.jsxs(o.p,{children:["You can customize the ",t.jsx(o.code,{children:"Tooltip"})," component using CSS. The following class names are available for customization:"]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"tooltip-container"}),": The main container for the tooltip and the element it wraps.",t.jsx(o.br,{}),`
`,t.jsx(o.code,{children:"tooltip-box"}),": The tooltip box that contains the content.",t.jsx(o.br,{}),`
`,t.jsx(o.code,{children:"tooltip-top"}),": Tooltip box when positioned at the top.",t.jsx(o.br,{}),`
`,t.jsx(o.code,{children:"tooltip-bottom"}),": Tooltip box when positioned at the bottom.",t.jsx(o.br,{}),`
`,t.jsx(o.code,{children:"tooltip-left"}),": Tooltip box when positioned at the left.",t.jsx(o.br,{}),`
`,t.jsx(o.code,{children:"tooltip-right"}),": Tooltip box when positioned at the right."]})]})}function v(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}export{v as default};
