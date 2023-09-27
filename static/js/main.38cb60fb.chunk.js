(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(6),l=c(2),i=c(4),r=c.n(i),d=c(1),o=(c(13),c(14),c(7)),j=c.n(o),u=c(0),b=function(e,t){return t.filter((function(t){return t.title.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase())}))},h=function(e){var t=e.todoList,c=e.modalActive,a=e.query,s=e.option,n=e.activeTaskId,l=[];switch(s){case"all":default:l=b(a,t);break;case"completed":l=b(a,t).filter((function(e){return!0===e.completed}));break;case"active":l=b(a,t).filter((function(e){return!1===e.completed}))}return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:l.map((function(e){return[Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(u.jsx)("td",{className:"is-vcentered",children:Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}):Object(u.jsx)("td",{className:"is-vcentered"}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:(t=e.completed,j()({"has-text-danger":!t,"has-text-success":t})),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(u.jsx)("span",{className:"icon",children:n===e.id?Object(u.jsx)("i",{className:"far fa-eye-slash"}):Object(u.jsx)("i",{className:"far fa-eye"})})})})]},e.id),","]})];var t}))})]})},m=function(e){var t=e.handleQuery,c=e.handleOption,a=Object(d.useState)(""),s=Object(l.a)(a,2),n=s[0],i=s[1],r=Object(d.useState)(null),o=Object(l.a)(r,2),j=o[0],b=o[1];return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:j||"",onChange:function(e){var t=e.target.value;b(t),c("all"===t?null:t)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){var c=e.target.value;i(c),t(c)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search"})}),Object(u.jsx)("span",{className:"icon is-right",children:n&&Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i(""),t("")},"aria-label":"Clear search"})})]})]})},O=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.todo,c=e.closeModal,a=Object(d.useState)(null),s=Object(l.a)(a,2),n=s[0],i=s[1];return Object(d.useEffect)((function(){var e;(e=t.userId,x("/users/".concat(e))).then(i)}),[]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),n?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===t||void 0===t?void 0:t.id]}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]}):Object(u.jsx)(O,{})]})},v=function(){var e=Object(d.useState)(!0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(d.useState)([]),i=Object(l.a)(s,2),o=i[0],j=i[1],b=Object(d.useState)(null),v=Object(l.a)(b,2),p=v[0],N=v[1],y=Object(d.useState)(""),g=Object(l.a)(y,2),k=g[0],S=g[1],w=Object(d.useState)(null),C=Object(l.a)(w,2),L=C[0],T=C[1];Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,x("/todos");case 4:t=e.sent,j(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Something bad happened!",e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{handleQuery:function(e){S(e)},handleOption:function(e){T(e)}})}),Object(u.jsxs)("div",{className:"block",children:[c?Object(u.jsx)(O,{}):null,Object(u.jsx)(h,{todoList:o,modalActive:function(e){return function(e){N(e)}(e)},query:k,option:L,activeTaskId:(null===p||void 0===p?void 0:p.id)||null})]})]})})}),p&&Object(u.jsx)(f,{todo:p,closeModal:function(){N(null)}})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.38cb60fb.chunk.js.map