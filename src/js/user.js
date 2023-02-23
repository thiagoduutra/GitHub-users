const userText = document.querySelector(".text-user");
const btn = document.querySelector(".btn-enter");
const apiContent = document.querySelector(".api-content");

function showInformation() {
  btn.addEventListener("click", () => {
    const inputValue = userText.value;

    if (inputValue === "" || inputValue === null) {
      apiContent.innerHTML = `<p class="msg-error">Username field empty</p>`;
    } else {
      fetch(`https://api.github.com/users/${inputValue}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          apiContent.insertAdjacentHTML(
            "beforeend",
            `

          <div class="profile-information">
          <div class="container-profile">
            <span class="btn-close">x</span>
            <img class="profile-img" src="${data.avatar_url}" alt="Image perfil" />
            <h1>${data.name}</h1>
            <div class="profile-location">
                <p>${data.location}</p>
            </div>
            <p>${data.bio}</p>
            
            <div class="container-btn">
              <button class="btn-repository">Repository</button>
            </div>
            
            </div>
          </div> 
`
          );
          showRepositories();
          closeRepository();
        });
      apiContent.innerHTML = "";
    }
  });
}

function showRepositories() {
  const btnRepository = document.querySelector(".btn-repository");
  const inputValue = userText.value;
  const containerApi = document.querySelector(".container-rep");

  btnRepository.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${inputValue}/repos`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        containerApi.innerHTML = "";
        data.map((repository) =>
          containerApi.insertAdjacentHTML(
            "beforeend",
            `
                <div class="container-repository">
                    <h2>${repository.name}</h2>
                    <p> ${repository.language}</p>
                    <a class="btn-url" href="${repository.html_url}" target="_blank">See repository</a>
                </div>
            `
          )
        );
        $(".container-rep").slick({
          prevArrow:
            '<button type="button" class="slick-custom-arrow slick-prev"> < </button>',
          nextArrow:
            '<button type="button" class="slick-custom-arrow slick-next"> > </button>',
          dots: true,
        });
      });
  });
}

function closeRepository() {
  const btnClose = document.querySelector(".btn-close");

  btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    apiContent.remove();
    window.location.reload(true);
  });

  userText.value = "";
}

showInformation();
