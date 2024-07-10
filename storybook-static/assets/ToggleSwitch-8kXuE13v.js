import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as o}from"./index-DjKt9u9V.js";import{M as i,C as c}from"./index-BKeb2w6Q.js";import{T as l,D as h}from"./ToggleSwitch.stories-6h9rPCvm.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function s(n){const t={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(t.h1,{id:"toggle-switch",children:"Toggle Switch"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"ToggleSwitch"}),' component allows you to create a switch that toggles between an "on" and "off" state, useful for settings and preferences.']}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["To use the ",e.jsx(t.code,{children:"ToggleSwitch"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ToggleSwitch } from '@aj-codes2020/ui-kit';

const App = () => {
  const handleToggle = (isOn: boolean) => {
    console.log(\`Toggle Switch is now \${isOn ? 'On' : 'Off'}\`);
  };

  return (
    <ToggleSwitch initialState={false} onToggle={handleToggle} className="" />
  );
};
`})}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"ToggleSwitch"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"initialState"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"The initial state of the toggle switch."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"onToggle"})}),e.jsx("td",{children:"(isOn: boolean) => void"}),e.jsx("td",{children:"Callback function to handle the toggle state change."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the toggle switch component."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(t.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsx(t.p,{children:"You can customize the Toggle Switch component using CSS. The following class names are available for customization:"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"toggle-switch"}),": The main container for the toggle switch.",e.jsx(t.br,{}),`
`,e.jsx(t.code,{children:"toggle-switch.on"}),': The container when the toggle switch is in the "on" state.',e.jsx(t.br,{}),`
`,e.jsx(t.code,{children:"toggle-switch.off"}),': The container when the toggle switch is in the "off" state.',e.jsx(t.br,{}),`
`,e.jsx(t.code,{children:"toggle-thumb"}),": The thumb element inside the toggle switch."]})]})}function b(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{b as default};
