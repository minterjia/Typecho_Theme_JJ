"use strict";(self.webpackChunkwebpack_multiple_entry=self.webpackChunkwebpack_multiple_entry||[]).push([[913],{2485:function(t,s,e){e(8803),e(1788),e(5576);var n=e(6793),i=e(9007);new class{constructor(){(0,n.Z)(this,"list",document.querySelector(".articles-related-list")),(0,n.Z)(this,"commentBtnClass","comments"),(0,n.Z)(this,"listItemClass","articles-related-list-item"),(0,n.Z)(this,"eventProxy",(t=>{const s=t.target;if(this.hasClassName(s,this.commentBtnClass))return;const e=this.getClassNameElement(s,this.listItemClass);if(!e)return i.Z.warning({text:"未找到文章卡片"});const n=e.dataset.link;"string"==typeof n&&""!==n.trim()?location.href=n:i.Z.warning({text:"未找到卡片的文章链接"})})),this.list&&this.list.addEventListener("click",this.eventProxy)}hasClassName(t,s){if(t.classList.contains(s))return!0;const e=t.parentElement;return!!e&&this.hasClassName(e,s)}getClassNameElement(t,s){if(t.classList.contains(s))return t;const e=t.parentElement;return e?this.getClassNameElement(e,s):null}},e(5129)}},function(t){var s=function(s){return t(t.s=s)};t.O(0,[216,592],(function(){return s(7015),s(2485)})),t.O()}]);