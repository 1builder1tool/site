var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

TWTR=window.TWTR||{};(function(){var A=0;var D;var B=["init","setDimensions","setRpp","setFeatures","setTweetInterval","setBase","setList","setProfileImage","setTitle","setCaption","setFooterText","setTheme","byClass","render","removeEvents","clear","start","stop","pause","resume","destroy"];function C(H){var E=0;var G;var F=["The Twitter API v1.0 is deprecated, and this widget has ceased functioning.","You can replace it with a new, upgraded widget from <https://twitter.com/settings/widgets/new/"+H+">","For more information on alternative Twitter tools, see <https://dev.twitter.com/docs/twitter-for-websites>"];if(!window.console){return }for(;G=F[E];E++){if(console.warn){console.warn("TWITTER WIDGET: "+G);continue}console.log(G)}}TWTR.Widget=function(E){switch(E.type){case"search":C("search?query="+escape(E.search));break;case"profile":this._profile=true;break;case"list":case"lists":C("list");break;default:return }};TWTR.Widget.ify={autoLink:function(){return{match:function(){return false}}}};TWTR.Widget.randomNumber=function(){};TWTR.Widget.prototype.isRunning=function(){return false};TWTR.Widget.prototype.setProfile=function(E){C("user?screen_name="+escape(E));return this};TWTR.Widget.prototype.setUser=function(E){if(this._profile){return this.setProfile(E)}C("favorites?screen_name="+escape(E));return this};TWTR.Widget.prototype.setSearch=function(E){C("search?query="+escape(E));return this};for(;D=B[A];A++){TWTR.Widget.prototype[D]=function(){return this}}})();

}
/*
     FILE ARCHIVED ON 08:31:56 Feb 01, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:38:19 Aug 12, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.227
  PetaboxLoader3.resolve: 306.263 (5)
  esindex: 0.026
  load_resource: 326.885
  CDXLines.iter: 233.496 (3)
  exclusion.robots: 0.247
  RedisCDXSource: 12.966
  PetaboxLoader3.datanode: 615.938 (8)
  LoadShardBlock: 970.882 (6)
*/