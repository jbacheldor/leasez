(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(59),l=t.n(c),s=(t(97),t(57),t(1)),i=t(42),o=(t(98),t(41)),m=t.n(o),d=t(40),E=t.n(d),u=t(39),p=t.n(u),v=t(66),N=t.n(v),b=t(70),g=t.n(b),k=t(67),S=t.n(k),h=t(71),f=t.n(h),A=t(68),w=t.n(A),P=t(69),G=t.n(P);t(49);const O=()=>r.a.createElement("div",{className:"newFlagBox"},"NEW"),I=()=>r.a.createElement("div",{className:"onMarketFlagBox"},"AVAILABLE"),C=()=>r.a.createElement("div",{className:"noFeeFlagBox"},"NO FEE"),T=e=>{let{Icon:a,onClick:t}=e;return r.a.createElement("div",{onClick:t},a)};var y=t(16),_=t(19);let L=function(e){return e.NAV_TOGGLE="NAV_TOGGLE",e.CARDVIEW_TOGGLE="CARDVIEW_TOGGLE",e.FILTER_TOGGLE="FILTER_TOGGLE",e}({}),D=function(e){return e.NEXT_PAGE="NEXT_PAGE",e.BACK_PAGE="BACK_PAGE",e.ADJUST_POSTS_PER_PAGE="ADJUST_POSTS_PER_PAGE",e}({});const M={applicationState:{loading:!1,ready:!1,error:!1,filterOpen:!1,cardViewSkinny:!1,navigationOpen:!1},paginationState:{loading:!1,currentPage:1,postsPerPage:5,posts:[]}};var B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M.applicationState;switch((arguments.length>1?arguments[1]:void 0).type){case L.NAV_TOGGLE:return{...e,navigationOpen:!e.navigationOpen};case L.FILTER_TOGGLE:return{...e,filterOpen:!e.filterOpen};case L.CARDVIEW_TOGGLE:return{...e,cardViewSkinny:!e.cardViewSkinny};default:return{...e}}};var R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M.paginationState,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case D.NEXT_PAGE:return{...e,currentPage:e.currentPage+1};case D.BACK_PAGE:return{...e,currentPage:e.currentPage-1};case D.ADJUST_POSTS_PER_PAGE:return{...e,postsPerPage:a.payload};default:return{...e}}};var V=Object(_.b)({appStateReducer:B,paginationStateReducer:R}),j=t(62);var x=Object(j.a)({reducer:{reducers:V}});const F=e=>({paginationState:e.paginationState}),J=e=>{let{lease:a}=e;const{paginationState:t}=Object(y.c)(F),{paginationStateReducer:n}=x.getState().reducers,c=n.postsPerPage*(n.currentPage-1),l=c+n.postsPerPage;return r.a.createElement("div",{className:"card"},a.slice(c,l).map((e,a)=>{let{location:t,price:n,beds:c,isNew:l,favorite:s,onMarket:i,fee:o,baths:d,streetAddress:u,moveInDate:v}=e;return r.a.createElement("div",{className:"skinnycard",key:a},r.a.createElement("div",{className:"flagPosition"},i&&r.a.createElement(I,null),l&&r.a.createElement(O,null)),r.a.createElement("div",{className:"cardGridSk"},r.a.createElement("img",{className:"leasePictureSk",src:"https://imgjapan.com/wp-content/uploads/2023/03/Kakao-logo-800x800-1.png"}),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"location"},t),r.a.createElement("div",{className:"streetAddress"},u),r.a.createElement("div",{className:"priceRow"},r.a.createElement("div",{className:"price"},"$",n),!o&&r.a.createElement(C,null)),r.a.createElement("div",{className:"moveinDateSk"},v),r.a.createElement("div",{className:"bottomData"},0==c?r.a.createElement("div",{className:"bedsSk"},"studio"):c&&1===c?r.a.createElement("div",{className:"bedsSk"},c," bed"):r.a.createElement("div",{className:"bedsSk"},c," beds"),r.a.createElement("div",{className:"separatorSk"}),d&&d>1&&r.a.createElement("div",{className:"bathsSk"},d," baths"),d&&1===d&&r.a.createElement("div",{className:"bathsSk"},d," bath")))),r.a.createElement("div",{className:"heartlocation"},r.a.createElement("div",{className:"archiveButton"},r.a.createElement(T,{Icon:r.a.createElement(p.a,null),onClick:()=>{console.log("move to archive!")}})),s&&r.a.createElement(T,{Icon:r.a.createElement(E.a,null),onClick:()=>{console.log("unfavorited!")}}),!s&&r.a.createElement(T,{Icon:r.a.createElement(m.a,null),onClick:()=>{console.log("favorited!")}})),r.a.createElement("div",{className:"additionalInfo"},r.a.createElement("div",{className:"AmenitiesGrid"},r.a.createElement(N.a,null),r.a.createElement(S.a,null),r.a.createElement(w.a,null),r.a.createElement(G.a,null),r.a.createElement(g.a,null),r.a.createElement(f.a,null)),r.a.createElement("div",{className:"transitLines"},"Transit Lines:")))}))};t(36);const q={SkinnyCardDetailsInput:[{location:"Bushwick",streetAddress:"24 cornelia st apt 2",price:5500,fee:!0,beds:3,baths:2,favorite:!1,isNew:!1,onMarket:!0,moveInDate:"12/3/2034"},{location:"Williamsburg",streetAddress:"1235 Carlyse 2",price:5500,beds:0,fee:!1,baths:1.5,favorite:!1,isNew:!0,onMarket:!1,moveInDate:"12/1/2034"},{location:"Fort Green",streetAddress:"Mrytle Ave #c203",price:5500,beds:2,fee:!1,baths:1.5,favorite:!0,onMarket:!1,moveInDate:"2/17/2019"},{location:"Crown Heights",streetAddress:"24 cornelia st",price:5500,beds:3,fee:!0,baths:1,favorite:!1,isNew:!0,onMarket:!0,moveInDate:"12/3/2034"},{location:"Lower East Side",streetAddress:"24 cornelia st",price:5500,beds:1,baths:1.5,fee:!1,favorite:!0,isNew:!1,onMarket:!1,moveInDate:"12/3/2034"},{location:"Tribeca",streetAddress:"24 cornelia st",price:5500,beds:4,fee:!1,baths:5,favorite:!1,isNew:!1,onMarket:!0,moveInDate:"12/3/2034"},{location:"Upper East Side",streetAddress:"24 cornelia st",price:5500,beds:3,fee:!0,baths:1.5,favorite:!1,isNew:!0,onMarket:!1},{location:"Bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!0,onMarket:!1},{location:"bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!1,isNew:!0,onMarket:!0},{location:"bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!0,isNew:!1,onMarket:!1},{location:"7bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!1,isNew:!1,onMarket:!0},{location:"bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!1,isNew:!0,onMarket:!1},{location:"bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!0,onMarket:!1},{location:"bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!1,isNew:!0,onMarket:!0},{location:"bushwick",streetAddress:"24 cornelia st",price:5500,beds:3,baths:1.5,favorite:!0,isNew:!1,onMarket:!1}]};var K=t(73),W=t.n(K),U=t(74),H=t.n(U),X=t(72),$=t.n(X);const z=()=>r.a.createElement("div",{className:"searchBar"},r.a.createElement("div",{className:"searchIcon"},r.a.createElement($.a,null)),r.a.createElement("input",{className:"searchBox"})),Q=Object(n.createContext)({cardViewGlobalSkinny:!1,setCardViewGlobalSkinny:()=>!1}),Y=e=>{let{children:a}=e;const[t,c]=Object(n.useState)(!1);return r.a.createElement(Q.Provider,{value:{cardViewGlobalSkinny:t,setCardViewGlobalSkinny:c}},a)},Z=()=>{const[e,a]=Object(n.useState)(!1),{cardViewGlobalSkinny:t,setCardViewGlobalSkinny:c}=r.a.useContext(Q);return r.a.createElement("div",{className:"filterBar"},r.a.createElement("div",{className:"mainBar"},r.a.createElement(T,{Icon:r.a.createElement(W.a,null),onClick:()=>{a(!e)}}),r.a.createElement(T,{Icon:r.a.createElement(H.a,null),onClick:()=>{c(!t)}})),e&&r.a.createElement("div",{className:"searchBarGrid"},r.a.createElement(z,null)))};t(105);const ee=e=>({paginationState:e.paginationState}),ae=e=>{let{lease:a}=e;const{paginationState:t}=Object(y.c)(ee),{paginationStateReducer:n}=x.getState().reducers,c=n.postsPerPage*(n.currentPage-1),l=c+n.postsPerPage;return r.a.createElement("div",{className:"cardGrids"},a.slice(c,l).map((e,a)=>{let{location:t,price:n,beds:c,isNew:l,favorite:s,onMarket:i,fee:o,baths:d,streetAddress:u}=e;return r.a.createElement("div",{className:"squarecard",key:a},r.a.createElement("div",{className:"flagPositionSquare"},r.a.createElement("div",{className:"onMarketFlagSq"},i&&r.a.createElement(I,null)),r.a.createElement("div",{className:"newFlagSq"},l&&r.a.createElement(O,null))),r.a.createElement("div",{className:"cardGridSq"},r.a.createElement("img",{className:"leasePicture",src:"https://imgjapan.com/wp-content/uploads/2023/03/Kakao-logo-800x800-1.png"}),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"topData"},r.a.createElement("div",{className:"location"},t),r.a.createElement("div",{className:"streetAddress"},u),r.a.createElement("div",{className:"priceRow"},r.a.createElement("div",{className:"price"},"$",n),!o&&r.a.createElement(C,null)))),r.a.createElement("div",{className:"bottomDataSk"},0==c?r.a.createElement("div",{className:"beds"},"studio"):c&&1===c?r.a.createElement("div",{className:"beds"},c," bed"):r.a.createElement("div",{className:"beds"},c," beds"),r.a.createElement("div",{className:"separator"}),d&&d>1&&r.a.createElement("div",{className:"baths"},d," baths"),d&&1===d&&r.a.createElement("div",{className:"baths"},d," bath"),r.a.createElement("div",{className:"heartlocationSq"},r.a.createElement(T,{Icon:r.a.createElement(p.a,null),onClick:()=>{console.log("move to archive!")}}),s&&r.a.createElement(T,{Icon:r.a.createElement(E.a,null),onClick:()=>{console.log("unfavorited!")}}),!s&&r.a.createElement(T,{Icon:r.a.createElement(m.a,null),onClick:()=>{console.log("favorited!")}})))))}))};t(106);var te=t(77),ne=t.n(te),re=t(76),ce=t.n(re),le=t(75),se=t.n(le);const ie=e=>({paginationState:e.paginationState}),oe=e=>{let{props:a}=e;const{paginationState:t}=Object(y.c)(ie),{paginationStateReducer:n}=x.getState().reducers,c=Object(y.b)();return r.a.createElement("div",{className:"dropdown"},a.map((e,a)=>r.a.createElement("div",{key:a,onClick:()=>(e=>{c({paginationState:t,type:D.ADJUST_POSTS_PER_PAGE,payload:e})})(e)},e)))},me=e=>({paginationState:e.paginationState}),de=()=>{const{paginationState:e}=Object(y.c)(me),{paginationStateReducer:a}=x.getState().reducers,t=Object(y.b)(),[c,l]=Object(n.useState)(!1);return r.a.createElement("div",{className:"paginationMain"},r.a.createElement("div",{className:"rowsPerPage"},"Number of Posts:",a.postsPerPage,r.a.createElement(T,{Icon:r.a.createElement(se.a,null),onClick:()=>{l(!c)}}),r.a.createElement("div",{className:"options"},c&&r.a.createElement(oe,{props:[5,10,15,20]}))),r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"navigation"},r.a.createElement(T,{Icon:r.a.createElement(ce.a,null),onClick:()=>{a.currentPage<=1&&t({paginationState:e,type:D.BACK_PAGE})}}),a.currentPage,r.a.createElement(T,{Icon:r.a.createElement(ne.a,null),onClick:()=>{t({paginationState:e,type:D.NEXT_PAGE})}})))},Ee=()=>{const{cardViewGlobalSkinny:e}=r.a.useContext(Q);return r.a.createElement("div",{className:"Home"},r.a.createElement(Z,null),r.a.createElement(de,null),!e&&r.a.createElement(ae,{lease:q.SkinnyCardDetailsInput}),e&&r.a.createElement(J,{lease:q.SkinnyCardDetailsInput}))},ue=()=>r.a.createElement("div",null,'"This is the archive"'),pe=()=>r.a.createElement("div",null,'"This is the compare page"');var ve=t(78),Ne=t.n(ve),be=t(124),ge=t(123),ke=t(80),Se=t.n(ke),he=t(79),fe=t.n(he);const Ae=e=>{let{name:a,OnClick:t}=e;const[c,l]=Object(n.useState)(!1);return r.a.createElement(be.a,{className:"headerGrid"},r.a.createElement("div",{className:"menuButton"},r.a.createElement(ge.a,{onClick:t},r.a.createElement(Ne.a,null))),r.a.createElement("div",{className:"welcomeBanner"},"Welcome ",a),r.a.createElement("div",{className:"logInButtons"},c&&r.a.createElement("div",null,r.a.createElement(fe.a,null)),!c&&r.a.createElement("div",null,r.a.createElement(Se.a,null))))};var we=t(81),Pe=t.n(we),Ge=t(82),Oe=t.n(Ge),Ie=t(83),Ce=t.n(Ie);const Te=()=>{const e=[{Text:"Home",Link:"/",Icon:{HomeOutlinedIcon:Pe.a}},{Text:"Archive",Link:"Archive",Icon:{TurnedInNotOutlinedIcon:Oe.a}},{Text:"Compare",Link:"Compare",Icon:{CompareArrowsOutlinedIcon:Ce.a}}];return r.a.createElement("div",{className:"grid"},e.map((e,a)=>r.a.createElement("div",{className:"items",key:a},r.a.createElement(i.b,{to:e.Link},e.Text))))},ye=()=>r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",element:r.a.createElement(Ee,null)}),r.a.createElement(s.a,{path:"/archive",element:r.a.createElement(ue,null)}),r.a.createElement(s.a,{path:"/compare",element:r.a.createElement(pe,null)})),_e=e=>({appState:e.applicationState});var Le=()=>{const{appState:e}=Object(y.c)(_e),{appStateReducer:a}=x.getState().reducers,t=Object(y.b)();return r.a.createElement(i.a,null,r.a.createElement(Ae,{name:"Jess",OnClick:()=>void t({appState:e,type:L.NAV_TOGGLE})}),r.a.createElement(Y,null,r.a.createElement(be.a,{flex:"1 1 auto",className:"appGrid"},a.navigationOpen&&r.a.createElement(Te,null),r.a.createElement("div",{className:"pages"},r.a.createElement(ye,null)))))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(y.a,{store:x},r.a.createElement(Le,null)))},36:function(e,a,t){},49:function(e,a,t){},57:function(e,a,t){},90:function(e,a,t){e.exports=t(108)},97:function(e,a,t){},98:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.85d4dd09.chunk.js.map