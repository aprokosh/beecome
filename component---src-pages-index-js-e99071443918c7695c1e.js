"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{548:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var r=n(294),a={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},o={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],c={CSS:{},springs:{}};function u(e,t,n){return Math.min(Math.max(e,t),n)}function s(e,t){return e.indexOf(t)>-1}function l(e,t){return e.apply(null,t)}var m={arr:function(e){return Array.isArray(e)},obj:function(e){return s(Object.prototype.toString.call(e),"Object")},pth:function(e){return m.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||m.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return m.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return m.hex(e)||m.rgb(e)||m.hsl(e)},key:function(e){return!a.hasOwnProperty(e)&&!o.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function f(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function d(e,t){var n=f(e),r=u(m.und(n[0])?1:n[0],.1,100),a=u(m.und(n[1])?100:n[1],.1,100),o=u(m.und(n[2])?10:n[2],.1,100),i=u(m.und(n[3])?0:n[3],.1,100),s=Math.sqrt(a/r),l=o/(2*Math.sqrt(a*r)),d=l<1?s*Math.sqrt(1-l*l):0,p=l<1?(l*s-i)/d:-i+s;function h(e){var n=t?t*e/1e3:e;return n=l<1?Math.exp(-n*l*s)*(1*Math.cos(d*n)+p*Math.sin(d*n)):(1+p*n)*Math.exp(-n*s),0===e||1===e?e:1-n}return t?h:function(){var t=c.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===h(r+=n)){if(++a>=16)break}else a=0;var o=r*n*1e3;return c.springs[e]=o,o}}function p(e){return void 0===e&&(e=10),function(t){return Math.ceil(u(t,1e-6,1)*e)*(1/e)}}var h,g,v=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,o){return((t(a,o)*e+n(a,o))*e+r(a))*e}function o(e,a,o){return 3*t(a,o)*e*e+2*n(a,o)*e+r(a)}return function(t,n,r,i){if(0<=t&&t<=1&&0<=r&&r<=1){var c=new Float32Array(11);if(t!==n||r!==i)for(var u=0;u<11;++u)c[u]=a(u*e,t,r);return function(e){return t===n&&r===i||0===e||1===e?e:a(s(e),n,i)}}function s(n){for(var i=0,u=1;10!==u&&c[u]<=n;++u)i+=e;--u;var s=i+(n-c[u])/(c[u+1]-c[u])*e,l=o(s,t,r);return l>=.001?function(e,t,n,r){for(var i=0;i<4;++i){var c=o(t,n,r);if(0===c)return t;t-=(a(t,n,r)-e)/c}return t}(n,s,t,r):0===l?s:function(e,t,n,r,o){var i,c,u=0;do{(i=a(c=t+(n-t)/2,r,o)-e)>0?n=c:t=c}while(Math.abs(i)>1e-7&&++u<10);return c}(n,i,i+e,t,r)}}}(),b=(h={linear:function(){return function(e){return e}}},g={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=u(e,1,10),r=u(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){g[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(g).forEach((function(e){var t=g[e];h["easeIn"+e]=t,h["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},h["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},h["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),h);function y(e,t){if(m.fnc(e))return e;var n=e.split("(")[0],r=b[n],a=f(e);switch(n){case"spring":return d(e,t);case"cubicBezier":return l(v,a);case"steps":return l(p,a);default:return l(r,a)}}function E(e){try{return document.querySelectorAll(e)}catch(t){return}}function N(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var i=e[o];t.call(r,i,o,e)&&a.push(i)}return a}function x(e){return e.reduce((function(e,t){return e.concat(m.arr(t)?x(t):t)}),[])}function _(e){return m.arr(e)?e:(m.str(e)&&(e=E(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function w(e,t){return e.some((function(e){return e===t}))}function M(e){var t={};for(var n in e)t[n]=e[n];return t}function k(e,t){var n=M(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function C(e,t){var n=M(e);for(var r in t)n[r]=m.und(e[r])?t[r]:e[r];return n}function I(e){return m.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:m.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):m.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,c=parseInt(a[3],10)/100,u=a[4]||1;function s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==i)t=n=r=c;else{var l=c<.5?c*(1+i):c+i-c*i,m=2*c-l;t=s(m,l,o+1/3),n=s(m,l,o),r=s(m,l,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+u+")"}(e):void 0;var t,n}function O(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function T(e,t){return m.fnc(e)?e(t.target,t.id,t.total):e}function j(e,t){return e.getAttribute(t)}function P(e,t,n){if(w([n,"deg","rad","turn"],O(t)))return t;var r=c.CSS[t+n];if(!m.und(r))return r;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+n;var i=100/a.offsetWidth;o.removeChild(a);var u=i*parseFloat(t);return c.CSS[t+n]=u,u}function D(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?P(e,a,n):a}}function B(e,t){return m.dom(e)&&!m.inp(e)&&(!m.nil(j(e,t))||m.svg(e)&&e[t])?"attribute":m.dom(e)&&w(i,t)?"transform":m.dom(e)&&"transform"!==t&&D(e,t)?"css":null!=e[t]?"object":void 0}function A(e){if(m.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function F(e,t,n,r){var a=s(t,"scale")?1:0+function(e){return s(e,"translate")||"perspective"===e?"px":s(e,"rotate")||s(e,"skew")?"deg":void 0}(t),o=A(e).get(t)||a;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),r?P(e,o,r):o}function q(e,t,n,r){switch(B(e,t)){case"transform":return F(e,t,r,n);case"css":return D(e,t,n);case"attribute":return j(e,t);default:return e[t]||0}}function S(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=O(e)||0,a=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function G(e,t){if(m.col(e))return I(e);if(/\s/g.test(e))return e;var n=O(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function L(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function R(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var o=n.getItem(a);a>0&&(r+=L(t,o)),t=o}return r}function V(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*j(e,"r")}(e);case"rect":return function(e){return 2*j(e,"width")+2*j(e,"height")}(e);case"line":return function(e){return L({x:j(e,"x1"),y:j(e,"y1")},{x:j(e,"x2"),y:j(e,"y2")})}(e);case"polyline":return R(e);case"polygon":return function(e){var t=e.points;return R(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function H(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;m.svg(t)&&m.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),o=j(r,"viewBox"),i=a.width,c=a.height,u=n.viewBox||(o?o.split(" "):[0,0,i,c]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:i,h:c,vW:u[2],vH:u[3]}}function $(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=H(e.el,e.svg),o=r(),i=r(-1),c=r(1),u=n?1:a.w/a.vW,s=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*u;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(c.y-i.y,c.x-i.x)/Math.PI}}function W(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=G(m.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:m.str(e)||t?r.split(n):[]}}function X(e){return N(e?x(m.arr(e)?e.map(_):_(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function Y(e){var t=X(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:A(e)}}}))}function Z(e,t){var n=M(t);if(/^spring/.test(n.easing)&&(n.duration=d(n.easing)),m.arr(e)){var r=e.length;2===r&&!m.obj(e[0])?e={value:e}:m.fnc(t.duration)||(n.duration=t.duration/r)}var a=m.arr(e)?e:[e];return a.map((function(e,n){var r=m.obj(e)&&!m.pth(e)?e:{value:e};return m.und(r.delay)&&(r.delay=n?0:t.delay),m.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return C(e,n)}))}function Q(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=C(function(e){for(var t=N(x(e.map((function(e){return Object.keys(e)}))),(function(e){return m.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)m.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)m.key(a)&&n.push({name:a,tweens:Z(t[a],e)});return n}function z(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=T(e[r],t);m.arr(a)&&1===(a=a.map((function(e){return T(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),o=a.value,i=m.arr(o)?o[1]:o,c=O(i),u=q(t.target,e.name,c,t),s=n?n.to.original:u,l=m.arr(o)?o[0]:s,f=O(l)||O(u),d=c||f;return m.und(i)&&(i=s),a.from=W(l,d),a.to=W(S(i,l),d),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=m.pth(o),a.isPathTargetInsideSVG=a.isPath&&m.svg(t.target),a.isColor=m.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var K={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function J(e,t){Y(e).forEach((function(e){for(var n in t){var r=T(t[n],e),a=e.target,o=O(r),i=q(a,n,o,e),c=S(G(r,o||O(i)),i),u=B(a,n);K[u](a,n,c,e.transforms,!0)}}))}function U(e,t){return N(x(e.map((function(e){return t.map((function(t){return function(e,t){var n=B(e.target,t.name);if(n){var r=z(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!m.und(e)}))}function ee(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var te=0;var ne=[],re=function(){var e;function t(n){for(var r=ne.length,a=0;a<r;){var o=ne[a];o.paused?(ne.splice(a,1),r--):(o.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){oe.suspendWhenDocumentHidden&&(ae()?e=cancelAnimationFrame(e):(ne.forEach((function(e){return e._onDocumentVisibility()})),re()))})),function(){e||ae()&&oe.suspendWhenDocumentHidden||!(ne.length>0)||(e=requestAnimationFrame(t))}}();function ae(){return!!document&&document.hidden}function oe(e){void 0===e&&(e={});var t,n=0,r=0,i=0,c=0,s=null;function l(e){var t=window.Promise&&new Promise((function(e){return s=e}));return e.finished=t,t}var m=function(e){var t=k(a,e),n=k(o,e),r=Q(n,e),i=Y(e.targets),c=U(i,r),u=ee(c,n),s=te;return te++,C(t,{id:s,children:[],animatables:i,animations:c,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(e);l(m);function f(){var e=m.direction;"alternate"!==e&&(m.direction="normal"!==e?"normal":"reverse"),m.reversed=!m.reversed,t.forEach((function(e){return e.reversed=m.reversed}))}function d(e){return m.reversed?m.duration-e:e}function p(){n=0,r=d(m.currentTime)*(1/oe.speed)}function h(e,t){t&&t.seek(e-t.timelineOffset)}function g(e){for(var t=0,n=m.animations,r=n.length;t<r;){var a=n[t],o=a.animatable,i=a.tweens,c=i.length-1,s=i[c];c&&(s=N(i,(function(t){return e<t.end}))[0]||s);for(var l=u(e-s.start-s.delay,0,s.duration)/s.duration,f=isNaN(l)?1:s.easing(l),d=s.to.strings,p=s.round,h=[],g=s.to.numbers.length,v=void 0,b=0;b<g;b++){var y=void 0,E=s.to.numbers[b],x=s.from.numbers[b]||0;y=s.isPath?$(s.value,f*E,s.isPathTargetInsideSVG):x+f*(E-x),p&&(s.isColor&&b>2||(y=Math.round(y*p)/p)),h.push(y)}var _=d.length;if(_){v=d[0];for(var w=0;w<_;w++){d[w];var M=d[w+1],k=h[w];isNaN(k)||(v+=M?k+M:k+" ")}}else v=h[0];K[a.type](o.target,a.property,v,o.transforms),a.currentValue=v,t++}}function v(e){m[e]&&!m.passThrough&&m[e](m)}function b(e){var a=m.duration,o=m.delay,p=a-m.endDelay,b=d(e);m.progress=u(b/a*100,0,100),m.reversePlayback=b<m.currentTime,t&&function(e){if(m.reversePlayback)for(var n=c;n--;)h(e,t[n]);else for(var r=0;r<c;r++)h(e,t[r])}(b),!m.began&&m.currentTime>0&&(m.began=!0,v("begin")),!m.loopBegan&&m.currentTime>0&&(m.loopBegan=!0,v("loopBegin")),b<=o&&0!==m.currentTime&&g(0),(b>=p&&m.currentTime!==a||!a)&&g(a),b>o&&b<p?(m.changeBegan||(m.changeBegan=!0,m.changeCompleted=!1,v("changeBegin")),v("change"),g(b)):m.changeBegan&&(m.changeCompleted=!0,m.changeBegan=!1,v("changeComplete")),m.currentTime=u(b,0,a),m.began&&v("update"),e>=a&&(r=0,m.remaining&&!0!==m.remaining&&m.remaining--,m.remaining?(n=i,v("loopComplete"),m.loopBegan=!1,"alternate"===m.direction&&f()):(m.paused=!0,m.completed||(m.completed=!0,v("loopComplete"),v("complete"),!m.passThrough&&"Promise"in window&&(s(),l(m)))))}return m.reset=function(){var e=m.direction;m.passThrough=!1,m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.loopBegan=!1,m.changeBegan=!1,m.completed=!1,m.changeCompleted=!1,m.reversePlayback=!1,m.reversed="reverse"===e,m.remaining=m.loop,t=m.children;for(var n=c=t.length;n--;)m.children[n].reset();(m.reversed&&!0!==m.loop||"alternate"===e&&1===m.loop)&&m.remaining++,g(m.reversed?m.duration:0)},m._onDocumentVisibility=p,m.set=function(e,t){return J(e,t),m},m.tick=function(e){i=e,n||(n=i),b((i+(r-n))*oe.speed)},m.seek=function(e){b(d(e))},m.pause=function(){m.paused=!0,p()},m.play=function(){m.paused&&(m.completed&&m.reset(),m.paused=!1,ne.push(m),p(),re())},m.reverse=function(){f(),m.completed=!m.reversed,p()},m.restart=function(){m.reset(),m.play()},m.remove=function(e){ce(X(e),m)},m.reset(),m.autoplay&&m.play(),m}function ie(e,t){for(var n=t.length;n--;)w(e,t[n].animatable.target)&&t.splice(n,1)}function ce(e,t){var n=t.animations,r=t.children;ie(e,n);for(var a=r.length;a--;){var o=r[a],i=o.animations;ie(e,i),i.length||o.children.length||r.splice(a,1)}n.length||r.length||t.pause()}oe.version="3.2.1",oe.speed=1,oe.suspendWhenDocumentHidden=!0,oe.running=ne,oe.remove=function(e){for(var t=X(e),n=ne.length;n--;){ce(t,ne[n])}},oe.get=q,oe.set=J,oe.convertPx=P,oe.path=function(e,t){var n=m.str(e)?E(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:H(n),totalLength:V(n)*(r/100)}}},oe.setDashoffset=function(e){var t=V(e);return e.setAttribute("stroke-dasharray",t),t},oe.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?y(t.easing):null,a=t.grid,o=t.axis,i=t.from||0,c="first"===i,u="center"===i,s="last"===i,l=m.arr(e),f=l?parseFloat(e[0]):parseFloat(e),d=l?parseFloat(e[1]):0,p=O(l?e[1]:e)||0,h=t.start||0+(l?f:0),g=[],v=0;return function(e,t,m){if(c&&(i=0),u&&(i=(m-1)/2),s&&(i=m-1),!g.length){for(var b=0;b<m;b++){if(a){var y=u?(a[0]-1)/2:i%a[0],E=u?(a[1]-1)/2:Math.floor(i/a[0]),N=y-b%a[0],x=E-Math.floor(b/a[0]),_=Math.sqrt(N*N+x*x);"x"===o&&(_=-N),"y"===o&&(_=-x),g.push(_)}else g.push(Math.abs(i-b));v=Math.max.apply(Math,g)}r&&(g=g.map((function(e){return r(e/v)*v}))),"reverse"===n&&(g=g.map((function(e){return o?e<0?-1*e:-e:Math.abs(v-e)})))}return h+(l?(d-f)/v:f)*(Math.round(100*g[t])/100)+p}},oe.timeline=function(e){void 0===e&&(e={});var t=oe(e);return t.duration=0,t.add=function(n,r){var a=ne.indexOf(t),i=t.children;function c(e){e.passThrough=!0}a>-1&&ne.splice(a,1);for(var u=0;u<i.length;u++)c(i[u]);var s=C(n,k(o,e));s.targets=s.targets||e.targets;var l=t.duration;s.autoplay=!1,s.direction=t.direction,s.timelineOffset=m.und(r)?l:S(r,l),c(t),t.seek(s.timelineOffset);var f=oe(s);c(f),i.push(f);var d=ee(i,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},oe.easing=y,oe.penner=b,oe.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var ue=n.p+"static/Anya-71eab96af3590402e2153593017f0dbf.jpg",se=n.p+"static/Anya-bd-346335da4bc0ff52fae68540e151a076.jpg",le=(n.p,n.p,n.p,n.p,n.p+"static/d&n-7f1292bc06d810a016e478102dd330fb.jpg"),me=n.p+"static/i&n-3850fb714ff116d207e69d2faad0e8db.jpg",fe=n.p+"static/a&d-7d951ac390c7a08f2958783c3902c983.jpg",de=n.p+"static/i-15b88988a3d9868542b59429d8abcecd.jpg",pe=[{title:"Оценка динамики результативности контрольно-подкатывательной деятельности представителей государства с позиции меня как ее конечного бенефициара",author:"Агент Пи",jobTitle:"Доцент кафедры тикающих часиков",description:"",photo:n.p+"static/a-46aa49fa7a906c6c150e876a4c44c1d9.jpg",isTop:!0},{title:"Самый правдивый гороскоп для Анны Сергеевны Прокошкиной",author:"Группа спикеров N и D",jobTitle:"Секретная должность секретного подразделения астрономии",description:"",photo:le},{title:"Сколько % булочки содержится в каждом из нас?",author:"Спикеры КС",jobTitle:"Санкт-Петербургский Гавсударственный Университет",description:"",photo:me},{title:"23 оттенка Анны Прокошкиной",author:"Творческий союз АкваДискотека",jobTitle:"Доцент филайлогических наук и член Академии Хукоржеств",description:"",photo:fe},{title:"Анна Прокошкина как алкоголь",author:"Хенесиннна Сергеевна",jobTitle:"Заслуженный сомелье по теоретическому исследованию алкоголя первого разряда",description:"",photo:de}],he=function(e){var t=e.title,n=e.author,a=e.jobTitle,o=e.description,i=e.photo;e.isTop;return r.createElement("div",{className:"speaker mt-48"},r.createElement("div",{className:"speaker__info"},r.createElement("div",{className:"speaker__img"},r.createElement("img",{src:i,alt:""})),r.createElement("div",{className:"speaker__text"},r.createElement("p",{className:"speaker__author"},n),a&&r.createElement("p",{className:"speaker__job-title"},a))),r.createElement("h3",{className:"speaker__title"},t),r.createElement("p",{className:"speaker__description"},o||"Этот спикер пока не предоставил описание своего доклада. Возможно, оно появится здесь позже, а возможно он сохранит его в тайне."))},ge=function(){var e=r.useState(""),t=e[0],n=e[1];return r.createElement(r.Fragment,null,r.createElement("div",{className:"preview-img"}),r.createElement("main",{className:"main"},r.createElement("title",null,"GORGI Conf 2021"),r.createElement("section",{className:"section"},r.createElement("h1",{className:"section__title"},"Поздравляем",r.createElement("br",null),r.createElement("span",{className:"text-accent"},"— теперь ты на шаг ближе к CORGI Conf!"),r.createElement("br",null),r.createElement("span",{role:"img","aria-label":"Party popper emojis"},"🎉🎉🎉")),r.createElement("div",null,r.createElement("p",{className:"abbr"},r.createElement("span",{className:"abbr_color"},"C")," — Consortium"),r.createElement("p",{className:"abbr"},r.createElement("span",{className:"abbr_color"},"O")," — Of"),r.createElement("p",{className:"abbr"},r.createElement("span",{className:"abbr_color"},"R")," — Researchers"),r.createElement("p",{className:"abbr"},r.createElement("span",{className:"abbr_color"},"G")," — Gorgeous"),r.createElement("p",{className:"abbr"},r.createElement("span",{className:"abbr_color"},"I")," — Individuals")),r.createElement("a",{href:"#form",className:"button mt-48"},"Хочу на CORGI")),r.createElement("section",{className:"section mt-96"},r.createElement("h2",{className:"title"},"Почему я здесь?"),r.createElement("p",{className:"text"},"Если вы получили эту ссылку, значит вы были отобраны для участия в ",r.createElement("span",{className:"text-accent"},"CORGI 2021")," ",r.createElement("span",{role:"img","aria-label":"Sunglasses smiley emoji"},"😎"),r.createElement("br",null),r.createElement("br",null),"Наш высокопрофессиональный оргкомитет долго, тщательно и с особым вниманием к деталям отбирает самых лучших исследователей, чтобы дать им возможность подготовить самое звёздное исследование и презентовать его на конференции. В этом году вам повезло и вы стали одним из этих счастливчиков! Естественно не просто так, а потому что вы действительно"," ",r.createElement("span",{className:"text-accent"},"Gorgeous Individual"),".",r.createElement("br",null),r.createElement("br",null),"Вы можете зарегистрироваться сейчас или сначала ",r.createElement("a",{href:"#agenda",className:"text-accent"},"ознакомиться с программой"),".",r.createElement("a",{href:"#form",className:"button mt-48"},"Хочу регистрацию"))),r.createElement("section",{className:"section mt-96",id:"info"},r.createElement("h2",{className:"title"},"Основная информация"),r.createElement("ul",{className:"list-ul"},r.createElement("li",{className:"text"},"24 сентября, 23:00"),r.createElement("li",{className:"text"},"каждый приглашённый спикер (или группа спикеров) представляет свою презентацию"),r.createElement("li",{className:"text"},"тематика, формат, длительность презентации — любая"),r.createElement("li",{className:"text text-accent"},"поддержка, апплодисменты, веселье и welcome-pack гарантированы!"))),r.createElement("section",{className:"section mt-96",id:"agenda"},r.createElement("h2",{className:"title"},"Программа"),r.createElement("p",{className:"text"},"Пока мы не можем раскрыть все карты, но каждый день будем раскрывать по одному выступлению, чтобы было интереснее следить за наполнением конференции."),r.createElement("div",{className:"speakers-wrapper"},pe.map((function(e){return r.createElement(he,e)}))),r.createElement("a",{href:"#form",className:"button mt-48"},"Регистрация на CORGI")),r.createElement("section",{className:"section mt-96",id:"form"},r.createElement("h2",{className:"title"},"Регистрация"),r.createElement("p",{className:"text"},"Чтобы мы знали, что вы — именно тот, кто нам нужен — пожалуйста,"," ",r.createElement("span",{className:"text-accent"},"ответьте на несколько вопросов"),"."),r.createElement("div",{className:"question"},!t&&r.createElement(r.Fragment,null,r.createElement("p",{className:"text mt-48 question__text"},"Являетесь ли вы хорошим мальчиком/девочкой?"),r.createElement("div",{className:"question__buttons"},r.createElement("button",{className:"button mt-24",onClick:function(){return n("goodgirl")}},"Да"),r.createElement("button",{className:"button button_disabled mt-24",disabled:!0},"Нет")))||"goodgirl"===t&&r.createElement(r.Fragment,null,r.createElement("p",{className:"text mt-48 question__text"},"Это вы на фото?"),r.createElement("img",{src:ue,alt:"",className:"question__photo mt-24"}),r.createElement("div",{className:"question__buttons"},r.createElement("button",{className:"button mt-24",onClick:function(){return n("Anya")}},"Да"),r.createElement("button",{className:"button button_disabled mt-24",disabled:!0},"Нет")))||"Anya"===t&&r.createElement("p",{className:"title"},"Поздравляем",r.createElement("br",null),r.createElement("span",{className:"title text-accent"},"— вы участник CORGI Conf!"),r.createElement("br",null),r.createElement("span",{role:"img","aria-label":"Party popper emojis"},"🎉🎉🎉"),r.createElement("img",{src:se,alt:"",className:"question__photo mt-24"}),r.createElement("a",{href:"#info",className:"button mt-48"},"К основной инфе"))))),r.createElement("footer",{className:"section footer"},r.createElement("p",{className:"footer__text"},"По всем вопросам и предложениям",r.createElement("br",null),"обращаться к координатору:"," "),r.createElement("ul",{className:"list-ul footer__list"},r.createElement("li",{className:"text"},r.createElement("a",{href:"https://vk.com/inna.netu",className:"footer__text_accent"},"VK")),r.createElement("li",{className:"text"},r.createElement("a",{href:"https://t.me/ne_tum",className:"footer__text_accent"},"Telegram")),r.createElement("li",{className:"text"},r.createElement("a",{href:"https://www.instagram.com/ne_tumannaya/",className:"footer__text_accent"},"Instagram")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e99071443918c7695c1e.js.map