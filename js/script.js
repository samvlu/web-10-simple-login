function e(e){return null===e.which?String.fromCharCode(e.keyCode):0!==e.which&&0!==e.charCode?String.fromCharCode(e.which):null}function t(){0===this.value.length&&(u.classList.remove("hide"),a.disabled=!0)}function n(e){u.classList.add("hide"),0<o.value.length&&0<l.value.length&&(a.disabled=!1)}function r(){"Show"==s.innerHTML?(s.innerHTML="Hide",l.setAttribute("type","text")):(s.innerHTML="Show",l.setAttribute("type","password"))}function i(){0<o.value.length&&0<l.value.length&&(a.disabled=!1)}function d(){0===this.value.length&&(a.disabled=!0)}var o=document.querySelector("#login_username"),u=document.querySelector("#login_username_error"),l=document.querySelector("#login_password"),s=document.querySelector(".button--toggle-password"),a=document.querySelector(".button--sign-in");o.addEventListener("keyup",t),o.addEventListener("keypress",n),l.addEventListener("keyup",d),l.addEventListener("keypress",i),s.addEventListener("click",r);