var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=e.parcelRequire1995;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){r[e]=o},e.parcelRequire1995=n);var t=n("ilpIi"),l=n("fSDyF");n("fhN3L");t=n("ilpIi");const i=document.querySelector(".add-to-watched");console.log(i),i.addEventListener("click",(function(e){e.preventDefault(),console.log("yeap");console.log("you are here");try{const e=(0,t.addDoc)((0,t.collection)(l.FirebaseStorage,"users"),{first:"Ada",last:"Lovelace",born:1815});console.log("Document written with ID: ",e)}catch(e){console.error("Error adding document: ",e)}}));
//# sourceMappingURL=index.6331807d.js.map
