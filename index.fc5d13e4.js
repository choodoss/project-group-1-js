var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire1995;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire1995=o);var r=o("fSDyF");o("gdelx");var i=o("6AR8M"),l=o("19McP");const a=(0,i.getAuth)(r.FirebaseApp);(0,i.onAuthStateChanged)(a,(e=>{if(e){e.uid;document.querySelector(".button--signin").disabled=!0}else console.log("nope uid")}));document.querySelector(".registration-submit").addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector("#email").value.toString(),n=document.querySelector("#password").value.toString();try{(0,i.createUserWithEmailAndPassword)(a,t,n).then((t=>{const n=t.user;console.log("Signed up successfully:",n),window.location.href="#",e.target.reset()}))}catch(e){e.code;console.log("nopenopenope"),path||l.Notify.failure("Oh you alredy create account. Sign in")}}));const s=document.querySelector("#SignIn-modal");s.addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector("#emailSingIn").value.toString(),n=document.querySelector("#passwordSingIn").value.toString();(0,i.signInWithEmailAndPassword)(a,t,n).then((t=>{t.user;console.log("yeap you are here"),e.target.reset(),s.classList.add("is-hidden")})).catch((e=>{e.code,e.message}))}));
//# sourceMappingURL=index.fc5d13e4.js.map
