(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(9),a=s.n(c),n=s(6),i=s(2),r=s(4),o=s.n(r),l=s(1),d=(s(16),s(17),s(18),s(3)),j=s.n(d),u=s(0),b=function(e){var t=e.posts,s=e.onChoose,c=e.selectedPostId;return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:c!==e.id?Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return s(e)},children:"Open"}):Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:function(){return s(e)},children:"Close"})})]},e.id)}))})]})]})},m=s(10),h="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,c)})).then((function(e){return e.json()}))}var f=function(e){return x(e)},p=function(e,t){return x(e,"POST",t)},N=function(e){return x(e,"DELETE")},v=(s(20),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),y=function(e){var t=e.postId,s=e.onUpdate,c=Object(l.useState)(""),a=Object(i.a)(c,2),n=a[0],r=a[1],o=Object(l.useState)(""),d=Object(i.a)(o,2),b=d[0],m=d[1],h=Object(l.useState)(""),O=Object(i.a)(h,2),x=O[0],f=O[1],N=Object(l.useState)(!0),v=Object(i.a)(N,2),y=v[0],g=v[1],S=Object(l.useState)(!0),C=Object(i.a)(S,2),k=C[0],w=C[1],E=Object(l.useState)(!0),P=Object(i.a)(E,2),I=P[0],T=P[1],F=Object(l.useState)(!1),B=Object(i.a)(F,2),U=B[0],L=B[1],D=function(e){e.preventDefault(),n||g((function(e){return!e})),b||w((function(e){return!e})),x||T((function(e){return!e})),n&&b&&x&&function(){var e={postId:t,name:n,email:b,body:x};L(!0),p("/comments",e).then((function(e){s(e),L(!1),f("")}))}()};return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){D(e)},children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":!y}),value:n,onChange:function(e){r(e.target.value),g(!0)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),!y&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!y&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":!k}),value:b,onChange:function(e){m(e.target.value),w(!0)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),!k&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!k&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":!I}),value:x,onChange:function(e){f(e.target.value),T(!0)}})}),!I&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":U}),children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){m(""),r(""),f(""),w(!0),g(!0),T(!0)},children:"Clear"})})]})]})},g=function(e){var t=e.post,s=Object(l.useState)([]),c=Object(i.a)(s,2),a=c[0],r=c[1],d=Object(l.useState)(!1),j=Object(i.a)(d,2),b=j[0],h=j[1],O=Object(l.useState)(!1),x=Object(i.a)(O,2),p=x[0],g=x[1],S=Object(l.useState)(!1),C=Object(i.a)(S,2),k=C[0],w=C[1],E=Object(l.useState)(!1),P=Object(i.a)(E,2),I=P[0],T=P[1],F=function(){var e=Object(n.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,f("/comments?postId=".concat(t));case 3:return s=e.sent,h(!1),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){F(t.id).then((function(e){"error"in e?g(!0):r(e)})),w(!1),T(!1)}),[t,I]);return Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(u.jsxs)("div",{className:"block",children:[b?Object(u.jsx)(v,{}):0===a.length?Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),a.map((function(e){return Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:misha@mate.academy","data-cy":"CommentAuthor",children:e.name}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return t=e.id,r(a.filter((function(e){return e.id!==t}))),void N("/comments/".concat(t));var t},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),p&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!k&&Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){w(!0)},children:"Write a comment"})]}),k&&Object(u.jsx)(y,{postId:t.id,onUpdate:function(e){!function(e){r((function(t){return[].concat(Object(m.a)(t),[e])}))}(e)}})]})})},S=function(e){var t=e.users,s=e.onChoose,c=e.selectedUserId,a=Object(l.useState)(!1),n=Object(i.a)(a,2),r=n[0],o=n[1],d=Object(l.useState)("Choose a user"),b=Object(i.a)(d,2),m=b[0],h=b[1];return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){o(!r)},children:[Object(u.jsx)("span",{children:m}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),r&&Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(u.jsx)("a",{href:"#user-".concat(e.id),className:j()("dropdown-item",{"is-active":c===e.id}),onClick:function(){s(e.id),o(!1),h(e.name)},children:e.name},e.id)}))})})]})},C=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(l.useState)(!1),r=Object(i.a)(a,2),d=r[0],m=r[1],h=Object(l.useState)(0),O=Object(i.a)(h,2),x=O[0],p=O[1],N=Object(l.useState)([]),y=Object(i.a)(N,2),C=y[0],k=y[1],w=Object(l.useState)(null),E=Object(i.a)(w,2),P=E[0],I=E[1],T=Object(l.useState)(!1),F=Object(i.a)(T,2),B=F[0],U=F[1],L=P&&!0,D=function(){var e=Object(n.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,f("/posts?userId=".concat(t));case 3:return s=e.sent,m(!1),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){var e;(e="/users",f(e)).then((function(e){"error"in e?U(!0):c(e)}))}),[s]);return Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(S,{users:s,selectedUserId:x,onChoose:function(e){!function(e){D(e).then((function(e){"error"in e?U(!0):k(e)})),p(e),I(null)}(e)}})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[0===x?Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}):d?Object(u.jsx)(v,{}):0===C.length?Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}):Object(u.jsx)(b,{posts:C,onChoose:function(e){!function(e){I(P===e?null:e)}(e)},selectedPostId:null===P||void 0===P?void 0:P.id}),B&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"})]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":L}),children:P&&Object(u.jsx)("div",{className:"tile is-child box is-success ",children:Object(u.jsx)(g,{post:P})})})]})})})};a.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.50b45d16.chunk.js.map