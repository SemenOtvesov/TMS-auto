(()=>{var e={};e.id=658,e.ids=[658],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},96206:e=>{"use strict";e.exports=require("console")},6113:e=>{"use strict";e.exports=require("crypto")},67643:e=>{"use strict";e.exports=require("diagnostics_channel")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},15673:e=>{"use strict";e.exports=require("node:events")},84492:e=>{"use strict";e.exports=require("node:stream")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},4074:e=>{"use strict";e.exports=require("perf_hooks")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},35356:e=>{"use strict";e.exports=require("stream/web")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},29830:e=>{"use strict";e.exports=require("util/types")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},79823:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,originalPathname:()=>d,pages:()=>p,routeModule:()=>x,tree:()=>u});var s=r(50482),i=r(69108),n=r(62563),o=r.n(n),a=r(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["statisticsJapan",{children:["[brand]",{children:["[model]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,95640)),"C:\\Users\\smeno\\OneDrive\\Рабочий стол\\TMS-auto\\app\\statisticsJapan\\[brand]\\[model]\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7397)),"C:\\Users\\smeno\\OneDrive\\Рабочий стол\\TMS-auto\\app\\statisticsJapan\\[brand]\\[model]\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,76653)),"C:\\Users\\smeno\\OneDrive\\Рабочий стол\\TMS-auto\\app\\statisticsJapan\\[brand]\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,72776)),"C:\\Users\\smeno\\OneDrive\\Рабочий стол\\TMS-auto\\app\\statisticsJapan\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,52043)),"C:\\Users\\smeno\\OneDrive\\Рабочий стол\\TMS-auto\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Users\\smeno\\OneDrive\\Рабочий стол\\TMS-auto\\app\\statisticsJapan\\[brand]\\[model]\\page.tsx"],d="/statisticsJapan/[brand]/[model]/page",c={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/statisticsJapan/[brand]/[model]/page",pathname:"/statisticsJapan/[brand]/[model]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},29301:(e,t,r)=>{Promise.resolve().then(r.bind(r,69815))},35303:()=>{},6352:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(95344),i=r(83226),n=r(80773),o=r(8428);r(3729);let a=e=>{let t={"/":"ГЛАВНАЯ",carsFromJapan:"АВТО ИЗ ЯПОНИИ",carsFromKorea:"АВТО ИЗ КОРЕИ",statisticsJapan:"СТАТИСТИКА ЯПОНИЯ",statisticsKorea:"СТАТИСТИКА КОКЕЯ",readAuctionList:"Как читать аукционный лист",info:"О компании",contacts:"Контакты",registrationOfACarFromAnAuction:"Постановка на учет купленного в Японии автомобиля"};return e.forEach(e=>t[e]=e),t};var l=r(56506),u=r(25641),p=r(66494),d=r(7291);let c=({})=>{let e=(0,o.usePathname)().split("/"),{brand:t,model:r,lot:c}=(0,o.useParams)(),f=a([t,r,c]),h=(0,d.Z)();return s.jsx(i.Z,{sx:{".MuiBreadcrumbs-separator":{margin:h.isMobile?"0 2px":"0.8px"}},separator:s.jsx(p.Z,{sx:{color:u.b6},fontSize:"small"}),children:e.map(t=>s.jsx(n.Z,{component:l.default,href:m(t,e),sx:x(e[e.length-1],t,h),children:""===t?f["/"]:f[t]},t))})},x=(e,t,r)=>({transition:"0.3s",fontSize:r.isMobile?"8px":"10px",color:e===t?u.OC:u.b6,textDecoration:"none",borderBottom:e!==t?`1px solid ${u.b6}`:"",paddingBottom:"2px",display:"flex",justifyContent:"center",alignItems:"end",":hover":{color:u.b6,opacity:.8}}),m=(e,t)=>{let r="";if(""===e)return"/";for(let s=0;s<=t.indexOf(e);s++)r+=t[s]+"/";return r}},69815:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>$});var s=r(95344),i=r(34772),n=r(8428),o=r(3729),a=r(25641),l=r(49982),u=r(7291);let p=()=>{let e=(0,u.Z)();return{Title:l.Z.div({fontSize:"2em",fontWeight:800}),Text:l.Z.div({fontWeight:500,color:a.hv}),size:e}};var d=r(83332),c=r(60708),x=r(19818),m=r(11367),f=r(68208);let h=()=>{let e=(0,u.Z)();return{ItemContainer:l.Z.div({display:"flex",gap:e.isDesktop?"35px":e.isLaptop?"10px":"15px",justifyContent:"space-between",alignItems:"flex-end",flexDirection:e.isMobile||e.isTab?"column":"row"}),size:e}};var b=r(88010);let y=({control:e})=>{let{size:t}=h(),r=(0,b.Z)(e=>e.carState.activeModelList),i=[];return r.forEach(e=>!i.includes(e.body)&&i.push(e.body)),s.jsx(f.Z,{control:e,title:"Кузов",values:["Все",...i],name:"body",pd10:!t.isDesktop,boxProps:{style:{width:"100%"}}})},g=e=>e.isDesktop?{}:{style:{padding:10}},v=({control:e,setValue:t})=>{let{size:r,ItemContainer:i}=h();return(0,s.jsxs)(i,{children:[s.jsx(x.Z,{control:e,setValue:t,name:"brand",pd10:!r.isDesktop,style:{width:"100%"}}),s.jsx(m.Z,{control:e,setValue:t,nameControl:"model",size:r,pd10:!r.isDesktop,style:{width:"100%"}}),s.jsx(y,{control:e}),s.jsx(f.Z,{control:e,setValue:t,title:"Аукцион",values:["Все"],name:"auction",pd10:!r.isDesktop,boxProps:{style:{width:"100%"}}})]})};var j=r(22357);let q=({control:e})=>{let{ItemContainer:t,size:r}=h();return(0,s.jsxs)(t,{children:[s.jsx(j.Z,{title:"Год производства",input1:{name:"yearOfProductionStart",type:"number",startText:"от",endText:"г",props:g(r)},input2:{name:"yearOfProductionEnd",type:"number",startText:"до",endText:"г",props:g(r)},control:e,style:{flex:"1 1",width:"100%"}}),s.jsx(j.Z,{title:"Стоимость",input1:{name:"priseStart",type:"number",startText:"от",endText:"₽",props:g(r)},input2:{name:"priseEnd",type:"number",startText:"до",endText:"₽",props:g(r)},control:e,style:{flex:"1 1",width:"100%"}}),s.jsx(j.Z,{title:"Пробег",input1:{name:"mileageStart",type:"number",startText:"от",endText:"км",props:g(r)},input2:{name:"mileageEnd",type:"number",startText:"до",endText:"км",props:g(r)},control:e,style:{flex:"1 1",width:"100%"}})]})};var Z=r(65183);let P=()=>{let e=(0,u.Z)();return{RedButton:(0,l.Z)(Z.Z)({...T(e),backgroundColor:a.Xx,":hover":{backgroundColor:a.Xx,color:"#fff"}}),BlackButton:(0,l.Z)(Z.Z)({...T(e),backgroundColor:a.Fw,border:`2px solid ${a.G1}`,color:a.OC,":hover":{backgroundColor:a.Fw,color:"#fff"}}),size:e}};function T(e){let t={padding:16,borderRadius:2,color:"#fff",fontWeight:600,height:"fit-content",textAlign:"center",lineHeight:1.25,transition:"0.3s",":hover":{color:"#fff"}};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t}),(e.isTab||e.isMobile)&&(t={...t}),e.isMobile&&(t={...t}),t}let C=({control:e,setValue:t})=>{let{ItemContainer:r,size:i}=h(),{RedButton:n}=P();return(0,s.jsxs)(r,{children:[s.jsx(j.Z,{title:"Объем двигателя",input1:{name:"engineCapacityStart",type:"number",startText:"от",endText:"л",props:g(i)},input2:{name:"engineCapacityEnd",type:"number",startText:"до",endText:"л",props:g(i)},control:e,style:{flex:"1 1",width:"100%"}}),s.jsx(f.Z,{title:"Оценка",values:["Все"],control:e,setValue:t,name:"evaluation",pd10:!i.isDesktop,boxProps:{style:{width:"100%"}}}),s.jsx(n,{type:"submit",style:{flex:"1 1",padding:i.isDesktop?16:12},children:"ПОКАЗАТЬ"})]})};var M=r(69151);let w=({data:e,dispatch:t})=>{console.log(e),t((0,M.mD)(e))};var S=r(95080);let _=()=>{let e=(0,S.Z)(),{control:t,handleSubmit:r,setValue:i}=(0,c.cI)({mode:"onChange",defaultValues:{brand:"Все",model:"Все",body:"Все",auction:"Все",yearOfProductionStart:2e3,yearOfProductionEnd:new Date().getFullYear(),priseStart:0,priseEnd:1e5,mileageStart:0,mileageEnd:1e5,engineCapacityStart:0,engineCapacityEnd:10,evaluation:"Все"}});return s.jsx("form",{onSubmit:r(t=>w({data:t,dispatch:e})),children:(0,s.jsxs)(d.Z,{style:{flexDirection:"column"},children:[s.jsx(v,{control:t,setValue:i}),s.jsx(q,{control:t}),s.jsx(C,{control:t,setValue:i})]})})},D=()=>{let e=(0,u.Z)();return{Container:l.Z.div({display:"flex",flexDirection:"column",alignItems:"center"}),Main:l.Z.div({display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"100%"}),size:e}};var k=r(80654),O=r(59083),E=r(97691),J=r(1660);let A=()=>{let{Container:e,Main:t,size:r}=D(),{BlackButton:i}=P(),a=(0,S.Z)(),{brand:l,model:u}=(0,n.useParams)();(0,o.useEffect)(()=>{a((0,k.Z)()),a((0,E.Z)(l)),a((0,J.Z)(`${l} ${u}`))},[]);let p=(0,b.Z)(e=>e.carState.activeModelList);return(0,s.jsxs)(e,{children:[s.jsx(t,{children:p.map(e=>s.jsx(O.Z,{card:e,black:!0,style:r.isMobile?{marginBottom:30,width:"100%",flex:"100%"}:{marginBottom:30,width:"auto"}},e.id))}),s.jsx(i,{children:"Ещё"})]})};var B=r(62322),F=r(28156),U=r(6352);let $=({type:e})=>{let{brand:t,model:r}=(0,n.useParams)(),{Container:o}=(0,i.ZP)(),a=(0,i.Gu)(),{Title:l,Text:u}=p();return s.jsx(B.zt,{store:F.h,children:s.jsx(o,{children:(0,s.jsxs)(a,{children:[s.jsx(U.Z,{}),(0,s.jsxs)(l,{children:["Продажа ",`${t} ${r}`.toUpperCase()," с аукционов"," ","japan"===e?"Японии":"Кореи"]}),s.jsx(u,{children:"Чтобы фильтр работал корректно - выберите год производства автомобиля"}),s.jsx(_,{}),s.jsx(A,{})]})})})}},31090:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,generateMetadataObj:()=>i});var s=r(25036);async function i(e){return{title:e.params.model}}function n({children:e}){return s.jsx(s.Fragment,{children:e})}},29489:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});let s=(0,r(86843).createProxy)(String.raw`C:\Users\smeno\OneDrive\Рабочий стол\TMS-auto\app\components\statistics\model\page.tsx`),{__esModule:i,$$typeof:n}=s,o=s.default},7397:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,generateMetadata:()=>i});let s=r(31090).default;async function i(e){return{title:e.params.model}}},95640:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(25036);r(40002);var i=r(29489);let n=()=>s.jsx(i.default,{type:"japan"})},76653:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,generateMetadata:()=>i});let s=r(31090).default;async function i(e){return{title:e.params.brand}}},72776:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>i});var s=r(25036);let i={title:"СТАТИСТИКА ЯПОНИЯ"};function n({children:e}){return s.jsx(s.Fragment,{children:e})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[107,632,922,492,358,628],()=>r(79823));module.exports=s})();