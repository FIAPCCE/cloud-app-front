(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cadastro"],{9336:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"col-md-12",attrs:{id:"login-section"}},[e("div",{staticClass:"col-md-6",attrs:{id:"data-holder"}},[e("div",{attrs:{id:"form-login"}},[e("div",{staticClass:"col-md-12 title-form"},[e("p",[t._v("Faça o seu cadastro")]),t.error.length>0?e("p",{staticClass:"alert alert-danger"},[t._v("\n          "+t._s(t.error)+"\n        ")]):t._e()]),e("form",{staticClass:"col-md-12",attrs:{action:"/cadastro",method:"post"},on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],staticClass:"form-control",attrs:{type:"text",name:"nome",placeholder:"Nome"},domProps:{value:t.nome},on:{input:function(a){a.target.composing||(t.nome=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],staticClass:"form-control",attrs:{type:"password",name:"pass",placeholder:"Senha"},domProps:{value:t.senha},on:{input:function(a){a.target.composing||(t.senha=a.target.value)}}})]),e("router-link",{attrs:{to:"/"}},[t._v(" fazer login ")]),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary to-right",on:{click:function(a){t.cadastro()}}},[t._v(" Cadastrar ")])])],1)])])])},s=[],r={name:"cadastro",data:function(){return{url:"http://localhost:4000/usuario/new",nome:"",email:"",senha:"",error:""}},methods:{cadastro:function(){var t=this;if(this.error="",""===this.nome||""===this.email||""===this.senha)return this.error="Informe todos os dados!",!1;this.$http.post(this.url,{nome:this.nome,email:this.email,senha:this.senha}).then(function(a){return t.redirect()}).catch(function(t){return console.log(t)})},redirect:function(){this.$router.push({name:"home",params:{cadastro:!0}})}}},n=r,i=e("2877"),l=Object(i["a"])(n,o,s,!1,null,null,null);l.options.__file="Cadastro.vue";a["default"]=l.exports}}]);
//# sourceMappingURL=cadastro.ecc74052.js.map