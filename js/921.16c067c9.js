"use strict";(globalThis["webpackChunkkaven_blog"]=globalThis["webpackChunkkaven_blog"]||[]).push([[921],{71921:(e,o,i)=>{i.r(o),i.d(o,{default:()=>T});var t=i(22290);const n={class:"q-pa-md"},s={class:"row justify-end"};function l(e,o,i,l,a,r){const u=(0,t.up)("q-icon"),c=(0,t.up)("q-input"),p=(0,t.up)("q-btn"),d=(0,t.up)("q-form"),m=(0,t.up)("q-card-section"),g=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{onSubmit:e.onSubmitArticleSetting,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{filled:"",outlined:"",modelValue:e.gogsApiToken,"onUpdate:modelValue":o[1]||(o[1]=o=>e.gogsApiToken=o),type:e.isHideGogsApiToken?"password":"text",prefix:e.$t("Gogs API Token:"),autocomplete:"off"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(u,{name:"perm_identity"})])),append:(0,t.w5)((()=>[(0,t.Wm)(u,{name:e.isHideGogsApiToken?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[0]||(o[0]=o=>e.isHideGogsApiToken=!e.isHideGogsApiToken)},null,8,["name"])])),_:1},8,["modelValue","type","prefix"]),(0,t._)("div",s,[(0,t.Wm)(p,{label:e.$t("Save"),type:"submit",color:"primary"},null,8,["label"])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])}var a=i(43265),r=i(37374);const u=(0,t.aZ)({name:"ArticleSettingPage",data(){return{isHideGogsApiToken:!1,gogsApiToken:""}},methods:{onSubmitArticleSetting(){(0,a.Xr)(r.qK.ArticleSyncSource_GogsToken,this.gogsApiToken).then((e=>{this.$q.notify({color:e.Success?"green-4":"red-4",textColor:"white",icon:"cloud_done",message:e.Message||"Submitted"})})).catch(console.error)}}});var c=i(60188),p=i(75267),d=i(24238),m=i(33944),g=i(51464),k=i(25652),b=i(4771),f=i(8723),A=i.n(f);const S=(0,c.Z)(u,[["render",l]]),T=S;A()(u,"components",{QCard:p.Z,QCardSection:d.Z,QForm:m.Z,QInput:g.Z,QIcon:k.Z,QBtn:b.Z})}}]);