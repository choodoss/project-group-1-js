!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire1995;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire1995=a),a.register("VYpd1",(function(n,r){t(n.exports,"getDataFilm",(function(){return i})),t(n.exports,"getGenre",(function(){return f}));var o=a("dDDEV"),u="936b81ad25b58d3805a3200306ab9278",c="https://api.themoviedb.org/3/";function i(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new URLSearchParams(e(o)({api_key:u,language:"en-US"},n));return console.log("".concat(c).concat(t,"?").concat(r)),fetch("".concat(c).concat(t,"?").concat(r)).then((function(e){if(!e.ok)throw new Error(response.status);return e.json()}))}function f(e){var t=new URLSearchParams({api_key:u,language:"en-US"}),n=e.map((function(e){return fetch("".concat(c).concat(e,"?").concat(t)).then((function(e){if(!e.ok)throw new Error("HTTP error! status: ".concat(e.status));return e.json()}))}));return Promise.all(n)}})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a("VYpd1")}();
//# sourceMappingURL=index.0cee65cf.js.map
