"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _appAppVariables=require("app/app/variables"),_appAppVariables2=_interopRequireDefault(_appAppVariables),pagePositions=function(){for(var p={},e=0;10>=e;){var a=(e-1)*_appAppVariables2.default.size+"px";p[" .page:nth-child("+e+")"]={top:0,left:"auto",top:a},e++}return p},styles=[{".example.vertical":[pagePositions(),{"&.slider, .page":{height:_appAppVariables2.default.size+"px"}}]}];exports.default=styles,module.exports=exports.default;