document.addEventListener("DOMContentLoaded",(function(t){t.preventDefault();["data-modal"].forEach((t=>{const o=t+"-open",e=t+"-close",n=document.querySelector("["+t+"]");n||function(t){const o="color: #BADA55";console.log("%c"+t,o)}("Can`t find Modal with attribute "+n);function c(){document.body.classList.toggle("modal-open"),n.classList.toggle("is-hidden")}document.body.addEventListener("click",(function(t){const n=t.target,d=n.closest("["+o+"]"),s=n.closest("["+e+"]");(d||s)&&c()}))}))}),!1);
//# sourceMappingURL=index.7e246f8f.js.map
