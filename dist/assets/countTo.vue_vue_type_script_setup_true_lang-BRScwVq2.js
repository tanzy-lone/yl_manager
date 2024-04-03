import{aO as F,aP as N,u as C,a as x,P as T,n as k,d as D,aJ as P,Q as $,aQ as G,o as z,c as W,C as X,U as j}from"./index-nCSzDAXn.js";function q(e){return F()?(N(e),!0):!1}function l(e){return typeof e=="function"?e():C(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function J(e,r=!1,t="Timeout"){return new Promise((u,s)=>{setTimeout(r?()=>s(t):u,e)})}function E(e){return e}const M={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]},R=Object.assign({},{linear:E},M);function U([e,r,t,u]){const s=(a,n)=>1-3*n+3*a,o=(a,n)=>3*n-6*a,c=a=>3*a,f=(a,n,i)=>((s(n,i)*a+o(n,i))*a+c(n))*a,d=(a,n,i)=>3*s(n,i)*a*a+2*o(n,i)*a+c(n),m=a=>{let n=a;for(let i=0;i<4;++i){const b=d(n,e,t);if(b===0)return n;const p=f(n,e,t)-a;n-=p/b}return n};return a=>e===r&&t===u?a:f(m(a),r,u)}function Q(e,r,t){return e+t*(r-e)}function _(e){return(typeof e=="number"?[e]:e)||[]}function H(e,r,t,u={}){var s,o;const c=l(r),f=l(t),d=_(c),m=_(f),a=(s=l(u.duration))!=null?s:1e3,n=Date.now(),i=Date.now()+a,b=typeof u.transition=="function"?u.transition:(o=l(u.transition))!=null?o:E,p=typeof b=="function"?b:U(b);return new Promise(O=>{e.value=c;const I=()=>{var S;if((S=u.abort)!=null&&S.call(u)){O();return}const y=Date.now(),V=p((y-n)/a),v=_(e.value).map((A,g)=>Q(d[g],m[g],V));Array.isArray(e.value)?e.value=v.map((A,g)=>{var h,w;return Q((h=d[g])!=null?h:0,(w=m[g])!=null?w:0,V)}):typeof e.value=="number"&&(e.value=v[0]),y<i?requestAnimationFrame(I):(e.value=f,O())};I()})}function B(e,r={}){let t=0;const u=()=>{const o=l(e);return typeof o=="number"?o:o.map(l)},s=x(u());return T(u,async o=>{var c,f;if(l(r.disabled))return;const d=++t;if(r.delay&&await J(l(r.delay)),d!==t)return;const m=Array.isArray(o)?o.map(l):l(o);(c=r.onStarted)==null||c.call(r),await H(s,s.value,m,{...r,abort:()=>{var a;return d!==t||((a=r.abort)==null?void 0:a.call(r))}}),(f=r.onFinished)==null||f.call(r)},{deep:!0}),T(()=>l(r.disabled),o=>{o&&(t++,s.value=u())}),q(()=>{t++}),k(()=>l(r.disabled)?u():s.value)}const L=D({__name:"countTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:99},duration:{type:Number,default:1e3},autoplay:{type:Boolean,default:!0},cutting:{type:Boolean,default:!1},decimals:{type:Number,default:0,validator(e){return e>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onFinished","onStarted"],setup(e,{emit:r}){const t=e,u=r,s=x(t.startVal),o=x(!1);let c=B(s);const f=k(()=>a(C(c)));P(()=>{s.value=t.startVal}),T([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&d()}),$(()=>{t.autoplay&&d()});function d(){m(),s.value=t.endVal}function m(){c=B(s,{disabled:o,duration:t.duration,onFinished:()=>u("onFinished"),onStarted:()=>u("onStarted"),...t.useEasing?{transition:R[t.transition]}:{}})}function a(n){if(!n&&n!==0)return"";const{decimals:i,decimal:b,separator:p,suffix:O,prefix:I}=t;n=Number(n).toFixed(i),n+="";const S=n.split(".");let y=S[0];const V=S.length>1?b+S[1]:"",v=/(\d+)(\d{3})/;if(t.cutting){if(p&&!G(p))for(;v.test(y);)y=y.replace(v,"$1"+p+"$2")}else if(p&&!p)for(;v.test(y);)y=y.replace(v,"$1"+p+"$2");return I+y+V+O}return(n,i)=>(z(),W("div",{class:"countTo",style:j({color:e.color})},X(f.value),5))}});export{L as _};