(this.webpackJsonpquestionary=this.webpackJsonpquestionary||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"id":1,"qText":"text 1 bla-bla_1","expectedAnswer":"1","givenAnswer":"","isCorrect":false},{"id":2,"qText":"text 2 bla-bla_2","expectedAnswer":"2","givenAnswer":"","isCorrect":false},{"id":3,"qText":"text 3 bla-bla_3","expectedAnswer":"3","givenAnswer":"","isCorrect":false},{"id":4,"qText":"text 4 bla-bla_4","expectedAnswer":"4","givenAnswer":"","isCorrect":false},{"id":5,"qText":"text 5 bla-bla_5","expectedAnswer":"5","givenAnswer":"","isCorrect":false}]')},23:function(e,t,r){},24:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(0),c=r(14),i=r.n(c),a=(r(23),r.p+"static/media/logo.6ce24c58.svg"),l=(r(24),r(25),r(17)),o=r(6),j=r(15),u=r(8),d=r(12);function b(e){var t=Object(s.useState)(""),r=Object(o.a)(t,2),c=r[0],i=r[1],a=function(){e.onClick(c),i("")};return Object(n.jsxs)(d.a,{bg:"light",text:"dark",style:{alignItems:"center"},children:[Object(n.jsx)(d.a.Title,{style:{width:"30rem"},children:e.currentQuestion.qText}),Object(n.jsx)("input",{type:"text",value:c,style:{textAlign:"center",borderRadius:"5px",borderWidth:"1px"},onChange:function(e){return i(e.target.value)},ref:function(e){return e&&e.focus()},onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)},onKeyDown:function(e){return function(e){"Enter"===e.key&&a()}(e)}}),Object(n.jsx)(u.a,{variant:"info",style:{width:"8rem"},className:"mt-2 mb-2",onClick:a,children:"Next >>"})]})}var x=r(16),h=r(7),O=r(9);function f(e){var t;function r(){return 100*e.results.totalCorrectAnswered/e.results.totalCount}function s(){return 100*e.results.incorrectAnswers/e.results.totalCount}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Out of ",Object(n.jsx)("big",{children:e.results.totalCount})," questions, your result is"]}),Object(n.jsxs)(h.a,{variant:"flush",children:[function(){if(e.results.totalCorrectAnswered>0)return Object(n.jsxs)(h.a.Item,{variant:"success",children:["Correct answers: ",Object(n.jsx)("b",{children:e.results.totalCorrectAnswered})]})}(),function(){if(e.results.incorrectAnswers>0)return Object(n.jsxs)(h.a.Item,{variant:"danger",children:["Wrong answers: ",Object(n.jsx)("b",{children:e.results.incorrectAnswers})]})}()]}),Object(n.jsx)("br",{}),Object(n.jsxs)(O.a,{children:[Object(n.jsx)(O.a,{variant:"success",now:r(),label:r()+"%"},1),Object(n.jsx)(O.a,{variant:"danger",now:s(),label:s()+"%"},2)]}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a,{variant:"info",className:"mb-3",onClick:e.onClick,children:"See detailed results"}),e.displayTable&&(t=e.detailedResults,Object(n.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"light",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"#"}),Object(n.jsx)("th",{children:"Question"}),Object(n.jsx)("th",{children:"Expected answer"}),Object(n.jsx)("th",{children:"Your answer"}),Object(n.jsx)("th",{children:"Correctness"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e,t){var r=e.isCorrect?"success":"danger";return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t+1}),Object(n.jsx)("td",{children:e.qText}),Object(n.jsx)("td",{children:e.expectedAnswer}),Object(n.jsx)("td",{children:e.givenAnswer}),Object(n.jsx)("td",{children:Object(n.jsx)(h.a.Item,{variant:r})})]},e.id)}))})]}))]})}function v(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),r=t[0],c=t[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=Object(s.useState)(!1),r=Object(o.a)(t,2),n=r[0],c=r[1];n||(e(),c(!0))}((function(){c(j.sort((function(){return.5-Math.random()})))}));var i=Object(s.useState)(0),a=Object(o.a)(i,2),l=a[0],u=a[1],d=!(l<=r.length-1),x=Object(s.useState)(!1),h=Object(o.a)(x,2),O=h[0],v=h[1];return Object(n.jsx)("div",{children:d?Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Test completed!"}),Object(n.jsx)(f,{results:function(){var e=r.length,t=Object.values(r),n=t.filter((function(e){return!1===e.isCorrect})).length,s=t.filter((function(e){return!0===e.isCorrect})).length;return n+s!==e&&console.log("Incorrect result calculation!"),{totalCount:e,incorrectAnswers:n,totalCorrectAnswered:s}}(),onClick:function(){console.log(88),v(!0)},detailedResults:r,displayTable:O})]}):Object(n.jsx)(b,{onClick:function(e){r[l].givenAnswer=e,r[l].expectedAnswer==e&&(r[l].isCorrect=!0);var t=r[l];r.splice(l,1,t),c(r),u(l+1)},currentQuestion:r[l]})})}var g=function(){return Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)(v,{}),Object(n.jsx)("img",{src:a,className:"App-logo",alt:"logo"})]})})})};i.a.render(Object(n.jsx)(g,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fd59f85b.chunk.js.map