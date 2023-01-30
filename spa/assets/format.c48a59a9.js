import{f as c,h as d,Q as v}from"./QBtn.58b9772d.js";import{c as s,b as f,h as i}from"./render.514975b7.js";import{c as n,h as l,g as q}from"./index.94bca822.js";import{f as b,g as S}from"./QItemSection.8eea3efd.js";var z=s({name:"QAvatar",props:{...c,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:a}){const t=d(e),r=n(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),o=n(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const u=e.icon!==void 0?[l(v,{name:e.icon})]:void 0;return l("div",{class:r.value,style:t.value},[l("div",{class:"q-avatar__content row flex-center overflow-hidden",style:o.value},f(a.default,u))])}}}),y=s({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const t=n(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>l(e.tag,{class:t.value},i(a.default))}}),w=s({name:"QCard",props:{...b,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:t}}=q(),r=S(e,t),o=n(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>l(e.tag,{class:o.value},i(a.default))}}),x=s({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const t=n(()=>parseInt(e.lines,10)),r=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),o=n(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>l("div",{style:o.value,class:r.value},i(a.default))}});function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function C(e,a,t){return t<=a?a:Math.min(t,Math.max(a,e))}function B(e,a,t){if(t<=a)return a;const r=t-a+1;let o=a+(e-a)%r;return o<a&&(o=r+o),o===0?0:o}function k(e,a=2,t="0"){if(e==null)return e;const r=""+e;return r.length>=a?r:new Array(a-r.length+1).join(t)+r}export{x as Q,z as a,C as b,w as c,y as d,Q as e,B as n,k as p};
