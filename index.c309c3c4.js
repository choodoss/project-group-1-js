!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequire1995;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequire1995=a),a.register("b3pWk",(function(r,n){t(r.exports,"filmCardMacker",(function(){return c}));var o=a("8nrFW"),i=a("VYpd1"),u=[];function c(e){return e.map((function(e){var t=e.genre_ids.map((function(e){var t=u.find((function(t){return t.id===e}));return t?t.name:""})),r=t.length>0?"".concat(t.join(", ")," | "):"";return'<li class="film">\n    <a class="film-link" data-modal-open href="javascript:void(0)">\n        <img loading="lazy" width="280" height="398" src="https://image.tmdb.org/t/p/w400'.concat(e.poster_path,'" alt="').concat(e.title?e.title:e.name,'film cover"\n            class="film__img">\n            <div class="film-body">\n                <p class="film__name">').concat(e.title?e.title:e.name,'</p>\n                <p class="film__description">').concat(r," | ").concat(e.release_date?e.release_date.slice(0,4):"TBD","</p>\n            </div>\n    </a>\n</li>")})).join("")}(0,i.getGenre)(["genre/tv/list","genre/movie/list"]).then((function(t){u=e(o)(t[0].genres).concat(e(o)(t[1].genres)),console.log(u)}))})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||i.default(e)||o.default()};var r=u(a("kMC0W")),n=u(a("7AJDX")),o=u(a("8CtQK")),i=u(a("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("VYpd1",(function(e,r){t(e.exports,"getDataFilm",(function(){return a})),t(e.exports,"getGenre",(function(){return i}));var n="936b81ad25b58d3805a3200306ab9278",o="https://api.themoviedb.org/3/";function a(){var e=new URLSearchParams({api_key:n}),t="trending/all/day";return console.log("".concat(o).concat(t,"?").concat(e)),fetch("".concat(o).concat(t,"?").concat(e)).then((function(e){if(!e.ok)throw new Error(response.status);return e.json()}))}function i(e){var t=new URLSearchParams({api_key:n,language:"en-US"}),r=e.map((function(e){return fetch("".concat(o).concat(e,"?").concat(t)).then((function(e){if(!e.ok)throw new Error("HTTP error! status: ".concat(e.status));return e.json()}))}));return Promise.all(r)}})),a("b3pWk")}();
//# sourceMappingURL=index.c309c3c4.js.map
