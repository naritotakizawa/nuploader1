(function(t){function e(e){for(var n,r,s=e[0],c=e[1],p=e[2],l=0,u=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,p||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/uploader/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var d=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),o=i.n(n);o.a},1053:function(t,e,i){},4579:function(t,e,i){t.exports=i.p+"../static/nuploader1/img/add_file.fb603626.svg"},"46c7":function(t,e,i){t.exports=i.p+"../static/nuploader1/img/file.0b7031ed.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("d3b7"),i("ac1f"),i("1276"),i("498a");var n=i("3835"),o=i("b85c"),a=(i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("2b0e")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{attrs:{id:"side"}},[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{attrs:{src:i("9b19"),id:"header-logo"}})])],1),n("main",{attrs:{id:"main"}},[n("router-view")],1)])},s=[],c={name:"app"},p=c,d=(i("034f"),i("2877")),l=Object(d["a"])(p,r,s,!1,null,null,null),u=l.exports,m=i("8c4f"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"composites"}},[i("div",{attrs:{id:"list"}},[t.current.parent?i("div",{key:t.current.parent.pk,staticClass:"parent composite-wrapper"},[i("Composite",{attrs:{data:t.current.parent},on:{click:t.moveBefore}})],1):t.current.pk?i("div",{key:-1,staticClass:"parent composite-wrapper"},[i("Composite",{attrs:{data:{name:"home",is_dir:"true"}},on:{click:t.moveBefore}})],1):t._e(),t.current.pk?i("div",{key:t.current.pk,staticClass:"current composite-wrapper"},[i("Composite",{attrs:{data:t.current,editableIn:!0},on:{createDir:t.createDir,createFile:t.createFile}})],1):i("div",{key:-1,staticClass:"current composite-wrapper"},[i("Composite",{attrs:{data:{name:"home",is_dir:"true"},editableIn:!0},on:{createDir:t.createDir,createFile:t.createFile}})],1),t._l(t.current.composite_set,(function(e){return i("div",{key:e.pk,staticClass:"child composite-wrapper"},[i("Composite",{attrs:{data:e,zipUrl:t.zipUrl(e),editable:!0},on:{click:t.move,remove:t.remove,update:t.update}})],1)}))],2),i("div",{attrs:{id:"form"}},[i("composite-form",{key:t.selected.type+"-"+t.selected.data.pk,attrs:{selected:t.selected},on:{done:t.reload,close:t.close}})],1)])},h=[],v=(i("a15b"),i("b0c0"),i("8a79"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"composite"},[t.data.is_dir?n("img",{staticClass:"dir-icon",attrs:{src:i("b5d9")}}):n("img",{staticClass:"file-icon",attrs:{src:i("46c7")}}),t.data.pk?n("span",{staticClass:"id"},[t._v(t._s(t.data.pk))]):t._e(),n("a",{staticClass:"composite-link",on:{click:t.onclick}},[t._v(t._s(t.data.name))]),t.editableIn?[n("button",{staticClass:"img-button add-dir",attrs:{type:"button"},on:{click:t.createFile}},[n("img",{staticClass:"add-file-button-icon",attrs:{src:i("4579")}})]),n("button",{staticClass:"img-button add-file",attrs:{type:"button"},on:{click:t.createDir}},[n("img",{staticClass:"add-dir-button-icon",attrs:{src:i("6e7a")}})])]:t._e(),t.editable?[n("button",{staticClass:"img-button update",attrs:{type:"button"},on:{click:t.update}},[n("img",{staticClass:"update-button-icon",attrs:{src:i("8124")}})]),n("button",{staticClass:"img-button delete",attrs:{type:"button"},on:{click:t.remove}},[n("img",{staticClass:"delete-button-icon",attrs:{src:i("d739")}})]),t.data.zip_depth?n("a",{staticClass:"img-button zip",attrs:{href:t.zipUrl}},[n("img",{staticClass:"zip-button-icon",attrs:{src:i("d60a")}})]):t._e()]:t._e()],2)}),b=[],g={name:"composite",props:{data:{type:Object},editable:{type:Boolean,default:!1},editableIn:{type:Boolean,default:!1},zipUrl:{type:String}},methods:{onclick:function(){this.$emit("click",this.data)},update:function(){this.$emit("update",this.data)},remove:function(){this.$emit("remove",this.data)},createFile:function(){this.$emit("createFile",this.data)},createDir:function(){this.$emit("createDir",this.data)}}},y=g,_=(i("b07d"),Object(d["a"])(y,v,b,!1,null,"4524b89e",null)),k=_.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return"delete"===t.selected.type?i("form",{staticClass:"composite-form",on:{submit:function(e){return e.preventDefault(),t.remove(e)}}},[i("p",[t._v(t._s(t.selected.data.name)+"の削除")]),i("button",{attrs:{type:"submit"}},[t._v("削除")]),i("button",{staticClass:"button-link",on:{click:t.close}},[t._v("閉じる")])]):"new"===t.selected.type?i("form",{staticClass:"composite-form",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[i("p",[t._v("新規作成")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text",placeholder:"名前"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t.selected.data.is_dir?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.zip_depth,expression:"form.zip_depth"}],attrs:{type:"number",placeholder:"ZIP階層"},domProps:{value:t.form.zip_depth},on:{input:function(e){e.target.composing||t.$set(t.form,"zip_depth",e.target.value)}}})]):i("div",[i("input",{ref:"upfile",attrs:{type:"file"}})]),i("button",{attrs:{type:"submit"}},[t._v("送信")]),i("button",{staticClass:"button-link",on:{click:t.close}},[t._v("閉じる")])]):"update"===t.selected.type?i("form",{staticClass:"composite-form",on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[i("p",[t._v(t._s(t.selected.data.name)+"の更新")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text",placeholder:"名前"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.parent,expression:"form.parent"}],attrs:{type:"text",placeholder:"親ディレクトリID"},domProps:{value:t.form.parent},on:{input:function(e){e.target.composing||t.$set(t.form,"parent",e.target.value)}}}),t.selected.data.is_dir?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.zip_depth,expression:"form.zip_depth"}],attrs:{type:"number",placeholder:"ZIP階層"},domProps:{value:t.form.zip_depth},on:{input:function(e){e.target.composing||t.$set(t.form,"zip_depth",e.target.value)}}})]):i("div",[i("input",{ref:"upfile",attrs:{type:"file"}})]),i("button",{attrs:{type:"submit"}},[t._v("更新")]),i("button",{staticClass:"button-link",on:{click:t.close}},[t._v("閉じる")])]):t._e()},C=[],w={name:"composite-form",props:{selected:{type:Object}},data:function(){return{form:{name:"",zip_depth:0,parent:""}}},mounted:function(){"update"===this.selected.type&&(this.form.name=this.selected.data.name,this.form.zip_depth=this.selected.data.zip_depth,this.form.parent=this.selected.data.parent?this.selected.data.parent:"")},methods:{add:function(){var t=this,e=new FormData;if(e.append("name",this.form.name),e.append("is_dir",this.selected.data.is_dir),this.selected.data.is_dir)e.append("zip_depth",this.form.zip_depth);else{var i=this.$refs.upfile.files[0];i&&e.append("src",i)}e.append("parent",this.selected.data.parent),this.$http(this.$endpoint,{credentials:"include",method:"POST",body:e,headers:{"X-CSRFToken":this.$csrfToken}}).then((function(e){return e.ok?e.json().then((function(){t.$notify({title:"お知らせ",message:t.$createElement("p",{style:"color: #009"},t.form.name+"を追加しました"),duration:2e3}),t.$emit("done")})):e.json().then((function(e){t.$notify({title:"お知らせ",message:t.$createElement("p",{style:"color: #900"},JSON.stringify(e)),duration:2e3})}))}))},update:function(){var t=this,e=new FormData;if(e.append("name",this.form.name),e.append("is_dir",this.selected.data.is_dir),this.selected.data.is_dir)e.append("zip_depth",this.form.zip_depth);else{var i=this.$refs.upfile.files[0];i&&e.append("src",i)}e.append("parent",this.form.parent),this.$http(this.$endpoint+this.selected.data.pk+"/",{credentials:"include",method:"PATCH",body:e,headers:{"X-CSRFToken":this.$csrfToken}}).then((function(e){return e.ok?e.json().then((function(){t.$notify({title:"お知らせ",message:t.$createElement("p",{style:"color: #009"},t.form.name+"を更新しました"),duration:2e3}),t.$emit("done")})):e.json().then((function(e){t.$notify({title:"お知らせ",message:t.$createElement("p",{style:"color: #900"},JSON.stringify(e)),duration:2e3})}))}))},remove:function(){var t=this;this.$http(this.$endpoint+this.selected.data.pk+"/",{credentials:"include",method:"DELETE",headers:{"X-CSRFToken":this.$csrfToken}}).then((function(e){if(!e.ok)return e.json().then((function(e){t.$notify({title:"お知らせ",message:t.$createElement("p",{style:"color: #900"},JSON.stringify(e)),duration:2e3})}));t.$notify({title:"お知らせ",message:t.$createElement("p",{style:"color: #009"},t.selected.data.name+"を削除しました"),duration:2e3}),t.$emit("done")}))},close:function(){this.$emit("close")}}},x=w,j=(i("b663"),Object(d["a"])(x,$,C,!1,null,"54329553",null)),z=j.exports,P={name:"composite-list",components:{Composite:k,CompositeForm:z},props:{path:{type:String}},data:function(){return{current:{},selected:{type:null,data:{}}}},created:function(){this.path?this.getCompositeListFromPath(this.path):this.getCompositeListTop()},methods:{getCompositeListTop:function(){var t=this;this.$http(this.$endpoint).then((function(t){return t.json()})).then((function(e){t.current={composite_set:e}}))},getCompositeListFromPath:function(t){var e=this;this.$http(this.$endpoint+"get_composite_from_path/"+t).then((function(t){return t.json()})).then((function(t){e.current=t}))},getCompositeListFromPk:function(t){var e=this;this.$http(this.$endpoint+t+"/").then((function(t){return t.json()})).then((function(t){e.current=t}))},getNextPath:function(t){var e=this.$route.path;e.endsWith("/")||(e+="/");var i=e+t.name;return t.is_dir&&(i+="/"),i},getBeforePath:function(){var t,e=[],i=Object(o["a"])(this.$route.path.split("/"));try{for(i.s();!(t=i.n()).done;){var n=t.value;n&&e.push(n)}}catch(a){i.e(a)}finally{i.f()}return e.pop(),"/"+e.join("/")+"/"},moveBefore:function(){var t=this.getBeforePath();this.$router.push(t),this.current.parent?this.getCompositeListFromPk(this.current.parent.pk):this.getCompositeListTop()},move:function(t){var e=this.getNextPath(t);t.is_dir?(this.$router.push(e),this.getCompositeListFromPk(t.pk)):window.open(this.$fileUrlBase+e,"_blank")},update:function(t){this.selected.data=t,this.selected.type="update"},remove:function(t){this.selected.data=t,this.selected.type="delete"},createFile:function(t){this.selected.data={is_dir:!1,parent:t.pk?t.pk:""},this.selected.type="new"},createDir:function(t){this.selected.data={is_dir:!0,parent:t.pk?t.pk:""},this.selected.type="new"},reload:function(){this.selected.type=null,this.selected.data={},this.current.pk?this.getCompositeListFromPk(this.current.pk):this.getCompositeListTop()},zipUrl:function(t){return this.$zipUrlBase+t.pk+"/"},close:function(){this.selected.data={},this.selected.type=null}}},O=P,F=(i("cb84"),Object(d["a"])(O,f,h,!1,null,"4f03feb6",null)),T=F.exports;a["default"].use(m["a"]);var D=[{path:"/home/:path*",name:"home",component:T,props:!0}],S=new m["a"]({mode:"history",base:"/uploader/",routes:D}),E=S,B=i("5c96"),L=i.n(B),N=(i("c69f"),i("c3ff")),U=i.n(N);a["default"].use(L.a,{locale:U.a});var I=function(t){if(document.cookie&&""!==document.cookie){var e,i=Object(o["a"])(document.cookie.split(";"));try{for(i.s();!(e=i.n()).done;){var a=e.value,r=a.trim().split("="),s=Object(n["a"])(r,2),c=s[0],p=s[1];if(c===t)return decodeURIComponent(p)}}catch(d){i.e(d)}finally{i.f()}}};a["default"].config.productionTip=!1,a["default"].prototype.$http=function(t,e){return fetch(t,e)},a["default"].prototype.$csrfToken=I("csrftoken"),a["default"].prototype.$endpoint="/uploader/api/composites/",a["default"].prototype.$fileUrlBase="/uploader",a["default"].prototype.$zipUrlBase="/uploader/zip/",new a["default"]({router:E,render:function(t){return t(u)}}).$mount("#app")},"6e7a":function(t,e,i){t.exports=i.p+"../static/nuploader1/img/add_dir.fe71e225.svg"},8124:function(t,e,i){t.exports=i.p+"../static/nuploader1/img/update.423f1f59.svg"},"85ec":function(t,e,i){},"8be3":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"../static/nuploader1/img/logo.b6b6b7e2.svg"},b07d:function(t,e,i){"use strict";var n=i("f580"),o=i.n(n);o.a},b5d9:function(t,e,i){t.exports=i.p+"../static/nuploader1/img/dir.892752bb.svg"},b663:function(t,e,i){"use strict";var n=i("1053"),o=i.n(n);o.a},c69f:function(t,e,i){},cb84:function(t,e,i){"use strict";var n=i("8be3"),o=i.n(n);o.a},d60a:function(t,e,i){t.exports=i.p+"../static/nuploader1/img/zip.a922043f.svg"},d739:function(t,e,i){t.exports=i.p+"../static/nuploader1/img/delete.b1dc3a0a.svg"},f580:function(t,e,i){}});
//# sourceMappingURL=app.e8b9aadd.js.map