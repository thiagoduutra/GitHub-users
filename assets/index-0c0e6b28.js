(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".text-user"),u=document.querySelector(".btn-enter"),i=document.querySelector(".api-content");function a(){u.addEventListener("click",()=>{const o=l.value;o===""||o===null?i.innerHTML='<p class="msg-error">Username field empty</p>':(fetch(`https://api.github.com/users/${o}`).then(function(n){return n.json()}).then(function(n){i.insertAdjacentHTML("beforeend",`

          <div class="profile-information">
          <div class="container-profile">
            <span class="btn-close">x</span>
            <img class="profile-img" src="${n.avatar_url}" alt="Image perfil" />
            <h1>${n.name}</h1>
            <div class="profile-location">
                <p>${n.location}</p>
            </div>
            <p>${n.bio}</p>
            
            <div class="container-btn">
              <button class="btn-repository">Repository</button>
            </div>
            
            </div>
          </div> 
`),p(),d()}),i.innerHTML="")})}function p(){const o=document.querySelector(".btn-repository"),n=l.value,r=document.querySelector(".container-rep");o.addEventListener("click",s=>{s.preventDefault(),fetch(`https://api.github.com/users/${n}/repos`).then(function(e){return e.json()}).then(function(e){r.innerHTML="",e.map(t=>r.insertAdjacentHTML("beforeend",`
                <div class="container-repository">
                    <h2>${t.name}</h2>
                    <p> ${t.language}</p>
                    <a class="btn-url" href="${t.html_url}" target="_blank">See repository</a>
                </div>
            `)),$(".container-rep").slick({prevArrow:'<button type="button" class="slick-custom-arrow slick-prev"> < </button>',nextArrow:'<button type="button" class="slick-custom-arrow slick-next"> > </button>',dots:!0})})})}function d(){document.querySelector(".btn-close").addEventListener("click",n=>{n.preventDefault(),i.remove(),window.location.reload(!0)}),l.value=""}a();
