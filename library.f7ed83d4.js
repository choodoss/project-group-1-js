function e(e,n,i,t){Object.defineProperty(e,n,{get:i,set:t,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},r=n.parcelRequire1995;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return i[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},n.parcelRequire1995=r),r.register("7274P",(function(n,i){e(n.exports,"filmCardMacker",(function(){return a}));var t=r("iRxVD"),l=r("kjdRC");let o=[];function a(e){return e.map((e=>{const n=e.genre_ids.map((e=>{const n=o.find((n=>n.id===e));return n?n.name:""}));let i;n.length>2?(i=n.slice(0,2).join(", ")+", Other",i.length>30&&(i=n.slice(0,1).join(", ")+", Other")):i=n.length>0?`${n.join(", ")} `:"";let t=e.poster_path,r=`https://image.tmdb.org/t/p/w500${t}`;return r=null===t?"/no-img.a640d610.c4030ab6.jpg":`https://image.tmdb.org/t/p/w500${t}`,`<li class="film"> \n    <a class="film-link" data-modal-open name-id=${e.id} href="javascript:void(0)">\n        <img loading="lazy" width="280" height="398" src="${r}" alt="${e.title?e.title:e.name}film cover"\n            class="film__img">\n            <div class="film-body">\n                <p class="film__name">${e.title?e.title:e.name}</p>\n                <p class="film__description">${i} | ${e.release_date?e.release_date.slice(0,4):"TBD"}</p>\n            </div>\n    </a>\n</li>`})).join("")}(0,l.getGenre)(t.default.genre).then((e=>{console.log(e),o=[...e[0].genres,...e[1].genres]}))})),r.register("iRxVD",(function(n,i){e(n.exports,"default",(function(){return t}));var t={popularFilm:["movie/popular"],searchMovie:"search/movie",movieDetails:"movie/",genre:["genre/tv/list","genre/movie/list"]}})),r("7274P");
//# sourceMappingURL=library.f7ed83d4.js.map
