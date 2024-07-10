import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as r}from"./index-DjKt9u9V.js";import{M as c,C as s}from"./index-BKeb2w6Q.js";import{D as i,a as l,b as o}from"./DatePicker.stories-BZO-mEYG.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function d(n){const t={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
`,e.jsx(t.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DatePicker"})," component allows users to select a date, with optional time selection and customizable date format."]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["To use the ",e.jsx(t.code,{children:"DatePicker"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { DatePicker } from '@aj-codes2020/ui-kit';

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={setSelectedDate}
      showTimeSelect={false}
      dateFormat="MM/dd/yyyy"
      className=""
    />
  );
};
`})}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"DatePicker"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"selected"})}),e.jsx("td",{children:"Date | null"}),e.jsx("td",{children:"The currently selected date."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"onChange"})}),e.jsx("td",{children:"(date: Date | null) => void"}),e.jsx("td",{children:"Callback function to handle date changes."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"showTimeSelect"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Option to show time selection."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"dateFormat"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"The format of the date to display."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"'MM/dd/yyyy'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the date picker container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(t.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(t.p,{children:["You can customize the ",e.jsx(t.code,{children:"DatePicker"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"date-picker-container"}),": The main container for the date picker.",e.jsx(t.br,{}),`
`,e.jsx(t.code,{children:"date-picker-input"}),": The input field for the date picker."]})]})}function w(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(d,{...n})}):d(n)}export{w as default};
