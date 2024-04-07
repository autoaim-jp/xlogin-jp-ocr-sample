(()=>{var n=Object.defineProperty,t=(e,t)=>n(e,"name",{value:t,configurable:!0}),e=(e,t)=>{for(var o in t)n(e,o,{get:t[o],enumerable:!0})},r={apiEndpoint:"/f",labelList:{scopeBody:{global:{notification:{label:"すべての通知",summary:"すべてのサービスの通知に関する権限です。ログイン時刻などを含みます。"}},auth:{emailAddress:{label:"メールアドレス",summary:"ログインに使用するメールアドレスに関する権限です。バックアップメールアドレスは含みません。"},backupEmailAddress:{label:"バックアップメールアドレス",summary:"バックアップメールアドレスに関する権限です。ログインに使用するメールアドレスは含みません。"},userName:{label:"ユーザー名",summary:"一般公開されているユーザーの名前です。"}},service:{serviceUserId:{label:"ユーザーID",summary:"連携するサービスに提供する、あなたのアカウントのIDです。サービス毎に異なります。"},notification:{label:"サービス内通知",summary:"連携するサービス内で、通知機能を利用するための権限です。"},json_v1:{label:"テキスト",summary:"連携するサービスで、あなたがデータを保存できます。"},file_v1:{label:"ファイル",summary:"連携するサービスで、あなたがデータを保存できます。"},chatgpt:{label:"ChatGPT",summary:"連携するサービスで、ChatGPTを利用するための権限です。"},text_lib_v1:{label:"テキスト変換",summary:"連携するサービスで、テキスト変換機能を利用するための権限です。"},tesseract:{label:"OCR",summary:"連携するサービスで、OCRを利用するための権限です。"}}},scopeOperation:{operation:{read:"取得",write:"保存",append:"追記"},prefix:{isRequired:"必須"}},error:{undefined:"error",handle_credential_credential:"メールアドレスまたはパスワードが違います。",handle_user_add_register:"メールアドレスは既に登録されています。",handle_xlogin_code_session:"セッションが不正です。"}},statusList:{OK:1,SUCCESS:100,LOGIN_SUCCESS:101,INVALID:1e3,NOT_ENOUGH_PARAM:1001,INVALID_SESSION:1002,INVALID_CREDENTIAL:1003,API_ERROR:1100,INVALID_OIDC_ISSUER:1101,NOT_FOUND:1200,SERVER_ERROR:1300},userReadableDateFormat:{full:"YYYY/MM/DD hh:mm:ss",day:"YYYY/MM/DD",hourMinute:"hh:mm",time:"hh:mm:ss"}},o={getList:t((...e)=>{var t=e.reduce((e,t)=>{let o=r;for(const n of t.split("."))o=o[n];return e[t.slice(t.lastIndexOf(".")+1)]=o,e},{});for(const o of e)if(void 0===t[o.slice(o.lastIndexOf(".")+1)])throw new Error("[error] undefined setting constant: "+o);return t},"getList"),getValue:t(e=>{let t=r;for(const o of e.split("."))t=t[o];return t},"getValue")},a={},o={getList:t((...e)=>{var t=e.reduce((e,t)=>{let o=a;for(const n of t.split("."))o=o[n];return e[t.slice(t.lastIndexOf(".")+1)]=o,e},{});for(const o of e)if(void 0===t[o.slice(o.lastIndexOf(".")+1)])throw new Error("[error] undefined setting constant: "+o);return t},"getList"),browserServerSetting:o},i={},l=(e(i,{common:()=>M,getCaller:()=>P,monkeyPatch:()=>F,redirect:()=>B,xdevkit:()=>D}),{}),s=(e(l,{lib:()=>S,output:()=>w}),{}),d=(e(s,{getRandomStr:()=>d,getSearchQuery:()=>c}),t(e=>btoa(crypto.getRandomValues(new Uint8Array(e))).slice(0,e),"getRandomStr")),c=t(()=>{const o={};return window.location.search.replace(/^\?/,"").split("&").forEach(e=>{var[e,t]=e.split("=");o[e]=t}),o},"getSearchQuery"),u={},m=(e(u,{applyElmList:()=>m,createTabMenuContainer:()=>y,getErrorModalElmAndSetter:()=>b,reloadXloginLoginBtn:()=>C,showModal:()=>h,showTabButton:()=>g,switchLoading:()=>v}),t((e,t,o=document)=>{Object.values(o.querySelectorAll(e)).forEach(e=>{t(e)})},"applyElmList")),p=t(()=>{m('[data-id="modal"], #modalBackground',e=>{e.classList.add("hidden")})},"_closeModal"),h=t((e,o=!1)=>new Promise(t=>{"modalTemplate"===e.id&&(e.id=""),document.body.appendChild(e),p(),setTimeout(()=>{m('[data-id="modalClose"], [data-id="modalCancelButton"]',e=>{e.onclick=()=>(p(),t(!1))},document),o?e.querySelector('[data-id="modalCancelButton"]').classList.remove("hidden"):e.querySelector('[data-id="modalCancelButton"]').classList.add("hidden"),e.querySelector('[data-id="modalConfirmButton"]').onclick=()=>(p(),t(!0)),e.classList.remove("hidden"),document.querySelector("#modalBackground").classList.remove("hidden"),e.querySelector('[data-id="modalContent"]').scrollTop=0,e.querySelector('[data-id="modalCard"]').onclick=e=>{e.stopPropagation()},e.onclick=e=>(e.stopPropagation(),p(),t(!1))},100)}),"showModal"),b=t(()=>{var e=document.querySelector("#modalTemplate").cloneNode(!0);const n=e.querySelector('[data-id="modalTitle"]'),r=(n.innerText="エラー",document.createElement("p"));return r.innerText="エラーが発生しました。",e.querySelector('[data-id="modalContent"]').appendChild(r),{modalElm:e,setContent:t((e,t=null,o="エラー")=>{r.innerText=t&&t[e]||e,n.innerText=o},"setContent")}},"getErrorModalElmAndSetter"),y=t(()=>{var e=document.querySelector("#tabMenuContainerTemplate").cloneNode(!0);return e.id="",e.classList.remove("hidden"),e},"createTabMenuContainer"),f=t(({activeTabContainerId:e,tabList:t})=>{Object.keys(t).forEach(e=>{document.querySelector("#"+e).classList.add("hidden")}),document.querySelector("#"+e).classList.remove("hidden")},"_showTabContainer"),g=t(({tabMenuContainerElm:n,tabList:r,activeTabContainerId:a})=>{const i=t(({newActiveTabContainerId:t})=>e=>{e&&e.preventDefault(),g({tabMenuContainerElm:n,tabList:r,activeTabContainerId:t}),f({tabList:r,activeTabContainerId:t})},"getOnClickTabButton");n.clearChildren(),Object.entries(r).forEach(([e,t])=>{let o=null;(o=(e===a?document.querySelector("#tabActiveItemTemplate"):document.querySelector("#tabItemTemplate")).cloneNode(!0)).id="",o.classList.remove("hidden"),o.children[0].innerText=t,o.children[0].onclick=i({newActiveTabContainerId:e}),n.appendChild(o),e===a&&f({tabList:r,activeTabContainerId:e})})},"showTabButton"),v=t(e=>{var t=document.querySelector("#loading");t&&(e?t.classList.remove("hidden"):t.classList.add("hidden"))},"switchLoading"),C=t(o=>{var e=t(()=>{return t(e=>{e=e.dataset.permission;let t="";return void 0!==e&&(t+="&requestScope="+e.replace(/\$CLIENT_ID/g,o)),()=>{window.location.href="/f/xlogin/connect?redirectAfterAuth=/mypage"+t}},"handler")},"getOnClickXloginButtonHandler");t(({onClickXloginButtonHandler:t})=>{document.querySelectorAll('[data-id="xloginLoginBtn"]').forEach(e=>{e.onclick=t(e)})},"setOnClickXloginButton")({onClickXloginButtonHandler:e()})},"reloadXloginLoginBtn"),S=s,w=u,s={},u=(e(s,{input:()=>_,output:()=>N}),{}),L=(e(u,{postFormRequest:()=>T,postRequest:()=>q,setOnClickNavManu:()=>E,showNotification:()=>I}),t((e,t)=>fetch(e,t).then(e=>!e.error&&e.body&&e.json?e.json():null).catch(e=>(console.error("[fatal] error @postRequest:",e),null)),"_request")),q=t((e,t={})=>{var o={method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},timeout:3e4};return t&&(o.body=JSON.stringify(t)),L(e,o)},"postRequest"),T=t((e,t)=>{return L(e,{method:"POST",body:t})},"postFormRequest"),E=t(()=>{var e=document.querySelector("#commonNavToggle");const t=document.querySelector("#commonNavContent");e.onclick=()=>{0<=[...t.classList.values()].indexOf("hidden")?t.classList.remove("hidden"):t.classList.add("hidden")}},"setOnClickNavManu"),O=!1,I=t(async(e,n,t)=>{if(!O){O=!0;t=await t(e+"/notification/list");const r=document.querySelector("#notificationContainer"),a=(r.clearChildren(),document.querySelector("#notificationTemplate")),i=Object.values(t?.result?.notificationList||{}).reverse();i.forEach((t,e)=>{const o=a.cloneNode(!0);o.classList.remove("hidden"),o.querySelector('[data-id="subject"]').innerText=t.subject,o.onclick=e=>{e.preventDefault(),e.stopPropagation();e=document.querySelector("#modalTemplate").cloneNode(!0);e.classList.remove("hidden"),e.querySelector('[data-id="modalTitle"]').innerText=t.subject,e.querySelector('[data-id="modalContent"]').appendChild(document.createTextNode(t.detail)),n(e)},setTimeout(()=>{o.style.transitionDuration="0.5s",o.style.opacity=0,r.appendChild(o),setTimeout(()=>{o.style.opacity=1},100)},.5*e*1e3),setTimeout(()=>{o.style.transitionDuration="0.2s",o.style.opacity=0},.5*i.length*1e3+3e3+.2*e*1e3)}),setTimeout(()=>{r.clearChildren(),O=!1},.7*i.length*1e3+3e3);t=Object.keys(t?.result?.notificationList||{});0!==t.length&&await q(e+"/notification/open",{notificationIdList:t})}},"showNotification"),R={},k=(e(R,{fetchSplitPermissionList:()=>j,getRequest:()=>k}),t((t,o={})=>{var e=o&&Object.keys(o).map(e=>e+"="+o[e]).join("&");return fetch(e?t+"?"+e:t,{method:"GET",credentials:"same-origin",timeout:3e4}).then(e=>!e.error&&e.body&&e.json?e.json():null).then(e=>(console.log({_url:t,json:e}),e)).catch(e=>(console.error("[fatal] error @getRequest:",e),null))},"getRequest")),j=t(e=>{return k(e+"/session/splitPermissionList")},"fetchSplitPermissionList"),N=u,_=R,D=l,M=s,P=t(()=>{return(new Error).stack.replace(/^Error\n.*\n.*\n/,"")},"getCaller"),F=t(()=>{void 0===Element.prototype.clearChildren&&Object.defineProperty(Element.prototype,"clearChildren",{configurable:!0,enumerable:!1,value(){for(;this.firstChild;)this.removeChild(this.lastChild)}}),void 0===window.argNamed&&(window.argNamed=e=>{const t={};return Object.keys(e).forEach(o=>{Array.isArray(e[o])?Object.assign(t,e[o].reduce((e,t)=>{if(void 0===t)throw new Error(`[error] flat argument by list can only contain function but: ${typeof t} @${o}
===== maybe you need make func exported like  module.exports = { func, } =====`);if("function"!=typeof t)throw new Error(`[error] flat argument by list can only contain function but: ${typeof t} @`+o);return e[t.name]=t,e},{})):"object"==typeof e[o]&&null!==e[o]?Object.assign(t,e[o]):t[o]=e[o]}),t})},"monkeyPatch"),B=t(e=>{e&&e.redirect&&(window.location.href=e.redirect)},"redirect"),u={},x=(e(u,{_:()=>Y,lookupResponse:()=>V,registerRequestId:()=>U}),{}),U=t(({requestId:e})=>{e&&(x[e]=!0)},"registerRequestId"),V=t(async({fetchResponseList:e,showOcrResult:t})=>{var o=Object.keys(x).join(",");if(0!==o.length){e=await e({requestIdListStr:o});if(console.log({responseListResult:e}),e&&e.result){const n={};Object.entries(e.result).forEach(([e,t])=>{!0!==t.waiting&&t.result&&void 0!==t.result.resultText&&(n[e]=t.result,delete x[e])}),0!==Object.keys(n).length&&(o=Object.values(n)[0]["resultText"],t({resultText:o}))}}},"lookupResponse"),Y={},R={},X=(e(R,{default:()=>G,getFetchResponseList:()=>X}),t(({apiEndpoint:t,getRequest:o})=>({requestIdListStr:e})=>{return o(t+"/response/list",{requestIdListStr:e})},"getFetchResponseList")),G={},l={},H=(e(l,{default:()=>$,getOnSubmitUploadForm:()=>H}),t(({uploadFile:t,registerRequestId:o})=>async()=>{var e=await t(),e=(console.log({uploadFileResult:e}),e)["requestId"];o({requestId:e})},"getOnSubmitUploadForm")),$={},s={},Q=(e(s,{getUploadFile:()=>Q,setOnSubmitUploadForm:()=>z,showMessage:()=>J,showOcrResult:()=>K}),t(({apiEndpoint:e,postFormRequest:o})=>{const n=e+"/form/upload";return()=>{var e=document.querySelector("#profileImageInput").files[0],t=new FormData;return t.append("file",e),o(n,t)}},"getUploadFile")),z=t(({onSubmitUploadForm:t})=>{document.querySelector("#uploadProfileForm").onsubmit=e=>{e.preventDefault(),t(),window.dispatchEvent(new CustomEvent("ace-banner",{detail:{isVisible:!0,title:"[成功]",message:"ファイルをアップロードしました。"},bubbles:!0}))}},"setOnSubmitUploadForm"),J=t(({messageResult:e})=>{document.querySelector("#messageContent").value=e.result.jsonContent},"showMessage"),K=t(({resultText:e})=>{document.querySelector("#ocrResult").value=e,window.dispatchEvent(new CustomEvent("ace-banner",{detail:{isVisible:!0,title:"[成功]",message:"テキストの読み取りに成功しました。"},bubbles:!0}))},"showOcrResult"),e={},A=(e.setting=o,e.output=s,e.core=u,e.input=R,e.action=l,e.lib=i,e),o=t(async()=>{A.lib.xdevkit.output.switchLoading(!0),A.lib.monkeyPatch();const t={};["upload3.ejs","nav-sidemenu-list.ejs","nav2.ejs"].forEach(e=>{t[e]=!1}),window.addEventListener("ace-init",e=>{console.log("initialized: "+e.detail.from),t[e.detail.from]=!0,Object.values(t).every(e=>e)&&A.lib.xdevkit.output.switchLoading(!1)})},"main");A.app={main:o},A.app.main(),window.a=A})();