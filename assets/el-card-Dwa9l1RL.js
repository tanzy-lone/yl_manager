import{k as p,K as y,d as f,q as u,o as r,c as t,A as o,u as a,B as d,g as l,C as n,D as i,b as c,U as h,_ as m,I as v}from"./index-DQI56-rq.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(w){const s=u("card");return(e,$)=>(r(),t("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(a(s).e("header"))},[d(e.$slots,"header",{},()=>[l(n(e.header),1)])],2)):i("v-if",!0),c("div",{class:o([a(s).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(a(s).e("footer"))},[d(e.$slots,"footer",{},()=>[l(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var g=m(C,[["__file","card.vue"]]);const B=v(g);export{B as E};