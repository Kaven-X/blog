"use strict";(globalThis["webpackChunkkaven_blog"]=globalThis["webpackChunkkaven_blog"]||[]).push([[51],{75051:(e,l,o)=>{o.r(l),o.d(l,{default:()=>S});var a=o(22290);const t={class:"main-content"},r={class:"text-center"},n=["src"],i={class:"row justify-end"};function u(e,l,o,u,d,m){const s=(0,a.up)("q-avatar"),p=(0,a.up)("q-icon"),c=(0,a.up)("q-input"),f=(0,a.up)("q-select"),b=(0,a.up)("q-btn"),w=(0,a.up)("q-form"),_=(0,a.up)("q-card-section"),g=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",t,[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onSubmit:e.onSubmitProfile,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(s,{rounded:"",size:"100px","font-size":"82px",color:"blue-2"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.avatar},null,8,n)])),_:1})]),(0,a.Wm)(c,{modelValue:e.store.user.email,"onUpdate:modelValue":l[0]||(l[0]=l=>e.store.user.email=l),filled:"",outlined:"",readonly:"",label:e.$t("Email")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"mail"})])),_:1},8,["modelValue","label"]),(0,a.Wm)(c,{filled:"",outlined:"",modelValue:e.profile.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.profile.name=l),"lazy-rules":"",label:e.$t("Name")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"perm_identity"})])),_:1},8,["modelValue","label"]),(0,a.Wm)(f,{filled:"",outlined:"",modelValue:e.profile.gender,"onUpdate:modelValue":l[2]||(l[2]=l=>e.profile.gender=l),"lazy-rules":"",label:e.$t("Gender"),options:e.genderOptions},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"blur_on"})])),_:1},8,["modelValue","label","options"]),(0,a.Wm)(c,{filled:"",outlined:"",type:"number",modelValue:e.profile.age,"onUpdate:modelValue":l[3]||(l[3]=l=>e.profile.age=l),"lazy-rules":"",label:e.$t("Age")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"camera_front"})])),_:1},8,["modelValue","label"]),(0,a.Wm)(c,{filled:"",outlined:"",modelValue:e.profile.location,"onUpdate:modelValue":l[4]||(l[4]=l=>e.profile.location=l),"lazy-rules":"",label:e.$t("Location")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"location_city"})])),_:1},8,["modelValue","label"]),(0,a.Wm)(c,{filled:"",outlined:"",modelValue:e.profile.website,"onUpdate:modelValue":l[5]||(l[5]=l=>e.profile.website=l),"lazy-rules":"",label:e.$t("Website")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"web"})])),_:1},8,["modelValue","label"]),(0,a.Wm)(c,{filled:"",outlined:"",modelValue:e.profile.picture,"onUpdate:modelValue":l[6]||(l[6]=l=>e.profile.picture=l),"lazy-rules":"",label:e.$t("Avatar")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"account_box"})])),_:1},8,["modelValue","label"]),(0,a._)("div",i,[(0,a.Wm)(b,{label:e.$t("Save"),type:"submit",color:"primary"},null,8,["label"])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])}var d=o(37374),m=o(5023);const s={},p=(0,a.aZ)({name:"ProfilePage",data(){return{genderOptions:Object.keys(d.zB),profile:s}},computed:{avatar(){return s.picture||this.GetUserIcon(this.store.user,this.store.ip)}},methods:{async onSubmitProfile(){const e=await(0,m.my)(this.profile);if(e.Success){if(this.$q.notify({color:e.Success?"green-4":"red-4",textColor:"white",icon:"cloud_done",message:e.Message||"Submitted"}),!this.store.Profile)throw new Error;Object.assign(this.store.Profile,this.profile)}}},mounted(){this.profile=Object.assign({},this.store.Profile)}});var c=o(60188),f=o(75267),b=o(24238),w=o(33944),_=o(93533),g=o(95343),V=o(51464),W=o(25652),h=o(54996),y=o(4771),v=o(8723),Z=o.n(v);const q=(0,c.Z)(p,[["render",u]]),S=q;Z()(p,"components",{QCard:f.Z,QCardSection:b.Z,QForm:w.Z,QImg:_.Z,QAvatar:g.Z,QInput:V.Z,QIcon:W.Z,QSelect:h.Z,QBtn:y.Z})}}]);