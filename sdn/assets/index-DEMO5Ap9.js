const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cn4rJh1Z.js","assets/index-Bn842W7X.js","assets/index-CSDBAuMC.css"])))=>i.map(i=>d[i]);
import{_ as fe}from"./index-Bn842W7X.js";const pe=Symbol(),Z=Object.getPrototypeOf,J=new WeakMap,me=e=>e&&(J.has(e)?J.get(e):Z(e)===Object.prototype||Z(e)===Array.prototype),ge=e=>me(e)&&e[pe]||null,ee=(e,t=!0)=>{J.set(e,t)},q=e=>typeof e=="object"&&e!==null,L=new WeakMap,x=new WeakSet,he=(e=Object.is,t=(r,h)=>new Proxy(r,h),s=r=>q(r)&&!x.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),n=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},l=new WeakMap,c=(r,h,O=n)=>{const y=l.get(r);if((y==null?void 0:y[0])===h)return y[1];const b=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return ee(b,!0),l.set(r,[h,b]),Reflect.ownKeys(r).forEach(D=>{if(Object.getOwnPropertyDescriptor(b,D))return;const E=Reflect.get(r,D),A={value:E,enumerable:!0,configurable:!0};if(x.has(E))ee(E,!1);else if(E instanceof Promise)delete A.value,A.get=()=>O(E);else if(L.has(E)){const[w,z]=L.get(E);A.value=c(w,z(),O)}Object.defineProperty(b,D,A)}),Object.preventExtensions(b)},d=new WeakMap,f=[1,1],v=r=>{if(!q(r))throw new Error("object required");const h=d.get(r);if(h)return h;let O=f[0];const y=new Set,b=(i,a=++f[0])=>{O!==a&&(O=a,y.forEach(o=>o(i,a)))};let D=f[1];const E=(i=++f[1])=>(D!==i&&!y.size&&(D=i,w.forEach(([a])=>{const o=a[1](i);o>O&&(O=o)})),O),A=i=>(a,o)=>{const g=[...a];g[1]=[i,...g[1]],b(g,o)},w=new Map,z=(i,a)=>{if(y.size){const o=a[3](A(i));w.set(i,[a,o])}else w.set(i,[a])},X=i=>{var a;const o=w.get(i);o&&(w.delete(i),(a=o[1])==null||a.call(o))},de=i=>(y.add(i),y.size===1&&w.forEach(([o,g],U)=>{const k=o[3](A(U));w.set(U,[o,k])}),()=>{y.delete(i),y.size===0&&w.forEach(([o,g],U)=>{g&&(g(),w.set(U,[o]))})}),H=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),R=t(H,{deleteProperty(i,a){const o=Reflect.get(i,a);X(a);const g=Reflect.deleteProperty(i,a);return g&&b(["delete",[a],o]),g},set(i,a,o,g){const U=Reflect.has(i,a),k=Reflect.get(i,a,g);if(U&&(e(k,o)||d.has(o)&&e(k,d.get(o))))return!0;X(a),q(o)&&(o=ge(o)||o);let V=o;if(o instanceof Promise)o.then(C=>{o.status="fulfilled",o.value=C,b(["resolve",[a],C])}).catch(C=>{o.status="rejected",o.reason=C,b(["reject",[a],C])});else{!L.has(o)&&s(o)&&(V=v(o));const C=!x.has(V)&&L.get(V);C&&z(a,C)}return Reflect.set(i,a,V,g),b(["set",[a],o,k]),!0}});d.set(r,R);const ue=[H,E,c,de];return L.set(R,ue),Reflect.ownKeys(r).forEach(i=>{const a=Object.getOwnPropertyDescriptor(r,i);"value"in a&&(R[i]=r[i],delete a.value,delete a.writable),Object.defineProperty(H,i,a)}),R})=>[v,L,x,e,t,s,n,l,c,d,f],[ye]=he();function P(e={}){return ye(e)}function j(e,t,s){const n=L.get(e);let l;const c=[],d=n[3];let f=!1;const r=d(h=>{c.push(h),l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,r()}}function be(e,t){const s=L.get(e),[n,l,c]=s;return c(n,l(),t)}const u=P({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ce={state:u,subscribe(e){return j(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Buffer.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const d=new URL(n);return d.searchParams.set("startapp",c),d.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(m.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=ce.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},we=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=P({enabled:we,userSessionId:"",events:[],connectedWalletId:void 0}),Ie={state:p,subscribe(e){return j(p.events,()=>e(be(p.events[p.events.length-1])))},initialize(){p.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){p.connectedWalletId=e},click(e){if(p.enabled){const t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track(e){if(p.enabled){const t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view(e){if(p.enabled){const t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},_=P({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:_,subscribe(e){return j(_,()=>e(_))},setChains(e){_.chains=e},setWalletConnectUri(e){_.walletConnectUri=e},setIsCustomDesktop(e){_.isCustomDesktop=e},setIsCustomMobile(e){_.isCustomMobile=e},setIsDataLoaded(e){_.isDataLoaded=e},setIsUiLoaded(e){_.isUiLoaded=e},setIsAuth(e){_.isAuth=e}},B=P({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),$={state:B,subscribe(e){return j(B,()=>e(B))},setConfig(e){var t,s;Ie.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),I.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),m.setModalVersionInStorage(),Object.assign(B,e)}};var Oe=Object.defineProperty,te=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,se=(e,t,s)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ee=(e,t)=>{for(var s in t||(t={}))_e.call(t,s)&&se(e,s,t[s]);if(te)for(var s of te(t))We.call(t,s)&&se(e,s,t[s]);return e};const Y="https://explorer-api.walletconnect.com",G="wcm",Q="js-2.7.0";async function K(e,t){const s=Ee({sdkType:G,sdkVersion:Q},t),n=new URL(e,Y);return n.searchParams.append("projectId",$.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&n.searchParams.append(c,String(d))}),(await fetch(n)).json()}const M={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${Y}/w3m/v1/getWalletImage/${e}?projectId=${$.state.projectId}&sdkType=${G}&sdkVersion=${Q}`},getAssetImageUrl(e){return`${Y}/w3m/v1/getAssetImage/${e}?projectId=${$.state.projectId}&sdkType=${G}&sdkVersion=${Q}`}};var ve=Object.defineProperty,ne=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pe=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&re(e,s,t[s]);if(ne)for(var s of ne(t))Le.call(t,s)&&re(e,s,t[s]);return e};const oe=m.isMobile(),W=P({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ke={state:W,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=$.state;if(e==="NONE"||t==="ALL"&&!e)return W.recomendedWallets;if(m.isArray(e)){const n={recommendedIds:e.join(",")},{listings:l}=await M.getAllListings(n),c=Object.values(l);c.sort((d,f)=>{const v=e.indexOf(d.id),r=e.indexOf(f.id);return v-r}),W.recomendedWallets=c}else{const{chains:s,isAuth:n}=I.state,l=s==null?void 0:s.join(","),c=m.isArray(t),d={page:1,sdks:n?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=oe?await M.getMobileListings(d):await M.getDesktopListings(d);W.recomendedWallets=Object.values(f)}return W.recomendedWallets},async getWallets(e){const t=Pe({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=$.state,{recomendedWallets:l}=W;if(n==="ALL")return W.wallets;l.length?t.excludedIds=l.map(O=>O.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(",")),m.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:d}=e,{listings:f,total:v}=oe?await M.getMobileListings(t):await M.getDesktopListings(t),r=Object.values(f),h=d?"search":"wallets";return W[h]={listings:[...W[h].listings,...r],total:v,page:c??1},{listings:r,total:v}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){W.search={listings:[],total:0,page:1}}},T=P({open:!1}),F={state:T,subscribe(e){return j(T,()=>e(T))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=I.state;if(m.removeWalletConnectDeepLink(),I.setWalletConnectUri(e==null?void 0:e.uri),I.setChains(e==null?void 0:e.chains),ce.reset("ConnectWallet"),s&&n)T.open=!0,t();else{const l=setInterval(()=>{const c=I.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),T.open=!0,t())},200)}})},close(){T.open=!1}};var Ae=Object.defineProperty,ae=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,je=(e,t)=>{for(var s in t||(t={}))Me.call(t,s)&&ie(e,s,t[s]);if(ae)for(var s of ae(t))Se.call(t,s)&&ie(e,s,t[s]);return e};function De(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const N=P({themeMode:De()?"dark":"light"}),le={state:N,subscribe(e){return j(N,()=>e(N))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(N.themeMode=t),s&&(N.themeVariables=je({},s))}},S=P({open:!1,message:"",variant:"success"}),Ne={state:S,subscribe(e){return j(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};class Ue{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=le.setThemeConfig,le.setThemeConfig(t),$.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await fe(()=>import("./index-Cn4rJh1Z.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),I.setIsUiLoaded(!0)}}}const Re=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ue},Symbol.toStringTag,{value:"Module"}));export{m as C,ke as E,F as M,I as O,ce as R,le as T,Ne as a,Ie as b,$ as c,Re as i};
