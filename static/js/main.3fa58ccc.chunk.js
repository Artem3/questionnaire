(this.webpackJsonpquestionary=this.webpackJsonpquestionary||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"qText":"text 1 bla-bla_1","expectedAnswer":"1","givenAnswer":""},{"id":2,"qText":"text 2 bla-bla_2","expectedAnswer":"2","givenAnswer":""},{"id":3,"qText":"text 3 bla-bla_3","expectedAnswer":"3","givenAnswer":""},{"id":4,"qText":"text 4 bla-bla_4","expectedAnswer":"4","givenAnswer":""},{"id":5,"qText":"text 5 bla-bla_5","expectedAnswer":"5","givenAnswer":""}]')},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n(9),i=n.n(s),l=(n(18),n.p+"static/media/logo.6ce24c58.svg"),o=(n(19),n(20),n(11)),u=n(6),a=n(10),j=n(12),b=n(8);function d(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),s=n[0],i=n[1],l=function(){e.onClick(s),i("")};return Object(c.jsxs)(b.a,{style:{color:"black"},children:[Object(c.jsx)(b.a.Title,{style:{width:"30rem"},children:e.currentQuestion.qText}),Object(c.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)},ref:function(e){return e&&e.focus()},onFocus:function(e){return e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)},onKeyDown:function(e){return function(e){"Enter"===e.key&&l()}(e)}}),Object(c.jsx)(j.a,{variant:"info",style:{width:"10rem"},onClick:l,children:"Next >>"})]})}function x(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Out of ",Object(c.jsx)("big",{children:e.results.totalCount})," questions, your result is"]}),Object(c.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(c.jsxs)("li",{children:["Correct answers: ",Object(c.jsx)("b",{children:e.results.totalCorrectAnswered})]}),Object(c.jsxs)("li",{children:["Wrong answers: ",Object(c.jsx)("b",{children:e.results.incorrectAnswers})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){e.onClick()},children:"See detailed results"}),Object(c.jsx)("div",{children:e.detailedResults}),Object(c.jsx)("br",{})]})}function O(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1];c||(e(),s(!0))}((function(){s(a.sort((function(){return.5-Math.random()})))}));var i=Object(r.useState)(0),l=Object(u.a)(i,2),o=l[0],j=l[1],b=!(o<=n.length-1),O=Object(r.useState)(""),h=Object(u.a)(O,2),g=h[0],f=h[1];return Object(c.jsx)("div",{children:b?Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Test completed!"}),Object(c.jsx)(x,{results:function(){var e=n.length,t=Object.values(n),c=t.filter((function(e){return e.givenAnswer!==e.expectedAnswer})).length,r=t.filter((function(e){return e.expectedAnswer==e.givenAnswer})).length;return c+r!==e&&console.log("Incorrect result calculation!"),{totalCount:e,incorrectAnswers:c,totalCorrectAnswered:r}}(),onClick:function(){console.log(88),f("abcd")},detailedResults:g})]}):Object(c.jsx)(d,{onClick:function(e){n[o].givenAnswer=e;var t=n[o];n.splice(o,1,t),s(n),j(o+1)},currentQuestion:n[o]})})}var h=function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)(O,{}),Object(c.jsx)("img",{src:l,className:"App-logo",alt:"logo"})]})})})};i.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3fa58ccc.chunk.js.map