"use strict";(self.webpackChunkwebpack_multiple_entry=self.webpackChunkwebpack_multiple_entry||[]).push([[913],{4047:function(t,s,e){var i=e(5479),n=(e(6743),e(123),e(8882),e(6284));new class{constructor(){(0,i.Z)(this,"list",document.querySelector(".articles-related-list")),(0,i.Z)(this,"commentBtnClass","comments"),(0,i.Z)(this,"listItemClass","articles-related-list-item"),(0,i.Z)(this,"blackClassList",["author","comments","articles-related-list-item-tag"]),(0,i.Z)(this,"eventProxy",(t=>{const s=t.target;if(this.hasBlackClass(s))return;if(this.hasClassName(s,this.commentBtnClass))return;const e=this.getClassNameElement(s,this.listItemClass);if(!e)return n.Z.warning({text:"未找到文章卡片"});const i=e.dataset.link;"string"==typeof i&&""!==i.trim()?location.href=i:n.Z.warning({text:"未找到卡片的文章链接"})})),this.list&&this.list.addEventListener("click",this.eventProxy)}hasClassName(t,s){if(t.classList.contains(s))return!0;const e=t.parentElement;return!!e&&this.hasClassName(e,s)}getClassNameElement(t,s){if(t.classList.contains(s))return t;const e=t.parentElement;return e?this.getClassNameElement(e,s):null}hasBlackClass(t){return-1!==Array.from(t.classList).findIndex((t=>this.blackClassList.includes(t)))}},e(6257);var a=e(3135);new class{constructor(){(0,i.Z)(this,"wrap",document.querySelector(".post-right-sticky")),(0,i.Z)(this,"listenHeaderShow",(t=>{t?this.wrap?.classList.add("heighten"):this.wrap?.classList.remove("heighten")})),a.Z.on(a.D.HEADER_SHOW,this.listenHeaderShow)}}}},function(t){var s=function(s){return t(t.s=s)};t.O(0,[216,592],(function(){return s(9121),s(4047)})),t.O()}]);