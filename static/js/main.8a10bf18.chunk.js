(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{140:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(22),i=a.n(c),r=(a(140),a(40)),l=a(27),o=a(3),u=function(e){var t;return(null===e||void 0===e||null===(t=e.attachments)||void 0===t?void 0:t.length)>0?Object(o.jsx)("img",{src:e.attachments[0].file,alt:"Picture",className:"message-image",style:{float:"right"}}):Object(o.jsx)("div",{className:"message",style:{float:"right",marginRight:18,color:"white",backgroundColor:"#3B2A50"},children:e.text})},d=function(e){var t,a,s=e.lastMessage,n=e.message,c=!s||s.sender.username!==n.sender.username;return Object(o.jsxs)("div",{className:"message-row",children:[c&&Object(o.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===n||void 0===n||null===(t=n.sender)||void 0===t?void 0:t.avatar,")")}}),(null===n||void 0===n||null===(a=n.attachments)||void 0===a?void 0:a.length)>0?Object(o.jsx)("img",{src:n.attachments[0].file,alt:"Picture",className:"message-image",style:{marginLeft:c?"4px":"48px"}}):Object(o.jsx)("div",{className:"message",style:{float:"left",marginRight:18,color:"white",backgroundColor:"#3B2A50"},children:n.text})]})},j=a(9),m=a(325),b=a(326),h=function(e){var t=Object(s.useState)(""),a=Object(j.a)(t,2),n=a[0],c=a[1],i=e.chatId,r=e.creds,u=function(e){e.preventDefault();var t=n.trim();t.length>0&&Object(l.t)(r,i,{text:t}),c("")};return Object(o.jsxs)("form",{className:"message-form",onSubmit:u,children:[Object(o.jsx)("input",{className:"message-input",placeholder:"Send a message ...",value:n,onChange:function(t){c(t.target.value),Object(l.p)(e,i)},onSubmit:u}),Object(o.jsx)("label",{htmlFor:"upload-button",children:Object(o.jsx)("span",{className:"image-button",children:Object(o.jsx)(m.a,{className:"picture-icon"})})}),Object(o.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.t)(r,i,{files:e.target.files,text:""})}}),Object(o.jsxs)("button",{type:"submit",className:"send-button",children:[Object(o.jsx)(b.a,{className:"send-icon"})," "]})]})},g=function(e){var t=e.chats,a=e.activeChat,s=e.userName,n=e.messages,c=t&&t[a],i=function(e,t){return c.people.map((function(a,s){var n;return a.last_read===e.id&&Object(o.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(n=a.person)||void 0===n?void 0:n.avatar,")")}},"read_".concat(s))}))};return c?Object(o.jsxs)("div",{className:"chat-feed",children:[Object(o.jsxs)("div",{className:"chat-title-container",children:[Object(o.jsx)("div",{className:"chat-title",children:null===c||void 0===c?void 0:c.title}),Object(o.jsx)("div",{className:"chat-subtitle",children:c.people.map((function(e){return"".concat(e.person.username)}))})]}),function(){var e=Object.keys(n);return e.map((function(t,a){var c=n[t],r=0===a?null:e[a-1],l=s===c.sender.username;return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)("div",{className:"message-block",children:l?Object(o.jsx)(u,{message:c}):Object(o.jsx)(d,{message:c,lastMessage:n[r]})}),Object(o.jsx)("div",{className:"read-receipts",style:{marginRight:l?"18px":"0px",marginLeft:l?"0px":"68px"},children:i(c,l)})]},"msg_".concat(a))}))}(),Object(o.jsx)("div",{style:{height:100}}),Object(o.jsx)("div",{className:"message-form-container",children:Object(o.jsx)(h,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"loading..."};a(322);var v=function(){return Object(o.jsx)(l.d,{height:"100vh",projectID:"01140238-4e95-4493-9101-9f29097594ee",userName:"chatapp",userSecret:"123",renderChatFeed:function(e){return Object(o.jsx)(g,Object(r.a)({},e))}})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,327)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),p()}},[[323,1,2]]]);
//# sourceMappingURL=main.8a10bf18.chunk.js.map