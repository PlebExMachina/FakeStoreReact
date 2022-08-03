"use strict";(self.webpackChunkfake_store_react=self.webpackChunkfake_store_react||[]).push([[921],{7660:function(e,t,n){n.d(t,{Z:function(){return h}});var c=n(1413),r=n(6871),a=n(9140),o="CardWrapper_module__z3uWm",s="CardWrapper_body__11L9G",i="CardWrapper_alt__w4Yjm",l=n(184);var d=function(e){var t=e.children,n=e.image,c=e.onDoubleClick,r=e.config||!1;return c=c||function(){},(0,l.jsxs)(a.Z,{className:"".concat(o," ").concat(s," text-center col-xs-4 d-flex justify-content-between m-1 p-1 bg-dark p-5 ").concat(r?i:""),onDoubleClick:c,children:[(0,l.jsx)(a.Z.Img,{variant:"top",src:n,className:"border"}),(0,l.jsx)(a.Z.Body,{className:"d-flex flex-column justify-content-end text-light",children:t})]})},u="ProductBody_module__a40Wa",x="ProductBody_body__aAjDe";var m=function(e){var t=e.title,n=e.price,c=e.description;return(0,l.jsxs)("div",{className:"".concat(u," ").concat(x),children:[t&&(0,l.jsx)(a.Z.Title,{children:t}),n&&(0,l.jsxs)(a.Z.Text,{children:["$",n.toFixed(2)]}),c&&(0,l.jsx)(a.Z.Text,{children:c})]})},p={product:"ProductCard_product__-DuIO",card:"ProductCard_card__xDifG"};var h=function(e){var t=(0,r.s0)(),n=e.onDoubleClick||function(){t("./products/".concat(e.id))};return(0,l.jsxs)(d,{image:e.image,onDoubleClick:n,config:e.config,className:"".concat(p.module," ").concat(p.body),children:[(0,l.jsx)(m,(0,c.Z)({},e)),e.children]})}},4501:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var c=n(1413),r=n(6441),a=n(6859),o=n(2791),s=n(7660),i=n(3360),l="CartItemInterface_module__fFBHN",d="CartItemInterface_body__tmOPe",u="CartItemInterface_button__3OBwd",x=n(184);var m=function(e){var t=(0,o.useContext)(r.Z.CTX).dispatch;return(0,x.jsxs)("div",{className:"d-flex justify-content-between ".concat(l," ").concat(d),children:[(0,x.jsx)(i.Z,{variant:"primary",className:"".concat(l," ").concat(u),onClick:function(){t({type:"clear",payload:e})},children:"Remove From Cart"}),(0,x.jsxs)("div",{className:"d-flex",children:[(0,x.jsx)(i.Z,{variant:"warning",className:"".concat(l," ").concat(u),onClick:function(){t({type:"remove",payload:e})},children:"-"}),(0,x.jsxs)("p",{className:"m-3",children:["Quantity: ",e.quantity]}),(0,x.jsx)(i.Z,{variant:"warning",className:"".concat(l," ").concat(u),onClick:function(){t({type:"add",payload:(0,c.Z)((0,c.Z)({},e),{},{quantity:1})})},children:"+"})]})]})},p="Cart_products__ov3Dq",h="Cart_horizontalScrollable__RUCHj";var _=function(){var e=(0,o.useContext)(r.Z.CTX).cart,t=(0,o.useRef)(),n=(0,a.O)(t).events;return(0,x.jsx)("div",{className:"container ".concat(h," ").concat(p),children:(0,x.jsx)("div",(0,c.Z)((0,c.Z)({className:"row text-center"},n),{},{ref:t,children:e.items.length?e.items&&e.items.map((function(e){return(0,x.jsx)(s.Z,(0,c.Z)((0,c.Z)({},e),{},{description:null,onDoubleClick:function(){},children:(0,x.jsx)(m,(0,c.Z)({},e))}),e.id)})):(0,x.jsx)("p",{children:"No Items In Cart"})}))})}},921:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var c=n(6441),r=n(2791),a=n(6871),o=n(3360),s=n(3027),i=n(4501),l="CreditCardInfo_module__upuI+",d="CreditCardInfo_body__f5vfk",u=n(184);var x=function(){return(0,u.jsxs)("div",{className:"".concat(l," ").concat(d," mb-3"),children:[(0,u.jsxs)(s.Z.Group,{className:"mb-3 text-light",children:[(0,u.jsx)(s.Z.Label,{children:"Billing Address"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"..."})]}),(0,u.jsxs)(s.Z.Group,{className:"text-light",children:[(0,u.jsx)(s.Z.Label,{children:"Credit Card Info"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"First Name"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"Last Name"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"Credit Card Number"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"CCV"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"Expiration Date"})]})]})},m="ShippingInfo_module__4-tUW",p="ShippingInfo_body__HA63C";var h=function(){return(0,u.jsxs)("div",{className:"".concat(m," ").concat(p," mb-3 text-light"),children:[(0,u.jsxs)(s.Z.Group,{className:"mb-3",children:[(0,u.jsx)(s.Z.Label,{children:"Name"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"Enter your name..."})]}),(0,u.jsxs)(s.Z.Group,{className:"mb-3",children:[(0,u.jsx)(s.Z.Label,{children:"Shipping Address"}),(0,u.jsx)(s.Z.Control,{type:"text",placeholder:"..."})]})]})},_="Checkout_module__1YTL6",f="Checkout_body__WlvEU";var j=function(){var e=(0,r.useContext)(c.Z.CTX),t=e.cart,n=e.dispatch,l=t.items.reduce((function(e,t){return e+t.quantity*t.price}),0),d=(0,a.s0)();return(0,u.jsxs)("div",{className:"".concat(_," ").concat(f),children:[(0,u.jsx)(i.default,{}),(0,u.jsxs)("h1",{className:"text-center text-light",children:["Total Cost : $",l.toFixed(2)]}),(0,u.jsxs)(s.Z,{onSubmit:function(){n({type:"empty"}),d("/")},children:[(0,u.jsx)(h,{}),(0,u.jsx)(x,{}),(0,u.jsx)(o.Z,{variant:"primary",type:"submit",value:"submit",children:"Submit"})]})]})}}}]);
//# sourceMappingURL=921.64e29f7c.chunk.js.map