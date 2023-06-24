function UGSlider(){var e,i,t,r,n,l,s,o,d,a,_,u,g,c=this,f=jQuery(c),m=new UniteGalleryMain,p=null,v=null,b=null,h=new UGVideoPlayer,S=new UGFunctions,I=null,E=null;this.events={ITEM_CHANGED:"item_changed",BEFORE_SWITCH_SLIDES:"before_switch",BEFORE_RETURN:"before_return",AFTER_RETURN:"after_return",ZOOM_START:"slider_zoom_start",ZOOM_END:"slider_zoom_end",ZOOMING:"slider_zooming",ZOOM_CHANGE:"slider_zoom_change",START_DRAG:"start_drag",AFTER_DRAG_CHANGE:"after_drag_change",ACTION_START:"action_start",ACTION_END:"action_end",CLICK:"slider_click",TRANSITION_START:"slider_transition_start",TRANSITION_END:"slider_transition_end",AFTER_PUT_IMAGE:"after_put_image",IMAGE_MOUSEENTER:"slider_image_mouseenter",IMAGE_MOUSELEAVE:"slider_image_mouseleave",CURRENTSLIDE_LOAD_START:"slider_current_loadstart",CURRENTSLIDE_LOAD_END:"slider_current_loadend"};var w={slider_scale_mode:"fill",slider_scale_mode_media:"fill",slider_scale_mode_fullscreen:"down",slider_item_padding_top:0,slider_item_padding_bottom:0,slider_item_padding_left:0,slider_item_padding_right:0,slider_background_color:"",slider_background_opacity:1,slider_image_padding_top:0,slider_image_padding_bottom:0,slider_image_padding_left:0,slider_image_padding_right:0,slider_image_border:!1,slider_image_border_width:10,slider_image_border_color:"#ffffff",slider_image_border_radius:0,slider_image_border_maxratio:.35,slider_image_shadow:!1,slider_video_constantsize:!1,slider_video_constantsize_scalemode:"fit",slider_video_constantsize_width:854,slider_video_constantsize_height:480,slider_video_padding_top:0,slider_video_padding_bottom:0,slider_video_padding_left:0,slider_video_padding_right:0,slider_video_enable_closebutton:!0,slider_transition:"slide",slider_transition_speed:300,slider_transition_easing:"easeInOutQuad",slider_control_swipe:!0,slider_control_zoom:!0,slider_zoom_mousewheel:!0,slider_vertical_scroll_ondrag:!1,slider_loader_type:1,slider_loader_color:"white",slider_enable_links:!0,slider_links_newpage:!1,slider_enable_bullets:!1,slider_bullets_skin:"",slider_bullets_space_between:-1,slider_bullets_align_hor:"center",slider_bullets_align_vert:"bottom",slider_bullets_offset_hor:0,slider_bullets_offset_vert:10,slider_enable_arrows:!0,slider_arrows_skin:"",slider_arrow_left_align_hor:"left",slider_arrow_left_align_vert:"middle",slider_arrow_left_offset_hor:20,slider_arrow_left_offset_vert:0,slider_arrow_right_align_hor:"right",slider_arrow_right_align_vert:"middle",slider_arrow_right_offset_hor:20,slider_arrow_right_offset_vert:0,slider_enable_progress_indicator:!0,slider_progress_indicator_type:"pie",slider_progress_indicator_align_hor:"right",slider_progress_indicator_align_vert:"top",slider_progress_indicator_offset_hor:10,slider_progress_indicator_offset_vert:10,slider_enable_play_button:!0,slider_play_button_skin:"",slider_play_button_align_hor:"left",slider_play_button_align_vert:"top",slider_play_button_offset_hor:40,slider_play_button_offset_vert:8,slider_play_button_mobilehide:!1,slider_enable_fullscreen_button:!0,slider_fullscreen_button_skin:"",slider_fullscreen_button_align_hor:"left",slider_fullscreen_button_align_vert:"top",slider_fullscreen_button_offset_hor:11,slider_fullscreen_button_offset_vert:9,slider_fullscreen_button_mobilehide:!1,slider_enable_zoom_panel:!0,slider_zoompanel_skin:"",slider_zoompanel_align_hor:"left",slider_zoompanel_align_vert:"top",slider_zoompanel_offset_hor:12,slider_zoompanel_offset_vert:92,slider_zoompanel_mobilehide:!1,slider_controls_always_on:!1,slider_controls_appear_ontap:!0,slider_controls_appear_duration:300,slider_enable_text_panel:!0,slider_textpanel_always_on:!0,slider_videoplay_button_type:"square"},T={slider_progress_indicator_align_hor:"left",slider_progress_indicator_align_vert:"bottom",slider_progress_indicator_offset_hor:0,slider_progress_indicator_offset_vert:0},y={isRunOnce:!1,isTextPanelSaparateHover:!1,numPrev:1,numCurrent:2,numNext:3,isControlsVisible:!0,currentControlsMode:"image"};function C(t,r,n){m=t,n&&(g=n,r=S.convertCustomPrefixOptions(r,g,"slider")),e=jQuery(t);var l=m.getObjects();if(i=l.g_objWrapper,l.g_objThumbs,r.hasOwnProperty("slider_progress_indicator_type")&&(w.slider_progress_indicator_type=r.slider_progress_indicator_type),"bar"==w.slider_progress_indicator_type&&(w=jQuery.extend(w,T)),r&&c.setOptions(r),function(){var e=m.getOptions(),i=e.gallery_skin;""==w.slider_bullets_skin&&(w.slider_bullets_skin=i);""==w.slider_arrows_skin&&(w.slider_arrows_skin=i);""==w.slider_zoompanel_skin&&(w.slider_zoompanel_skin=i);""==w.slider_play_button_skin&&(w.slider_play_button_skin=i);""==w.slider_fullscreen_button_skin&&(w.slider_fullscreen_button_skin=i);w.video_enable_closebutton=w.slider_video_enable_closebutton,"zoom"!=e.gallery_mousewheel_role&&(w.slider_zoom_mousewheel=!1)}(),1==w.slider_enable_bullets){b=new UGBullets;var s={bullets_skin:w.slider_bullets_skin,bullets_space_between:w.slider_bullets_space_between};b.init(m,s)}w.slider_enable_text_panel&&(E=new UGTextPanel).init(m,w,"slider"),w.slider_enable_zoom_panel&&(u=new UGZoomButtonsPanel).init(c,w);var o=m.getGalleryID();h.init(w,!1,o)}function x(){if(1==y.isRunOnce)return!1;if(y.isRunOnce=!0,w.slider_background_color){var i=w.slider_background_color;1!=w.slider_background_opacity&&(i=S.convertHexToRGB(i,w.slider_background_opacity)),t.css("background-color",i)}else 1!=w.slider_background_opacity&&(i=S.convertHexToRGB("#000000",w.slider_background_opacity),t.css("background-color",i));1==w.slider_control_swipe&&(a=new UGTouchSliderControl).init(c,w),1==w.slider_control_zoom&&(_=new UGZoomSliderControl).init(c,w),E&&E.run(),function(){e.on(m.events.ITEM_IMAGE_UPDATED,de),e.on(m.events.ITEM_CHANGE,J),b&&jQuery(b).on(b.events.BULLET_CLICK,$);1==w.slider_enable_arrows&&(S.addClassOnHover(d,"ug-arrow-hover"),S.addClassOnHover(o,"ug-arrow-hover"),m.setNextButton(d),m.setPrevButton(o));0==w.slider_controls_always_on&&t.hover(re,ne);t.on("touchend click",ee),f.on(c.events.CLICK,ie),E&&1==y.isTextPanelSaparateHover&&t.hover(L,D);p&&(S.addClassOnHover(p,"ug-button-hover"),m.setPlayButton(p));v&&(S.addClassOnHover(v,"ug-button-hover"),m.setFullScreenToggleButton(v));_&&f.on(c.events.ZOOM_CHANGE,te);u&&u.initEvents();h.initEvents(),jQuery(h).on(h.events.SHOW,se),jQuery(h).on(h.events.HIDE,oe),_e(n),_e(l),_e(s),f.on(c.events.AFTER_PUT_IMAGE,ae),t.on("mouseenter",".ug-item-wrapper img",(function(e){f.trigger(c.events.IMAGE_MOUSEENTER)})),t.on("mouseleave",".ug-item-wrapper img",(function(e){0==c.isMouseInsideSlideImage(e)&&f.trigger(c.events.IMAGE_MOUSELEAVE)}))}()}function j(e,i){var t="ug-type-square";"round"==w.slider_videoplay_button_type&&(t="ug-type-round");var r="";return r+="<div class='ug-slide-wrapper ug-slide"+i+"'>",r+="<div class='ug-item-wrapper'></div>",r+="<div class='ug-slider-preloader "+e+"'></div>",r+="<div class='ug-button-videoplay "+t+"' style='display:none'></div>",r+="</div>"}function N(e){e&&(i=e);var a=function(){var e;switch(w.slider_loader_type){default:case 1:e="ug-loader1";break;case 2:e="ug-loader2";break;case 3:e="ug-loader3";break;case 4:e="ug-loader4";break;case 5:e="ug-loader5";break;case 6:e="ug-loader6";break;case 7:e="ug-loader7";break;case 8:e="ug-loader8";break;case 9:e="ug-loader9"}"black"==w.slider_loader_color&&(e+=" ug-loader-black");return e}(),_=(m.getOptions(),"<div class='ug-slider-wrapper'>");(_+="<div class='ug-slider-inner'>",_+=j(a,1),_+=j(a,2),_+=j(a,3),_+="</div>",1==w.slider_enable_arrows&&(_+="<div class='ug-slider-control ug-arrow-left ug-skin-"+w.slider_arrows_skin+"'></div>",_+="<div class='ug-slider-control ug-arrow-right ug-skin-"+w.slider_arrows_skin+"'></div>"),1==w.slider_enable_play_button&&(_+="<div class='ug-slider-control ug-button-play ug-skin-"+w.slider_play_button_skin+"'></div>"),1==w.slider_enable_fullscreen_button&&(_+="<div class='ug-slider-control ug-button-fullscreen ug-skin-"+w.slider_fullscreen_button_skin+"'></div>"),_+="</div>",i.append(_),t=i.children(".ug-slider-wrapper"),r=t.children(".ug-slider-inner"),n=r.children(".ug-slide1"),l=r.children(".ug-slide2"),s=r.children(".ug-slide3"),n.data("slidenum",1),l.data("slidenum",2),s.data("slidenum",3),b&&b.appendHTML(t),1==w.slider_enable_arrows&&(o=t.children(".ug-arrow-left"),d=t.children(".ug-arrow-right")),1==w.slider_enable_play_button&&(p=t.children(".ug-button-play")),1==w.slider_enable_fullscreen_button&&(v=t.children(".ug-button-fullscreen")),1==w.slider_enable_progress_indicator)&&("bar"==(I=S.initProgressIndicator(w.slider_progress_indicator_type,w,t)).getType()&&"pie"==w.slider_progress_indicator_type&&(w.slider_progress_indicator_type="bar",w=jQuery.extend(w,T)),m.setProgressIndicator(I));1==w.slider_enable_text_panel&&(E.appendHTML(t),0==w.slider_textpanel_always_on&&(E.getElement().hide().data("isHidden",!0),y.isTextPanelSaparateHover=!0));1==w.slider_enable_zoom_panel&&u.appendHTML(t),h.setHtml(r)}function k(e){var i=ge(e);S.placeElementInParentCenter(i);var t=ce(e);S.placeElementInParentCenter(t)}function P(){if(b&&(objBullets=b.getElement(),S.placeElement(objBullets,w.slider_bullets_align_hor,w.slider_bullets_align_vert,w.slider_bullets_offset_hor,w.slider_bullets_offset_vert),S.placeElement(objBullets,w.slider_bullets_align_hor,w.slider_bullets_align_vert,w.slider_bullets_offset_hor,w.slider_bullets_offset_vert)),1==w.slider_enable_arrows&&(S.placeElement(o,w.slider_arrow_left_align_hor,w.slider_arrow_left_align_vert,w.slider_arrow_left_offset_hor,w.slider_arrow_left_offset_vert),S.placeElement(d,w.slider_arrow_right_align_hor,w.slider_arrow_left_align_vert,w.slider_arrow_right_offset_hor,w.slider_arrow_right_offset_vert)),0==w.slider_controls_always_on&&q(!0),I){var e=I.getElement();if("bar"==w.slider_progress_indicator_type){var i=t.width();I.setSize(i),S.placeElement(e,"left",w.slider_progress_indicator_align_vert,0,w.slider_progress_indicator_offset_vert)}else S.placeElement(e,w.slider_progress_indicator_align_hor,w.slider_progress_indicator_align_vert,w.slider_progress_indicator_offset_hor,w.slider_progress_indicator_offset_vert)}E&&E.positionPanel(),function(){p&&S.placeElement(p,w.slider_play_button_align_hor,w.slider_play_button_align_vert,w.slider_play_button_offset_hor,w.slider_play_button_offset_vert);v&&S.placeElement(v,w.slider_fullscreen_button_align_hor,w.slider_fullscreen_button_align_vert,w.slider_fullscreen_button_offset_hor,w.slider_fullscreen_button_offset_vert);if(u){var e=u.getElement();S.placeElement(e,w.slider_zoompanel_align_hor,w.slider_zoompanel_align_vert,w.slider_zoompanel_offset_hor,w.slider_zoompanel_offset_vert)}}(),k(n),k(l),k(s),m.isMobileMode()?(1==w.slider_fullscreen_button_mobilehide&&v&&v.hide(),1==w.slider_play_button_mobilehide&&p&&p.hide(),1==w.slider_zoompanel_mobilehide&&u&&u.getElement().hide()):(1==w.slider_fullscreen_button_mobilehide&&v&&v.show(),1==w.slider_play_button_mobilehide&&p&&p.show(),1==w.slider_zoompanel_mobilehide&&u&&u.getElement().show())}function A(){var e,i,t,n,l=c.getSlidesReference(),s=0;t=c.isSlideHasItem(l.objNextSlide),(n=c.isSlideHasItem(l.objPrevSlide))?(s=l.objPrevSlide.outerWidth(),l.objPrevSlide.css("z-index",1)):l.objPrevSlide.hide(),e=i=s+l.objCurrentSlide.outerWidth(),t?(e=i+l.objNextSlide.outerWidth(),l.objPrevSlide.css("z-index",2)):l.objNextSlide.hide(),l.objCurrentSlide.css("z-index",3),S.placeElement(l.objCurrentSlide,s,0),r.css({left:-s+"px",width:e+"px"}),n&&(S.placeElement(l.objPrevSlide,0,0),S.showElement(l.objPrevSlide)),t&&(S.showElement(l.objNextSlide),S.placeElement(l.objNextSlide,i,0))}function O(e){var i=e.data("index");if(void 0===i||null==i)return!1;var t=m.getItem(i);if(!t)return!1;G(e,t)}function z(e){e.stop(!0).hide(100)}function R(e,i,t){var r={};if(1==w.slider_image_border){r["border-style"]="solid";var n=function(e,i){if((s=w.slider_image_border_width)<=10)return s;var t=S.getElementSize(e),r=t.width,n=t.height;if(i&&(i.hasOwnProperty("imageWidth")&&(r=i.imageWidth),i.hasOwnProperty("imageHeight")&&(n=i.imageHeight)),r<=0)return s;var l=r<n?r:n;if(2*s/l<w.slider_image_border_maxratio)return s;var s=l*w.slider_image_border_maxratio/2;return Math.round(s)}(e,t);r["border-width"]=n+"px",r["border-color"]=w.slider_image_border_color,r["border-radius"]=w.slider_image_border_radius}"image"!=i&&1==w.slider_video_constantsize&&(r["background-color"]="#000000"),1==w.slider_image_shadow&&(r["box-shadow"]="3px 3px 10px 0px #353535"),e.css(r)}function M(e,i){var t=w.slider_video_constantsize_width,r=w.slider_video_constantsize_height,n=w.slider_video_constantsize_scalemode;return S.scaleImageExactSizeInParent(e,i.imageWidth,i.imageHeight,t,r,n)}function H(e,i,t){var r=e.children(".ug-item-wrapper"),n=ge(e);if(void 0===i.urlImage||""==i.urlImage)throw new Error("The slide don't have big image defined ( data-image='imageurl' ). Please check gallery items.","showbig");var l=i.urlImage,s=e.data("urlImage");e.data("urlImage",l);var o=c.getScaleMode(e),d=c.getSlideType(e);if(objPadding=c.getObjImagePadding(),s==l&&!0!==t){var a=r.children("img");0!=i.imageWidth&&0!=i.imageHeight||m.checkFillImageSize(a,i);var _={};R(a,d,_="image"!=d&&1==w.slider_video_constantsize?M(a,i):S.scaleImageFitParent(a,i.imageWidth,i.imageHeight,o,objPadding)),f.trigger(c.events.AFTER_PUT_IMAGE,e)}else if(a=S.placeImageInsideParent(l,r,i.imageWidth,i.imageHeight,o,objPadding),1==i.isBigImageLoaded){if(a.fadeTo(0,1),z(n),"image"!=d&&1==w.slider_video_constantsize)_=M(a,i);else _=S.getImageInsideParentData(r,i.imageWidth,i.imageHeight,o,objPadding);a.css("width",_.imageWidth+"px"),R(a,d,_),f.trigger(c.events.AFTER_PUT_IMAGE,e)}else a.fadeTo(0,0),function(e){e.stop(!0).show(100)}(n),e.data("isLoading",!0),c.isSlideCurrent(e)&&f.trigger(c.events.CURRENTSLIDE_LOAD_START),a.data("itemIndex",i.index),a.on("load",(function(){var e=jQuery(this),i=e.data("itemIndex");e.fadeTo(0,1);var t=e.parent().parent(),r=c.getSlideType(t),n=ge(t),l=c.getObjImagePadding(),s=c.getScaleMode(t);z(n),t.data("isLoading",!1),c.isSlideCurrent(t)&&f.trigger(c.events.CURRENTSLIDE_LOAD_END),m.onItemBigImageLoaded(null,e);var o=m.getItem(i),d={};"image"!=r&&1==w.slider_video_constantsize?M(e,o):d=S.scaleImageFitParent(e,o.imageWidth,o.imageHeight,s,l),e.fadeTo(0,1),R(e,r,d),f.trigger(c.events.AFTER_PUT_IMAGE,t)}))}function G(e,i){try{var t=e.children(".ug-item-wrapper");if(null==i)return t.html(""),e.removeData("index"),e.removeData("type"),e.removeData("urlImage"),!1;e.data("index");e.data("index",i.index),e.data("type",i.type),1==w.slider_enable_links&&"image"==i.type&&(i.link?e.addClass("ug-slide-clickable"):e.removeClass("ug-slide-clickable")),H(e,i);var r=ce(e);switch(i.type){case"image":r.hide();break;default:r.show()}}catch(e){throw void 0!==e.fileName&&"showbig"==e.fileName&&m.showErrorMessageReplaceGallery(e.message),t.html(""),new Error(e)}}function D(){if(!E)return!1;if(1==U())return!1;var e=E.getElement(),i=0;1!=y.isTextPanelSaparateHover&&1!=w.slider_textpanel_always_on||(i=w.slider_controls_appear_duration),e.stop().fadeTo(i,0),e.data("isHidden",!0)}function L(){if(!E)return!1;if(0==U())return!1;var e=E.getElement(),i=0;1!=y.isTextPanelSaparateHover&&1!=w.slider_textpanel_always_on||(e.show(),E.positionElements(),i=w.slider_controls_appear_duration),e.stop().show().fadeTo(i,1),e.data("isHidden",!1)}function U(){return!1!==E.getElement().data("isHidden")}function W(){var e=c.getCurrentSlide(),i=c.getSlideImage(e),t=S.getElementSize(e),r=t.left,n=t.top;if(1==w.slider_video_constantsize){var l=S.getElementSize(i);r+=l.left,n+=l.top}else r+=w.slider_video_padding_left,n+=w.slider_video_padding_top;h.setPosition(r,n)}function B(){var e=w.slider_video_constantsize_width,i=w.slider_video_constantsize_height;h.setSize(e,i),R(h.getObject(),"video")}function F(e,i,t){f.trigger(c.events.TRANSITION_START);var r=w.slider_transition;switch(t&&(r=t),c.stopSlideAction(null,!0),r){default:case"fade":Z(i);break;case"slide":Q(e,i);break;case"lightbox_open":Z(i,!1,!0)}}function Q(e,i){if(1==c.isAnimating())return y.itemWaiting=i,!0;null!=y.itemWaiting&&(y.itemWaiting=null);var t=c.getSlidesReference();switch(e){case"right":G(t.objPrevSlide,i),A();var n=-S.getElementSize(t.objPrevSlide).left;c.switchSlideNums("right");break;case"left":G(t.objNextSlide,i),A();n=-S.getElementSize(t.objNextSlide).left;c.switchSlideNums("left");break;default:throw new Error("wrong direction: "+e)}var l={duration:w.slider_transition_speed,easing:w.slider_transition_easing,queue:!1,always:function(){(c.stopSlideAction(),h.hide(),null!=y.itemWaiting)?Q(function(e){var i=c.getSlidesReference().objCurrentSlide.data("index"),t=e.index,r="left";i>t&&(r="right");return r}(y.itemWaiting),y.itemWaiting):(c.placeNabourItems(),f.trigger(c.events.TRANSITION_END))}};r.animate({left:n+"px"},l)}function V(e,i,t){t?e.fadeTo(w.slider_transition_speed,i,t):e.fadeTo(w.slider_transition_speed,i)}function Z(e,i,t){if(!i)i=!1;var r=c.getSlidesReference();G(r.objNextSlide,e);var n=S.getElementSize(r.objCurrentSlide);S.placeElement(r.objNextSlide,n.left,n.top);var l=y.numCurrent;if(y.numCurrent=y.numNext,y.numNext=l,f.trigger(c.events.ITEM_CHANGED),r.objNextSlide.stop(!0),r.objCurrentSlide.stop(!0),1==i)r.objCurrentSlide.fadeTo(0,0),r.objNextSlide.fadeTo(0,1),c.placeNabourItems(),f.trigger(c.events.TRANSITION_END),!0!==t&&h.hide();else{if(r.objNextSlide.fadeTo(0,0),V(r.objCurrentSlide,0,(function(){c.placeNabourItems(),f.trigger(c.events.TRANSITION_END),!0!==t&&h.hide()})),1==h.isVisible())V(h.getObject(),0);V(r.objNextSlide,1)}}function K(){return t.children(".ug-slider-control")}function q(e){if(0==S.isTimePassed("sliderControlsToggle"))return!1;if(0==y.isControlsVisible)return!1;if(!e)e=!1;var i=K();!0===e?i.stop().fadeTo(0,0).hide():i.stop().fadeTo(w.slider_controls_appear_duration,0,(function(){i.hide()})),y.isControlsVisible=!1}function X(e){if(0==S.isTimePassed("sliderControlsToggle"))return!1;if(1==y.isControlsVisible)return!0;if(!e)e=!1;var i=K();!0===e?i.stop().show():(i.stop().show().fadeTo(0,0),i.fadeTo(w.slider_controls_appear_duration,1)),y.isControlsVisible=!0}function Y(e){if(e==y.currentControlsMode)return!1;switch(e){case"image":u&&u.getElement().show();break;case"video":u&&u.getElement().hide();break;default:throw new Error("wrong controld mode: "+e)}y.currentControlsMode=e}function J(e,i,t){var r=m.getSelectedItem();c.setItem(r,!1,t);var n=r.index;b&&b.setActive(n),E&&0==y.isTextPanelSaparateHover&&L(),"image"==r.type?Y("image"):Y("video")}function $(e,i){m.selectItem(i)}function ee(e){if(a&&0==a.isTapEventOccured(e))return!0;f.trigger(c.events.CLICK,e)}function ie(){var e=c.getCurrentSlide().hasClass("ug-slide-clickable"),i=c.getCurrentItem();if(e)return 0==w.slider_links_newpage?location.href=i.link:window.open(i.link,"_blank"),!0;0==w.slider_controls_always_on&&1==w.slider_controls_appear_ontap&&1==c.isCurrentSlideType("image")&&(0==y.isControlsVisible?X():q(),E&&1==w.slider_textpanel_always_on&&c.isCurrentSlideType("image")&&c.isCurrentSlideImageFit()&&L())}function te(e){E&&c.isCurrentSlideType("image")&&0==c.isCurrentSlideImageFit()&&D()}function re(){X()}function ne(){q()}function le(e){var i=e.parent();c.startSlideAction(i)}function se(){m.isPlayMode()&&m.pausePlaying(),f.trigger(c.events.ACTION_START)}function oe(){m.isPlayMode()&&m.continuePlaying(),f.trigger(c.events.ACTION_END)}function de(e,i,t){n.data("index")==i&&(objItem=m.getItem(i),H(n,objItem,!0)),l.data("index")==i&&(objItem=m.getItem(i),H(l,objItem,!0)),s.data("index")==i&&(objItem=m.getItem(i),H(s,objItem,!0))}function ae(e,i){i=jQuery(i);var t=c.getSlideImage(i),r=ce(i),n=S.getElementSize(t);S.placeElement(r,"center","middle",n.left,n.top,t)}function _e(e){var i=ce(e);S.addClassOnHover(i),S.setButtonOnClick(i,le)}function ue(e){switch(e){case 1:return n;case 2:return l;case 3:return s;default:throw new Error("wrong num: "+e)}}function ge(e){if(!e)e=c.getCurrentSlide();return e.children(".ug-slider-preloader")}function ce(e){return e.children(".ug-button-videoplay")}function fe(e){if(!e)e=c.getCurrentSlide();var i=e.data("index");return null==i?null:m.getItem(i)}this.switchSlideNums=function(e){switch(f.trigger(c.events.BEFORE_SWITCH_SLIDES),e){case"left":var i=y.numCurrent;y.numCurrent=y.numNext,y.numNext=y.numPrev,y.numPrev=i;break;case"right":i=y.numCurrent;y.numCurrent=y.numPrev,y.numPrev=y.numNext,y.numNext=i;break;default:throw new Error("wrong direction: "+e)}f.trigger(c.events.ITEM_CHANGED)},this.destroy=function(){f.off(c.events.AFTER_PUT_IMAGE),e.off(m.events.ITEM_IMAGE_UPDATED),e.off(m.events.ITEM_CHANGE),b&&jQuery(b).on(b.events.BULLET_CLICK),t.off("mouseenter"),t.off("mouseleave"),t.off("touchend"),t.off("click"),f.off(c.events.CLICK),_&&f.off(c.events.ZOOM_CHANGE),f.off(c.events.BEFORE_SWITCH_SLIDES),jQuery(h).off(h.events.SHOW),jQuery(h).off(h.events.HIDE),h.destroy(),t.off("mouseenter",".ug-item-wrapper img"),t.off("mouseleave",".ug-item-wrapper img")},this.________EXTERNAL_GENERAL___________=function(){},this.init=function(e,i,t){C(e,i,t)},this.getSlideImage=function(e){if(!e)e=c.getCurrentSlide();return e.find(".ug-item-wrapper img")},this.setHtml=function(e){N(e)},this.run=function(){x()},this.isInnerInPlace=function(){var e=c.getSlidesReference();return-S.getElementSize(e.objCurrentSlide).left==S.getElementSize(r).left},this.isAnimating=function(){return r.is(":animated")},this.isSlideCurrent=function(e){var i=e.data("slidenum");return y.numCurrent==i},this.isSlideHasItem=function(e){var i=e.data("index");return null!=i},this.getObjImagePadding=function(){return{padding_top:w.slider_image_padding_top,padding_bottom:w.slider_image_padding_bottom,padding_left:w.slider_image_padding_left,padding_right:w.slider_image_padding_right}},this.getSlidesReference=function(){return{objPrevSlide:ue(y.numPrev),objNextSlide:ue(y.numNext),objCurrentSlide:ue(y.numCurrent)}},this.getCurrentSlide=function(){return c.getSlidesReference().objCurrentSlide},this.getCurrentItemIndex=function(){var e=c.getSlidesReference().objCurrentSlide.data("index");return null==e&&(e=-1),e},this.getCurrentItem=function(){var e=c.getCurrentItemIndex();return-1==e?null:m.getItem(e)},this.getSlideType=function(e){return null==e&&(e=c.getCurrentSlide()),e.data("type")},this.isMouseInsideSlideImage=function(e){var i=c.getSlideImage(),t=S.getMousePosition(e);void 0===t.pageX&&(t=a.getLastMousePos());var r=S.getMouseElementPoint(t,i),n=S.getElementSize(i);return isMouseInside=S.isPointInsideElement(r,n),isMouseInside},this.isCurrentSlideType=function(e){return c.getSlideType()==e},this.isCurrentSlideLoadingImage=function(){return!0===c.getCurrentSlide().data("isLoading")},this.setItem=function(e,i,t){var r=c.getSlidesReference(),n=r.objCurrentSlide.data("index"),l=e.index;if(l==n)return!0;if(null==n)G(r.objCurrentSlide,e),c.placeNabourItems();else{var s="left";m.getNumItems();"next"==t?s="left":("prev"==t||n>l||n>l)&&(s="right"),F(s,e,i)}},this.placeNabourItems=function(){var e=c.getSlidesReference(),i=e.objCurrentSlide.data("index"),t=m.getPrevItem(i),r=m.getNextItem(i);G(e.objNextSlide,r),G(e.objPrevSlide,t),A()},this.________EXTERNAL_API___________=function(){},this.stopSlideAction=function(e,i){e||(e=c.getCurrentSlide()),!0===i?h.pause():h.hide()},this.startSlideAction=function(e){e||(e=c.getCurrentSlide());var i=fe(e);if("image"==i.type)return!0;switch(1==w.slider_video_constantsize&&B(),W(),h.show(),i.type){case"youtube":h.playYoutube(i.videoid);break;case"vimeo":h.playVimeo(i.videoid);break;case"html5video":h.playHtml5Video(i.videoogv,i.videowebm,i.videomp4,i.urlImage);break;case"soundcloud":h.playSoundCloud(i.trackid);break;case"wistia":h.playWistia(i.videoid)}},this.getScaleMode=function(e){if(!e)e=c.getCurrentSlide();return"image"!=c.getSlideType(e)?w.slider_scale_mode_media:w.slider_scale_mode==w.slider_scale_mode_fullscreen?w.slider_scale_mode:1==m.isFullScreen()?w.slider_scale_mode_fullscreen:w.slider_scale_mode},this.getObjects=function(){return{g_objSlider:t,g_objInner:r,g_options:w,g_objZoomSlider:_}},this.getObjZoom=function(){return _},this.getOptions=function(){return w},this.getElement=function(){return t},this.getVideoObject=function(){return h},this.isCurrentSlideImageFit=function(){var e=c.getCurrentSlide();c.getSlideType(e);!function(e,i){null==i&&(i=c.getCurrentSlide());var t=c.getSlideType(i);if(t!=e)throw new Error("Wrong slide type: "+t+", should be: "+e)}("image",e);var i=c.getSlideImage(e);return 0!=i.length&&S.isImageFitParent(i)},this.isCurrentImageInPlace=function(){var e=c.getSlideImage();if(0==e.length)return!1;var i=c.getScaleMode(),t=c.getObjImagePadding(),r=fe(),n=e.parent(),l=S.getImageInsideParentData(n,r.imageWidth,r.imageHeight,i,t),s=S.getElementSize(e),o=!1;return l.imageWidth==s.width&&(o=!0),o},this.isSlideActionActive=function(){return h.isVisible()},this.isSwiping=function(){return!!a&&a.isTouchActive()},this.isPreloading=function(){return!!ge().is(":visible")},this.setOptions=function(e){g&&(e=S.convertCustomPrefixOptions(e,g,"slider")),w=jQuery.extend(w,e)},this.setSize=function(e,i){if(e<0||i<0)return!0;var o={};o.width=e+"px",o.height=i+"px",t.css(o);var d={};d.height=i+"px",d.top="0px",d.left="0px",r.css(d);var a={};a.height=i+"px",a.width=e+"px",n.css(a),l.css(a),s.css(a);var _=e-w.slider_item_padding_left-w.slider_item_padding_right,u=i-w.slider_item_padding_top-w.slider_item_padding_bottom,g={};if(g.width=_+"px",g.height=u+"px",g.top=w.slider_item_padding_top+"px",g.left=w.slider_item_padding_left+"px",t.find(".ug-item-wrapper").css(g),E&&E.setSizeByParent(),P(),O(n),O(l),O(s),A(),"image"!=c.getSlideType()&&1==w.slider_video_constantsize)B();else{var f=e-w.slider_video_padding_left-w.slider_video_padding_right,m=i-w.slider_video_padding_top-w.slider_video_padding_bottom;h.setSize(f,m)}W()},this.refreshSlideItems=function(){if(1==c.isAnimating())return!0;O(n),O(l),O(s),A()},this.isMouseOver=function(){return t.ismouseover()},this.setPosition=function(e,i){S.placeElement(t,e,i)},this.zoomIn=function(){if(!_)return!0;_.zoomIn()},this.zoomOut=function(){if(!_)return!0;_.zoomOut()},this.zoomBack=function(){if(!_)return!0;_.zoomBack()}}