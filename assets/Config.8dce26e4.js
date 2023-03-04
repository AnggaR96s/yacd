import{r as O,b as c,j as t,i as u,s as V,h as S,c as X,k as Y,l as F,n as M,o as Z,d as W,q as ee,g as A,t as te,v as ne,w as C,x as ae,y as oe,z as re,A as se,D as le,u as ie,C as ce,E as x,F as de,B as y,G as pe,H as ue,J as he}from"./index.e3e76021.js";import{r as fe}from"./logs.3b692d45.js";import{S as b}from"./Select.5149d313.js";import{R as ge}from"./rotate-cw.b9827c4a.js";function ve(e,s){if(e==null)return{};var r=me(e,s),o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(s.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function me(e,s){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(s.indexOf(n)>=0)&&(r[n]=e[n]);return r}var N=O.exports.forwardRef(function(e,s){var r=e.color,o=r===void 0?"currentColor":r,n=e.size,a=n===void 0?24:n,d=ve(e,["color","size"]);return c("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...d,children:[t("polyline",{points:"8 17 12 21 16 17"}),t("line",{x1:"12",y1:"12",x2:"12",y2:"21"}),t("path",{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"})]})});N.propTypes={color:u.exports.string,size:u.exports.oneOfType([u.exports.string,u.exports.number])};N.displayName="DownloadCloud";const ye=N;function be(e,s){if(e==null)return{};var r=we(e,s),o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(s.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function we(e,s){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(s.indexOf(n)>=0)&&(r[n]=e[n]);return r}var j=O.exports.forwardRef(function(e,s){var r=e.color,o=r===void 0?"currentColor":r,n=e.size,a=n===void 0?24:n,d=be(e,["color","size"]);return c("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...d,children:[t("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),t("polyline",{points:"16 17 21 12 16 7"}),t("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})});j.propTypes={color:u.exports.string,size:u.exports.oneOfType([u.exports.string,u.exports.number])};j.displayName="LogOut";const ke=j;function Ce(e,s){if(e==null)return{};var r=xe(e,s),o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(s.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function xe(e,s){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(s.indexOf(n)>=0)&&(r[n]=e[n]);return r}var P=O.exports.forwardRef(function(e,s){var r=e.color,o=r===void 0?"currentColor":r,n=e.size,a=n===void 0?24:n,d=Ce(e,["color","size"]);return c("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...d,children:[t("polyline",{points:"3 6 5 6 21 6"}),t("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),t("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),t("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]})});P.propTypes={color:u.exports.string,size:u.exports.oneOfType([u.exports.string,u.exports.number])};P.displayName="Trash2";const _e=P,{useState:Oe,useRef:Se,useEffect:Ne,useCallback:je}=S;function Pe(e){return t("input",{className:V.input,...e})}function Ie({value:e,...s}){const[r,o]=Oe(e),n=Se(e);Ne(()=>{n.current!==e&&o(e),n.current=e},[e]);const a=je(d=>o(d.target.value),[o]);return t("input",{className:V.input,value:r,onChange:a,...s})}const ze="_root_1djwa_1",Le="_section_1djwa_2",$e="_wrapSwitch_1djwa_26",Te="_sep_1djwa_32",Re="_label_1djwa_45",i={root:ze,section:Le,wrapSwitch:$e,sep:Te,label:Re},Ee="_fieldset_1ghjp_1",De="_input_1ghjp_9",Fe="_cnt_1ghjp_9",_={fieldset:Ee,input:De,cnt:Fe};function Me({OptionComponent:e,optionPropsList:s,selectedIndex:r,onChange:o}){const n=X("visually-hidden",_.input),a=d=>{o(d.target.value)};return t("fieldset",{className:_.fieldset,children:s.map((d,m)=>c("label",{children:[t("input",{type:"radio",checked:r===m,name:"selection",value:m,"aria-labelledby":"traffic chart type "+m,onChange:a,className:n}),t("div",{className:_.cnt,children:t(e,{...d})})]},m))})}const{useMemo:Ve}=S,We={plugins:{legend:{display:!1}},scales:{x:{display:!1,type:"category"},y:{display:!1,type:"linear"}}},B=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],Ae=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],Be=B;function Ue({id:e}){const s=Y.read(),r=Ve(()=>({labels:Be,datasets:[{...F,...M[e].up,data:B},{...F,...M[e].down,data:Ae}]}),[e]),o="chart-"+e;return Z(s.Chart,o,r,null,We),t("div",{style:{width:100,padding:5},children:t("canvas",{id:o})})}const{useEffect:U,useState:Ge,useCallback:g,useRef:He}=S,Je=[{id:0},{id:1},{id:2},{id:3}],qe=[["debug","Debug"],["info","Info"],["warning","Warning"],["error","Error"],["silent","Silent"]],Qe=[{key:"port",label:"Http Port"},{key:"socks-port",label:"Socks5 Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"},{key:"mitm-port",label:"MITM Port"}],Ke=[["zh","\u4E2D\u6587"],["en","English"]],Xe=[["direct","Direct"],["rule","Rule"],["script","Script"],["global","Global"]],Ye=[["gVisor","gVisor"],["System","System"]],Ze=e=>({configs:ee(e),apiConfig:A(e)}),et=e=>({selectedChartStyleIndex:ue(e),latencyTestUrl:he(e),apiConfig:A(e)}),tt=W(et)(at),it=W(Ze)(nt);function nt({dispatch:e,configs:s,apiConfig:r}){return U(()=>{e(te(r))},[e,r]),t(tt,{configs:s})}function at({dispatch:e,configs:s,selectedChartStyleIndex:r,latencyTestUrl:o,apiConfig:n}){var R,E;const[a,d]=Ge(s),m=He(s);U(()=>{m.current!==s&&d(s),m.current=s},[s]);const G=g(()=>{e(ne("apiConfig"))},[e]),w=g((l,p)=>{d({...a,[l]:p})},[a]),I=g((l,p)=>{const f={...a.tun,[l]:p};d({...a,tun:{...f}})},[a]),v=g(({name:l,value:p})=>{switch(l){case"mode":case"log-level":case"allow-lan":case"sniffing":w(l,p),e(C(n,{[l]:p})),l==="log-level"&&fe({...n,logLevel:p});break;case"mitm-port":case"redir-port":case"socks-port":case"mixed-port":case"port":if(p!==""){const f=parseInt(p,10);if(f<0||f>65535)return}w(l,p);break;case"enable":case"stack":I(l,p),e(C(n,{tun:{[l]:p}}));break;default:return}},[n,e,w,I]),H=g(l=>v(l.target),[v]),{selectChartStyleIndex:J,updateAppConfig:z}=ae(),L=g(l=>{const p=l.target,{name:f,value:D}=p;switch(f){case"port":case"socks-port":case"mixed-port":case"redir-port":case"mitm-port":{const k=parseInt(D,10);if(k<0||k>65535)return;e(C(n,{[f]:k}));break}case"latencyTestUrl":{z(f,D);break}default:throw new Error(`unknown input name ${f}`)}},[n,e,z]),q=g(()=>{e(oe(n))},[n,e]),Q=g(()=>{e(re(n))},[n,e]),K=g(()=>{e(se(n))},[n,e]),{data:$}=le(["/version",n],()=>pe("/version",n)),{t:h,i18n:T}=ie();return c("div",{children:[t(ce,{title:h("Config")}),c("div",{className:i.root,children:[Qe.map(l=>a[l.key]!==void 0?c("div",{children:[t("div",{className:i.label,children:l.label}),t(Pe,{name:l.key,value:a[l.key],onChange:H,onBlur:L})]},l.key):null),c("div",{children:[t("div",{className:i.label,children:"Mode"}),t(b,{options:Xe,selected:a.mode,onChange:l=>v({name:"mode",value:l.target.value})})]}),c("div",{children:[t("div",{className:i.label,children:"Log Level"}),t(b,{options:qe,selected:a["log-level"],onChange:l=>v({name:"log-level",value:l.target.value})})]}),c("div",{children:[t("div",{className:i.label,children:h("allow_lan")}),t("div",{className:i.wrapSwitch,children:t(x,{name:"allow-lan",checked:a["allow-lan"],onChange:l=>v({name:"allow-lan",value:l})})})]}),$.meta&&c("div",{children:[t("div",{className:i.label,children:h("tls_sniffing")}),t("div",{className:i.wrapSwitch,children:t(x,{name:"sniffing",checked:a.sniffing,onChange:l=>v({name:"sniffing",value:l})})})]})]}),t("div",{className:i.sep,children:t("div",{})}),$.meta&&c(de,{children:[c("div",{className:i.section,children:[c("div",{children:[t("div",{className:i.label,children:h("enable_tun_device")}),t("div",{className:i.wrapSwitch,children:t(x,{checked:(R=a.tun)==null?void 0:R.enable,onChange:l=>v({name:"enable",value:l})})})]}),c("div",{children:[t("div",{className:i.label,children:"TUN IP Stack"}),t(b,{options:Ye,selected:(E=a.tun)==null?void 0:E.stack,onChange:l=>v({name:"stack",value:l.target.value})})]})]}),t("div",{className:i.sep,children:t("div",{})}),c("div",{className:i.section,children:[c("div",{children:[t("div",{className:i.label,children:"Reload"}),t(y,{start:t(ge,{size:16}),label:h("reload_config_file"),onClick:q})]}),c("div",{children:[t("div",{className:i.label,children:"GEO Databases"}),t(y,{start:t(ye,{size:16}),label:h("update_geo_databases_file"),onClick:Q})]}),c("div",{children:[t("div",{className:i.label,children:"FakeIP"}),t(y,{start:t(_e,{size:16}),label:h("flush_fake_ip_pool"),onClick:K})]})]}),t("div",{className:i.sep,children:t("div",{})})]}),c("div",{className:i.section,children:[c("div",{children:[t("div",{className:i.label,children:h("latency_test_url")}),t(Ie,{name:"latencyTestUrl",type:"text",value:o,onBlur:L})]}),c("div",{children:[t("div",{className:i.label,children:h("lang")}),t("div",{children:t(b,{options:Ke,selected:T.language,onChange:l=>T.changeLanguage(l.target.value)})})]}),c("div",{children:[t("div",{className:i.label,children:h("chart_style")}),t(Me,{OptionComponent:Ue,optionPropsList:Je,selectedIndex:r,onChange:J})]}),c("div",{children:[t("div",{className:i.label,children:"Action"}),t(y,{start:t(ke,{size:16}),label:"Switch backend",onClick:G})]})]})]})}export{it as default};