webpackJsonp([7],{1914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return K});var r,a=n(15),o=n.n(a),i=n(2),s=n.n(i),c=n(3),u=n.n(c),l=n(10),d=n.n(l),f=n(4),p=n.n(f),h=n(5),m=n.n(h),g=n(6),v=n.n(g),y=n(1),E=n.n(y),_=n(0),b=n.n(_),S=n(11),w=n(7),O=n(384),I=n.n(O),k=n(380),x=n(254),T=n(1954),M=n(1958),P=n(73),L=n(1939),D=n(1991),R=n(679),j=n(682),N=n(411),C=n(12),A=n(29),F=n(25),B=n(178),G=n(2396),Z=n(2067),U=n(1966);function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var K=Object(F.a)()(r=Object(S.connect)(function(e,t){var n=t.params,r=Object(A.c)(n.searchText),a=Object(N.a)(e,r);return{feed:a,firstGif:a.items&&a.items.length?Object(C.h)(e,a.items[0]):{},searchText:r}},{beginStickerSearch:j.a,continueStickerSearch:j.b})(r=Object(B.a)("view_sticker_search",{fromProps:{keyword:"searchText"}})(r=function(e){p()(n,e);var t=H(n);function n(){var e;s()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),E()(d()(e),"loadMore",function(){e.props.continueStickerSearch({searchText:e.props.searchText})}),e}return u()(n,[{key:"componentDidMount",value:function(){this.props.beginStickerSearch({searchText:this.props.searchText})}},{key:"componentDidUpdate",value:function(e){var t=this.props.searchText;e.searchText!==t&&this.props.beginStickerSearch({searchText:t})}},{key:"render",value:function(){var e=this.props,t=e.feed,n=e.firstGif,r=e.searchText,a=e.intl,i=t.items,s=t.found,c="stickers-search-feed-".concat(r),u=b.a.createElement("div",null,b.a.createElement(w.b,o()({},U.a.regularSearchLinkText,{values:{searchText:b.a.createElement("strong",null,r)}}))),l=I()(r.toLowerCase());return b.a.createElement(k.a,null,b.a.createElement(_.Fragment,null,b.a.createElement(P.a,{meta:G.a,gfyCount:s,gfyItem:n,items:i,searchText:l,title:a.formatMessage(Z.a.title,{searchText:l})}),b.a.createElement(M.a,{className:"stickers-search-feed",columnWidth:150,feed:b.a.createElement(x.a,o()({},t,{context:"grid_sticker_search",gridProps:{fixedColumnWidth:150,fixedItemHeight:150,marginSize:20,maxNumberOfColumns:6,numberOfItemsPerPage:60},gridItemProps:{forceLowQuality:!0},loadMore:this.loadMore,tagUrl:"/stickers/search"})),feedData:t,keyword:c,player:b.a.createElement(T.a,{feed:t,loadMore:this.loadMore,keyword:c}),relatedLinks:b.a.createElement(_.Fragment,null,b.a.createElement(R.a,{tag:u,url:"/discover/".concat(Object(A.f)(r),"-gifs")}),b.a.createElement(L.a,{context:"stickers_search",items:i,keyword:r,tagUrl:"/stickers/search",title:b.a.createElement(w.b,o()({},Z.a.subtitle,{values:{searchText:b.a.createElement("span",{className:"capitalized-text"},r)}}))})),title:a.formatMessage(Z.a.title,{searchText:r}),subtitle:b.a.createElement(D.a,{found:s})})))}}]),n}(_.Component))||r)||r)||r},1933:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return y});var r,a=n(1),o=n.n(a),i={SIZE_300_250:"300x250",SIZE_300_100:"300x100",SIZE_320_50:"320x50",SIZE_728_90:"728x90",SIZE_400_300:"400x300"},s=(r={},o()(r,i.SIZE_300_250,[300,250]),o()(r,i.SIZE_300_100,[300,100]),o()(r,i.SIZE_320_50,[320,50]),o()(r,i.SIZE_728_90,[728,90]),o()(r,i.SIZE_400_300,[400,300]),r),c="/21732935168/gfycat_desktop",u="/21732935168/Gfycat_Mobile_320x50",l="/21732935168/Gfycat_MobileSearch_320x50",d="/21732935168/Newpages_ABF",f="/21732935168/Category_page",p="div-gpt-ad-1536793174405-0",h="div-gpt-ad-1557883006889-0",m="div-gpt-ad-1558157128054-0",g="div-gpt-ad-1540311296874-0",v="div-gpt-ad-1540917940531-0",y={DESKTOP_FEED_TOP:"gfy-dt-feed-top",DESKTOP_FEED_SIDE:"gfy-dt-feed-side",MOBILE_FEED_TOP:"gfy-m-feed-top",DESKTOP_DISCOVER_TOP:"gfy-dt-discover-top",MOBILE_DISCOVER_TOP:"gfy-m-discover-top",DESKTOP_SHARE_SIDE:"gfy-dt-sharepage-side",MOBILE_SHARE:"gfy-m-sharepage",DESKTOP_IFRAME_BOTTOM:"gfy-player-bottom"},E="67869",_="67868",b="67871",S=605440,w=605439,O=605441,I=function(e){return{bidder:"appnexus",params:{placementId:e}}},k=function(e){return{bidder:"audienceNetwork",params:{placementId:e}}},x=function(e){return{bidder:"consumable",params:{unitId:e.unitId,unitName:e.unitName,zoneIds:e.zoneIds,siteId:"2000766",networkId:"9969"}}},T=function(e){return{bidder:"onedisplay",params:{placement:e,network:"11545.1"}}},M=function(e){return{bidder:"pubmatic",params:{publisherId:"157495",adSlot:e}}},P=function(e){return{bidder:"sovrn",params:{tagid:e}}},L=function(e){return{bidder:"emx_digital",params:{tagid:e}}};s[i.SIZE_300_250],I("13955672"),x({unitId:"5985",unitName:"cnsmbl-audio-300x250-slider",zoneIds:[2001202]}),T("4949948"),M("".concat(p,"@300x250")),P(w),L(_),s[i.SIZE_300_250],I("13955672"),x({unitId:"5985",unitName:"cnsmbl-audio-300x250-slider",zoneIds:[2001202]}),T("4949948"),M("".concat(m,"@300x250")),P(w),L(_),s[i.SIZE_728_90],I("14183443"),x({unitId:"5986",unitName:"cnsmbl-audio-728x90-slider",zoneIds:[2001203]}),T("4979045"),M("".concat(h,"@728x90")),P(S),L(E),s[i.SIZE_320_50],I("14244150"),k("470011803533799_470532430148403"),x({unitId:"5987",unitName:"cnsmbl-audio-320x50-slider",zoneIds:[2001204]}),T("4985060"),M("".concat(g,"@320x50")),P(O),L(b),s[i.SIZE_320_50],I("14304874"),k("470011803533799_470532430148403"),x({unitId:"5987",unitName:"cnsmbl-audio-320x50-slider",zoneIds:[2001204]}),T("4998446"),M("".concat(v,"@320x50")),P(O),L(b),s[i.SIZE_300_250],s[i.SIZE_728_90],s[i.SIZE_300_250],s[i.SIZE_320_50],s[i.SIZE_320_50]},1934:function(e,t,n){"use strict";n.d(t,"a",function(){return N});var r,a,o,i,s=n(2),c=n.n(s),u=n(3),l=n.n(u),d=n(10),f=n.n(d),p=n(4),h=n.n(p),m=n(5),g=n.n(m),v=n(6),y=n.n(v),E=n(1),_=n.n(E),b=n(0),S=n.n(b),w=n(9),O=(n.n(w),n(11)),I=n(13),k=n.n(I),x=n(1936),T=n(1937),M=n(1933),P=n(12),L=n(1938),D=(n.n(L),n(150));function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g()(this,n)}}var j=(r={},_()(r,M.a.DESKTOP_DISCOVER_TOP,M.b.SIZE_728_90),_()(r,M.a.MOBILE_DISCOVER_TOP,M.b.SIZE_320_50),_()(r,M.a.DESKTOP_FEED_TOP,M.b.SIZE_728_90),_()(r,M.a.MOBILE_FEED_TOP,M.b.SIZE_320_50),_()(r,M.a.DESKTOP_FEED_SIDE,M.b.SIZE_300_250),_()(r,M.a.DESKTOP_SHARE_SIDE,M.b.SIZE_300_250),_()(r,M.a.MOBILE_SHARE,M.b.SIZE_320_50),_()(r,M.a.DESKTOP_IFRAME_BOTTOM,M.b.SIZE_320_50),r),N=Object(O.connect)(function(e){return{shouldRenderAds:Object(P.L)(e),cookies:Object(D.a)(e)}})((i=o=function(e){h()(n,e);var t=R(n);function n(e){var r;return c()(this,n),r=t.call(this,e),_()(f()(r),"state",{renderAd:!1}),_()(f()(r),"updateRenderAd",function(){r.setState({renderAd:!0})}),r.props.shouldRenderAds&&r.loadAdLibraries(),r}return l()(n,[{key:"componentDidMount",value:function(){this.props.shouldRenderAds&&this.updateRenderAd()}},{key:"componentDidUpdate",value:function(e){var t=this.props.shouldRenderAds;t!==e.shouldRenderAds&&t&&(this.loadAdLibraries(),this.updateRenderAd())}},{key:"loadAdLibraries",value:function(){var e=this.props,t=e.loadBlockthrough;!0===e.cookies.marketing&&(x.a.load(),t&&T.a.load())}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.id;if(!0!==e.cookies.marketing)return null;var r=M.c[j[n]];if(!this.state.renderAd)return null;var a=k()("adunit-adbridg",t);return S.a.createElement("div",{className:a,"adbridg-ad-class":n,style:{width:"".concat(r[0],"px"),height:"".concat(r[1],"px")}})}}]),n}(b.PureComponent),_()(o,"defaultProps",{loadBlockthrough:!0}),a=i))||a},1935:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(1),i=n.n(o);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u=function e(){var t=this;if(a()(this,e),i()(this,"_spaStart",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};for(var n in e)try{t[n]=e[n].toString()}catch(r){t[n]=e[n]}window.AdBridg.cmd.push({action:"spa_pv_initialize",config:{targeting:c(c({},{account:"false",allaudiences:"false"}),t)}})}),i()(this,"_spaStop",function(){window.AdBridg.cmd.push({action:"spa_pv_shutdown"})}),i()(this,"initAds",function(e){t._spaStart(e)}),i()(this,"refreshAds",function(e){t._spaStop(),t._spaStart(e)}),i()(this,"clearAds",function(){t._spaStop()}),e.singletonInstance)return e.singletonInstance;"undefined"!=typeof window&&(window.AdBridg={cmd:[]}),e.singletonInstance=this};i()(u,"singletonInstance",void 0),t.a=new u},1936:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(3),i=n.n(o),s=n(1),c=n.n(s),u=n(381),l=function(){function e(){if(a()(this,e),c()(this,"isLoaded",!1),e.singletonInstance)return e.singletonInstance;e.singletonInstance=this}return i()(e,[{key:"load",value:function(){this.isLoaded||"undefined"!=typeof window&&(Object(u.a)({id:"google-gpt-script",src:"//www.googletagservices.com/tag/js/gpt.js"}),Object(u.a)({id:"adbridg",src:"https://prod.adspsp.com/adb.3340835.min.js"}),this.isLoaded=!0)}}]),e}();c()(l,"singletonInstance",void 0),t.a=new l},1937:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(3),i=n.n(o),s=n(1),c=n.n(s),u=n(381),l=function(){function e(){if(a()(this,e),c()(this,"isLoaded",!1),e.singletonInstance)return e.singletonInstance;e.singletonInstance=this}return i()(e,[{key:"load",value:function(){this.isLoaded||"undefined"!=typeof window&&(Object(u.a)({id:"blockthrough",src:"https://gfycat-com.videoplayerhub.com/galleryplayer.js"}),this.isLoaded=!0)}}]),e}();c()(l,"singletonInstance",void 0),t.a=new l},1938:function(e,t){e.exports={gfycatBlue:"#2475ff",gfycatLightBlue:"#3aa8ff",darkThemeClass:"dark-theme"}},1939:function(e,t,n){"use strict";var r=n(1952);t.a=r.a},1940:function(e,t,n){"use strict";var r=n(1941);t.a=r.a},1941:function(e,t,n){"use strict";n.d(t,"a",function(){return Z});var r,a,o,i=n(15),s=n.n(i),c=n(2),u=n.n(c),l=n(3),d=n.n(l),f=n(10),p=n.n(f),h=n(4),m=n.n(h),g=n(5),v=n.n(g),y=n(6),E=n.n(y),_=n(1),b=n.n(_),S=n(9),w=(n.n(S),n(0)),O=n.n(w),I=n(11),k=n(72),x=n.n(k),T=n(14),M=n.n(T),P=n(1942),L=n.n(P),D=n(29),R=n(1944),j=(n.n(R),n(1945)),N=n(1946),C=n.n(N),A=n(1947),F=n.n(A);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=E()(e);if(t){var a=E()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var G=10,Z=Object(I.connect)(function(e,t){var n=t.items,r=t.startIndex;return{items:[].concat(n.slice(r-1),n.slice(0,r-1)),mobile:e.renderConfig.mobile}})((o=a=function(e){m()(n,e);var t=B(n);function n(e){var r;return u()(this,n),r=t.call(this,e),b()(p()(r),"resetLoop",function(){r.currentLoop=1,r.loops=1}),b()(p()(r),"handleLoop",function(){r.loops=r.video.duration<r.props.minDuration?Math.ceil(r.props.minDuration/r.video.duration,10):r.loops,r.currentLoop<r.loops?(r.currentLoop++,r.video.play()):r.getNext()}),b()(p()(r),"handleImageLoop",function(e){var t=r.props.items[e];if(clearTimeout(r.imageLoopTimeout),t&&t.hasTransparency){var n=Math.max(Object(D.m)(t),r.props.minDuration);r.imageLoopTimeout=setTimeout(r.getNext,1e3*n)}}),b()(p()(r),"handleGetRef",function(e){r.video=e,r.video&&r.props.autoPlay&&(r.resetLoop(),r.video.addEventListener("ended",r.handleLoop))}),b()(p()(r),"getNext",function(){r.resetLoop();var e=r.state.currentIndex,t=r.props.items;r.handleImageLoop(e+1),e>=t.length-G&&r.loadMore(),e<t.length-1&&r.setState({currentIndex:e+1})}),b()(p()(r),"getPrevious",function(){r.resetLoop();var e=r.state.currentIndex;r.handleImageLoop(e-1),e>0&&r.setState({currentIndex:e-1})}),b()(p()(r),"handleLeftClick",function(){r.getPrevious()}),b()(p()(r),"handleRightClick",function(){r.getNext()}),b()(p()(r),"handleSwipeRight",function(){r.getPrevious()}),b()(p()(r),"handleSwipeLeft",function(){r.getNext()}),b()(p()(r),"loadMore",function(){var e=r.props,t=e.hasMore,n=e.loadMore;n&&t&&n()}),b()(p()(r),"handlePlayerStateChange",function(e){var t=r.props.playerProps.onStateChange;t&&t(e),void 0!==e.shareOpened&&e.shareOpened!==r.paused?(r.paused=e.shareOpened,r.paused&&clearTimeout(r.imageLoopTimeout)):r.handleImageLoop(r.state.currentIndex)}),r.state={currentIndex:0},r.paused=!1,r.resetLoop(),r}return d()(n,[{key:"componentDidMount",value:function(){this.handleImageLoop(this.state.currentIndex)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.imageLoopTimeout)}},{key:"render",value:function(){var e=this.props,t=e.context,n=e.autoPlay,r=e.items,a=e.mobile,o=e.playerComponent,i=e.playerProps,c=this.state.currentIndex,u=r[c],l=[0===c?null:O.a.createElement("div",{className:"left-button noselect",key:"left-button",onClick:this.handleLeftClick},O.a.createElement(M.a,{className:"ic ic-chevron-shadow",svg:C.a})),c>=r.length-1?null:O.a.createElement("div",{className:"right-button noselect",key:"right-button",onClick:this.handleRightClick},O.a.createElement(M.a,{className:"ic ic-chevron-shadow",svg:F.a}))],d=o,f=O.a.createElement(d,s()({context:t,gfyItem:u,getRef:this.handleGetRef,loop:!n},i,{onStateChange:this.handlePlayerStateChange}));return a?O.a.createElement(L.a,{className:"tv-container",onSwipeLeft:this.handleSwipeLeft,onSwipeRight:this.handleSwipeRight},f):O.a.createElement("div",{className:"tv-container"},O.a.createElement(x.a,j.a),f,l)}}]),n}(w.Component),b()(a,"defaultProps",{autoPlay:!0,minDuration:3,playerProps:{},startIndex:0}),r=o))||r},1942:function(e,t,n){var r,a,o;!function(i,s){a=[t,n(1943)],void 0===(o="function"==typeof(r=s)?r.apply(t,a):r)||(e.exports=o)}(0,function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(t);e.default=n.default})},1943:function(e,t,n){var r,a,o;!function(i,s){a=[t,n(0),n(9)],void 0===(o="function"==typeof(r=s)?r.apply(t,a):r)||(e.exports=o)}(0,function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=c;var r=o(t),a=o(n);function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=!1;function c(e){s=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){c(!0)}}))}catch(e){}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return s?e:e.capture}function l(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var d=function(e){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r)));return o._handleSwipeStart=o._handleSwipeStart.bind(o),o._handleSwipeMove=o._handleSwipeMove.bind(o),o._handleSwipeEnd=o._handleSwipeEnd.bind(o),o._onMouseDown=o._onMouseDown.bind(o),o._onMouseMove=o._onMouseMove.bind(o),o._onMouseUp=o._onMouseUp.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),i(n,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,u({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=l(e),n=t.x,r=t.y;this.moveStart={x:n,y:r},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){var t=l(e),n=t.x,r=t.y,a=n-this.moveStart.x,o=r-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:a,y:o},e)&&e.preventDefault(),this.movePosition={deltaX:a,deltaY:o}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"render",value:function(){var e=this;return r.default.createElement(this.props.tagName,{ref:function(t){return e.swiper=t},onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:this.props.className,style:this.props.style},this.props.children)}}]),n}();d.displayName="ReactSwipe",d.propTypes={tagName:a.default.string,className:a.default.string,style:a.default.object,children:a.default.node,allowMouseEvents:a.default.bool,onSwipeUp:a.default.func,onSwipeDown:a.default.func,onSwipeLeft:a.default.func,onSwipeRight:a.default.func,onSwipeStart:a.default.func,onSwipeMove:a.default.func,onSwipeEnd:a.default.func,tolerance:a.default.number.isRequired},d.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},tolerance:0},e.default=d})},1944:function(e,t){},1945:function(e,t,n){"use strict";t.a=Object.freeze({noscript:[{innerHTML:"<style>.tv-container .left-button, .tv-container .right-button {display:none;}</style>"}]})},1946:function(e,t){e.exports='<svg width="20" height="33" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.87 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g filter="url(#a)" stroke="#FFF" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M16.5 3.5l-13 13m0 0l13 13"/></g></svg>'},1947:function(e,t){e.exports='<svg width="20" height="33" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.866536458 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g filter="url(#a)" transform="matrix(-1 0 0 1 20 0)" stroke="#FFF" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M16.5 3.5l-13 13m0 0l13 13"/></g></svg>'},1948:function(e,t){e.exports={gfycatBlue:"#2475ff",gfycatLightBlue:"#3aa8ff",darkThemeClass:"dark-theme"}},1952:function(e,t,n){"use strict";n.d(t,"a",function(){return L});var r,a,o,i=n(2),s=n.n(i),c=n(3),u=n.n(c),l=n(10),d=n.n(l),f=n(4),p=n.n(f),h=n(5),m=n.n(h),g=n(6),v=n.n(g),y=n(1),E=n.n(y),_=n(9),b=(n.n(_),n(0)),S=n.n(b),w=n(11),O=n(12),I=n(252),k=n(1948);n.n(k);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var T=function(e,t){if(e.length<2||t.length<2)return 0;for(var n=new Map,r=0;r<e.length-1;r++){var a=e.substr(r,2),o=n.has(a)?n.get(a)+1:1;n.set(a,o)}for(var i=0,s=0;s<t.length-1;s++){var c=t.substr(s,2),u=n.has(c)?n.get(c):0;u>0&&(n.set(c,u-1),i++)}return 2*i/(e.length+t.length-2)},M=function(e,t){var n,r,a,o=[],i=e.length,s=t.length;if(!i)return s;if(!s)return i;for(a=0;a<=s;a++)o[a]=a;for(r=1;r<=i;r++){for(n=[r],a=1;a<=s;a++)n[a]=e[r-1]===t[a-1]?o[a-1]:Math.min(o[a-1],o[a],n[a-1])+1;o=n}return n[s]},P=function(e){return function(t){return e!==t&&t.length>3&&t.length<20&&["gif","tag","gfycat","youtube","animated","giphy","#","celebs","celebrity"].every(function(e){return-1===t.indexOf(e)})&&M(e,t)>1}},L=Object(w.connect)(function(e,t){var n=t.items;return{gfyItems:n?n.map(function(t){return Object(O.h)(e,t)}):[]}})((o=a=function(e){p()(n,e);var t=x(n);function n(){var e;s()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),E()(d()(e),"getTopTags",function(){var t,n=e.props,r=n.gfyItems,a=n.keyword,o=(t=[]).concat.apply(t,r.map(function(e){return e.tags||[]})).map(function(e){return e.toLowerCase().trim().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"")}).filter(P(a)).reduce(function(e,t){return e[t]=e[t]?e[t]+1:1,e},{});return Object.keys(o).filter(function(e){return o[e]>1}).sort(function(e,t){if(o[e]===o[t]){var n=Math.max(e.indexOf(a),a.indexOf(e)),r=Math.max(t.indexOf(a),a.indexOf(t));if(n!==r)return-1===n?1:-1===r?-1:n-r;var i=T(a,e);return T(a,t)-i}return o[t]-o[e]}).reduce(function(e,t){return e.length>=5?e:e.every(function(e){return M(t,e)>2})?e.concat(t):e},[])}),e}return u()(n,[{key:"shouldComponentUpdate",value:function(e){return e.items.length!==this.props.items.length||e.keyword!==this.props.keyword}},{key:"render",value:function(){var e=this.props,t=e.context,n=e.keyword,r=e.maxNumberOfTags,a=e.tagUrl,o=e.title,i=this.getTopTags();r&&(i=i.slice(0,r));var s={context:t,keyword:n};return S.a.createElement("div",{className:"related-search"},o?S.a.createElement("div",{className:"related-search__title"},o):null,S.a.createElement(I.a,{analyticsParams:s,linkPrefix:a,tags:i}))}}]),n}(b.Component),E()(a,"defaultProps",{tagUrl:"/gifs/search",items:[]}),r=o))||r},1954:function(e,t,n){"use strict";var r=n(1955);t.a=r.a},1955:function(e,t,n){"use strict";n.d(t,"a",function(){return B});var r,a,o,i=n(15),s=n.n(i),c=n(22),u=n.n(c),l=n(2),d=n.n(l),f=n(3),p=n.n(f),h=n(10),m=n.n(h),g=n(4),v=n.n(g),y=n(5),E=n.n(y),_=n(6),b=n.n(_),S=n(1),w=n.n(S),O=n(0),I=n.n(O),k=n(9),x=(n.n(k),n(13)),T=n.n(x),M=n(11),P=n(255),L=n(668),D=n(665),R=n(664),j=n(1940),N=n(1956),C=n(12),A=n(1957);n.n(A);function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=b()(e);if(t){var a=b()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var B=Object(M.connect)(function(e,t){return{items:t.feed.items.map(function(t){return Object(C.h)(e,t)})}},{openLink:N.a})((o=a=function(e){v()(n,e);var t=F(n);function n(){var e;d()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),w()(m()(e),"handlePlayerClick",function(t){return function(){e.props.openLink({link:"/".concat(t),target:"_blank"})}}),e}return p()(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.loadMore,r=e.startIndex,a=this.props.feed.hasMore;return I.a.createElement("div",{className:"feed-player-container"},I.a.createElement(j.a,{context:"inpage_player",hasMore:a,items:t,loadMore:n,playerComponent:G,playerProps:{onClick:this.handlePlayerClick},startIndex:r}))}}]),n}(O.Component),w()(a,"defaultProps",{startIndex:13}),r=o))||r,G=function(e){v()(n,e);var t=F(n);function n(){var e;d()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),w()(m()(e),"state",{topVisible:!1}),w()(m()(e),"handlePlayerStateChange",function(t){var n=e.props.onStateChange;n&&n(t);var r=t.controlsVisible;e.state.topVisible!==r&&e.setState({topVisible:r})}),e}return p()(n,[{key:"render",value:function(){var e=this.state.topVisible,t=this.props,n=t.gfyItem,r=t.onClick,a=u()(t,["gfyItem","onClick"]),o=n.gfyId,i=n.hasTransparency,c=n.userName;return I.a.createElement("div",{className:"feed-player"},i?I.a.createElement(D.a,{context:"inpage_player",gfyItem:n,onClick:r(o),onStateChange:this.handlePlayerStateChange}):I.a.createElement(D.b,s()({context:"inpage_player",backgroundColor:"black",gfyItem:n},a,{onClick:r(o),onStateChange:this.handlePlayerStateChange})),I.a.createElement("div",{className:T()("feed-player__top",{visible:e})},I.a.createElement(R.a,{user:n.userData}),I.a.createElement(P.a,{userid:c,size:"small"})),I.a.createElement("div",{className:"feed-player__bottom"},I.a.createElement(L.a,{views:n.views})))}}]),n}(O.Component)},1956:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(1),a=n.n(r),o=n(386);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){a()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c=function(e){var t=e.link,n=e.target;return function(e,r){window.open(Object(o.c)(s(s({},r().intl),{},{link:t})),n),window.focus()}}},1957:function(e,t){e.exports={gfycatBlue:"#2475ff",gfycatLightBlue:"#3aa8ff"}},1958:function(e,t,n){"use strict";var r=n(1959);t.a=r.a},1959:function(e,t,n){"use strict";n.d(t,"a",function(){return B});var r,a,o,i,s=n(2),c=n.n(s),u=n(3),l=n.n(u),d=n(10),f=n.n(d),p=n(4),h=n.n(p),m=n(5),g=n.n(m),v=n(6),y=n.n(v),E=n(1),_=n.n(E),b=n(0),S=n.n(b),w=n(9),O=(n.n(w),n(32)),I=n.n(O),k=n(13),x=n.n(k),T=n(11),M=n(7),P=n(17),L=n(90),D=n(12),R=n(1934),j=n(1935),N=n(1933),C=n(1960);n.n(C);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g()(this,n)}}var F="feed-with-player",B=(r=Object(T.connect)(function(e){return{mobile:Object(D.r)(e),isLoggedIn:Object(D.p)(e),renderAds:Object(D.L)(e)}}),Object(P.withRouter)(a=r((i=o=function(e){h()(n,e);var t=A(n);function n(e){var r;return c()(this,n),r=t.call(this,e),_()(f()(r),"getAdConfig",function(){return{account:r.props.isLoggedIn}}),_()(f()(r),"_subtitle",function(){var e=r.props.subtitle;if(!e)return null;var t="".concat(F,"__subtitle");return Array.isArray(e)?S.a.createElement(b.Fragment,null,e.map(function(e,n){return S.a.createElement("h2",{className:t,key:n},e)})):S.a.createElement("h2",{className:t},e)}),r.scrollableFeedRef=S.a.createRef(),r}return l()(n,[{key:"componentDidMount",value:function(){this.props.renderAds&&j.a.initAds(this.getAdConfig())}},{key:"componentWillUnmount",value:function(){this.props.renderAds&&j.a.clearAds()}},{key:"componentDidUpdate",value:function(e){var t=this.props.renderAds;this.props.location.pathname!==e.location.pathname&&(this.scrollableFeedRef.current.scrollTop=0),this.props.keyword!==e.keyword?t&&j.a.refreshAds(this.getAdConfig()):t&&t!=e.renderAds&&j.a.initAds(this.getAdConfig())}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.columnWidth,a=t.feed,o=t.feedData,i=(t.keyword,t.mobile),s=t.mobileAd,c=t.player,u=t.relatedLinks,l=t.showEmpty,d=t.showLoading,f=t.title,p=o.isFetching,h=o.items,m=!(p||h&&h.length),g=p&&(!h||!h.length),v=!m&&!g&&h.length>=13&&!i,y=v?S.a.createElement("div",{className:"".concat(F,"__player")},c):null,E=0===this.props.location.pathname.indexOf("/stickers")?S.a.createElement(P.Link,{to:"/stickers"},S.a.createElement(M.b,{id:"FEED_WITH_PLAYER.EMPTY_STICKERS_FEED_LINK_TEXT",defaultMessage:"Stickers",description:"Empty stickers feed link text"})):S.a.createElement(P.Link,{to:"/discover/trending-gifs"},S.a.createElement(M.b,{id:"FEED_WITH_PLAYER.EMPTY_FEED_LINK_TEXT",defaultMessage:"Trending GIFs",description:"Empty feed link text"})),b=S.a.createElement("div",{className:"".concat(F,"__empty")},S.a.createElement("img",{alt:"empty feed",src:"https://thumbs.gfycat.com/PleasedJoyfulBarnacle-size_restricted.gif"}),S.a.createElement("div",{className:"empty-feed-text-1"},S.a.createElement(M.b,{id:"FEED_WITH_PLAYER.EMPTY_FEED_TEXT_1",defaultMessage:"No results found",description:"Empty feed text 1"})),S.a.createElement("div",{className:"empty-feed-text-2"},S.a.createElement(M.b,{id:"FEED_WITH_PLAYER.EMPTY_FEED_TEXT_2",defaultMessage:"Discover {link}",description:"Empty feed text 2",values:{link:E}}))),w=f?S.a.createElement("h1",{className:"".concat(F,"__title")},f):null;return S.a.createElement(I.a,{className:"body--".concat(F)},S.a.createElement("div",{className:x()(F,"column_width_".concat(r||300),(e={},_()(e,n,n),_()(e,"show-player",v),e))},S.a.createElement("div",{className:"".concat(F,"__left")},S.a.createElement("div",{className:"".concat(F,"__page-info")},S.a.createElement("div",{className:"".concat(F,"__title-block")},w,this._subtitle()),i?null:S.a.createElement(R.a,{className:"".concat(F,"__desktop-side-au"),id:N.a.DESKTOP_FEED_SIDE}),u,i?null:y),i&&s?S.a.createElement(R.a,{className:"mobile-feed-view-adunit",id:N.a.MOBILE_FEED_TOP}):null),S.a.createElement("div",{className:"".concat(F,"__right"),ref:this.scrollableFeedRef},m&&l?b:S.a.createElement("div",{className:"".concat(F,"__feed-wrapper")},i?null:S.a.createElement(R.a,{className:"".concat(F,"__desktop-top-au"),id:N.a.DESKTOP_FEED_TOP}),g?null:a),g&&d?S.a.createElement(L.a,{size:30}):null)))}}]),n}(b.Component),_()(o,"defaultProps",{mobileAd:!0,showEmpty:!0,showLoading:!0,showCTA:!1}),a=i))||a)||a)},1960:function(e,t){e.exports={gfycatBlue:"#2475ff",gfycatLightBlue:"#3aa8ff",darkThemeClass:"dark-theme"}},1966:function(e,t,n){"use strict";var r=n(7);t.a=Object(r.g)({title:{id:"SEARCHVIEW.PAGE_TITLE",defaultMessage:"Best {searchText} GIFs",description:"Search page gifs"},subtitle:{id:"SEARCHVIEW.SUBTITLE",defaultMessage:"The best GIFs for {searchText}. Share a GIF and browse these related GIF searches",description:"Search page subtitle"},regularSearchLinkText:{id:"SEARCH.REGULAR_SEARCH_LINK_TEXT",defaultMessage:"Looking for {searchText} GIFs?",description:"Link to the regalar search page text"}})},1991:function(e,t,n){"use strict";var r=n(1992);t.a=r.a},1992:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(7),i=n(1993);n.n(i);t.a=function(e){var t=e.found;return Number.isInteger(t)?a.a.createElement("span",{className:"search-results-number"},a.a.createElement(o.b,{id:"SEARCH_RESULTS.NUMBER",defaultMessage:"{foundNumber} {found, plural, one {result} other {results}}",values:{found:t,foundNumber:a.a.createElement("strong",{className:"number-of-results"},a.a.createElement(o.c,{value:t}))},description:"Search results found text"})):null}},1993:function(e,t){},2067:function(e,t,n){"use strict";var r=n(7);t.a=Object(r.g)({title:{id:"STICKERS_SEARCH.TITLE",defaultMessage:"Top {searchText} Sticker GIFs",description:"Stickers search page title"},metaTitle:{id:"STICKERS_SEARCH.META_TITLE",defaultMessage:"Find the best GIF sticker on Gfycat",description:"Stickers search meta title"},subtitle:{id:"STICKERS_SEARCH.SUBTITLE",defaultMessage:"The best stickers for {searchText}. Share a sticker and browse these related animated sticker searches",description:"Stickers search page subtitle"}})},2396:function(e,t,n){"use strict";var r=n(384),a=n.n(r),o=n(383),i=n(29),s=n(149),c=n(2067);t.a=function(e){var t=e.gfyCount,n=e.gfyItem,r=e.intl,u=e.items,l=void 0===u?[]:u,d=e.searchText;e.title;if(!n)return{};var f="https://gfycat.com/stickers/search/".concat(Object(i.g)(d)),p=Object(o.b)(l,f),h=t>12?"index":"noindex",m=r.formatMessage(c.a.title,{searchText:d}),g=a()(d),v="Send a sticker in iOS iMessage or as a text message on Android and in your video chats from these ".concat(g," stickers. Share your favorite GIF stickers now."),y={title:m,meta:[{name:"robots",content:h},{name:"description",content:v},{name:"keywords",content:"".concat(d," GIFs, animated GIFs, GIF collections, search GIFs")},{name:"twitter:title",content:Object(s.c)(m)},{name:"twitter:description",content:v},{name:"twitter:image",content:n.max5mbGif},{name:"twitter:image:src",content:n.max5mbGif},{name:"twitter:description",content:v},{property:"og:type",content:"video.other"},{property:"og:image",content:n.max5mbGif},{property:"og:image:width",content:n.width},{property:"og:image:height",content:n.height},{property:"og:url",content:f},{property:"og:description",content:v},{property:"og:title",content:Object(s.c)(m)}],script:[{type:"application/ld+json",innerHTML:JSON.stringify(p)}]};return Object.freeze(y)}}});