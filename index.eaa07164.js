function e(e,i,a,n){Object.defineProperty(e,i,{get:a,set:n,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},t=i.parcelRequire1995;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in n){var i=n[e];delete n[e];var t={id:e,exports:{}};return a[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){n[e]=i},i.parcelRequire1995=t),t.register("3nfqI",(function(i,a){e(i.exports,"filmCardMacker",(()=>r)),t("ggI8S");let n=[{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"},{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function r(e){return e.map((e=>{const i=e.genre_ids.map((e=>{const i=n.find((i=>i.id===e));return i?i.name:""})),a=i.join(", ");let t;i.length>2?(t=i.slice(0,2).join(", ")+", Other",t.length>30&&(t=i.slice(0,1).join(", ")+", Other")):t=i.length>0?`${i.join(", ")} `:"";let r,o=e.poster_path;return r=null===o?"https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/img/no-img.a640d610.jpg":`https://image.tmdb.org/t/p/w500${o}`,`<li class="film"> \n    <a class="film-link" data-modal-open href="javascript:void(0)">\n        <img loading="lazy" data-id=${e.id} data-poster=${r} data-genres="${a}" data-title="${e.title?e.title:e.name}" data-original="${e.original_title}" data-popularity=${e.popularity} data-average=${e.vote_average} data-count=${e.vote_count} width="280"  height="398" src="${r}" alt="${e.title?e.title:e.name}film cover"\n            class="film__img">\n            <div class="film-body">\n                <p class="film__name">${e.title?e.title:e.name}</p>\n                <p class="film__description">${t} | ${e.release_date?e.release_date.slice(0,4):"TBD"}</p>\n            </div>\n    </a>\n</li>`})).join("")}})),t.register("ggI8S",(function(i,a){e(i.exports,"default",(()=>n));var n={popularFilm:["movie/popular"],searchMovie:"search/movie",movieDetails:"movie/",genre:["genre/tv/list","genre/movie/list"]}})),t("3nfqI");
//# sourceMappingURL=index.eaa07164.js.map
