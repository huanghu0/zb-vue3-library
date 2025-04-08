"use strict";const e=require("vue");;/* empty css            */const v=require("../../../../_virtual/_plugin-vue_export-helper.js"),g={class:"draggable-panel"},E=["onMousedown"],b=e.defineComponent({name:"ZbDraggablePanel"}),y=Object.assign(b,{props:{columns:{type:Array,required:!0,default:[]}},setup(r){const o=r;e.watch(()=>o.columns.length,t=>{setTimeout(()=>{let s=document.querySelector(".draggable-panel").clientWidth;o.columns.forEach(n=>{n.width=s/t})},200)},{immediate:!0,deep:!0});const h=(t,s)=>{const n=s.clientX,l=o.columns[t].width||100,c=o.columns[t+1].width||100,u=m=>{let w=l+(m.clientX-n),p=c-(m.clientX-n);o.columns[t].width=Math.max(100,w),o.columns[t+1].width=Math.max(100,p)},a=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",a)},d=t=>{setTimeout(()=>{let s=document.querySelector(".draggable-panel").scrollWidth;o.columns.forEach(n=>{n.width=s/o.columns.length})},200)},i=()=>{console.log("resize"),setTimeout(()=>{let t=document.querySelector(".draggable-panel").scrollWidth;o.columns.forEach(s=>{s.width=t/o.columns.length})},200)};return e.onMounted(()=>{document.addEventListener("wheel",d),window.addEventListener("resize",i)}),e.onUnmounted(()=>{document.removeEventListener("wheel",d),window.removeEventListener("resize",i)}),(t,s)=>(e.openBlock(),e.createElementBlock("div",g,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.columns,(n,l)=>(e.openBlock(),e.createElementBlock("div",{key:n.id,class:"column",style:e.normalizeStyle({width:n.width+"px"})},[e.createElementVNode("div",{class:"content",style:e.normalizeStyle({width:n.width-8+"px"})},[e.renderSlot(t.$slots,n.id,{},void 0,!0)],4),l!==r.columns.length-1?(e.openBlock(),e.createElementBlock("div",{key:0,class:"resizer",onMousedown:c=>h(l,c)},null,40,E)):e.createCommentVNode("",!0)],4))),128))]))}}),_=v(y,[["__scopeId","data-v-b356be9e"]]);module.exports=_;
