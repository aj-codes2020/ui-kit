import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as d}from"./index-DjKt9u9V.js";import{M as i,C as l}from"./index-BKeb2w6Q.js";import{S as t,D as c}from"./Slider.stories-B25CHHR2.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function r(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:t}),`
`,e.jsx(n.h1,{id:"slider",children:"Slider"}),`
`,e.jsx(n.p,{children:"The Slider component allows users to select a value from a range by sliding a handle along a track."}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Slider"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Slider } from '@aj-codes2020/ui-kit';

const App = () => {
  const [value, setValue] = useState(50);

  return (
    <Slider
      min={0}
      max={100}
      step={1}
      value={value}
      onChange={setValue}
    />
  );
};
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Slider"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"min"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The minimum value of the slider."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"max"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The maximum value of the slider."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"step"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The step value for the slider."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"value"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The current value of the slider."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"onChange"})}),e.jsx("td",{children:"(value: number) => void"}),e.jsx("td",{children:"Callback function to handle the value change."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the slider component."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Slider"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"slider-container"}),": The main container for the slider component.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"slider"}),": The input element of the slider.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"slider-value"}),": The display value of the slider."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{})})]})}function T(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{T as default};
