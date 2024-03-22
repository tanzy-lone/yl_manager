import{aw as O,a6 as k,ap as J,q as H,bq as Q,b2 as V,bn as w,P as D,bk as h,ba as F,aP as ee,b9 as oe,ax as M,k as N,K as C,d as ne,e as te,B as I,ae as se,J as le,L as ae,O as ue,aV as ie,a as p,br as re,bs as de,n as _,t as ce,V as fe,Q as ye,bt as Y}from"./index-D9s0nCnu.js";import{t as me,U as z}from"./event-eEICS_iS.js";import{d as R}from"./use-form-item-2XrXz439.js";import{a as ve}from"./scroll-DjYj1mwx.js";import{i as pe}from"./focus-trap-CDzXzaSX.js";var E=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(E||{});const B=e=>{const n=O(e)?e:[e],t=[];return n.forEach(o=>{var s;O(o)?t.push(...B(o)):k(o)&&O(o.children)?t.push(...B(o.children)):(t.push(o),k(o)&&((s=o.component)!=null&&s.subTree)&&t.push(...B(o.component.subTree)))}),t},Ee=(e,n={})=>{J(e)||me("[useLockscreen]","You need to pass a ref param to this function");const t=n.ns||H("popup"),o=Q(()=>t.bm("parent","hidden"));if(!V||w(document.body,o.value))return;let s=0,u=!1,l="0";const d=()=>{setTimeout(()=>{oe(document==null?void 0:document.body,o.value),u&&document&&(document.body.style.width=l)},200)};D(e,c=>{if(!c){d();return}u=!w(document.body,o.value),u&&(l=document.body.style.width),s=ve(t.namespace.value);const i=document.documentElement.clientHeight<document.body.scrollHeight,f=h(document.body,"overflowY");s>0&&(i||f==="scroll")&&u&&(document.body.style.width=`calc(100% - ${s}px)`),F(document.body,o.value)}),ee(()=>d())},Ce=e=>{if(!e)return{onClick:M,onMousedown:M,onMouseup:M};let n=!1,t=!1;return{onClick:l=>{n&&t&&e(l),n=t=!1},onMousedown:l=>{n=l.target===l.currentTarget},onMouseup:l=>{t=l.target===l.currentTarget}}},Te=N({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:C([String,Array,Object])},zIndex:{type:C([String,Number])}}),be={click:e=>e instanceof MouseEvent},Se="overlay";var Ae=ne({name:"ElOverlay",props:Te,emits:be,setup(e,{slots:n,emit:t}){const o=H(Se),s=c=>{t("click",c)},{onClick:u,onMousedown:l,onMouseup:d}=Ce(e.customMaskEvent?void 0:s);return()=>e.mask?te("div",{class:[o.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:l,onMouseup:d},[I(n,"default")],E.STYLE|E.CLASS|E.PROPS,["onClick","onMouseup","onMousedown"]):se("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[I(n,"default")])}});const xe=Ae,Oe=N({center:Boolean,alignCenter:Boolean,closeIcon:{type:le},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ke={close:()=>!0},we=N({...Oe,appendToBody:Boolean,appendTo:{type:C(String),default:"body"},beforeClose:{type:C(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ie={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[z]:e=>ae(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},_e=(e,n)=>{var t;const s=ue().emit,{nextZIndex:u}=ie();let l="";const d=R(),c=R(),i=p(!1),f=p(!1),v=p(!1),T=p((t=e.zIndex)!=null?t:u());let y,m;const U=re("namespace",de),G=_(()=>{const a={},r=`--${U.value}-dialog`;return e.fullscreen||(e.top&&(a[`${r}-margin-top`]=e.top),e.width&&(a[`${r}-width`]=ce(e.width))),a}),K=_(()=>e.alignCenter?{display:"flex"}:{});function $(){s("opened")}function g(){s("closed"),s(z,!1),e.destroyOnClose&&(v.value=!1)}function q(){s("close")}function L(){m==null||m(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=Y(()=>x(),e.openDelay):x()}function b(){y==null||y(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=Y(()=>A(),e.closeDelay):A()}function S(){function a(r){r||(f.value=!0,i.value=!1)}e.beforeClose?e.beforeClose(a):b()}function W(){e.closeOnClickModal&&S()}function x(){V&&(i.value=!0)}function A(){i.value=!1}function P(){s("openAutoFocus")}function X(){s("closeAutoFocus")}function Z(a){var r;((r=a.detail)==null?void 0:r.focusReason)==="pointer"&&a.preventDefault()}e.lockScroll&&Ee(i);function j(){e.closeOnPressEscape&&S()}return D(()=>e.modelValue,a=>{a?(f.value=!1,L(),v.value=!0,T.value=pe(e.zIndex)?u():T.value++,fe(()=>{s("open"),n.value&&(n.value.scrollTop=0)})):i.value&&b()}),D(()=>e.fullscreen,a=>{n.value&&(a?(l=n.value.style.transform,n.value.style.transform=""):n.value.style.transform=l)}),ye(()=>{e.modelValue&&(i.value=!0,v.value=!0,L())}),{afterEnter:$,afterLeave:g,beforeLeave:q,handleClose:S,onModalClick:W,close:b,doClose:A,onOpenAutoFocus:P,onCloseAutoFocus:X,onCloseRequested:j,onFocusoutPrevented:Z,titleId:d,bodyId:c,closed:f,style:G,overlayDialogStyle:K,rendered:v,visible:i,zIndex:T}};export{xe as E,Ie as a,Ee as b,Ce as c,we as d,Oe as e,B as f,ke as g,_e as u};