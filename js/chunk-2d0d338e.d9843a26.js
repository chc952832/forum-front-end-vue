(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d338e"],{"5c9c":function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s._self._c;return e("div",{staticClass:"container py-5"},[e("form",{staticClass:"w-100",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),s.handleSubmit.apply(null,arguments)}}},[s._m(0),e("div",{staticClass:"form-label-group mb-2"},[e("label",{attrs:{for:"name"}},[s._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:s.name},on:{input:function(e){e.target.composing||(s.name=e.target.value)}}})]),e("div",{staticClass:"form-label-group mb-2"},[e("label",{attrs:{for:"email"}},[s._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}})]),e("div",{staticClass:"form-label-group mb-3"},[e("label",{attrs:{for:"password"}},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),e("div",{staticClass:"form-label-group mb-3"},[e("label",{attrs:{for:"password-check"}},[s._v("Password Check")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:s.passwordCheck},on:{input:function(e){e.target.composing||(s.passwordCheck=e.target.value)}}})]),e("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:s.isProcessing}},[s._v(" "+s._s(s.isProcessing?"處理中...":"Submit")+" ")]),e("div",{staticClass:"text-center mb-3"},[e("p",[e("router-link",{attrs:{to:"/signin"}},[s._v(" Sign In ")])],1)]),e("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[s._v(" © 2017-2018 ")])])])},r=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"text-center mb-4"},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[s._v(" Sign Up ")])])}],o=(a("d9e2"),a("7696")),i=a("c968"),n={data(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{async handleSubmit(){try{if(this.name&&this.email&&this.password&&this.passwordCheck){if(this.password!==this.passwordCheck)return i["a"].fire({icon:"warning",title:"兩次輸入的密碼不同，請重新輸入"}),this.password="",void(this.passwordCheck="")}else i["a"].fire({icon:"warning",title:"請確認已填寫所有欄位"});this.isProcessing=!0;const{data:s}=await o["a"].signUp({name:this.name,email:this.email,password:this.password,passwordCheck:this.passwordCheck});if("success"!==s.status)throw new Error(s.message);i["a"].fire({icon:"success",title:"成功註冊!"}),this.$router.push({name:"sign-in"})}catch(s){this.isProcessing=!1,console.log("error",s),i["a"].fire({icon:"error",title:s.message+"無法成功註冊，請稍後再試"})}}}},l=n,c=a("2877"),m=Object(c["a"])(l,t,r,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0d338e.d9843a26.js.map