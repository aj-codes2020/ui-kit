import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{useMDXComponents as i}from"./index-DjKt9u9V.js";import{M as r,C as o}from"./index-BKeb2w6Q.js";import{C as c,T as d,I as l}from"./Carousel.stories-B8-a0lP2.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DLb5av70.js";import"../sb-preview/runtime.js";import"./index-C2jgcCTd.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";import"./Navbar-4_7D3pOY.js";function s(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(n.h1,{id:"carousel",children:"Carousel"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Carousel"})," component allows you to create a slideshow of items that can autoplay and includes navigation options, providing a versatile way to display multiple pieces of content in a compact space."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Carousel"})," component, import it and pass the necessary props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Carousel } from '@aj-codes2020/ui-kit';

const textItems = [
  <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Text Item 1</div>,
  <div style={{ padding: '2rem', backgroundColor: '#c0c0c0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Text Item 2</div>,
  <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Text Item 3</div>,
];

<Carousel
  items={textItems}
  autoplay={true}
  autoplayInterval={3000}
  showNavigation={true}
  navigationType="dots"
  navigationPosition="bottom"
  className=""
/>
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Carousel"})," component accepts the following props:"]}),`
`,e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Default"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"items"})}),e.jsx("td",{children:"ReactNode[]"}),e.jsx("td",{children:"The array of items to display in the carousel."}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"N/A"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"autoplay"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether the carousel should autoplay."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"false"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"autoplayInterval"})}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"The interval in milliseconds for autoplay."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"3000"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"showNavigation"})}),e.jsx("td",{children:"boolean"}),e.jsx("td",{children:"Whether to show navigation controls."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"true"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"navigationType"})}),e.jsx("td",{children:"'dots' | 'pictures'"}),e.jsx("td",{children:"The type of navigation controls."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"'dots'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"navigationPosition"})}),e.jsx("td",{children:"'bottom' | 'below'"}),e.jsx("td",{children:"The position of the navigation controls."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"'below'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:"className"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Additional CSS classes to apply to the carousel container."}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"''"})]})]})]})}),`
`,e.jsx(n.h2,{id:"class-selectors",children:"Class Selectors"}),`
`,e.jsxs(n.p,{children:["You can customize the ",e.jsx(n.code,{children:"Carousel"})," component using CSS. The following class names are available for customization:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"carousel"}),": The main container for the carousel.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"carousel-content"}),": The container that holds all the carousel items.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"carousel-item"}),": The container for each carousel item.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"carousel-item.active"}),": The container for the active carousel item.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"carousel-navigation"}),": The container for the navigation controls.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"carousel-navigation.bottom"}),": The container for the navigation controls when positioned at the bottom.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"carousel-dots"}),": The container for the dot navigation controls.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"dot"}),": The individual dot navigation control.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"dot.active"}),": The active dot navigation control.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"carousel-pictures"}),": The container for the picture navigation controls.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"picture-thumbnail"}),": The individual picture navigation control.",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"picture-thumbnail.active"}),": The active picture navigation control."]})]})}function C(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{C as default};
