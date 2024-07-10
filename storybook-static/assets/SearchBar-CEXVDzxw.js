import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as t}from"./index-DjKt9u9V.js";import{M as i,C as c}from"./index-BKeb2w6Q.js";import{S as o,D as h}from"./SearchBar.stories-BUeCPuM4.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function n(r){const s={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(s.h1,{id:"search-bar",children:"Search Bar"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"SearchBar"})," component allows users to search and filter through a list of suggestions, providing an autocomplete functionality."]}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(s.p,{children:["To use the ",e.jsx(s.code,{children:"SearchBar"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { SearchBar } from '@aj-codes2020/ui-kit';

const App = () => {
  const handleSearch = (query: string) => {
    console.log(\`Search query: \${query}\`);
  };

  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

  return <SearchBar suggestions={suggestions} onSearch={handleSearch} placeholder="Search for a fruit..." />;
};
`})}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"SearchBar"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:"suggestions"})}),e.jsx("td",{children:"string[]"}),e.jsx("td",{children:"An array of suggestions to display."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:"onSearch"})}),e.jsx("td",{children:"(query: string) => void"}),e.jsx("td",{children:"Callback function to handle the search action."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:"placeholder"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Placeholder text for the search input."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"'Search...'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the search bar container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(s.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(s.p,{children:["You can customize the ",e.jsx(s.code,{children:"SearchBar"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"search-bar"}),": The main container for the search bar.",e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"search-input"}),": The input field for the search bar.",e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"suggestions-list"}),": The container for the list of suggestions.",e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"suggestion"}),": Each individual suggestion item.",e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"suggestion.active"}),": The active suggestion item.",e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"suggestion:hover"}),": The suggestion item when hovered over."]})]})}function v(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{v as default};
