import{j as t}from"./jsx-runtime-CGpYA4L6.js";import{a as c}from"./Navbar-4_7D3pOY.js";import"./index-CleY8y_P.js";const m={title:"Components/Page Elements/Carousel",component:c,parameters:{layout:"fullscreen"},argTypes:{items:{control:"object"},autoplay:{control:"boolean"},autoplayInterval:{control:"number"},showNavigation:{control:"boolean"},navigationType:{control:"radio",options:["dots","pictures"]},navigationPosition:{control:"radio",options:["bottom","below"]},className:{control:"text"}}},p=[t.jsx("div",{style:{padding:"2rem",backgroundColor:"#f0f0f0",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Text Item 1"}),t.jsx("div",{style:{padding:"2rem",backgroundColor:"#c0c0c0",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Text Item 2"}),t.jsx("div",{style:{padding:"2rem",backgroundColor:"#f0f0f0",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:"Text Item 3"})],u=[t.jsx("img",{src:"https://via.placeholder.com/600x400",style:{width:"100%"},alt:"Item 1"}),t.jsx("img",{src:"https://via.placeholder.com/600x400",style:{width:"100%"},alt:"Item 2"}),t.jsx("img",{src:"https://via.placeholder.com/600x400",style:{width:"100%"},alt:"Item 3"})],e={args:{items:p,autoplay:!0,autoplayInterval:3e3,showNavigation:!0,navigationType:"dots",navigationPosition:"bottom",className:""}},o={args:{items:u,autoplay:!0,autoplayInterval:3e3,showNavigation:!0,navigationType:"pictures",navigationPosition:"bottom",className:""}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    items: textItems,
    autoplay: true,
    autoplayInterval: 3000,
    showNavigation: true,
    navigationType: 'dots',
    navigationPosition: 'bottom',
    className: ''
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    items: imageItems,
    autoplay: true,
    autoplayInterval: 3000,
    showNavigation: true,
    navigationType: 'pictures',
    navigationPosition: 'bottom',
    className: ''
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const g=["TextCarousel","ImageCarousel"],x=Object.freeze(Object.defineProperty({__proto__:null,ImageCarousel:o,TextCarousel:e,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{x as C,o as I,e as T};
