import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as s}from"./index-DjKt9u9V.js";import{M as r,C as t}from"./index-BKeb2w6Q.js";import{S as l,D as o}from"./Sidebar.stories-Dtp2klnL.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function d(i){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"sidebar",children:"Sidebar"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Sidebar"})," component provides a layout with a sidebar and a header. The sidebar contains navigation links, and the header includes a hamburger menu to toggle the sidebar visibility on mobile devices. The sidebar also includes a title section above the links."]}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Sidebar"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Sidebar } from '@aj-codes2020/ui-kit';

const sidebarLinks = (
  <>
    <li><a href="#">Home</a></li>
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>
    <li><a href="#">Link4</a></li>
  </>
);

<Sidebar
  logoSrc="https://via.placeholder.com/40"
  logoAlt="Logo"
  sidebarTitle="Title"
  sidebarLinks={sidebarLinks}
  headerContent={<div>Header Content</div>}
  className=""
  collapseWidth={768}
>
  <div>
    <h2>Main Content</h2>
    <p>This is the main content area.</p>
  </div>
</Sidebar>;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Sidebar"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"logoSrc"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"URL for the logo image."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"logoAlt"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Alt text for the logo image."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"sidebarTitle"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Title displayed at the top of the sidebar."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"sidebarLinks"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"Links to be displayed in the sidebar."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"headerContent"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"Content to be displayed in the header."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the sidebar layout."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"children"})}),e.jsx("td",{children:"ReactNode"}),e.jsx("td",{children:"Main content to be displayed within the sidebar layout."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"collapseWidth"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"Pixel width at which the sidebar collapses."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"768"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Sidebar"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sidebar-layout"}),": The main container for the sidebar layout.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar"}),": The sidebar itself. Use this class to style the sidebar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar.closed"}),": Applied when the sidebar is closed.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar-logo"}),": The logo container in the sidebar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar-title"}),": The title section of the sidebar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar-title .close-menu"}),": The close menu button in the sidebar title section.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar-nav ul"}),": The unordered list containing the sidebar links.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar-nav li"}),": The list"]}),`
`,e.jsxs(n.p,{children:["items containing the individual links.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar-nav a"}),": The anchor tags for the sidebar links.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"sidebar-nav li:hover, sidebar-nav li.active"}),": Styles applied to the sidebar links when hovered or active.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"main-content"}),": The main content container that adjusts when the sidebar is open or closed.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"main-content.full-width"}),": Applied to the main content container when the sidebar is closed.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"header"}),": The header section of the layout.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"header.full-width"}),": Applied to the header when the sidebar is closed.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"hamburger-menu"}),": The hamburger menu button for toggling the sidebar.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"header-content"}),": The container for additional header content.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"body-container"}),": The container for the main body content."]})]})}function y(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{y as default};
