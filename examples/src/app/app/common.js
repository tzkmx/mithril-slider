"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),DATA_URL="app/data/server.json",vm={seen:{}};exports["default"]={getPageData:function(){var url=arguments.length<=0||void 0===arguments[0]?DATA_URL:arguments[0];return _mithril2["default"].request({method:"GET",url:url,background:!1})},fadeInImage:function(el,url,callback){var showImage=function(){el.style.backgroundImage="url("+url+")",el.style.opacity=1,vm.seen[url]=1,callback&&setTimeout(function(){callback()},500)};if(vm.seen[url])showImage();else{var img=new Image;img.onload=function(){showImage()},img.src=url}}};
//# sourceMappingURL=common.js.map