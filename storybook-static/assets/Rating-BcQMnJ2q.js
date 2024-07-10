import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as s}from"./index-DjKt9u9V.js";import{M as i,C as d}from"./index-BKeb2w6Q.js";import{R as c,D as o}from"./Rating.stories-r3PUHkjo.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function r(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(n.h1,{id:"rating",children:"Rating"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Rating"})," component allows users to rate items such as products or services. Users can select a number of stars to represent their rating."]}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Rating"})," component, import it and provide the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Rating } from '@aj-codes2020/ui-kit';

const App = () => {
  const [rating, setRating] = useState(3);

  return <Rating maxRating={5} value={rating} onChange={setRating} />;
};
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Rating"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxRating"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The maximum number of stars for the rating."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The current rating value."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onChange"})}),e.jsx("td",{children:"(rating: number) => void"}),e.jsx("td",{children:"Callback function when the rating value changes."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the rating container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"readOnly"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"If true, the rating component is read-only."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"false"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Rating"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"rating"}),": The main container for the rating component.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"star"}),": The individual star element.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"star.filled"}),": The filled state of the star element.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"star:hover"}),": The hover state of the star element."]})]})}function C(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{C as default};
