"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4652],{4815:function(a,t,e){var n=e(3827);e(4090);var r=e(8830),i=e(8169),l=e(6830),o=e(6076);t.Z=function(a){let{control:t,name:e,pd10:c,setValue:d,...s}=a,u=(0,i.Z)(),p=(0,r.Z)(a=>a.carState.brandList),f=[],y=(0,r.Z)(a=>a.carState.activeBrandName);for(let a in p){let t=p[a];f.push(t.brand)}return(0,n.jsx)(o.Z,{title:"Марка",values:["Все",...f],initValue:y,name:e,control:t,setValue:d,setFn:a=>u((0,l.Z)(a)),pd10:c,boxProps:s})}},4766:function(a,t,e){var n=e(3827),r=e(4090),i=e(6676),l=e(8830),o=e(9082),c=e(8169),d=e(8473);t.Z=function(a){let{control:t,nameControl:e,size:s,pd10:u,setValue:p,...f}=a,{InputBox:y,InputPreview:v}=(0,o.Z)(),b=(0,l.Z)(a=>a.carState.activeBrandObj),x=(0,l.Z)(a=>a.carState.activeBrandName),h=(0,l.Z)(a=>a.carState.activeModel),[Z,g]=(0,r.useState)([]),m=(0,c.Z)();return(0,r.useEffect)(()=>{if(!b)return;let a=b.map(a=>a.name);g(a=a.filter((t,e)=>a.indexOf(t)===e))},[b]),(0,n.jsxs)(y,{...f,children:[(0,n.jsx)(v,{children:"Модель"}),(0,n.jsx)(i.Z,{values:["Все",...Z],name:e,initValue:"".concat(x," ").concat(h),control:t,setValue:()=>{},pd10:u||s.isMobile,setFn:a=>m((0,d.Z)(a))})]})}},9082:function(a,t,e){var n=e(9250),r=e(8451),i=e(5210);t.Z=()=>{let a;let t=(0,i.Z)();return{Title:r.Z.div({fontSize:t.isMobile?"1.29em":"1.5em",color:"#fff"}),InputList:r.Z.div((a={display:"flex",justifyContent:"space-between",gap:"50px"},(t.isLaptop||t.isTab||t.isMobile)&&(a={...a}),(t.isTab||t.isMobile)&&(a={...a,gap:"15px",flexDirection:"column"}),t.isMobile&&(a={...a}),a)),InputBox:r.Z.div({flex:"0 0 22%",display:"flex",flexDirection:"column",gap:5}),InputBigBox:r.Z.div({flex:"0 0 44%",display:"flex",flexDirection:"column",gap:5}),InputPreview:r.Z.div({color:n.b6}),InputBoxMain:r.Z.div({display:"flex",flex:"1 1"}),InputYearContainer:r.Z.div({display:"flex",alignItems:"center",color:"#fff",borderRadius:3,overflow:"hidden",flex:"1 1",".MuiInputBase-root":{borderRadius:0}}),InputYearText:r.Z.div({padding:10,height:"100%",flex:"1 1",backgroundColor:n.Fw,display:"flex",justifyContent:"center",alignItems:"center"}),size:t}}},22:function(a,t,e){e.d(t,{Z:function(){return d}});var n=e(3827),r=e(4090),i=e(9221),l=e(4905),o=a=>{let{imageName:t,imageType:e,sourseMod:n,svg:r}=a,i="".concat(e,"/webp/").concat(t,".webp"),l="".concat(e,"/png/").concat(t,".png"),o="".concat(e,"/svg/").concat(t,".svg");return r?c({pathSvg:o}):n?c({pathWebp:i,pathPng:l}):c({pathPng:l})};async function c(a){let{pathPng:t,pathSvg:e,pathWebp:n}=a,r="err",o="err",c="err";return e?(await (0,l.Jt)((0,l.iH)(i.tO,e)).then(a=>c=a).catch(a=>c="err"),await (0,l.Jt)((0,l.iH)(i.tO,e)).then(a=>c=a).catch(a=>c="err"),{svgUrl:c}):n?(await (0,l.Jt)((0,l.iH)(i.tO,n)).then(a=>r=a).catch(a=>r="err"),await (0,l.Jt)((0,l.iH)(i.tO,t)).then(a=>o=a).catch(a=>o="err"),{webpUrl:r,pngUrl:o}):t?(await (0,l.Jt)((0,l.iH)(i.tO,t)).then(a=>o=a).catch(a=>o="err"),{pngUrl:o}):{}}var d=r.memo(a=>{let{imageType:t,imageName:e,sourseMod:i,svg:l,...c}=a,[d,s]=(0,r.useState)({webpUrl:"",pngUrl:"",svgUrl:""});return((0,r.useEffect)(()=>{let a=a=>a.then(a=>s(a));void 0!==i&&a(o({imageType:t,imageName:e,sourseMod:i})),l&&a(o({imageType:t,imageName:e,svg:l}))},[]),"err"===d.pngUrl)?(0,n.jsxs)("picture",{...c,className:"errorDownload ".concat(c.className||""),children:[(0,n.jsx)("div",{className:"img-mask"}),(0,n.jsx)("img",{style:{width:"100%"},src:d.pngUrl,alt:""})]}):(0,n.jsxs)("picture",{...c,className:function(a){let{urlObj:t,modClass:e}=a;return t.pngUrl||t.svgUrl?e||"":"loading-img ".concat(e||"")}({urlObj:d,modClass:c.className}),children:[(0,n.jsx)("div",{className:"img-mask"}),i?(0,n.jsx)("source",{srcSet:d.webpUrl}):"",(0,n.jsx)("img",{src:l?d.svgUrl:d.pngUrl,alt:""})]})})},7697:function(a,t,e){e.d(t,{Z:function(){return d}});var n=e(3827),r=e(9250),i=e(8451),l=e(5210),o=()=>{let a;let t=(0,l.Z)();return{Title:i.Z.div({fontSize:t.isMobile?"1.29em":"1.5em",color:"#fff"}),InputList:i.Z.div((a={display:"flex",justifyContent:"space-between",gap:"50px"},(t.isLaptop||t.isTab||t.isMobile)&&(a={...a}),(t.isTab||t.isMobile)&&(a={...a,gap:"15px",flexDirection:"column"}),t.isMobile&&(a={...a}),a)),InputBox:i.Z.div({flex:"0 0 22%",display:"flex",flexDirection:"column",gap:5}),InputBigBox:i.Z.div({flex:"0 0 44%",display:"flex",flexDirection:"column",gap:5}),InputPreview:i.Z.div({color:r.b6}),InputBoxMain:i.Z.div({display:"flex",flex:"1 1"}),InputYearContainer:i.Z.div({display:"flex",alignItems:"center",color:"#fff",borderRadius:3,overflow:"hidden",flex:"1 1",".MuiInputBase-root":{borderRadius:0}}),InputYearText:i.Z.div({padding:10,height:"100%",flex:"1 1",backgroundColor:r.Fw,display:"flex",justifyContent:"center",alignItems:"center"}),size:t}},c=e(3783);e(4090);var d=function(a){var t,e,i,l;let{title:d,input1:s,input2:u,control:p,...f}=a,{InputBigBox:y,InputPreview:v,InputBoxMain:b,InputYearContainer:x,InputYearText:h,size:Z}=o();return(0,n.jsxs)(y,{...f,children:[(0,n.jsx)(v,{children:d}),(0,n.jsxs)(b,{children:[(0,n.jsxs)(x,{style:{borderRadius:"0",borderRight:"1px solid ".concat(r.G1)},children:[(0,n.jsx)(h,{children:s.startText}),(0,n.jsx)(c.Z,{name:s.name,control:p,type:s.type,textCenter:!0,style:(null===(t=s.props)||void 0===t?void 0:t.style)?null===(e=s.props)||void 0===e?void 0:e.style:{padding:Z.isMobile?"10px":"15px"}}),(0,n.jsx)(h,{children:s.endText})]}),(0,n.jsxs)(x,{style:{borderRadius:"0"},children:[(0,n.jsx)(h,{children:u.startText}),(0,n.jsx)(c.Z,{name:u.name,control:p,type:u.type,textCenter:!0,style:(null===(i=u.props)||void 0===i?void 0:i.style)?null===(l=u.props)||void 0===l?void 0:l.style:{padding:Z.isMobile?"10px":"15px"}}),(0,n.jsx)(h,{children:u.endText})]})]})]})}},6076:function(a,t,e){e.d(t,{Z:function(){return d}});var n=e(3827),r=e(9250),i=e(8451),l=e(5210),o=()=>{let a=(0,l.Z)();return{InputBox:i.Z.div({flex:"0 0 22%",display:"flex",flexDirection:"column",gap:5}),InputPreview:i.Z.div({color:r.b6}),size:a}},c=e(6676),d=function(a){let{title:t,values:e,name:r,control:i,setFn:l,pd10:d,boxProps:s,initValue:u,setValue:p,...f}=a,{InputBox:y,InputPreview:v,size:b}=o();return(0,n.jsxs)(y,{...s,children:[(0,n.jsx)(v,{children:t}),(0,n.jsx)(c.Z,{values:e,name:r,initValue:u,control:i,setValue:p,setFn:a=>l&&l(a),pd10:d||b.isMobile,...f})]})}},4291:function(a,t){t.Z={position:"absolute",top:0,left:0,width:"100%",height:"100%"}},8169:function(a,t,e){var n=e(168);t.Z=()=>(0,n.I0)()},8830:function(a,t,e){let n=e(168).v9;t.Z=n},2838:function(a,t,e){e.d(t,{Z:function(){return o},R:function(){return c}});var n=e(8714),r=e(9221),i=e(7908),l=async()=>{let a=await i.Z.get("".concat(r.qe.databaseURL,"listLots/brandList.json"));if(a.data)return a.data},o=(0,n.hg)("carState/getBrandList",async(a,t)=>{let{getState:e,rejectWithValue:n}=t;return await c(e)||n("")});let c=async a=>{if(!a().carState.brandList[0])return await l()}},4475:function(a,t,e){e.d(t,{Z:function(){return c}});var n=e(8714),r=e(9221),i=e(7908),l=async a=>{let t=[],e=[];for(let n of function(a){let t=[],e=[];for(let t=0;e.length<5;t++){let t=Math.round(10*Math.random());a[t]&&!e.includes(t)&&e.push(t)}return e.forEach(e=>t.push(a[e])),t}(a)){let a="".concat(r.qe.databaseURL,"listLots/").concat(n.loc,"/").concat(n.brand,'.json?orderBy="$key"&startAt="0"&endAt="9"');await i.Z.get(a).then(a=>{"japan"===n.loc&&(t=[...t,...Object.values(a.data)]),"korea"===n.loc&&(e=[...e,...Object.values(a.data)])})}return{japan:t,korea:e}},o=e(2838),c=(0,n.hg)("carState/getRandomModel",async(a,t)=>{let{getState:e,rejectWithValue:n}=t,r=e(),i=r.carState.brandList;if(!r.carState.brandListJapan[0]){let a=await (0,o.R)(e);Array.isArray(a)&&(i=a)}return await l(i)||n("")})},1850:function(a,t,e){e.d(t,{Z:function(){return o}});var n=e(8714),r=e(9221),i=e(7908),l=async()=>{let a=await i.Z.get("".concat(r.qe.databaseURL,"listLots/recentlyPurchased.json"));if(a.data)return a.data},o=(0,n.hg)("carState/getRecentlyPurchasedThunk",async(a,t)=>{let{getState:e,rejectWithValue:n}=t;if(!e().carState.recentlyPurchasedCheck)return await l()||n("")})},6830:function(a,t,e){e.d(t,{Z:function(){return c}});var n=e(8714),r=e(9221),i=e(7908),l=async a=>{let{brand:t,start:e,limit:n}=a,r=!0,l={arr:[],country:"japan"};return await i.Z.get(o({country:"japan",brand:t,start:e,limit:n})).then(a=>{a.data&&Object.values(a.data)[0]&&(r=!1),l={arr:a.data,country:"japan"}}),r&&await i.Z.get(o({country:"korea",brand:t,start:e,limit:n})).then(a=>l={arr:a.data,country:"korea"}),l};function o(a){let{country:t,brand:e,limit:n,start:i}=a;return"".concat(r.qe.databaseURL,"listLots/").concat(t,"/").concat(e,'.json?orderBy="$key"&startAt="').concat(i,'"&endAt="').concat(i+n,'"')}var c=(0,n.hg)("carState/setActiveList",async(a,t)=>{let{getState:e,rejectWithValue:n}=t,r=e();if("Все"===a)return n("");if(!r.carState.downloadBrand.find(t=>t===a)){let t=await l({brand:a,start:0,limit:50});return{arr:Object.values(t.arr),brand:a,country:t.country}}return a})},8063:function(a,t,e){e.d(t,{Z:function(){return c}});var n=e(8714),r=e(2838),i=e(9221),l=e(7908),o=async(a,t)=>{let e="".concat(i.qe.databaseURL,"listLots/").concat(t,"/").concat(a.brand,'.json?orderBy="id"&equalTo=').concat(a.lot),n=await l.Z.get(e);if(n.data)return Object.values(n.data)[0]},c=(0,n.hg)("carState/setActiveLot",async(a,t)=>{var e;let{getState:n,rejectWithValue:i}=t,l=n(),c=l.carState.brandList;l.carState.brandList[0]||(c=await (0,r.R)(n));let[d]=c.map(t=>t.brand===a.brand?t.loc:void 0).filter(a=>void 0!=a);if(!d)return i("");let s=(null===(e=l.carState[d][a.brand])||void 0===e?void 0:e.map(t=>{if(t.brand===a.brand&&t.id===+a.lot)return t}))||[];if(s[0])return{country:d,lot:s[0]};{let t=await o(a,d);return{country:d,lot:t}}})},8473:function(a,t,e){e.d(t,{q:function(){return l}});var n=e(8714),r=e(4475),i=e(2518);function l(a){let t=Object.values(a.japan),e=Object.values(a.korea);return[...t.reduce((a,t)=>(t.forEach(t=>a.push(t)),a),[]),...e.reduce((a,t)=>(t.forEach(t=>a.push(t)),a),[])].sort((a,t)=>a.mileage>t.mileage?1:-1)}t.Z=(0,n.hg)("carState/setActiveModel",async(a,t)=>{let{getState:e,dispatch:n}=t,o=e(),c=o.carState.activeBrandObj;if(n((0,i.$c)(a.split(" ")[1])),c[0])return c.filter(t=>t.name===a);let d=l(o.carState);return d[0]||n((0,r.Z)()),d})},2518:function(a,t,e){e.d(t,{ZP:function(){return g},$c:function(){return h},mD:function(){return Z}});var n=e(8714),r=(a,t)=>{t.payload&&(a.brandList=t.payload,a.brandListJapan=t.payload.map(a=>"japan"===a.loc?a.brand:"").filter(a=>""!=a),a.brandListKorea=t.payload.map(a=>"korea"===a.loc?a.brand:"").filter(a=>""!=a))},i=(a,t)=>{let e="string"==typeof t.payload?t.payload:t.payload.brand;"string"!=typeof t.payload&&(a.downloadBrand.push(t.payload.brand),a[t.payload.country][t.payload.brand]?a[t.payload.country][t.payload.brand].concat(t.payload.arr):a[t.payload.country][t.payload.brand]=t.payload.arr);let n={...a.japan,...a.korea};for(let t in n)t===e&&(a.activeBrandObj=n[t]);a.activeBrandName="string"!=typeof t.payload?t.payload.brand:t.payload},l=(a,t)=>{t.payload&&(a.recentlyPurchased=t.payload,a.recentlyPurchasedCheck=!0)},o=e(8473),c=(a,t)=>{var e,n;let r={japan:{},korea:{}};null===(e=t.payload)||void 0===e||e.japan.forEach(a=>{d("japan",r,a)}),null===(n=t.payload)||void 0===n||n.korea.forEach(a=>{d("korea",r,a)}),a.japan={...a.japan,...r.japan},a.korea={...a.korea,...r.korea};let i=(0,o.q)(a);a.activeModel&&(i=i.filter(t=>t.name==="".concat(a.activeBrandName," ").concat(a.activeModel))),a.activeModelList=i};function d(a,t,e){t[a]&&t[a][e.brand]?t[a][e.brand]=[...t[a][e.brand],e]:t[a][e.brand]=[e]}var s=(a,t)=>{a.activeModelList=t.payload},u=(a,t)=>{t.payload&&t.payload.lot&&t.payload.lot.brand&&(a[t.payload.country][t.payload.lot.brand]?a[t.payload.country][t.payload.lot.brand].push(t.payload.lot):a[t.payload.country][t.payload.lot.brand]=[t.payload.lot],a.activeLot=t.payload.lot)},p=e(6830),f=e(1850),y=e(4475),v=e(2838),b=e(8063);let x=(0,n.oM)({name:"carState",initialState:{brandList:[],japan:{},korea:{},recentlyPurchased:[],activeBrandName:"",activeBrandObj:[],downloadBrand:[],recentlyPurchasedCheck:!1,brandListJapan:[],brandListKorea:[],activeModel:"",activeModelList:[],activeLot:{}},reducers:{setActiveModelFast:(a,t)=>{let{payload:e}=t;a.activeModel=e},setActiveModelList:(a,t)=>{let e=function(a,t){let{brand:e,model:n,body:r,yearOfProductionStart:i,yearOfProductionEnd:l,priseStart:o,priseEnd:c,mileageStart:d,mileageEnd:s,engineCapacityStart:u,engineCapacityEnd:p,evaluation:f}=t,y=[];return a.forEach(a=>{a.brand!==e&&"Все"!==e||a.name!==n&&"Все"!==n||a.body!==r&&"Все"!==r||a.evaluation!==+f&&"Все"!==f||a.year<i||a.year>l||a.price<o||a.price>c||a.mileage<d||a.mileage>s||a.engine/1e3<u||a.engine/1e3>p||y.push(a)}),y}((0,o.q)(a),t.payload);a.activeModelList=e}},extraReducers:a=>{a.addCase(v.Z.fulfilled,r),a.addCase(p.Z.fulfilled,i),a.addCase(o.Z.fulfilled,s),a.addCase(y.Z.fulfilled,c),a.addCase(f.Z.fulfilled,l),a.addCase(b.Z.fulfilled,u)}}),{setActiveModelFast:h,setActiveModelList:Z}=x.actions;var g=x},3690:function(a,t,e){e.d(t,{I:function(){return r}});let n=(0,e(8714).oM)({name:"headerState",initialState:{state:!1},reducers:{setState:a=>{a.state=!a.state}}}),{setState:r}=n.actions;t.Z=n},9950:function(a,t,e){e.d(t,{h:function(){return c}});var n=e(746),r=e(8714),i=e(3690),l=e(2518);let o=(0,n.UY)({[i.Z.name]:i.Z.reducer,[l.ZP.name]:l.ZP.reducer}),c=(0,r.xC)({reducer:o})}}]);