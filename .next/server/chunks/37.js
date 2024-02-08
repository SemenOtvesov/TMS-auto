exports.id=37,exports.ids=[37],exports.modules={34742:(e,t,i)=>{Promise.resolve().then(i.bind(i,59177))},59177:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>B});var s=i(53854),r=i(83105),l=i(80564),n=i(6715),o=i(73741),a=i(76460),d=i(75719),c=i(8453);let p=()=>{let e=(0,c.Z)();return{Title:d.Z.div({fontSize:"2em",fontWeight:800}),size:e}};var x=i(51018),u=i(75548),f=i.n(u),h=i(81923);let m=()=>{let e=(0,c.Z)();return{Container:d.Z.div({fontSize:e.isDesktop?"1em":"0.8em"}),Title:d.Z.div({marginBottom:e.isDesktop?60:e.isMobile?20:40,display:"flex",justifyContent:"space-between",alignItems:e.isMobile?"start":"center",flexDirection:e.isMobile?"column":"row",gap:e.isMobile?20:0}),TitleText:d.Z.div({fontSize:"2em",fontWeight:800}),TitleLink:{textDecoration:"underline",transition:"0.3s",color:"#fff",":hover":{textDecoration:"underline",color:h.b6}},CardContainer:d.Z.div({display:"flex",gap:17}),Card:d.Z.div({backgroundColor:"#fff",borderRadius:15,padding:e.isMobile?15:27,flex:"1 1",color:h.Fw}),CardItem:d.Z.div({display:"flex",gap:25,padding:"7px 0",fontSize:e.isMobile?"1em":"1.25em",borderBottom:"2px solid #D7D7D7"}),CardItemTitle:d.Z.div({fontWeight:700,width:"2em",minWidth:"2em"}),CardItemText:d.Z.div({}),size:e}};var b=i(80845);let g=()=>{let{Container:e,Title:t,TitleText:i,TitleLink:r}=m(),l=(0,x.usePathname)(),n=l.includes("statisticsKorea")?"korea":l.includes("statisticsJapan")?"japan":void 0;return(0,s.jsxs)(e,{children:[(0,s.jsxs)(t,{children:[s.jsx(i,{children:"Как расшифровать аукционный лист"}),s.jsx(f(),{href:{pathname:"/readAuctionList",query:{country:n}},style:r,children:"Как читать аукционный лист"})]}),s.jsx(b.Z,{})]})},v=()=>{let e=(0,c.Z)();return{Container:d.Z.div({display:"flex",justifyContent:"space-between",height:"fit-content",flexDirection:e.isMobile||e.isTab?"column":"row",gap:e.isMobile||e.isTab?30:0}),RightItemMiddleItem:d.Z.span({display:"block"}),RightItemMiddleItemMain:d.Z.figure({display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}),RightItemMiddleItemTitle:d.Z.div({color:h.hv}),RightItemMiddleItemText:d.Z.div({fontWeight:700,width:"fit-content"}),size:e}};var j=i(34218),Z=i(16973),y=i(94588),M=i(94202),w=i(45755),T=i(77177);let C=()=>{let e=(0,c.Z)();return{Left:d.Z.div(function(e){let t={flex:"0 0 40%",aspectRatio:"1/0.8"};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t,aspectRatio:"1/1"}),(e.isTab||e.isMobile)&&(t={...t,aspectRatio:"1.5/1"}),e.isMobile&&(t={...t}),t}(e)),Swiper:d.Z.div({width:"100%",height:"100%",position:"relative",overflow:"hidden"}),Wrapper:d.Z.div(function(e){let t={display:"flex",width:"100%",height:"70%"};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t,height:"50%"}),(e.isTab||e.isMobile)&&(t={...t,height:"70%"}),e.isMobile&&(t={...t}),t}(e)),Slide:d.Z.div({position:"relative",flex:"0 0 100%",borderRadius:5,overflow:"hidden",picture:{...T.Z}}),LeftArrow:d.Z.div({...I(e)}),RightArrow:d.Z.div({...I(e),left:"auto",right:7,transform:"rotate(180deg) translate(0, 50%)"}),Pagination:d.Z.div(function(e){let t={display:"flex",flexWrap:"wrap",width:"100%",gap:"2.5%",padding:"10px 0",height:"fit-content",maxHeight:"11em",overflow:"hidden"};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t,gap:"2.66%"}),(e.isTab||e.isMobile)&&(t={...t,gap:"2.5%"}),e.isMobile&&(t={...t,gap:"2.66%"}),t}(e)),PaginationSlide:d.Z.div(function(e){let t={flex:"0 0 18%",height:"5em",borderRadius:5,overflow:"hidden",marginBottom:10,picture:{width:"100%",height:"100%",display:"block",position:"relative",img:{...T.Z,objectFit:"cover"}}};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t,flex:"0 0 23%"}),(e.isTab||e.isMobile)&&(t={...t,flex:"0 0 18%"}),e.isMobile&&(t={...t,flex:"0 0 23%"}),t}(e)),size:e}};function I(e){return{fontSize:"12px",position:"absolute",top:e.isLaptop?"27.5%":"35%",transform:"translate(0,-50%)",left:7,padding:"1.33em",backgroundColor:h.G1,border:`1px solid ${h.OC}`,borderRadius:3,svg:{fontSize:"1em"},transition:"0.3s",zIndex:10,":hover":{backgroundColor:h.OC}}}var R=i(68222),S=i(42132);i(23141);let D={speed:400,direction:"horizontal",slidesPerView:"auto",resizeObserver:!1},z=({swiper:e,sliderArrowLeft:t,sliderArrowRight:i})=>{if(!e||!e.current||!t?.current||!i?.current)return;D.navigation={prevEl:t.current,nextEl:i.current};let s=new S.Z(e.current,D);return s.on("slideChange",e=>{t.current&&i.current&&(0===e.activeIndex?t.current.setAttribute("style","opacity: 0"):t.current.setAttribute("style","opacity: 1"),e.activeIndex===e.slides.length-1?i.current.setAttribute("style","opacity: 0"):i.current.setAttribute("style","opacity: 1"))}),s};var k=i(56590);let L=({lot:e})=>{let t;let{Left:i,Swiper:r,Wrapper:l,Slide:n,LeftArrow:o,RightArrow:a,Pagination:d,PaginationSlide:c}=C(),p=(0,j.useRef)(null),x=(0,j.useRef)(null),u=(0,j.useRef)(null);return(0,j.useEffect)(()=>{if(t=z({swiper:p,sliderArrowLeft:x,sliderArrowRight:u}))return()=>t?.destroy()},[]),s.jsx(i,{children:(0,s.jsxs)(r,{className:"swiper",ref:p,children:[s.jsx(l,{className:"swiper-wrapper",children:e?.images?.map(e=>s.jsx(n,{className:"swiper-slide",children:s.jsx(R.Z,{imageName:e.split(".jpg")[0],imageType:"image",sourseMod:!1})},e))}),s.jsx(o,{ref:x,onClick:()=>t?.slidePrev(),className:"swiper-button-prev",style:{opacity:0},children:s.jsx(k.Z,{})}),s.jsx(a,{ref:u,onClick:()=>t?.slideNext(),className:"swiper-button-next",children:s.jsx(k.Z,{})}),s.jsx(d,{className:"swiper-pagination",children:e.images.map(i=>s.jsx(c,{onClick:()=>t?.slideTo(e.images.indexOf(i)),children:s.jsx(R.Z,{imageName:i.split(".jpg")[0],imageType:"image",sourseMod:!1})}))})]})})};var P=i(97401);let $=({text:e,title:t})=>{let{RightItemMiddleItem:i,RightItemMiddleItemTitle:r,RightItemMiddleItemText:l,RightItemMiddleItemMain:n}=v();return s.jsx(i,{children:(0,s.jsxs)(n,{children:[s.jsx(r,{children:t}),s.jsx(l,{children:e})]})})},N=()=>{let e=(0,c.Z)();return{Right:d.Z.div(function(e){let t={flex:"0 0 56%",display:"flex",flexDirection:"column",gap:20};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t,flex:"0 0 58%"}),(e.isTab||e.isMobile)&&(t={...t}),e.isMobile&&(t={...t}),t}(e)),RightItemTop:d.Z.div({display:"flex",flexDirection:"column",gap:15}),Title:d.Z.div({fontSize:"1.5em",fontWeight:800}),TitleSub:d.Z.div({color:h.hv,fontSize:"0,875em"}),RightItemMiddle:d.Z.div({padding:"20px 0",display:"flex",flexDirection:e.isMobile?"column":"row",flexWrap:"wrap",gap:e.isMobile?15:30,borderTop:`1px solid ${h.G1}`,borderBottom:`1px solid ${h.G1}`,span:{flex:"0 0 calc(50% - 15px)"},figure:{width:e.isMobile||e.isTab?"100%":"73%"}}),ButtonBox:d.Z.div(function(e){let t={display:"flex",alignItems:"center",justifyContent:"space-between",button:{flex:"0 0 47%"}};return(e.isLaptop||e.isTab||e.isMobile)&&(t={...t,button:{flex:"0 0 49%",fontSize:"0.8em"}}),(e.isTab||e.isMobile)&&(t={...t}),e.isMobile&&(t={...t,flexDirection:"column",gap:10,button:{width:"100%"}}),t}(e)),MiniText:d.Z.div({fontSize:"0.75em",color:h.hv}),RightItemBottom:d.Z.div({display:"flex",flexDirection:"column",gap:20}),size:e}},W=({lot:e})=>{let{Right:t,RightItemTop:i,Title:r,TitleSub:l,RightItemMiddle:n,ButtonBox:o,MiniText:a,RightItemBottom:d}=N(),c=(0,M.Z)(e=>e.carState.brandList),p=[{value:e.equipment,text:"Комплектация"},{value:e.mileage,text:"Пробег, км"},{value:e.year,text:"Год"},{value:e.engine,text:"Двигатель, см"},{value:e.evaluation,text:"Оценка"},{value:e.body,text:"Кузов"},{value:e.transmission,text:"Трансмиссия"},{value:e.drive,text:"Привод"}],x="japan";for(let t in c){let i=c[t];i.brand===e.brand&&(x=i.loc)}return(0,s.jsxs)(t,{children:[(0,s.jsxs)(i,{children:[s.jsx(r,{children:e.name}),s.jsx(l,{children:"Дата торгов: не назначена"})]}),s.jsx(n,{children:p.map(e=>s.jsx($,{text:`${e.value}`,title:e.text},e.text))}),(0,s.jsxs)(d,{children:[s.jsx($,{text:`${e.price} \xa5`,title:`Стоимость в ${"japan"===x?"Японии":"Корее"}`}),s.jsx($,{text:`${Math.round(12.3*e.price*.78)} ₽`,title:"Полная пошлина"}),(0,s.jsxs)(o,{children:[s.jsx(P.Z,{type:"dark",content:"ПОДРОБНЫЙ РАСЧЕТ",style:{border:`1px solid ${h.OC}`}}),s.jsx(P.Z,{type:"white",content:"БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ"})]}),s.jsx(a,{children:"Стоимость является ориентировочной, исключительно в ознакомительных целях, включая все расходы в г.Владивосток. Расчёт может быть не корректным. Для более точного расчета и по всем вопросам - оставьте заявку на бесплатную консультацию, наши специалисты с радостью вам помогут во всем разобраться!"})]})]})},A=()=>{let{Container:e}=v(),t=(0,x.useParams)(),i=(0,Z.Z)();(0,j.useEffect)(()=>{i((0,y.Z)(t)),i((0,w.Z)())},[]);let r=(0,M.Z)(e=>e.carState.activeLot);return r.body?(0,s.jsxs)(e,{children:[s.jsx(L,{lot:r}),s.jsx(W,{lot:r})]}):s.jsx(s.Fragment,{})},B=()=>{let{Container:e}=(0,l.ZP)(),t=(0,l.Gu)(),{Title:i}=p(),{lot:d}=(0,x.useParams)();return s.jsx(n.zt,{store:o.h,children:s.jsx(e,{children:(0,s.jsxs)(t,{children:[s.jsx(r.Z,{}),(0,s.jsxs)(i,{children:["Лот № ",d]}),s.jsx(A,{}),s.jsx(g,{}),s.jsx(a.Z,{type:"calc"})]})})})}},3293:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>n,__esModule:()=>l,default:()=>a});var s=i(95153);let r=(0,s.createProxy)(String.raw`C:\Users\smeno\OneDrive\Рабочий стол\TMS-auto\app\components\statistics\lot\page.tsx`),{__esModule:l,$$typeof:n}=r,o=r.default,a=o},23141:()=>{}};