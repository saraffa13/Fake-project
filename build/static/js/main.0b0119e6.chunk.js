(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__39NeR",control:"Checkout_control__1IMOK",actions:"Checkout_actions__28_Xt",submit:"Checkout_submit__391Vo",invalid:"Checkout_invalid__17byK"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1rPSy",total:"Cart_total__332oo",actions:"Cart_actions__18UDO","button--alt":"Cart_button--alt__1RyP6",button:"Cart_button__3SvrT"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1t4xe",summary:"CartItem_summary__1AWvr",price:"CartItem_price__V8elq",amount:"CartItem_amount__6cnDq",actions:"CartItem_actions__3UlzD"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__xCOvH",icon:"HeaderCartButton_icon__3FnpI",badge:"HeaderCartButton_badge__31QAu",bump:"HeaderCartButton_bump__A6Rzv"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__V1MYC",modal:"Modal_modal__1ukxE","slide-down":"Modal_slide-down__3MvKz"}},function(e,t,n){e.exports={meal:"MealItem_meal__3wNoN",description:"MealItem_description__WxPO-",price:"MealItem_price__Y86WX"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1TF4w","meals-appear":"AvailableMeals_meals-appear__BNVff",MealsLoading:"AvailableMeals_MealsLoading__1dQul",error:"AvailableMeals_error__1YU2c"}},,function(e,t,n){e.exports={header:"Header_header__2Zfks","main-image":"Header_main-image__1L_IQ"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1CtZH"}},function(e,t,n){e.exports={card:"Card_card__aQF8G"}},function(e,t,n){e.exports={input:"Input_input__2Z12N"}},function(e,t,n){e.exports={form:"MealItemForm_form__2_TgP"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),s=(n(27),n(2)),o=n(6),l=n.n(o),u=n(12),d=n(13),j=n.n(d),m=n(0),b=function(e){return Object(m.jsx)("div",{className:j.a.backdrop,onClick:e.onClose})},O=function(e){return Object(m.jsx)("div",{className:j.a.modal,children:Object(m.jsx)("div",{className:j.a.content,children:e.children})})},x=document.getElementById("overlays"),h=function(e){return Object(m.jsxs)(c.Fragment,{children:[i.a.createPortal(Object(m.jsx)(b,{onClose:e.onClose}),x),i.a.createPortal(Object(m.jsx)(O,{children:e.children}),x)]})},f=n(7),p=n.n(f),_=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:p.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:p.a.summary,children:[Object(m.jsx)("span",{className:p.a.price,children:t}),Object(m.jsxs)("span",{className:p.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:p.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},v=n(4),C=n.n(v),N=a.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),y=n(3),g=n.n(y),A=function(e){return""===e.trim()},k=function(e){var t=Object(c.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useRef)(),o=Object(c.useRef)(),l=Object(c.useRef)(),u=Object(c.useRef)(),d="".concat(g.a.control," ").concat(a.name?"":g.a.invalid),j="".concat(g.a.control," ").concat(a.street?"":g.a.invalid),b="".concat(g.a.control," ").concat(a.postalCode?"":g.a.invalid),O="".concat(g.a.control," ").concat(a.city?"":g.a.invalid);return Object(m.jsxs)("form",{className:g.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=o.current.value,a=l.current.value,s=u.current.value,d=!A(n),j=!A(c),m=!A(s),b=5===a.trim().length;r({name:d,street:j,city:m,postalCode:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:c,city:s,postalCode:a})},children:[Object(m.jsxs)("div",{className:d,children:[Object(m.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(m.jsx)("p",{children:"Please enter a valid name!"})]}),Object(m.jsxs)("div",{className:j,children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(m.jsx)("p",{children:"Please enter a valid street!"})]}),Object(m.jsxs)("div",{className:b,children:[Object(m.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(m.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(m.jsxs)("div",{className:O,children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(m.jsx)("p",{children:"Please enter a valid city!"})]}),Object(m.jsxs)("div",{className:g.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:g.a.submit,children:"Confirm"})]})]})},I=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(!1),d=Object(s.a)(o,2),j=d[0],b=d[1],O=Object(c.useState)(!1),x=Object(s.a)(O,2),f=x[0],p=x[1],v=Object(c.useContext)(N),y="$".concat(v.totalAmount.toFixed(2)),g=v.items.length>0,A=function(e){v.removeItem(e)},I=function(e){v.addItem(e)},M=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://food-order-app-18cbe-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:v.items})});case 3:b(!1),p(!0),v.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=Object(m.jsx)("ul",{className:C.a["cart-items"],children:v.items.map((function(e){return Object(m.jsx)(_,{name:e.name,amount:e.amount,price:e.price,onRemove:A.bind(null,e.id),onAdd:I.bind(null,e)},e.id)}))}),w=Object(m.jsxs)("div",{className:C.a.actions,children:[Object(m.jsx)("button",{className:C.a["button--alt"],onClick:e.onClose,children:"Close"}),g&&Object(m.jsx)("button",{className:C.a.button,onClick:function(){i(!0)},children:"Order"})]}),F=Object(m.jsxs)(a.a.Fragment,{children:[S,Object(m.jsxs)("div",{className:C.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:y})]}),r&&Object(m.jsx)(k,{onConfirm:M,onCancel:e.onClose}),!r&&w]}),P=Object(m.jsx)("p",{children:"Sending order data..."}),R=Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)("p",{children:"Successfully sent the order!"}),Object(m.jsx)("div",{className:C.a.actions,children:Object(m.jsx)("button",{className:C.a.button,onClick:e.onClose,children:"Close"})})]});return Object(m.jsxs)(h,{onClose:e.onClose,children:[!j&&!f&&F,j&&P,!j&&f&&R]})},M=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},S=n(10),w=n.n(S),F=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useContext)(N).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(w.a.button," ").concat(a?w.a.bump:"");return Object(c.useEffect)((function(){if(0!==i.length){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:w.a.icon,children:Object(m.jsx)(M,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:w.a.badge,children:o})]})},P=n.p+"static/media/meals.2971f633.jpg",R=n(17),H=n.n(R),D=function(e){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsxs)("header",{className:H.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(F,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:H.a["main-image"],children:Object(m.jsx)("img",{src:P,alt:"A table full of delicious food!"})})]})},T=n(19),E=n.n(T),B=function(){return Object(m.jsxs)("section",{className:E.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},L=n(20),V=n.n(L),z=function(e){return Object(m.jsx)("div",{className:V.a.card,children:e.children})},Y=n(5),Q=n(21),q=n.n(Q),J=a.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:q.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(Y.a)({ref:t},e.input))]})})),K=n(22),U=n.n(K),W=function(e){var t=Object(c.useState)(!0),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useRef)();return Object(m.jsxs)("form",{className:U.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?r(!1):e.onAddToCart(c)},children:[Object(m.jsx)(J,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},Z=n(14),$=n.n(Z),X=function(e){var t=Object(c.useContext)(N),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:$.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:$.a.description,children:e.description}),Object(m.jsx)("div",{className:$.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(W,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},G=n(15),ee=n.n(G),te=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),i=Object(s.a)(r,2),o=i[0],d=i[1],j=Object(c.useState)(),b=Object(s.a)(j,2),O=b[0],x=b[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-order-app-18cbe-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){d(!1),x(e.message)}))}),[]);var h=n.map((function(e){return Object(m.jsx)(X,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return o?Object(m.jsx)("section",{className:ee.a.MealsLoading,children:"Loading..."}):O?Object(m.jsx)("section",{className:ee.a.error,children:Object(m.jsx)("p",{children:O})}):Object(m.jsx)("section",{className:ee.a.meals,children:Object(m.jsx)(z,{children:Object(m.jsx)("ul",{children:h})})})},ne=function(){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(B,{}),Object(m.jsx)(te,{})]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(Y.a)(Object(Y.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(Y.a)(Object(Y.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ae},ie=function(e){var t=Object(c.useReducer)(re,ae),n=Object(s.a)(t,2),a=n[0],r=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",id:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(m.jsx)(N.Provider,{value:i,children:e.children})};var se=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ie,{children:[n&&Object(m.jsx)(I,{onClose:function(){a(!1)}}),Object(m.jsx)(D,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(ne,{})})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(se,{})}),document.getElementById("root")),oe()}],[[30,1,2]]]);
//# sourceMappingURL=main.0b0119e6.chunk.js.map