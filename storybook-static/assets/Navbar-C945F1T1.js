import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as d}from"./index-DjKt9u9V.js";import{M as t,C as i}from"./index-BKeb2w6Q.js";import{N as s,D as l}from"./Navbar.stories-DYOE4ZAS.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function o(r){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:s}),`
`,e.jsx(n.h1,{id:"navbar",children:"Navbar"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Navbar"})," component is used to display the main navigation header for your application. It includes elements for branding and customizable columns for additional content."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Navbar"})," component, import it and provide the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Navbar } from '@aj-codes2020/ui-kit';

<Navbar
  logoSrc="https://via.placeholder.com/40"
  logoAlt="Logo"
  logoTitle="Title" 
  centerColumn={
    <>
      <a href="/center1">CenterLink1</a>
      <a href="/center2">CenterLink2</a>
    </>
  }
  rightColumn={ 
    <>
      <a href="/right1">RightLink1</a>
      <a href="/right2">RightLink2</a>
    </>
  }
  menuColumn={
    <>
      <a href="/menu1">MenuLink1</a>
      <a href="/menu2">MenuLink2</a>
    </>
  }
/>
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Navbar"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"logoSrc"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"URL for the logo image."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"logoAlt"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Alt text for the logo image."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"logoTitle"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Title displayed next to the logo."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"'Title'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"centerColumn"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"Elements to be displayed in the center column of the navbar."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"rightColumn"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"Elements to be displayed in the right column of the navbar."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"menuColumn"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"Elements to be displayed in the dropdown menu."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the navbar."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Navbar"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"navbar"}),": The main container for the navbar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"navbar .logo"}),": The logo container in the navbar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"navbar .logo img"}),": The logo image.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"navbar .logo h1"}),": The logo title.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"navbar .column-center"}),": The center column of the navbar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"navbar .column-right"}),": The right column of the navbar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"navbar a"}),": The links in the navbar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"navbar .hamburger-menu"}),": The hamburger menu button (visible on mobile).",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"menu"}),": The container for the dropdown menu.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"menu-header"}),": The header of the dropdown menu.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"menu-header .logo"}),": The logo container in the dropdown menu header.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"menu-header .logo img"}),": The logo image in the dropdown menu header.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"menu-header .logo h1"}),": The logo title in the dropdown menu header.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"menu-column"}),": The container for the menu column items."]})]})}function T(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{T as default};
