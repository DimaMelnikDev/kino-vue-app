import{o as e,c as t,a as i,b as a,r as s,F as n,d as o,t as l,w as r,p as d,e as c,f as m,g as u,v as p,h as f,T as h,i as v,j as g,k as _,l as y,m as b,n as k,C as w}from"./vendor.d36644ac.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(i){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((i,n)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return i(self[t].moduleMap[o]);const l=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){n(new Error(`Failed to import: ${e}`)),s(r)},onload(){i(self[t].moduleMap[o]),s(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/assets/");const x={name:"m-logo"},L={class:"logo"},M=i("span",null,"Kino",-1),T=a("Portal");x.render=function(i,a,s,n,o,l){return e(),t("h2",L,[M,T])};const C={name:"m-navigation",data:()=>({headerMenu:[{name:"Главная",path:"/"},{name:"Фильмы",path:"/films"}]})},I=r(),N=I(((i,r,d,c,m,u)=>{const p=s("router-link");return e(),t("nav",null,[(e(!0),t(n,null,o(m.headerMenu,((i,s)=>(e(),t(p,{key:s,to:{path:`${i.path}`},"active-class":"active"},{default:I((()=>[a(l(i.name),1)])),_:2},1032,["to"])))),128))])}));C.render=N,C.__scopeId="data-v-e975ed74";const P={name:"TheHeader",components:{MLogo:x,MNavigation:C}},E=r();d("data-v-cd2dc8b8");const R={class:"header"},O={class:"container"},A={class:"header__row"};c();const V=E(((a,n,o,l,r,d)=>{const c=s("m-logo"),m=s("m-navigation");return e(),t("div",R,[i("div",O,[i("div",A,[i(c),i(m)])])])}));P.render=V,P.__scopeId="data-v-cd2dc8b8";const $={name:"TheFooter"},K=r()(((i,a,s,n,o,l)=>(e(),t("p",null,"Copyright © 2021 KinoPortal"))));$.render=K,$.__scopeId="data-v-1df060c1";const F={name:"App",components:{TheHeader:P,TheFooter:$}};F.render=function(a,o,l,r,d,c){const m=s("the-header"),u=s("router-view"),p=s("the-footer");return e(),t(n,null,[i("header",null,[i(m)]),i("main",null,[i(u)]),i("footer",null,[i(p)])],64)};d("data-v-349e68c9"),c();const U={name:"MoviePoster",props:{film_data:{type:Object,default:()=>({})}},data:()=>({})},j=r();d("data-v-694ba95b");const D={class:"poster__title"},S={class:"poster__video-labels"},W={class:"poster__teg"},Y=i("span",null,"IMDb",-1),B={class:"poster__teg"},H=i("span",null,"КП",-1);c();const X=j(((n,o,r,d,c,m)=>{const u=s("router-link");return e(),t(u,{class:"poster",to:{path:`/film/${r.film_data.filmId}`}},{default:j((()=>[i("img",{class:"poster__img",src:r.film_data.img,alt:r.film_data.title},null,8,["src","alt"]),i("h2",D,l(r.film_data.title),1),i("div",S,[i("span",W,[a(l(r.film_data.IMDb)+" ",1),Y]),i("span",B,[a(l(r.film_data.KP)+" ",1),H])])])),_:1},8,["to"])}));U.render=X,U.__scopeId="data-v-694ba95b";const z={name:"spiner"},G={class:"inner",style:{width:"200px",height:"200px"}},q=i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},[i("g",{transform:"rotate(0 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(30 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(60 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(90 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(120 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(150 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(180 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(210 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(240 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(270 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(300 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})])]),i("g",{transform:"rotate(330 50 50)"},[i("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"#5e6fa3"},[i("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})])])],-1);z.render=function(i,a,s,n,o,l){return e(),t("div",G,[q])};const J={name:"FilmsPage",components:{MoviePoster:U,spiner:z},data:()=>({films:[],page:1,loadding:!1}),methods:{async getFilms(e){this.loadding=!0;try{const t=`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${e}`,i={headers:{"Content-Type":"application/json","X-API-KEY":"fa725a03-dc13-40bf-99e7-3e9136744d6d"}};this.axios.get(t,i).then((e=>{e.data.films.forEach((e=>{const t={countries:e.countries,time:e.filmLength,filmId:e.filmId,genres:e.genres,title:e.nameRu,img:e.posterUrl,KP:e.rating,IMDb:e.ratingVoteCount,date:e.year};this.films.push(t),this.loadding=!1}))}))}catch(t){console.log(t)}}},async mounted(){this.getFilms(this.page)},watch:{page(e,t){t!=e&&0!=e&&(this.films=[],this.getFilms(this.page))}}},Q=r();d("data-v-011b0b06");const Z={class:"container"},ee={class:"row"},te={key:0,class:"buttons_wrap"};c();const ie=Q(((a,l,r,d,c,u)=>{const p=s("spiner"),f=s("movie-poster");return e(),t("div",Z,[c.loadding?(e(),t(p,{key:0,class:"spiner-center"})):m("",!0),i("div",ee,[(e(!0),t(n,null,o(c.films,((i,a)=>(e(),t(f,{key:{key:a},film_data:i},null,8,["film_data"])))),128)),c.loadding?m("",!0):(e(),t("div",te,[i("button",{class:"button next_nuvie_btn",disabled:1===c.page,onClick:l[1]||(l[1]=e=>c.page-=1)}," ⬅ Предыдущая страница ",8,["disabled"]),i("button",{class:"button next_nuvie_btn",onClick:l[2]||(l[2]=e=>c.page+=1)}," Следующая страница ➡ ")]))])])}));J.render=ie,J.__scopeId="data-v-011b0b06";const ae={name:"m-video",data:()=>({value:30,isActive:!0,isMuted:!0,currentTime:0,duration:0}),computed:{videoLink(){return this.$refs.videoLink},total:function(){return this.value}},methods:{playVideo(){if(1===this.videoLink.networkState)this.videoLink.volume=this.value/100,this.videoLink.paused?this.videoLink.play():this.videoLink.pause(),this.videoLink.paused?this.isActive=!0:this.isActive=!1,console.info("NETWORK_IDLE - видео активно и выбрало ресурс, но не использует сеть");else switch(this.videoLink.networkState){case 0:console.info("NETWORK_EMPTY - video has not yet been initialized");case 1:console.info("NETWORK_IDLE - видео активно и выбрало ресурс, но не использует сеть");case 2:console.info("NETWORK_LOADING - browser is downloading data");case 3:console.error("NETWORK_NO_SOURCE - no video source found")}},mutedValue(){!1===this.videoLink.muted?this.videoLink.muted=!0:this.videoLink.muted=!1,!1===this.videoLink.muted?this.isMuted=!0:this.isMuted=!1}},beforeUpdate(){function e(e){let t=e.toFixed(),i=Math.floor(t/60/60),a=Math.floor(t/60)-60*i;return`${0===i?"":i+":"}${0===a?"":a+":"}`+t%60}1===this.videoLink.networkState?(this.duration=e(this.videoLink.duration),setInterval((()=>{this.currentTime=e(this.videoLink.currentTime)}),0)):console.log(this.videoLink.error())},watch:{value(){this.videoLink.volume=this.total/100,.01===this.videoLink.volume?this.videoLink.muted=!0:this.videoLink.muted=!1,.01===this.videoLink.volume?this.isMuted=!1:this.isMuted=!0}}},se={class:"media-container"},ne={key:0,"xlink:href":"#play"},oe={preload:"metadata",ref:"videoLink"},le=i("source",{src:""},null,-1),re={class:"media-controls-panel"},de={class:"icon"},ce={key:0,"xlink:href":"#play"},me={key:1,"xlink:href":"#pause"},ue={class:"media-controls-panel__time"},pe={class:"media-controls-panel__elapsed"},fe=a(" / "),he={class:"media-controls-panel__duration"},ve={class:"media-controls-panel__volume-area"},ge={class:"icon"},_e={key:0,"xlink:href":"#volume-loud"},ye={key:1,"xlink:href":"#mute"},be={class:"media-controls-panel__volume-wrap"};ae.render=function(a,s,n,o,r,d){return e(),t("div",se,[r.isActive?(e(),t("svg",{key:0,class:"icon media-play",onClick:s[1]||(s[1]=(...e)=>this.playVideo&&this.playVideo(...e))},[r.isActive?(e(),t("use",ne)):m("",!0)])):m("",!0),i("video",oe,[le],512),i("div",re,[i("button",{onClick:s[2]||(s[2]=(...e)=>this.playVideo&&this.playVideo(...e))},[(e(),t("svg",de,[r.isActive?(e(),t("use",ce)):(e(),t("use",me))]))]),i("div",ue,[i("span",pe,l(r.currentTime),1),fe,i("span",he,l(r.duration),1)]),i("div",ve,[i("div",{onClick:s[3]||(s[3]=(...e)=>this.mutedValue&&this.mutedValue(...e))},[(e(),t("svg",ge,[r.isMuted?(e(),t("use",_e)):(e(),t("use",ye))]))]),i("div",be,[u(i("input",{class:"media-controls-panel__volume-area-input",type:"range",min:"1",max:"100",step:"1","onUpdate:modelValue":s[4]||(s[4]=e=>r.value=e)},null,512),[[p,r.value]]),i("span",{class:"media-controls-panel__volume-area-total",textContent:l(d.total)},null,8,["textContent"])])])])])};const ke={name:"m-popup",components:{mLogo:x,mVideo:ae},props:{title:String},emits:["close"],mounted(){window.addEventListener("keyup",this.keyup)},unmounted(){window.removeEventListener("keyup",this.keyup)}},we={class:"popup__overley"},xe={class:"popup"},Le={class:"popup__header"},Me={class:"popup__title"},Te=i("img",{src:"/assets/close.cbb9e33c.png",alt:"close"},null,-1),Ce={class:"popup__body"},Ie=i("div",{class:"popup__footer"}," footer ",-1);ke.render=function(a,n,o,r,d,c){const m=s("m-logo"),u=s("m-video");return e(),t(h,{name:"fade"},{default:f((()=>[i("div",we,[i("div",xe,[i("div",Le,[i(m,{class:"popup__logo"}),i("h2",Me,l(o.title),1),i("button",{class:"popup__btn-close",onClick:n[1]||(n[1]=e=>a.$emit("close")),onKeydown:n[2]||(n[2]=v((e=>a.$emit("close")),["esc"]))},[Te],32)]),i("div",Ce,[i(u)]),Ie])])])),_:1})};const Ne={name:"FilmPage",components:{mPopup:ke},data(){return{title:"",film:{},filmId:this.$route.params.id,isMuviePopupVisible:!1}},async mounted(){const e=`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.filmId}`,t={headers:{"Content-Type":"application/json","X-API-KEY":"fa725a03-dc13-40bf-99e7-3e9136744d6d"}};this.axios.get(e,t).then((e=>{this.film=e.data,this.title=e.data.nameRu}))}},Pe=r();d("data-v-6735f7b4");const Ee={class:"container"},Re={class:"muvie-row"},Oe={class:"muvie-wrap"},Ae={class:"muvie"},Ve={class:"muvie__wrap"},$e={class:"movie__title"},Ke={class:"movie__sub-title"},Fe={class:"muvie__info"},Ue={class:"movie__info-item"},je=i("b",null,"Год производства:",-1),De={class:"movie__info-item"},Se=i("b",null,"Страна: ",-1),We={class:"movie__info-item"},Ye=i("b",null,"Жанр: ",-1),Be={class:"movie__info-item"},He=i("b",null,"Слоган:",-1),Xe={class:"movie__info-item"},ze=i("b",null,"Возраст:",-1),Ge={class:"movie__info-item"},qe=i("b",null,"IMDb:",-1),Je={class:"movie__info-item"},Qe=i("b",null,"КП:",-1),Ze={class:"movie__info-item"},et=i("b",null,"Время:",-1),tt={class:"muvie-description"};c();const it=Pe(((r,d,c,u,p,f)=>{const h=s("m-popup");return e(),t("div",Ee,[i("div",Re,[i("div",Oe,[i("div",Ae,[i("img",{class:"movie__img",src:p.film.posterUrl},null,8,["src"]),i("div",Ve,[i("h1",$e,l(p.title),1),i("span",Ke,l(p.film.nameOriginal),1),i("ul",Fe,[i("li",Ue,[je,a(" "+l(p.film.year),1)]),i("li",De,[Se,(e(!0),t(n,null,o(p.film.countries,((i,a)=>(e(),t("span",{key:{key:a}},l(i.country+(a==p.film.countries.length-1?"":", ")),1)))),128))]),i("li",We,[Ye,(e(!0),t(n,null,o(p.film.genres,((i,a)=>(e(),t("span",{key:{key:a}},l(i.genre+(a==p.film.genres.length-1?"":", ")),1)))),128))]),i("li",Be,[He,a(" "+l(p.film.slogan||"нет"),1)]),i("li",Xe,[ze,a(" "+l(p.film.ratingAgeLimits?p.film.ratingAgeLimits.replace(/[^\d\+]/g,"")+"+":""),1)]),i("li",Ge,[qe,a(" "+l(p.film.ratingImdb),1)]),i("li",Je,[Qe,a(" "+l(p.film.ratingKinopoisk),1)]),i("li",Ze,[et,a(" "+l(p.film.filmLength)+" мин",1)])]),i("a",{class:"button movie_btn",target:"_blank",href:"https:/ww1.flink.su/film/"+p.filmId},"Смотреть",8,["href"])])]),i("p",tt,l(p.film.description),1)])]),p.isMuviePopupVisible?(e(),t(h,{key:0,title:p.title,onClose:d[1]||(d[1]=e=>p.isMuviePopupVisible=!1)},null,8,["title"])):m("",!0)])}));Ne.render=it,Ne.__scopeId="data-v-6735f7b4";const at=_({history:g(),routes:[{path:"/",component:J},{path:"/films",component:J},{path:"/film/:id",component:Ne}]});const st=y({state:()=>({count:0}),mutations:{increment(e){e.count++}}});b(F).use(at).use(k,w).use(st).mount("#app");
