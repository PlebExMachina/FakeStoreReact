"use strict";(self.webpackChunkfake_store_react=self.webpackChunkfake_store_react||[]).push([[501],{7660:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(1413),c=t(6871),o=t(3360),a=t(9140),i="CardWrapper_module__z3uWm",s="CardWrapper_body__11L9G",l="CardWrapper_alt__w4Yjm",u=t(184);var d=function(e){var r=e.children,t=e.image,n=e.onDoubleClick,c=e.config||!1;return n=n||function(){},(0,u.jsxs)(a.Z,{className:"".concat(i," ").concat(s," text-center col-xs-4 d-flex justify-content-between m-1 p-1 bg-dark p-5 ").concat(c?l:""),onDoubleClick:n,children:[(0,u.jsx)(a.Z.Img,{variant:"top",src:t,className:"border"}),(0,u.jsx)(a.Z.Body,{className:"d-flex flex-column justify-content-end text-light",children:r})]})},f="ProductBody_module__a40Wa",m="ProductBody_body__aAjDe";var v=function(e){var r=e.title,t=e.price,n=e.description;return(0,u.jsxs)("div",{className:"".concat(f," ").concat(m),children:[r&&(0,u.jsx)(a.Z.Title,{children:r}),t&&(0,u.jsxs)(a.Z.Text,{children:["$",t.toFixed(2)]}),n&&(0,u.jsx)(a.Z.Text,{children:n})]})},p={product:"ProductCard_product__-DuIO",card:"ProductCard_card__xDifG"};var h=function(e){var r=(0,c.s0)(),t=function(){r("./products/".concat(e.id))},a=e.onDoubleClick||t;return(0,u.jsxs)(d,{image:e.image,onDoubleClick:a,config:e.config,className:"".concat(p.module," ").concat(p.body),children:[(0,u.jsx)(v,(0,n.Z)({},e)),e.children,e.clickButton&&(0,u.jsx)(o.Z,{onClick:t,children:"Details"})]})}},4501:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(1413),c=t(6441),o=t(6859),a=t(2791),i=t(7660),s=t(3360),l="CartItemInterface_module__fFBHN",u="CartItemInterface_body__tmOPe",d="CartItemInterface_button__3OBwd",f=t(184);var m=function(e){var r=(0,a.useContext)(c.Z.CTX).dispatch;return(0,f.jsxs)("div",{className:"d-flex justify-content-between ".concat(l," ").concat(u),children:[(0,f.jsx)(s.Z,{variant:"primary",className:"".concat(l," ").concat(d),onClick:function(){r({type:"clear",payload:e})},children:"Remove From Cart"}),(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)(s.Z,{variant:"warning",className:"".concat(l," ").concat(d),onClick:function(){r({type:"remove",payload:e})},children:"-"}),(0,f.jsxs)("p",{className:"m-3",children:["Quantity: ",e.quantity]}),(0,f.jsx)(s.Z,{variant:"warning",className:"".concat(l," ").concat(d),onClick:function(){r({type:"add",payload:(0,n.Z)((0,n.Z)({},e),{},{quantity:1})})},children:"+"})]})]})},v="Cart_products__ov3Dq",p="Cart_horizontalScrollable__RUCHj",h="Cart_force__U6PQ8",g="Cart_scroll__M9g3k";var x=function(){var e=(0,a.useContext)(c.Z.CTX).cart,r=(0,a.useRef)(),t=(0,o.O)(r).events;return(0,f.jsx)("div",{className:"container ".concat(p," ").concat(v),children:(0,f.jsx)("div",(0,n.Z)((0,n.Z)({className:"row text-center ".concat(h," ").concat(g)},t),{},{ref:r,children:e.items.length?e.items&&e.items.map((function(e){return(0,f.jsx)(i.Z,(0,n.Z)((0,n.Z)({},e),{},{description:null,onDoubleClick:function(){},children:(0,f.jsx)(m,(0,n.Z)({},e))}),e.id)})):(0,f.jsx)("p",{children:"No Items In Cart"})}))})}},9140:function(e,r,t){t.d(r,{Z:function(){return D}});var n=t(1413),c=t(5987),o=t(1694),a=t.n(o),i=t(2791),s=t(162),l=t(6543),u=t(7472),d=t(184),f=["bsPrefix","className","variant","as"],m=i.forwardRef((function(e,r){var t=e.bsPrefix,o=e.className,i=e.variant,l=e.as,u=void 0===l?"img":l,m=(0,c.Z)(e,f),v=(0,s.vE)(t,"card-img");return(0,d.jsx)(u,(0,n.Z)({ref:r,className:a()(i?"".concat(v,"-").concat(i):v,o)},m))}));m.displayName="CardImg";var v=m,p=t(6040),h=["bsPrefix","className","as"],g=i.forwardRef((function(e,r){var t=e.bsPrefix,o=e.className,l=e.as,u=void 0===l?"div":l,f=(0,c.Z)(e,h),m=(0,s.vE)(t,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,d.jsx)(p.Z.Provider,{value:v,children:(0,d.jsx)(u,(0,n.Z)((0,n.Z)({ref:r},f),{},{className:a()(o,m)}))})}));g.displayName="CardHeader";var x=g,y=["bsPrefix","className","bg","text","border","body","children","as"],b=(0,u.Z)("h5"),w=(0,u.Z)("h6"),_=(0,l.Z)("card-body"),C=(0,l.Z)("card-title",{Component:b}),M=(0,l.Z)("card-subtitle",{Component:w}),Z=(0,l.Z)("card-link",{Component:"a"}),N=(0,l.Z)("card-text",{Component:"p"}),j=(0,l.Z)("card-footer"),X=(0,l.Z)("card-img-overlay"),Y=i.forwardRef((function(e,r){var t=e.bsPrefix,o=e.className,i=e.bg,l=e.text,u=e.border,f=e.body,m=e.children,v=e.as,p=void 0===v?"div":v,h=(0,c.Z)(e,y),g=(0,s.vE)(t,"card");return(0,d.jsx)(p,(0,n.Z)((0,n.Z)({ref:r},h),{},{className:a()(o,g,i&&"bg-".concat(i),l&&"text-".concat(l),u&&"border-".concat(u)),children:f?(0,d.jsx)(_,{children:m}):m}))}));Y.displayName="Card",Y.defaultProps={body:!1};var D=Object.assign(Y,{Img:v,Title:C,Subtitle:M,Body:_,Link:Z,Text:N,Header:x,Footer:j,ImgOverlay:X})},6859:function(e,r,t){t.d(r,{O:function(){return o}});var n=t(2791),c="undefined"!==typeof window?n.useLayoutEffect:n.useEffect;function o(e,r){var t,o,a,i,s=void 0===r?{}:r,l=s.decayRate,u=void 0===l?.95:l,d=s.safeDisplacement,f=void 0===d?10:d,m=s.applyRubberBandEffect,v=void 0!==m&&m,p=s.activeMouseButton,h=void 0===p?"Left":p,g=(0,n.useRef)({isMouseDown:!1,isDraggingX:!1,isDraggingY:!1,initialMouseX:0,initialMouseY:0,lastMouseX:0,lastMouseY:0,scrollSpeedX:0,scrollSpeedY:0,lastScrollX:0,lastScrollY:0}),x=!1,y=!1,b=0,w=0,_=1/60*1e3;c((function(){x="scroll"===window.getComputedStyle(e.current).overflowX,y="scroll"===window.getComputedStyle(e.current).overflowY,b=e.current.scrollWidth-e.current.clientWidth,w=e.current.scrollHeight-e.current.clientHeight,t=window.getComputedStyle(e.current).cursor,o=[],a=[],i=[],e.current.childNodes.forEach((function(e){o.push(window.getComputedStyle(e).cursor),a.push("none"===window.getComputedStyle(e).transform?"":window.getComputedStyle(e).transform),i.push("none"===window.getComputedStyle(e).transition?"":window.getComputedStyle(e).transition)}))}),[]);var C,M,Z,N=function(){var r=g.current.scrollSpeedX*_,t=g.current.scrollSpeedY*_,n=e.current.scrollLeft+r,c=e.current.scrollTop+t;e.current.scrollLeft=n,e.current.scrollTop=c,g.current.lastScrollX=n,g.current.lastScrollY=c},j=function(){e.current.childNodes.forEach((function(e,r){e.style.transform=a[r],e.style.transition=i[r]}))},X=function(e){e.preventDefault(),e.stopImmediatePropagation()},Y=function(r){var n=g.current.isDraggingX||g.current.isDraggingY,c=g.current.initialMouseX-r.clientX,a=g.current.initialMouseY-r.clientY,i=Math.abs(c)>f||Math.abs(a)>f,s=n&&i;s?e.current.childNodes.forEach((function(e){e.addEventListener("click",X)})):e.current.childNodes.forEach((function(e){e.removeEventListener("click",X)})),g.current.isMouseDown=!1,g.current.lastMouseX=0,g.current.lastMouseY=0,e.current.style.cursor=t,e.current.childNodes.forEach((function(e,r){e.style.cursor=o[r]})),s&&(M=setInterval((function(){var r=g.current.scrollSpeedX*u;g.current.scrollSpeedX=r;var t=e.current.scrollLeft<=0,n=e.current.scrollLeft>=b,c=t||n;N(),(Math.abs(r)<.05||g.current.isMouseDown||c)&&(g.current.scrollSpeedX=0,clearInterval(M))}),_),Z=setInterval((function(){var r=g.current.scrollSpeedY*u;g.current.scrollSpeedY=r;var t=e.current.scrollTop<=0,n=e.current.scrollTop>=w,c=t||n;N(),(Math.abs(r)<.05||g.current.isMouseDown||c)&&(g.current.scrollSpeedY=0,clearInterval(Z))}),_),g.current.isDraggingX=!1,g.current.isDraggingY=!1,v&&(e.current.childNodes.forEach((function(e){e.style.transform="translate3d(0px, 0px, 0px)",e.style.transition="transform 250ms"})),C=setTimeout(j,250)))},D=function(r){if(g.current.isMouseDown){r.preventDefault();var t=g.current.lastMouseX-r.clientX;g.current.lastMouseX=r.clientX,g.current.scrollSpeedX=t/_,g.current.isDraggingX=!0;var n=g.current.lastMouseY-r.clientY;g.current.lastMouseY=r.clientY,g.current.scrollSpeedY=n/_,g.current.isDraggingY=!0,e.current.style.cursor="grabbing",e.current.childNodes.forEach((function(e){e.style.cursor="grabbing"}));var c=e.current.scrollLeft<=0&&x,o=e.current.scrollLeft>=b&&x,a=e.current.scrollTop<=0&&y,i=e.current.scrollTop>=w&&y;(c||o||a||i)&&v&&function(r){var t=r.clientX-g.current.initialMouseX,n=r.clientY-g.current.initialMouseY,c=e.current,o=c.clientWidth,a=c.clientHeight,i=0,s=0;x&&y?(i=.3*o*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/o),s=.3*a*Math.sign(n)*Math.log10(1+.5*Math.abs(n)/a)):x?i=.3*o*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/o):y&&(s=.3*a*Math.sign(n)*Math.log10(1+.5*Math.abs(n)/a)),e.current.childNodes.forEach((function(e){e.style.transform="translate3d("+i+"px, "+s+"px, 0px)",e.style.transition="transform 0ms"}))}(r),N()}},S=function(){b=e.current.scrollWidth-e.current.clientWidth,w=e.current.scrollHeight-e.current.clientHeight};return(0,n.useEffect)((function(){return window.addEventListener("mouseup",Y),window.addEventListener("mousemove",D),window.addEventListener("resize",S),function(){window.removeEventListener("mouseup",Y),window.removeEventListener("mousemove",D),window.removeEventListener("resize",S),clearInterval(M),clearInterval(Z),clearTimeout(C)}}),[]),{events:{onMouseDown:function(e){var r;r=e.buttons,("Left"===h&&1===r||"Middle"===h&&4===r||"Right"===h&&2===r)&&(g.current.isMouseDown=!0,g.current.lastMouseX=e.clientX,g.current.lastMouseY=e.clientY,g.current.initialMouseX=e.clientX,g.current.initialMouseY=e.clientY)}}}}}}]);
//# sourceMappingURL=501.afbb1c1d.chunk.js.map