(this.webpackJsonpra_thunk=this.webpackJsonpra_thunk||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(17),s=n.n(a),i=n(19),o=n(5),u=n(11),l=n(3),j=n(1),b=function(e){var t=e.onFilter,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(j.jsx)("div",{className:"filter-services",children:Object(j.jsxs)("label",{className:"filter-services_label",children:[Object(j.jsx)("span",{className:"filter-services_text",children:"Search"}),Object(j.jsx)("input",{type:"text",className:"filter-services_input",onChange:function(e){var n=e.target.value;s(n),t(n)},value:a})]})})},d=n(10),p=n.n(d),v=n(12),O=n(2),m="ADD_SERVICE",h="REMOVE_SERVICE",f="EDIT_SERVICE",x="GET_SERVICE",E="CHANGE_ADD_SERVICE_FIELD",_="RESET_EDIT_FORM",g="CHANGE_EDIT_SERVICE_FIELD",y="FILL_EDIT_FORM",S="FETCH_SERVICES_REQUEST",k="FETCH_SERVICES_FAILURE",C="FETCH_SERVICES_SUCCESS",I="ADD_SERVICE_REQUEST",N="ADD_SERVICE_FAILURE",w="ADD_SERVICE_SUCCESS",R="EDIT_SERVICE_REQUEST",D="EDIT_SERVICE_FAILURE",T="EDIT_SERVICE_SUCCESS",V=function(e){return{type:m,payload:e}},L=function(e){return{type:h,payload:{id:e}}},F=function(e){return{type:f,payload:e}},U=function(){return{type:_}},A=function(e){return{type:y,payload:Object(O.a)({},e)}},H=function(){var e=Object(v.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P({url:"".concat("https://ra-thunk-backend.herokuapp.com/api/services","/").concat(n)});case 3:r=e.sent,t({type:x,payload:r}),t(A(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(v.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:S}),e.prev=1,e.next=4,P({url:"https://ra-thunk-backend.herokuapp.com/api/services"});case 4:n=e.sent,t({type:C,payload:{items:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message),t((r=e.t0.message,{type:k,payload:{error:r}}));case 12:case"end":return e.stop()}var r}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(v.a)(p.a.mark((function e(t,n,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:I}),e.prev=1,e.next=4,P({url:"https://ra-thunk-backend.herokuapp.com/api/services",method:"POST",data:n});case 4:c=e.sent,t({type:w}),t(V(c)),t(U()),r.push("/services"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t((a=e.t0.message,{type:N,payload:{error:a}}));case 14:case"end":return e.stop()}var a}),e,null,[[1,11]])})));return function(t,n,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(v.a)(p.a.mark((function e(t,n,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:R}),e.prev=1,e.next=4,P({url:"".concat("https://ra-thunk-backend.herokuapp.com/api/services","/").concat(n.id),method:"PUT",data:n});case 4:c=e.sent,t({type:T}),t(F(c)),t(U()),r.push("/services"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t((a=e.t0.message,{type:D,payload:{error:a}}));case 14:case"end":return e.stop()}var a}),e,null,[[1,11]])})));return function(t,n,r){return e.apply(this,arguments)}}(),J=function(){var e=Object(v.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ra-thunk-backend.herokuapp.com/api/services","/").concat(n),{method:"DELETE"});case 2:e.sent.ok&&t(L(n));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function P(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(v.a)(p.a.mark((function e(t){var n,r,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,c=t.data,e.next=3,fetch(n,{method:r,body:JSON.stringify(c)});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.statusText);case 6:return e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){var t=e.radius,n=e.width,r=e.color,c=2.5*t;return Object(j.jsx)("svg",{className:"loading-spinner",viewBox:"0 0 ".concat(c," ").concat(c),children:Object(j.jsx)("circle",{className:"path",cx:c/2,cy:c/2,r:t,fill:"none",strokeWidth:n,stroke:r})})},W=function(e){var t=e.type,n=e.onInputChange,r=e.onFormSubmit,c=e.isLoading,a=Object(o.c)((function(e){return e["".concat(t,"Service")].service}));return Object(j.jsxs)("div",{className:"form_container",children:[c&&Object(j.jsx)("div",{className:"loading_wrapper",children:Object(j.jsx)(B,{radius:"20",width:"5",color:"rgb(210, 70, 75)"})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(a)},className:"add-service_form",children:[Object(j.jsx)(q,{label:"Name",name:"name",inputValue:a.name,onInputChange:n,type:"text"}),Object(j.jsx)(q,{label:"Price",name:"price",inputValue:a.price,onInputChange:n,type:"number"}),Object(j.jsx)(q,{label:"Description",name:"content",inputValue:a.content,onInputChange:n,type:"text"}),Object(j.jsx)("button",{type:"submit",className:"form_submit",children:"Save"})]})]})},q=function(e){var t=e.name,n=e.label,r=e.inputValue,c=e.onInputChange,a=e.type;return Object(j.jsxs)("label",{className:"form_label",children:[Object(j.jsx)("span",{className:"form_label_text",children:n}),Object(j.jsx)("input",{onChange:function(e){var n=e.target.value;c(t,"number"===a?+n:n)},className:"form_input",value:r,type:a})]})},z=function(e){var t=e.message;return Object(j.jsx)("div",{className:"error-message",children:t})},K=function(e){var t=e.id,n=Object(o.b)(),c=Object(l.g)(),a=Object(o.c)((function(e){return e.editService})),s=a.loading,i=a.error;return Object(r.useEffect)((function(){H(n,t)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W,{type:"edit",onInputChange:function(e,t){n(function(e,t){return{type:g,payload:{name:e,value:t}}}(e,t))},onFormSubmit:function(e){var t=e.id,r=e.name,a=e.price,s=e.content;r&&a&&s?G(n,{id:t,name:r,price:a,content:s},c):console.log("\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u0430\u043a\u0430\u044f-\u043d\u0438\u0431\u0443\u0434\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0430 \u0438\u043b\u0438 \u043f\u043e\u043f\u0430\u043f")},isLoading:s}),i&&Object(j.jsx)(z,{message:i})]})},Y=function(){var e=Object(l.g)(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.addService})),r=n.loading,c=n.error;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W,{type:"add",onInputChange:function(e,n){t(function(e,t){return{type:E,payload:{name:e,value:t}}}(e,n))},onFormSubmit:function(n){var r=n.name,c=n.price,a=n.content;r&&c&&a?X(t,{name:r,price:c,content:a},e):console.log("\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043a\u0430\u043a\u0430\u044f-\u043d\u0438\u0431\u0443\u0434\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0430 \u0438\u043b\u0438 \u043f\u043e\u043f\u0430\u043f")},isLoading:r}),c&&Object(j.jsx)(z,{message:c})]})},Z=function(){return Object(j.jsx)(ee,{isOpen:!0,children:Object(j.jsx)(Y,{})})},$=function(e){var t=e.match;return Object(j.jsx)(ee,{isOpen:!0,children:Object(j.jsx)(K,{id:t.params.id})})},ee=function(e){var t=e.children,n=e.isOpen,c=Object(o.b)(),a=Object(l.g)(),s=Object(r.useRef)(),i=function(){c(U()),a.push("/services")};return function(e,t){Object(r.useEffect)((function(){var n=function(n){var r=e.current;r&&!r.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[t,e])}(s,i),n&&Object(j.jsx)("div",{className:"modal_wrapper",children:Object(j.jsxs)("div",{className:"modal",ref:s,children:[Object(j.jsx)(u.b,{to:"/services",children:Object(j.jsx)("button",{className:"modal_close-btn",onClick:i,children:"\xd7"})}),t]})})},te=function(e){var t=e.services;return Object(j.jsx)("ul",{className:"service-list",children:t.map((function(e,t){return Object(r.createElement)(ne,Object(O.a)(Object(O.a)({},e),{},{key:t}))}))})},ne=function(e){var t=e.name,n=e.price,r=e.id,c=Object(o.b)(),a=Object(l.g)();return Object(j.jsxs)("li",{className:"service-item",children:[Object(j.jsxs)("div",{className:"service-item_info",children:[Object(j.jsx)("div",{className:"service-item_name",children:t}),Object(j.jsxs)("div",{className:"service-item_price",children:[n," \u20bd"]})]}),Object(j.jsxs)("div",{className:"service-item_controls",children:[Object(j.jsx)(u.b,{to:"".concat("/services","/").concat(r),children:Object(j.jsx)(re,{onClick:function(){a.push("/services")},label:"Edit"})}),Object(j.jsx)(re,{onClick:function(){J(c,r)},label:"Remove"})]})]})},re=function(e){var t=e.onClick,n=e.label;return Object(j.jsx)("button",{onClick:t,className:"service-item_btn",children:n})},ce=(n(40),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.serviceList})),n=t.services,c=t.loading,a=t.error,s=Object(r.useState)(""),d=Object(i.a)(s,2),p=d[0],v=d[1];return Object(r.useEffect)((function(){M(e)}),[e]),Object(j.jsxs)(u.a,{children:[Object(j.jsx)(l.b,{exact:!0,path:["/","/ra_thunk"],children:Object(j.jsx)(l.a,{to:"/services"})}),c?Object(j.jsx)(B,{radius:"20",width:"5",color:"rgb(210, 70, 75)"}):a?Object(j.jsx)(z,{message:a}):Object(j.jsxs)("div",{className:"services-app",children:[Object(j.jsx)(u.b,{to:"".concat("/services","/add"),className:"add-service_link",children:Object(j.jsx)("button",{className:"add-service_btn",children:"Add new service"})}),Object(j.jsx)(b,{onFilter:function(e){var t=function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);v(t)}}),Object(j.jsx)(te,{services:p||n}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"".concat("/services","/add"),component:Z}),Object(j.jsx)(l.b,{path:"".concat("/services","/:id"),component:$})]})]})]})}),ae=n(24),se=n(23),ie={services:[],loading:!1,error:null},oe=n(14),ue={service:{name:"",price:"",content:""},loading:!1,error:null},le={service:{id:"",name:"",price:"",content:""},loading:!1,error:null},je=Object(ae.a)({serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case S:return Object(O.a)(Object(O.a)({},e),{},{loading:!0,error:null});case k:var c=r.error;return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:c});case C:var a=r.items;return Object(O.a)(Object(O.a)({},ie),{},{services:a});case m:var s=r.id,i=r.name,o=r.price,u=r.content;return Object(O.a)(Object(O.a)({},e),{},{services:[].concat(Object(se.a)(e.services),[{id:s,name:i,price:Number(o),content:u}])});case h:var l=r.id;return Object(O.a)(Object(O.a)({},e),{},{services:e.services.filter((function(e){return e.id!=l}))});case f:var j=r.id,b=r.name,d=r.price,p=r.content,v=e.services.findIndex((function(e){return e.id==j})),x=Object(se.a)(e.services);return x[v]={id:j,name:b,price:d,content:p},Object(O.a)(Object(O.a)({},e),{},{services:x});default:return e}},addService:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case E:var c=r.name,a=r.value;return Object(O.a)(Object(O.a)({},e),{},{service:Object(O.a)(Object(O.a)({},e.service),{},Object(oe.a)({},c,a))});case I:return Object(O.a)(Object(O.a)({},e),{},{loading:!0,error:null});case N:var s=r.error;return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:s});case w:return Object(O.a)({},ue);default:return e}},editService:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case x:var c=r.id,a=r.name,s=r.price,i=r.content;return Object(O.a)(Object(O.a)({},e),{},{service:{id:c,name:a,price:s,content:i}});case g:var o=r.name,u=r.value;return Object(O.a)(Object(O.a)({},e),{},{service:Object(O.a)(Object(O.a)({},e.service),{},Object(oe.a)({},o,u))});case R:return Object(O.a)(Object(O.a)({},e),{},{loading:!0,error:null});case D:var l=r.error;return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:l});case T:return Object(O.a)({},le);case y:var j=r.id,b=r.name,d=r.price,p=r.content;return Object(O.a)(Object(O.a)({},e),{},{service:{id:j,name:b,price:d,content:p}});case _:return Object(O.a)({},le);default:return e}}}),be=Object(ae.b)(je,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{store:be,children:Object(j.jsx)(ce,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.60f87fca.chunk.js.map