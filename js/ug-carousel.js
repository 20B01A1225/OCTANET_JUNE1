function UGCarousel(){var e,t,i,n,a=this,r=jQuery(this),o=new UniteGalleryMain,s=new UGFunctions,u=new UGTileDesign,l=new UGThumbsGeneral,c={carousel_padding:8,carousel_space_between_tiles:20,carousel_navigation_numtiles:3,carousel_scroll_duration:500,carousel_scroll_easing:"easeOutCubic",carousel_autoplay:!0,carousel_autoplay_timeout:3e3,carousel_autoplay_direction:"right",carousel_autoplay_pause_onhover:!0,carousel_vertical_scroll_ondrag:!1};this.events={START_PLAY:"carousel_start_play",PAUSE_PLAY:"carousel_pause_play",STOP_PLAY:"carousel_stop_play"};var d={eventSizeChange:"thumb_size_change",isFirstTimeRun:!0,carouselMaxWidth:null,tileWidth:0,initTileWidth:0,initTileHeight:0,sideSpace:1500,spaceActionSize:500,numCurrent:0,touchActive:!1,startInnerPos:0,lastTime:0,startTime:0,startMousePos:0,lastMousePos:0,scrollShortDuration:200,scrollShortEasing:"easeOutQuad",handle:null,isPlayMode:!1,isPaused:!1,storedEventID:"carousel"};function h(e,t){if(!t)t=d.initTileHeight/d.initTileWidth*e;d.tileWidth=e;var i={tile_width:e,tile_height:t};u.setOptions(i),c.tile_width=e,c.tile_height=t,u.resizeAllTiles(e),P(!0)}function p(){if(null===d.carouselMaxWidth)throw new Error("The carousel width not set");if(d.tileWidth<d.initTileWidth){(o=d.carouselMaxWidth-2*c.carousel_padding)>d.initTileWidth&&(o=d.initTileWidth),h(o);var r=s.getNumItemsInSpace(d.carouselMaxWidth,o,c.carousel_space_between_tiles)}else{var o;if((r=s.getNumItemsInSpace(d.carouselMaxWidth,d.tileWidth,c.carousel_space_between_tiles))<=0)r=1,h(o=d.carouselMaxWidth-2*c.carousel_padding)}var l=s.getSpaceByNumItems(r,d.tileWidth,c.carousel_space_between_tiles);l+=2*c.carousel_padding,i.width(l),1==d.isFirstTimeRun?(u.initEvents(),i.bind("mousedown touchstart",W),jQuery("body").bind("mousemove touchmove",I),jQuery(window).add("body").bind("mouseup touchend",x),i.hover(C,z),u.run(),jQuery.each(t,(function(t,i){i.objThumbWrapper.data("index",t),e.trigger(d.eventSizeChange,[i.objThumbWrapper,!0]),i.objTileOriginal=i.objThumbWrapper.clone(!0,!0)})),P(!0),1==c.carousel_autoplay&&a.startAutoplay()):(1==c.carousel_autoplay&&a.pauseAutoplay(),S(0,!1),1==c.carousel_autoplay&&a.startAutoplay()),s.placeElement(n,0,c.carousel_padding),j(),d.isFirstTimeRun=!1}function f(){return s.getElementSize(n).left}function g(e){return s.getMousePosition(e).pageX}function _(){return n.children(".ug-thumb-wrapper")}function v(e){return s.getNumItemsInSpace(e,d.tileWidth,c.carousel_space_between_tiles)}function m(){return _().length}function y(e){T(e);var t=_();return jQuery(t[e])}function b(){return v(s.getElementSize(i).width)}function P(e){if(!e)e=!1;var t,a=_(),r=0,o=0;return jQuery.each(a,(function(e,i){i=jQuery(i),s.placeElement(i,r,0);var n=s.getElementSize(i);r+=n.width+c.carousel_space_between_tiles,o=Math.max(o,n.height),e==a.length-1&&(t=n.right)})),n.width(t),o+=2*c.carousel_padding,!0===e&&(n.height(o),i.height(o)),S(d.numCurrent,!1),t}function T(e){if(e>_().length-1)throw new Error("Wrogn tile number: "+e)}function w(t,i){if("left"==i)var a=n.children(".ug-thumb-wrapper").first();else a=n.children(".ug-thumb-wrapper").last();var r=function(e,t,i){var n=e.data("index");if(null==n)throw new Error("every tile should have index!");for(var a=[],r=0;r<t;r++){if("prev"==i)var s=o.getPrevItem(n,!0);else s=o.getNextItem(n,!0);if(!s)throw new Error("the item to add is empty");var u=s.objTileOriginal.clone(!0,!0);n=s.index,u.addClass("cloned"),a.push(u)}return a}(a,t,"left"==i?"prev":"next");jQuery.each(r,(function(t,a){"left"==i?n.prepend(a):n.append(a),e.trigger(d.eventSizeChange,a),u.loadTileImage(a)}))}function A(e,t){T(n);for(var i=_(),n=i.length,a=0;a<e;a++)"left"==t?jQuery(i[a]).remove():jQuery(i[n-1-a]).remove()}function S(e,t,i){if(void 0===t){t=!0;if(n.is(":animated"))return!0}var a=y(e),r={left:-s.getElementSize(a).left+c.carousel_padding+"px"};if(!0===t){var o=c.carousel_scroll_duration,u=c.carousel_scroll_easing;!0===i&&(o=d.scrollShortDuration,u=d.scrollShortEasing),n.stop(!0).animate(r,{duration:o,easing:u,queue:!1,complete:function(){d.numCurrent=e,j()}})}else d.numCurrent=e,n.css(r)}function M(){var e,t,i,n;S((e=-f(),t=v(e),i=s.getElementSize(y(t)).left,n=s.getElementSize(y(t+1)).left,Math.abs(i-e)<Math.abs(n-e)?t:t+1),!0,!0)}function j(){var e,t=(e=-f(),d.sideSpace-e),a=function(){var e=s.getElementSize(i),t=s.getElementSize(n),a=t.width-e.width+t.left;return d.sideSpace-a}(),r=0,o=0,u=0,l=0,c=m();if(t>d.spaceActionSize)w(r=v(t),"left"),d.numCurrent+=r;else if(t<-d.spaceActionSize){A(u=v(Math.abs(t)),"left"),d.numCurrent-=u}if(a>d.spaceActionSize?w(o=v(a),"right"):a<-d.spaceActionSize&&A(l=v(Math.abs(a)),"right"),l>c)throw new Error("Can't remove more then num tiles");var h=!1;return(r||o||u||l)&&(P(),h=!0),h}function E(){"left"==c.carousel_autoplay_direction?a.scrollRight(1):a.scrollLeft(1)}function W(e){if(1==d.touchActive)return!0;d.touchActive=!0,a.pauseAutoplay(),d.startTime=jQuery.now(),d.startMousePos=g(e),d.startInnerPos=f(),d.lastTime=d.startTime,d.lastMousePos=d.startMousePos,s.storeEventData(e,d.storedEventID)}function I(e){if(0==d.touchActive)return!0;s.updateStoredEventData(e,d.storedEventID),e.preventDefault();var t=null;if(1==c.carousel_vertical_scroll_ondrag&&(t=s.handleScrollTop(d.storedEventID)),"vert"===t)return!0;d.lastMousePos=g(e);var i,a=d.lastMousePos-d.startMousePos,r=d.startInnerPos+a,o=a>0?"prev":"next";r>0&&"prev"==o&&(r/=3),r<-s.getElementSize(n).width&&"next"==o&&(r=d.startInnerPos+a/3),i={left:r+"px"},n.css(i)}function x(e){if(0==d.touchActive)return!0;d.touchActive=!1,M(),a.unpauseAutoplay()}function C(e){if(0==c.carousel_autoplay_pause_onhover)return!0;1==d.isPlayMode&&0==d.isPaused&&a.pauseAutoplay()}function z(e){if(0==c.carousel_autoplay_pause_onhover)return!0;a.unpauseAutoplay()}function Q(){var e=d.lastTime-d.startTime,t=Math.abs(d.lastMousePos-d.startMousePos);return!(e>300)&&!(t>30)}this.startAutoplay=function(){d.isPlayMode=!0,d.isPaused=!1,r.trigger(a.events.START_PLAY),d.handle&&clearInterval(d.handle),d.handle=setInterval(E,c.carousel_autoplay_timeout)},this.unpauseAutoplay=function(){return 0==d.isPlayMode||(0==d.isPaused||void a.startAutoplay())},this.pauseAutoplay=function(){if(0==d.isPlayMode)return!0;d.isPaused=!0,d.handle&&clearInterval(d.handle),r.trigger(a.events.PAUSE_PLAY)},this.stopAutoplay=function(){if(0==d.isPlayMode)return!0;d.isPaused=!1,d.isPlayMode=!1,d.handle&&clearInterval(d.handle),r.trigger(a.events.STOP_PLAY)},this.destroy=function(){d.handle&&clearInterval(d.handle),r.off(a.events.START_PLAY),r.off(a.events.STOP_PLAY),i.unbind("mousedown"),i.unbind("touchstart"),jQuery("body").unbind("mousemove"),jQuery("body").unbind("touchmove"),jQuery(window).add("body").unbind("mouseup").unbind("touchend"),i.off("mouseenter").off("mouseleave"),u.destroy()},this.init=function(i,n,a){a&&this.setMaxWidth(a),function(i,n){g_objects=i.getObjects(),o=i,jQuery(i),e=g_objects.g_objWrapper,t=g_objects.g_arrItems,c=jQuery.extend(c,n),u.setFixedMode(),u.setApproveClickFunction(Q),u.init(i,c),l=u.getObjThumbs(),c=u.getOptions(),d.initTileWidth=c.tile_width,d.initTileHeight=c.tile_height,d.tileWidth=c.tile_width}(i,n)},this.setMaxWidth=function(e){d.carouselMaxWidth=e},this.setHtml=function(t){!function(t){t||(t=e);e.append("<div class='ug-carousel-wrapper'><div class='ug-carousel-inner'></div></div>"),i=e.children(".ug-carousel-wrapper"),n=i.children(".ug-carousel-inner"),u.setHtml(n),l.getThumbs().fadeTo(0,1)}(t)},this.getElement=function(){return i},this.getObjTileDesign=function(){return u},this.getEstimatedHeight=function(){return c.tile_height+2*c.carousel_padding},this.run=function(){p()},this.scrollRight=function(e){if(!e||"object"==typeof e)e=c.carousel_navigation_numtiles;var t=b();e>t&&(e=t);var i=d.numCurrent-e;i<=0&&(i=0),S(i)},this.scrollLeft=function(e){if(!e||"object"==typeof e)e=c.carousel_navigation_numtiles;var t=b();e>t&&(e=t);var i=m(),n=d.numCurrent+e;n>=i&&(n=i-1),S(n)},this.setScrollLeftButton=function(e){s.setButtonMobileReady(e),s.setButtonOnClick(e,a.scrollLeft)},this.setScrollRightButton=function(e){s.setButtonMobileReady(e),s.setButtonOnClick(e,a.scrollRight)},this.setPlayPauseButton=function(e){s.setButtonMobileReady(e),1==d.isPlayMode&&0==d.isPaused&&e.addClass("ug-pause-icon"),r.on(a.events.START_PLAY,(function(){e.addClass("ug-pause-icon")})),r.on(a.events.STOP_PLAY,(function(){e.removeClass("ug-pause-icon")})),s.setButtonOnClick(e,(function(){0==d.isPlayMode||1==d.isPaused?a.startAutoplay():a.stopAutoplay()}))}}