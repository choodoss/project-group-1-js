var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequire1995;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},e.parcelRequire1995=t),t.register("kjdRC",(function(e,r){var n,t,o,i;n=e.exports,t="getDataFilm",o=function(){return l},Object.defineProperty(n,t,{get:o,set:i,enumerable:!0,configurable:!0});const a="https://api.themoviedb.org/3/";function l(){const e=new URLSearchParams({api_key:"936b81ad25b58d3805a3200306ab9278"}),r="trending/all/day";return console.log(`${a}${r}?${e}`),fetch(`${a}${r}?${e}`).then((e=>{if(!e.ok)throw new Error(response.status);return e.json()}))}})),t("kjdRC");
//# sourceMappingURL=index.0923dfe5.js.map
