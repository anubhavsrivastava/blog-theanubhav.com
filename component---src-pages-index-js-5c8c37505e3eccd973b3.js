webpackJsonp([35783957827783],{622:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var s=o(1),u=n(s),f=o(48),c=o(3),l=n(c),p=o(44),d=o(71),v=o(217),b=n(v),h=function(t){function e(){var o,n,a;r(this,e);for(var s=arguments.length,u=Array(s),f=0;f<s;f++)u[f]=arguments[f];return o=n=i(this,t.call.apply(t,[this].concat(u))),n.featureNavigator=d.featureNavigator.bind(n),a=o,i(n,a)}return a(e,t),e.prototype.componentWillMount=function(){"is-featured"!==this.props.navigatorPosition&&this.props.setNavigatorPosition("is-featured")},e.prototype.render=function(){var t=this.props.data,e=(((t||{}).site||{}).siteMetadata||{}).facebook;return u.default.createElement("div",null,u.default.createElement(b.default,{facebook:e}))},e}(u.default.Component);h.propTypes={data:l.default.object.isRequired,navigatorPosition:l.default.string.isRequired,setNavigatorPosition:l.default.func.isRequired,isWideScreen:l.default.bool.isRequired};var g=function(t,e){return{navigatorPosition:t.navigatorPosition,isWideScreen:t.isWideScreen}},y={setNavigatorPosition:p.setNavigatorPosition,setNavigatorShape:p.setNavigatorShape};e.default=(0,f.connect)(g,y)(h),t.exports=e.default}});
//# sourceMappingURL=component---src-pages-index-js-5c8c37505e3eccd973b3.js.map