!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function e(){if(void 0===arguments[0])return console.error("SweetAlert2 expects at least 1 attribute!"),!1;var e=c({},D);switch(typeof arguments[0]){case"string":e.title=arguments[0],e.text=arguments[1]||"",e.type=arguments[2]||"";break;case"object":c(e,arguments[0]),e.extraParams=arguments[0].extraParams,"email"===e.input&&null===e.inputValidator&&(e.inputValidator=function(e){return new Promise(function(t,n){var o=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;o.test(e)?t():n("Invalid email address")})});break;default:return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}I(e);var n=m();return new Promise(function(o,r){function a(e,t){for(var n=g(),o=0;o<n.length;o++){e+=t,e===n.length?e=0:-1===e&&(e=n.length-1);var i=n[e];if(i.offsetWidth||i.offsetHeight||i.getClientRects().length)return i.focus()}}function l(n){var o=n||window.event,i=o.keyCode||o.which;if(-1!==[9,13,32,27].indexOf(i)){for(var l=o.target||o.srcElement,c=g(),s=-1,u=0;u<c.length;u++)if(l===c[u]){s=u;break}9===i?(o.shiftKey?a(s,-1):a(s,1),V(o)):13===i||32===i?-1===s&&O(M,o):27===i&&e.allowEscapeKey===!0&&(t.closeModal(e.onClose),r("esc"))}}e.timer&&(n.timeout=setTimeout(function(){t.closeModal(e.onClose),r("timer")},e.timer));var c=function(){switch(e.input){case"select":return E(n,i.select);case"radio":return n.querySelector("."+i.radio+" input:checked")||n.querySelector("."+i.radio+" input:first-child");case"checkbox":return n.querySelector("#"+i.checkbox);case"textarea":return E(n,i.textarea);default:return E(n,i.input)}},u=function(){var t=c();switch(e.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return e.inputAutoTrim?t.value.trim():t.value}};e.input&&setTimeout(function(){var e=c();e&&C(e)},0);var d,f=function(n){e.showLoaderOnConfirm&&t.showLoading(),e.preConfirm?e.preConfirm(n,e.extraParams).then(function(i){t.closeModal(e.onClose),o(i||n)},function(e){t.hideLoading(),e&&t.showValidationError(e)}):(t.closeModal(e.onClose),o(n))},m=function(o){var i=o||window.event,a=i.target||i.srcElement,l=y(),c=h(),d=l===a||l.contains(a),p=c===a||c.contains(a),m=w(n,"visible");switch(i.type){case"mouseover":case"mouseup":e.buttonsStyling&&(d?l.style.backgroundColor=s(e.confirmButtonColor,-.1):p&&(c.style.backgroundColor=s(e.cancelButtonColor,-.1)));break;case"mouseout":e.buttonsStyling&&(d?l.style.backgroundColor=e.confirmButtonColor:p&&(c.style.backgroundColor=e.cancelButtonColor));break;case"mousedown":e.buttonsStyling&&(d?l.style.backgroundColor=s(e.confirmButtonColor,-.2):p&&(c.style.backgroundColor=s(e.cancelButtonColor,-.2)));break;case"click":if(d&&m)if(e.input){var v=u();e.inputValidator?(t.disableInput(),e.inputValidator(v,e.extraParams).then(function(){t.enableInput(),f(v)},function(e){t.enableInput(),e&&t.showValidationError(e)})):f(v)}else f(!0);else p&&m&&(t.closeModal(e.onClose),r("cancel"))}},q=n.querySelectorAll("button");for(d=0;d<q.length;d++)q[d].onclick=m,q[d].onmouseover=m,q[d].onmouseout=m,q[d].onmousedown=m;b().onclick=function(){t.closeModal(e.onClose),r("close")},v().onclick=function(){e.allowOutsideClick&&(t.closeModal(e.onClose),r("overlay"))};var M=y(),P=h();e.reverseButtons?M.parentNode.insertBefore(P,M):M.parentNode.insertBefore(M,P),p.previousWindowKeyDown=window.onkeydown,window.onkeydown=l,e.buttonsStyling&&(M.style.borderLeftColor=e.confirmButtonColor,M.style.borderRightColor=e.confirmButtonColor),t.showLoading=t.enableLoading=function(){k(M,"loading"),k(n,"loading"),M.disabled=!0,P.disabled=!0},t.hideLoading=t.disableLoading=function(){x(M,"loading"),x(n,"loading"),M.disabled=!1,P.disabled=!1},t.enableButtons=function(){M.disabled=!1,P.disabled=!1},t.disableButtons=function(){M.disabled=!0,P.disabled=!0},t.enableConfirmButton=function(){M.disabled=!1},t.disableConfirmButton=function(){M.disabled=!0},t.enableInput=function(){var e=c();if("radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!1;else e.disabled=!1},t.disableInput=function(){var e=c();if("radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!0;else e.disabled=!0},t.showValidationError=function(e){var t=n.querySelector("."+i.validationerror);t.innerHTML=e,B(t);var o=c();C(o),k(o,"error")},t.resetValidationError=function(){var e=n.querySelector("."+i.validationerror);L(e);var t=c();t&&x(t,"error")},t.enableButtons(),t.hideLoading(),t.resetValidationError();var T,H=["input","select","radio","checkbox","textarea"];for(d=0;d<H.length;d++){var N=i[H[d]];for(T=E(n,N);T.attributes.length>0;)T.removeAttribute(T.attributes[0].name);for(var D in e.inputAttributes)T.setAttribute(D,e.inputAttributes[D]);T.className=N,e.inputClass&&k(T,e.inputClass),A(T)}var I;switch(e.input){case"text":case"email":case"password":case"file":T=E(n,i.input),T.value=e.inputValue,T.placeholder=e.inputPlaceholder,T.type=e.input,S(T);break;case"select":var U=E(n,i.select);if(U.innerHTML="",e.inputPlaceholder){var W=document.createElement("option");W.innerHTML=e.inputPlaceholder,W.value="",W.disabled=!0,W.selected=!0,U.appendChild(W)}I=function(t){for(var n in t){var o=document.createElement("option");o.value=n,o.innerHTML=t[n],e.inputValue===n&&(o.selected=!0),U.appendChild(o)}S(U),U.focus()};break;case"radio":var z=E(n,i.radio);z.innerHTML="",I=function(t){for(var n in t){var o=1,r=document.createElement("input"),a=document.createElement("label"),l=document.createElement("span");r.type="radio",r.name=i.radio,r.value=n,r.id=i.radio+"-"+o++,e.inputValue===n&&(r.checked=!0),l.innerHTML=t[n],a.appendChild(r),a.appendChild(l),a["for"]=r.id,z.appendChild(a)}S(z);var c=z.querySelectorAll("input");c.length&&c[0].focus()};break;case"checkbox":var R=E(n,i.checkbox),Z=n.querySelector("#"+i.checkbox);Z.value=1,Z.checked=Boolean(e.inputValue);var F=R.getElementsByTagName("span");F.length&&R.removeChild(F[0]),F=document.createElement("span"),F.innerHTML=e.inputPlaceholder,R.appendChild(F),S(R);break;case"textarea":var $=E(n,i.textarea);$.value=e.inputValue,$.placeholder=e.inputPlaceholder,S($);break;case null:break;default:console.error('SweetAlert2: Unexpected type of input! Expected "text" or "email" or "password", "select", "checkbox", "textarea" or "file", got "'+e.input+'"')}"select"!==e.input&&"radio"!==e.input||(e.inputOptions instanceof Promise?(t.showLoading(),e.inputOptions.then(function(e){t.hideLoading(),I(e)})):"object"==typeof e.inputOptions?I(e.inputOptions):console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got "+typeof e.inputOptions)),K(),j(e.animation,e.onOpen),a(-1,1)})}function t(){var n=arguments,o=m();return null===o&&(t.init(),o=m()),w(o,"visible")&&N(),e.apply(this,n)}var n="swal2-",o=function(e){var t={};for(var o in e)t[e[o]]=n+e[o];return t},i=o(["container","modal","overlay","close","content","spacer","confirm","cancel","icon","image","input","select","radio","checkbox","textarea","validationerror"]),r=o(["success","warning","info","question","error"]),a={title:"",text:"",html:"",type:null,customClass:"",animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,showCloseButton:!1,showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,onOpen:null,onClose:null},l='<div class="'+i.overlay+'" tabIndex="-1"></div><div class="'+i.modal+'" style="display: none" tabIndex="-1"><div class="'+i.icon+" "+r.error+'"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="'+i.icon+" "+r.question+'">?</div><div class="'+i.icon+" "+r.warning+'">!</div><div class="'+i.icon+" "+r.info+'">i</div><div class="'+i.icon+" "+r.success+'"><span class="line tip"></span> <span class="line long"></span><div class="placeholder"></div> <div class="fix"></div></div><img class="'+i.image+'"><h2></h2><div class="'+i.content+'"></div><input class="'+i.input+'"><select class="'+i.select+'"></select><div class="'+i.radio+'"></div><label for="'+i.checkbox+'" class="'+i.checkbox+'"><input type="checkbox" id="'+i.checkbox+'"></label><textarea class="'+i.textarea+'"></textarea><div class="'+i.validationerror+'"></div><hr class="'+i.spacer+'"><button class="'+i.confirm+'">OK</button><button class="'+i.cancel+'">Cancel</button><span class="'+i.close+'">&times;</span></div>',c=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},s=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;3>o;o++){var i=parseInt(e.substr(2*o,2),16);i=Math.round(Math.min(Math.max(0,i+i*t),255)).toString(16),n+=("00"+i).substr(i.length)}return n},u=function(e){return"function"==typeof e},d=n+"mediaquery",p={previousWindowKeyDown:null,previousActiveElement:null},f=function(e){return document.querySelector("."+e)},m=function(){return f(i.modal)},v=function(){return f(i.overlay)},y=function(){return f(i.confirm)},h=function(){return f(i.cancel)},b=function(){return f(i.close)},g=function(){return[y(),h()].concat(Array.prototype.slice.call(m().querySelectorAll("button:not([class^="+n+"]), input:not([type=hidden]), textarea, select")))},w=function(e,t){return e.classList.contains(t)},C=function(e){e.focus();var t=e.value;e.value="",e.value=t},k=function(e,t){if(e&&t){var n=t.split(/\s+/);n.forEach(function(t){e.classList.add(t)})}},x=function(e,t){if(e&&t){var n=t.split(/\s+/);n.forEach(function(t){e.classList.remove(t)})}},E=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(w(e.childNodes[n],t))return e.childNodes[n]},S=function(e){e.style.opacity="",e.style.display="block"},B=function(e){if(e&&!e.length)return S(e);for(var t=0;t<e.length;++t)S(e[t])},A=function(e){e.style.opacity="",e.style.display="none"},L=function(e){if(e&&!e.length)return A(e);for(var t=0;t<e.length;++t)A(e[t])},q=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},M=function(e){var t=e.style.display;e.style.left="-9999px",e.style.display="block";var n=e.clientHeight;return e.style.left="",e.style.display=t,"-"+parseInt(n/2,10)+"px"},P=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){var i=+e.style.opacity+(new Date-n)/100;e.style.opacity=i>1?1:i,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()}},T=function(e,t){if(+e.style.opacity>0){t=t||16;var n=e.style.opacity,o=+new Date,i=function(){var r=new Date-o,a=+e.style.opacity-r/(100*n);e.style.opacity=a,o=+new Date,+e.style.opacity>0?setTimeout(i,t):A(e)};i()}},O=function(e){if("function"==typeof MouseEvent){var t=new MouseEvent("click",{view:window,bubbles:!1,cancelable:!0});e.dispatchEvent(t)}else if(document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!1,!1),e.dispatchEvent(n)}else document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},V=function(e){"function"==typeof e.stopPropagation?(e.stopPropagation(),e.preventDefault()):window.event&&window.event.hasOwnProperty("cancelBubble")&&(window.event.cancelBubble=!0)},H=function(){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),N=function(){var e=m();window.onkeydown=p.previousWindowKeyDown,p.previousActiveElement&&p.previousActiveElement.focus&&p.previousActiveElement.focus(),clearTimeout(e.timeout);var t=document.getElementsByTagName("head")[0],n=document.getElementById(d);n&&t.removeChild(n)},D=c({},a),I=function(e){var t=m();for(var n in e)a.hasOwnProperty(n)||"extraParams"===n||console.warn('SweetAlert2: Unknown parameter "'+n+'"');t.style.width=e.width+"px",t.style.padding=e.padding+"px",t.style.marginLeft=-e.width/2+"px",t.style.background=e.background;var o=document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",l.id=d;var c=5,s=e.width+parseInt(e.width*(c/100)*2,10);l.innerHTML="@media screen and (max-width: "+s+"px) {."+i.modal+" {width: auto !important;left: "+c+"% !important;right: "+c+"% !important;margin-left: 0 !important;}}",o.appendChild(l);var u=t.querySelector("h2"),p=t.querySelector("."+i.content),f=y(),v=h(),b=t.querySelector("."+i.spacer),g=t.querySelector("."+i.close);if(u.innerHTML=e.title.split("\n").join("<br>"),e.text||e.html){if("object"==typeof e.html)if(p.innerHTML="",0 in e.html)for(var w=0;w in e.html;w++)p.appendChild(e.html[w]);else p.appendChild(e.html);else p.innerHTML=e.html||e.text.split("\n").join("<br>");B(p)}else L(p);if(e.showCloseButton?B(g):L(g),t.className=i.modal,e.customClass&&k(t,e.customClass),L(t.querySelectorAll("."+i.icon)),e.type){var C=!1;for(var E in r)if(e.type===E){C=!0;break}if(!C)return console.error("SweetAlert2: Unknown alert type: "+e.type),!1;var S=t.querySelector("."+i.icon+"."+r[e.type]);switch(B(S),e.type){case"success":k(S,"animate"),k(S.querySelector(".tip"),"animate-success-tip"),k(S.querySelector(".long"),"animate-success-long");break;case"error":k(S,"animate-error-icon"),k(S.querySelector(".x-mark"),"animate-x-mark");break;case"warning":k(S,"pulse-warning")}}var A=t.querySelector("."+i.image);e.imageUrl?(A.setAttribute("src",e.imageUrl),B(A),e.imageWidth?A.setAttribute("width",e.imageWidth):A.removeAttribute("width"),e.imageHeight?A.setAttribute("height",e.imageHeight):A.removeAttribute("height"),A.className=i.image,e.imageClass&&k(A,e.imageClass)):L(A),e.showCancelButton?v.style.display="inline-block":L(v),e.showConfirmButton?q(f,"display"):L(f),e.showConfirmButton||e.showCancelButton?B(b):L(b),f.innerHTML=e.confirmButtonText,v.innerHTML=e.cancelButtonText,e.buttonsStyling&&(f.style.backgroundColor=e.confirmButtonColor,v.style.backgroundColor=e.cancelButtonColor),f.className=i.confirm,k(f,e.confirmButtonClass),v.className=i.cancel,k(v,e.cancelButtonClass),e.buttonsStyling?(k(f,"styled"),k(v,"styled")):(x(f,"styled"),x(v,"styled"),f.style.backgroundColor=f.style.borderLeftColor=f.style.borderRightColor="",v.style.backgroundColor=v.style.borderLeftColor=v.style.borderRightColor=""),e.animation===!0?x(t,"no-animation"):k(t,"no-animation")},j=function(e,t){var n=m();e?(P(v(),10),k(n,"show-swal2"),x(n,"hide-swal2")):B(v()),B(n),p.previousActiveElement=document.activeElement,k(n,"visible"),null!==t&&"function"==typeof t&&t.call(this,n)},K=function(){var e=m();e.style.marginTop=M(e)};return t.queue=function(e){return new Promise(function(n,o){!function i(r,a){var l=null;u(e)?l=e(r):r<e.length&&(l=e[r]),l?t(l).then(function(){i(r+1,a)},function(e){o(e)}):n()}(0)})},t.close=t.closeModal=function(e){var t=m();x(t,"show-swal2"),k(t,"hide-swal2"),x(t,"visible");var n=t.querySelector("."+i.icon+"."+r.success);x(n,"animate"),x(n.querySelector(".tip"),"animate-success-tip"),x(n.querySelector(".long"),"animate-success-long");var o=t.querySelector("."+i.icon+"."+r.error);x(o,"animate-error-icon"),x(o.querySelector(".x-mark"),"animate-x-mark");var a=t.querySelector("."+i.icon+"."+r.warning);x(a,"pulse-warning"),H&&!w(t,"no-animation")?t.addEventListener(H,function l(){t.removeEventListener(H,l),w(t,"hide-swal2")&&(A(t),T(v(),0)),N()}):(A(t),A(v()),N()),null!==e&&"function"==typeof e&&e.call(this,t)},t.clickConfirm=function(){y().click()},t.clickCancel=function(){h().click()},t.init=function(){if("undefined"==typeof document)return void console.log("SweetAlert2 requires document to initialize");if(!document.getElementsByClassName(i.container).length){var e=document.createElement("div");e.className=i.container,e.innerHTML=l,document.body.appendChild(e);var n=m(),o=E(n,i.input),r=E(n,i.select),a=n.querySelector("#"+i.checkbox),c=E(n,i.textarea);o.oninput=function(){t.resetValidationError()},o.onkeyup=function(e){e.stopPropagation(),13===e.keyCode&&t.clickConfirm()},r.onchange=function(){t.resetValidationError()},a.onchange=function(){t.resetValidationError()},c.oninput=function(){t.resetValidationError()},window.addEventListener("resize",K,!1)}},t.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");c(D,e)},t.resetDefaults=function(){D=c({},a)},t.version="4.1.5",window.sweetAlert=window.swal=t,function(){"complete"===document.readyState||"interactive"===document.readyState&&document.body?t.init():document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e,!1),t.init()},!1)}(),"function"==typeof Promise?Promise.prototype.done=Promise.prototype.done||function(){return this["catch"](function(){})}:console.warn("SweetAlert2: Please inlude Promise polyfill BEFORE including sweetalert2.js if IE10+ support needed."),t});
/*! alertify - v0.3.1 - Fabien Doiron */
!function(a,b){"use strict";var d,c=a.document;d=function(){var i,j,k,l,m,n,o,p,q,r,s,t,u,d={},e={},f=!1,g={ENTER:13,ESC:27,SPACE:32},h=[];return e={buttons:{holder:'<nav class="alertify-buttons">{{buttons}}</nav>',submit:'<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',ok:'<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',cancel:'<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'},input:'<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',message:'<p class="alertify-message">{{message}}</p>',log:'<article class="alertify-log{{class}}">{{message}}</article>'},u=function(){var a,d,e=!1,f=c.createElement("fakeelement"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(a in g)if(f.style[a]!==b){d=g[a],e=!0;break}return{type:d,supported:e}},i=function(a){return c.getElementById(a)},d={labels:{ok:"OK",cancel:"Cancel"},delay:5e3,buttonReverse:!1,buttonFocus:"ok",transition:b,addListeners:function(a){var i,n,o,p,q,b="undefined"!=typeof k,d="undefined"!=typeof j,e="undefined"!=typeof t,f="",h=this;i=function(b){return"undefined"!=typeof b.preventDefault&&b.preventDefault(),o(b),"undefined"!=typeof t&&(f=t.value),"function"==typeof a&&("undefined"!=typeof t?a(!0,f):a(!0)),!1},n=function(b){return"undefined"!=typeof b.preventDefault&&b.preventDefault(),o(b),"function"==typeof a&&a(!1),!1},o=function(a){h.hide(),h.unbind(c.body,"keyup",p),h.unbind(l,"focus",q),b&&h.unbind(k,"click",i),d&&h.unbind(j,"click",n)},p=function(a){var b=a.keyCode;(b===g.SPACE&&!e||e&&b===g.ENTER)&&i(a),b===g.ESC&&d&&n(a)},q=function(a){e?t.focus():!d||h.buttonReverse?k.focus():j.focus()},this.bind(l,"focus",q),this.bind(m,"focus",q),b&&this.bind(k,"click",i),d&&this.bind(j,"click",n),this.bind(c.body,"keyup",p),this.transition.supported||this.setFocus()},bind:function(a,b,c){"function"==typeof a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},handleErrors:function(){if("undefined"!=typeof a.onerror){var b=this;return a.onerror=function(a,c,d){b.error("["+a+" on line "+d+" of "+c+"]",0)},!0}return!1},appendButtons:function(a,b){return this.buttonReverse?b+a:a+b},build:function(a){var b="",c=a.type,f=a.message,g=a.cssClass||"";switch(b+='<div class="alertify-dialog">',b+='<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>',"none"===d.buttonFocus&&(b+='<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'),"prompt"===c&&(b+='<div id="alertify-form">'),b+='<article class="alertify-inner">',b+=e.message.replace("{{message}}",f),"prompt"===c&&(b+=e.input),b+=e.buttons.holder,b+="</article>","prompt"===c&&(b+="</div>"),b+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>',b+="</div>",c){case"confirm":b=b.replace("{{buttons}}",this.appendButtons(e.buttons.cancel,e.buttons.ok)),b=b.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"prompt":b=b.replace("{{buttons}}",this.appendButtons(e.buttons.cancel,e.buttons.submit)),b=b.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"alert":b=b.replace("{{buttons}}",e.buttons.ok),b=b.replace("{{ok}}",this.labels.ok)}return q.className="alertify alertify-"+c+" "+g,p.className="alertify-cover",b},close:function(a,b){var e,f,c=b&&!isNaN(b)?+b:this.delay,d=this;this.bind(a,"click",function(){e(a)}),f=function(a){a.stopPropagation(),d.unbind(this,d.transition.type,f),r.removeChild(this),r.hasChildNodes()||(r.className+=" alertify-logs-hidden")},e=function(a){"undefined"!=typeof a&&a.parentNode===r&&(d.transition.supported?(d.bind(a,d.transition.type,f),a.className+=" alertify-log-hide"):(r.removeChild(a),r.hasChildNodes()||(r.className+=" alertify-logs-hidden")))},0!==b&&setTimeout(function(){e(a)},c)},dialog:function(a,b,d,e,g){o=c.activeElement;var i=function(){r&&null!==r.scrollTop&&p&&null!==p.scrollTop||i()};if("string"!=typeof a)throw new Error("message must be a string");if("string"!=typeof b)throw new Error("type must be a string");if("undefined"!=typeof d&&"function"!=typeof d)throw new Error("fn must be a function");return this.init(),i(),h.push({type:b,message:a,callback:d,placeholder:e,cssClass:g}),f||this.setup(),this},extend:function(a){if("string"!=typeof a)throw new Error("extend method must have exactly one paramter");return function(b,c){return this.log(b,a,c),this}},hide:function(){var a,b=this;h.splice(0,1),h.length>0?this.setup(!0):(f=!1,a=function(c){c.stopPropagation(),b.unbind(q,b.transition.type,a)},this.transition.supported?(this.bind(q,this.transition.type,a),q.className="alertify alertify-hide alertify-hidden"):q.className="alertify alertify-hide alertify-hidden alertify-isHidden",p.className="alertify-cover alertify-cover-hidden",o.focus())},init:function(){c.createElement("nav"),c.createElement("article"),c.createElement("section"),null==i("alertify-cover")&&(p=c.createElement("div"),p.setAttribute("id","alertify-cover"),p.className="alertify-cover alertify-cover-hidden",c.body.appendChild(p)),null==i("alertify")&&(f=!1,h=[],q=c.createElement("section"),q.setAttribute("id","alertify"),q.className="alertify alertify-hidden",c.body.appendChild(q)),null==i("alertify-logs")&&(r=c.createElement("section"),r.setAttribute("id","alertify-logs"),r.className="alertify-logs alertify-logs-hidden",c.body.appendChild(r)),c.body.setAttribute("tabindex","0"),this.transition=u()},log:function(a,b,c){var d=function(){r&&null!==r.scrollTop||d()};return this.init(),d(),r.className="alertify-logs",this.notify(a,b,c),this},notify:function(a,b,d){var e=c.createElement("article");e.className="alertify-log"+("string"==typeof b&&""!==b?" alertify-log-"+b:""),e.innerHTML=a,r.appendChild(e),setTimeout(function(){e.className=e.className+" alertify-log-show"},50),this.close(e,d)},set:function(a){var b;if("object"!=typeof a&&a instanceof Array)throw new Error("args must be an object");for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},setFocus:function(){t?(t.focus(),t.select()):n.focus()},setup:function(a){var g,c=h[0],e=this;f=!0,g=function(a){a.stopPropagation(),e.setFocus(),e.unbind(q,e.transition.type,g)},this.transition.supported&&!a&&this.bind(q,this.transition.type,g),q.innerHTML=this.build(c),l=i("alertify-resetFocus"),m=i("alertify-resetFocusBack"),k=i("alertify-ok")||b,j=i("alertify-cancel")||b,n="cancel"===d.buttonFocus?j:"none"===d.buttonFocus?i("alertify-noneFocus"):k,t=i("alertify-text")||b,s=i("alertify-form")||b,"string"==typeof c.placeholder&&""!==c.placeholder&&(t.value=c.placeholder),a&&this.setFocus(),this.addListeners(c.callback)},unbind:function(a,b,c){"function"==typeof a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}},{alert:function(a,b,c){return d.dialog(a,"alert",b,"",c),this},confirm:function(a,b,c){return d.dialog(a,"confirm",b,"",c),this},extend:d.extend,init:d.init,log:function(a,b,c){return d.log(a,b,c),this},prompt:function(a,b,c,e){return d.dialog(a,"prompt",b,c,e),this},success:function(a,b){return d.log(a,"success",b),this},error:function(a,b){return d.log(a,"error",b),this},set:function(a){d.set(a)},labels:d.labels,debug:d.handleErrors}},"function"==typeof define?define([],function(){return new d}):"undefined"==typeof a.alertify&&(a.alertify=new d)}(this);