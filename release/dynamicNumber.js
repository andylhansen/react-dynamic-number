!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var i=t("object"==typeof exports?require("react"):e.React);for(var r in i)("object"==typeof exports?exports:e)[r]=i[r]}}(this,function(e){return function(e){function t(r){if(i[r])return i[r].exports;var a=i[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var i={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r]);return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},l=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),c=i(1),h=r(c),p=i(2),d=r(p),f=function(e){function t(e){n(this,t);var i=o(this,Object.getPrototypeOf(t).call(this,e));return i.dynamicNumber=new d["default"],i.dynamicNumber.separator=i.props.separator,i.dynamicNumber.integer=i.props.integer,i.dynamicNumber.fraction=i.props.fraction,i.dynamicNumber.positive=i.props.positive,i.dynamicNumber.negative=i.props.negative,i.dynamicNumber.thousand=i.props.thousand,i.calculator=i.dynamicNumber.clone(),i.calculator.calculate(e.value,e.value,"0"),i.state={modelValue:i.calculator.modelValue,viewValue:i.calculator.viewValue},i.onChange=i.onChange.bind(i),i}return s(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){""===e.value?this.state={modelValue:"",viewValue:""}:void 0!==e.value&&(this.calculator.calculate(e.value,e.value,0),this.state={modelValue:this.calculator.modelValue,viewValue:this.calculator.viewValue})}},{key:"onChange",value:function(e){var t=this,i=e.target;this.dynamicNumber.calculate(e.target.value,this.state.modelValue,this.state.viewValue,i.selectionStart);var r=this.dynamicNumber.modelValue,a=this.dynamicNumber.viewValue;this.props.onChange&&this.props.onChange(e,r,a),this.setState({modelValue:r,viewValue:a},function(){void 0!==i.selectionStart&&null!==i.selectionStart&&(i.selectionStart=i.selectionEnd=t.dynamicNumber.cursorPosition)})}},{key:"render",value:function(){var e=this.props,t=(e.separator,e.integer,e.fraction,e.positive,e.negative,e.thousand,a(e,["separator","integer","fraction","positive","negative","thousand"]));return h["default"].createElement("input",u({type:"text",placeholder:this.props.placeholder,className:this.props.className},t,{value:this.state.viewValue,onChange:this.onChange}))}}]),t}(h["default"].Component);f.propTypes={value:h["default"].PropTypes.oneOfType([h["default"].PropTypes.number,function(e,t){if(""!=e[t])return new Error("value must be a number or empty string")}]),integer:h["default"].PropTypes.number,fraction:h["default"].PropTypes.number,positive:h["default"].PropTypes.bool,negative:h["default"].PropTypes.bool,separator:function(e,t){if(void 0!==e[t]&&","!==e[t]&&"."!==e[t])return new Error("separator have to be comma or dot char")},thousand:function(e,t){if(void 0!==e[t]&&e[t]!==!0&&e[t]!==!1&&" "!==e[t])return new Error("thousand have to be bool value or space character")}},t["default"]=f},function(t,i){t.exports=e},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),a=function(){function e(){i(this,e),this._separator=".",this._integer=10,this._fraction=10,this._positive=!0,this._negative=!0,this._regexp=this._buildRegexp(),this._isThousand=!1,this._thousand=null}return r(e,[{key:"clone",value:function(){var t=new e;return t._separator=this._separator,t._integer=this._integer,t._fraction=this._fraction,t._positive=this._positive,t._negative=this._negative,t._regexp=this._regexp,t._isThousand=this._isThousand,t._thousand=this._thousand,t._cursor=this._cursor,t}},{key:"calculate",value:function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=arguments.length<=2||void 0===arguments[2]?"0":arguments[2],r=arguments.length<=3||void 0===arguments[3]?null:arguments[3];this._rawViewValue=e,this._oldModelValue=t,this._oldViewValue=i,this._newModelValue=0,this._newViewValue="",this._cursor=r;var a=String(this._rawViewValue);return a=this._removeThousandSeparator(a),a=this._removeLeadingZero(a),""===a&&"0"===String(this._rawViewValue).charAt(0)?(this._newModelValue=0,this._newViewValue="0",0):void 0===a||""===a?(this._newModelValue=0,void(this._newViewValue="")):"-"===a?(this._newModelValue=0,void(this._newViewValue="-")):this._regexp.test(a)===!1?(this._newModelValue=this._oldModelValue,void(this._newViewValue=this._oldViewValue)):(this._newModelValue=this._createModelValue(a),this._newViewValue=this._createViewValue(a),void(this._cursor=this._calculateNewCursorPosition()))}},{key:"_calculateThousandSeparator",value:function(){" "!==this._thousand&&("."===this._separator?this._thousand=",":this._thousand=".")}},{key:"_calculateNewCursorPosition",value:function(){var e=String(this._rawViewValue).slice(0,this._cursor);e=this._removeThousandSeparator(e),e=this._removeLeadingZero(e);var t=e.length;if(this._isThousand){var i=0,r=0,a=void 0,n=this._newViewValue.length;for(a=0;a<n;a++)if(this._newViewValue[a]!==this._thousand){if(i++,i>=t)break}else r++;t+=r}return t}},{key:"_buildRegexp",value:function(){var e="-?";this._positive===!1&&this._negative===!0?e="-":this._positive===!0&&this._negative===!1&&(e="");var t="[0-9]{0,"+this._integer+"}";0===this._integer&&(t="0");var i="(\\"+this._separator+"([0-9]){0,"+this._fraction+"})";return 0===this._fraction&&(i=""),new RegExp("^"+e+t+i+"?$")}},{key:"_removeLeadingZero",value:function(e){return e.replace(/^0+/g,"").replace(/^-0(\d+)/g,"-$1").replace(/^-([\.,])/,"-0$1").replace(/^[\.,]/g,"0$&")}},{key:"_removeThousandSeparator",value:function(e){return this._isThousand?e.replace(new RegExp("\\"+this._thousand,"g"),""):e}},{key:"_createModelValue",value:function(e){return","===this._separator?parseFloat(e.replace(/\./g,"").replace(",",".")):parseFloat(e.replace(/,/g,""))}},{key:"_createViewValue",value:function(e){return this._isThousand?(e=e.split(this._separator),e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this._thousand),e.join(this._separator)):e}},{key:"separator",set:function(e){this._separator="."===e||","===e?e:this._separator,this._regexp=this._buildRegexp(),this._calculateThousandSeparator()}},{key:"integer",set:function(e){if(e>=0){var t=parseInt(e,10);isNaN(t)===!1&&isFinite(t)&&t>=0&&(this._integer=t)}this._regexp=this._buildRegexp()}},{key:"fraction",set:function(e){if(e>=0){var t=parseInt(e,10);isNaN(t)===!1&&isFinite(t)&&t>=0&&(this._fraction=t)}this._regexp=this._buildRegexp()}},{key:"positive",set:function(e){e!==!0&&e!==!1||(this._positive=e),this._regexp=this._buildRegexp()}},{key:"negative",set:function(e){e!==!0&&e!==!1||(this._negative=e),this._regexp=this._buildRegexp()}},{key:"thousand",set:function(e){this._isThousand=e||" "===e," "===e&&(this._thousand=" "),this._calculateThousandSeparator()}},{key:"modelValue",get:function(){return this._newModelValue}},{key:"viewValue",get:function(){return this._newViewValue}},{key:"cursorPosition",get:function(){return this._cursor}}]),e}();t["default"]=a}])});