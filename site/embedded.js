!function(){"use strict";var e;function i(){if(null==e){var i=function(){var e={};return function(i,n,t){for(;t=n.exec(i);)e[decodeURIComponent(t[1])]=decodeURIComponent(t[2])}(window.location.search.substring(1).replace(/\+/g,"%20"),/([^&=]+)=?([^&]*)/g),e}();e="referrer"in i?/^https:\/\/medium.com\//.test(i.referrer):!("auto"in i)}return e}function n(e){var i=e||window.innerWidth;return i>999?650:i>599?575:400}function t(e,i){if(window.top!==window.self){var n={sender:"Flourish",context:"iframe.resize",method:"resize",height:e,src:window.location.toString()};if(i)for(var t in i)n[t]=i[t];window.parent.postMessage(JSON.stringify(n),"*")}}function o(){return-1!==navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")}function r(e){window.addEventListener("message",function(i){if(null!=i.source&&(i.origin===document.location.origin||i.origin.match(/\/\/localhost:\d+$|\.flourish\.(?:local(:\d+)?|rocks|studio)$/))){var n;try{n=JSON.parse(i.data)}catch(e){return void console.warn("Unexpected non-JSON message: "+JSON.stringify(i.data))}if("Flourish"===n.sender){for(var t=document.querySelectorAll("iframe"),o=0;o<t.length;o++)if(t[o].contentWindow==i.source||t[o].contentWindow==i.source.parent)return void e(n,t[o]);console.warn("could not find frame",n)}}}),o()&&window.addEventListener("resize",d)}function d(){for(var e=document.querySelectorAll(".flourish-embed"),i=0;i<e.length;i++){var n=e[i];if(!n.getAttribute("data-width"))n.querySelector("iframe").style.width=n.offsetWidth+"px"}}!function(){if(window.top!==window.self){var e,d={isFixedHeight:i,getHeightForBreakpoint:n,startEventListeners:r,notifyParentWindow:t,isSafari:o},a=!0;Flourish.uploadImage=function(e){if("story_editor"!==Flourish.environment)throw"Invalid upload request";var i={sender:"Flourish",method:"request-upload",name:e.name,accept:e.accept};window.parent.postMessage(JSON.stringify(i),"*")},Flourish.setHeight=function(i){Flourish.fixed_height||(e=i,a=null==i,d.notifyParentWindow(i))},Flourish.checkHeight=function(){var e=Flourish.__container_height;null!=e?(Flourish.fixed_height=!0,d.notifyParentWindow(e)):d.isFixedHeight()?Flourish.fixed_height=!0:(Flourish.fixed_height=!1,s())},Flourish.fixed_height=d.isFixedHeight(),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",u):u()}else Flourish.setHeight=function(){};function s(){var i;Flourish.fixed_height||(i=a||null==e?d.getHeightForBreakpoint():e)!==window.innerHeight&&d.notifyParentWindow(i)}function u(){s(),window.addEventListener("resize",s)}}()}();
//# sourceMappingURL=embedded.js.map