var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequire1995;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequire1995=l),l.register("ggI8S",(function(e,t){var a,l,o,n;a=e.exports,l="default",o=()=>i,Object.defineProperty(a,l,{get:o,set:n,enumerable:!0,configurable:!0});var i={popularFilm:["movie/popular"],searchMovie:"search/movie",movieDetails:"movie/",genre:["genre/tv/list","genre/movie/list"]}}));var o=l("gxwgI"),n=l("3nfqI"),i=l("ggI8S"),s=l("19McP");o=l("gxwgI"),i=l("ggI8S");let r,c;async function u({id:e,poster:t,genres:a,title:l,original:n,popularity:s,average:u,count:p}){const m=document.querySelector(".about-film");try{const{overview:f}=await(0,o.getDataFilm)(`${i.default.movieDetails}${e}`,{language:"en-US"}),v=`https://www.youtube.com/watch?v=${(await(0,o.getDataFilm)(`${i.default.movieDetails}${e}/videos`,{language:"en-US"})).results[0].key}`,h=JSON.parse(localStorage.getItem("watchedID")),S=JSON.parse(localStorage.getItem("queueId"));let y,I;h.includes(e)&&(y="remove at Watched"),S.includes(e)&&(I="remove at queue"),m.innerHTML=`\n      <img class="about-film__img" src="${t}" />\n      <div class="about-film__body">\n        <h3 class="film__title">${l}</h3>\n        <div class="film-atributes">\n          <ul class="film-properties">\n            <li class="film-properties__item">\n              <p class="property">Vote / Votes</p>\n            </li>\n            <li class="film-properties__item">\n              <p class="property">Popularity</p>\n            </li>\n            <li class="film-properties__item">\n              <p class="property">Original Title</p>\n            </li>\n            <li class="film-properties__item">\n              <p class="property">Genre</p>\n            </li>\n          </ul>\n          <ul class="film-value">\n            <li class="film-value__item">\n              <p class="value">\n                <span class="value--red">${u}</span><span class="value--gray"> / </span>\n                <span class="value--gray-bg">${p}</span>\n              </p>\n            </li>\n            <li class="film-value__item">\n              <p class="value">${s}</p>\n            </li>\n            <li class="film-value__item">\n              <p class="value">${n}</p>\n            </li>\n            <li class="film-value__item">\n              <p class="value">${a}</p>\n            </li>\n          </ul>\n        </div>\n        <div class="about-film__description">\n          <h4 class="description__title">About</h4>\n          <p class="description">${f}</p>\n        </div>\n        <div class="youtube-container">\n          <a href="${v}" class="youtube-link tube" data-modal-close>Trailer</a>\n        </div>\n        <div class="button__wrapper" id="buttonWrapper">\n  <button data-id="${e}" class="add-to-watched" type="button" data-value="${y?"add":"no"}" id="btn-watched">\n    ${y||"add to Watched"}\n  </button>\n  <button data-id="${e}" class="add-to-queue" type="button" data-value="${I?"add":"no"}" id="btn-queue">\n    ${I||"add to queue"}\n  </button>\n                </div>\n            </div>`,r=document.querySelector("#btn-watched"),c=document.querySelector("#btn-queue"),r.addEventListener("click",d),c.addEventListener("click",g)}catch(e){console.log(e)}}function d({target:e}){const t=e.dataset.id;if("add"===e.dataset.value){const a=JSON.parse(localStorage.getItem("watchedID")).filter((e=>e!==t&&1!==e));localStorage.setItem("watchedID",JSON.stringify(a)),console.log(a),e.textContent="add to Watched",e.dataset.value="no",console.log(JSON.parse(localStorage.getItem("watchedID")))}else{let a=[];JSON.parse(localStorage.getItem("watchedID")).map((e=>a.push(e))),a.push(t),localStorage.setItem("watchedID",JSON.stringify(a)),e.textContent="remove at Watched",e.dataset.value="add",console.log(a)}}function g({target:e}){const t=e.dataset.id;if("add"===e.dataset.value){const a=JSON.parse(localStorage.getItem("queueId")).filter((e=>e!==t&&1!==e));localStorage.setItem("queueId",JSON.stringify(a)),console.log(a),e.textContent="add to queue",e.dataset.value="no",console.log(JSON.parse(localStorage.getItem("queueId")))}else{let a=[];JSON.parse(localStorage.getItem("queueId")).map((e=>a.push(e))),a.push(t),localStorage.setItem("queueId",JSON.stringify(a)),e.textContent="remove at queue",e.dataset.value="add",console.log(a)}}localStorage.getItem("watchedID")&&localStorage.getItem("queueId")||(localStorage.setItem("watchedID",JSON.stringify([1])),localStorage.setItem("queueId",JSON.stringify([1]))),document.addEventListener("DOMContentLoaded",(function(e){e.preventDefault();["data-modal","team-modal"].forEach((e=>{const t=e+"-open",a=e+"-close",l=document.querySelector("["+e+"]");l||function(e){const t="color: #BADA55";console.log("%c"+e,t)}("Can`t find Modal with attribute "+l);function o(){document.body.classList.toggle("modal-open"),l.classList.toggle("is-hidden")}document.body.addEventListener("click",(function(e){const l=e.target,n=l.closest("["+t+"]"),i=l.closest("["+a+"]");n?("film__img"===l.className&&u(l.dataset),o()):i&&o()}))}))}),!1);const p=document.querySelector(".films-list");let m="topFilmsCollection",f=1,v="";(0,o.getDataFilm)(i.default.popularFilm,{language:"en-US"}).then((({results:e})=>{console.log(e),p.innerHTML=(0,n.filmCardMacker)(e),m="topFilmsCollection"}));const h=document.querySelector(".header-nav__input");console.log("inputSearchEll----",h);const S=document.querySelector(".header-error-text");let y;h.addEventListener("input",(function(){clearTimeout(y),y=setTimeout((function(){if(v=h.value.trim(),console.log("querySearch ---",v,v.length),0===v.length)return clearTimeout(y),s.Notify.info("введіть текст для пошуку кінофільмів");(0,o.getDataFilm)(i.default.searchMovie,{query:v}).then((({results:e})=>{if(console.log(e),0===e.length)return clearTimeout(y),void S.classList.remove("visually-hidden");p.innerHTML=(0,n.filmCardMacker)(e),m="currentSearchMovieCollection",S.classList.add("visually-hidden")})),console.log("Текст був введений більше ніж 2 секунди тому.")}),1500)}));const I=document.querySelector(".page--active");console.log("activePagePaginationEll----",I),f=Number(I.textContent),console.log(f),I.addEventListener("click",(function(e){switch(m){case"topFilmsCollection":(0,o.getDataFilm)(i.default.popularFilm,{language:"en-US",page:f}).then((({results:e})=>{console.log(e),p.innerHTML=(0,n.filmCardMacker)(e)}));break;case"currentSearchMovieCollection":(0,o.getDataFilm)(i.default.searchMovie,{query:v,page:f}).then((({results:e})=>{console.log(e),p.innerHTML=(0,n.filmCardMacker)(e)}));break;default:console.log("Упс, щось пішло не так")}}));
//# sourceMappingURL=index.13752a5f.js.map
