!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequire1995;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequire1995=i),i.register("b3pWk",(function(r,n){t(r.exports,"filmCardMacker",(function(){return s}));var o=i("8nrFW"),a=i("iqHZv"),l=i("VYpd1"),u=[];function s(e){return e.map((function(e){var t,r=e.genre_ids.map((function(e){var t=u.find((function(t){return t.id===e}));return t?t.name:""}));return r.length>2?(t=r.slice(0,2).join(", ")+", Other").length>30&&(t=r.slice(0,1).join(", ")+", Other"):t=r.length>0?"".concat(r.join(", ")," | "):"",'<li class="film"> \n    <a class="film-link" data-modal-open href="javascript:void(0)">\n        <img loading="lazy" width="280" height="398" src="https://image.tmdb.org/t/p/w400'.concat(e.poster_path,'" alt="').concat(e.title?e.title:e.name,'film cover"\n            class="film__img">\n            <div class="film-body">\n                <p class="film__name">').concat(e.title?e.title:e.name,'</p>\n                <p class="film__description">').concat(t," | ").concat(e.release_date?e.release_date.slice(0,4):"TBD","</p>\n            </div>\n    </a>\n</li>")})).join("")}(0,l.getGenre)(a.default.genre).then((function(t){console.log(t),u=e(o)(t[0].genres).concat(e(o)(t[1].genres))}))})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||a.default(e)||o.default()};var r=l(i("kMC0W")),n=l(i("7AJDX")),o=l(i("8CtQK")),a=l(i("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("iqHZv",(function(e,r){t(e.exports,"default",(function(){return n}));var n={popularFilm:["movie/popular"],searchMovie:"search/movie",movieDetails:"movie/",genre:["genre/tv/list","genre/movie/list"]}})),i("b3pWk")}();
//# sourceMappingURL=index.55eba78b.js.map
