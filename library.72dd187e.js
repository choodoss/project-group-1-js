function e(e,i,n,t){Object.defineProperty(e,i,{get:n,set:t,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=i.parcelRequire1995;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,i.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,i){t[e]=i},i.parcelRequire1995=r),r.register("7274P",(function(i,n){e(i.exports,"filmCardMacker",(function(){return a}));var t=r("iRxVD"),l=r("kjdRC");let o=[];function a(e){return e.map((e=>{const i=e.genre_ids.map((e=>{const i=o.find((i=>i.id===e));return i?i.name:""}));let n;i.length>2?(n=i.slice(0,2).join(", ")+", Other",n.length>30&&(n=i.slice(0,1).join(", ")+", Other")):n=i.length>0?`${i.join(", ")} `:"";let t=e.poster_path,r=`https://image.tmdb.org/t/p/w400${t}`;return r=null===t?"./src/images/img/no-img.jpg":`https://image.tmdb.org/t/p/w400${t}`,`<li class="film"> \n    <a class="film-link" data-modal-open name-id=${e.id} href="javascript:void(0)">\n        <img loading="lazy" width="280" height="398" src="${r}" alt="${e.title?e.title:e.name}film cover"\n            class="film__img">\n            <div class="film-body">\n                <p class="film__name">${e.title?e.title:e.name}</p>\n                <p class="film__description">${n} | ${e.release_date?e.release_date.slice(0,4):"TBD"}</p>\n            </div>\n    </a>\n</li>`})).join("")}(0,l.getGenre)(t.default.genre).then((e=>{console.log(e),o=[...e[0].genres,...e[1].genres]}))})),r.register("iRxVD",(function(i,n){e(i.exports,"default",(function(){return t}));var t={popularFilm:["movie/popular"],searchMovie:"search/movie",movieDetails:"movie/",genre:["genre/tv/list","genre/movie/list"]}})),r("7274P");
//# sourceMappingURL=library.72dd187e.js.map
