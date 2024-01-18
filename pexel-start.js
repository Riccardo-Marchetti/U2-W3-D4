document.getElementById("bot1").addEventListener("click", function () {
  console.log("click 1");
  pexelsFetch("montagne");
});
document.getElementById("bot2").addEventListener("click", function () {
  console.log("click 2");
  pexelsFetch("gatti");
});

const pexelsFetch = function (query) {
  const myUrl = "https://api.pexels.com/v1/search?query=" + query;
  fetch(myUrl, {
    headers: {
      Authorization: "xMHWamdHI017UQjFJ62xUiMXEfh78l5BAY358zujoaqSW6s4PBl6SXtO",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nella cancellazione");
      }
    })
    .then((data) => {
      console.log(data);

      let hidebutton = document.querySelectorAll(
        ".btn-group .btn-sm:nth-of-type(2)"
      );
      hidebutton.forEach((bot, i) => {
        bot.innerText = "hide";
        bot.addEventListener("click", function (e) {
          e.target.closest(".col-md-4").remove();
        });
      });
      let allTheExistingImageTags = document.querySelectorAll("img");
      allTheExistingImageTags.forEach((imm, i) => {
        imm.src = data.photos[i].src.medium;
      });
      let allTheExistingImageTitle = document.querySelectorAll("h5");
      allTheExistingImageTitle.forEach((tit, i) => {
        tit.innerHTML = `<a href="./pexel2.html?cardid=${data.photos[i].id}"<p>${data.photos[i].alt}</p></a>`;
      });
      let allTheExistingImagepar = document.querySelectorAll(
        ".card-text:nth-of-type(1)"
      );
      allTheExistingImagepar.forEach((tex, i) => {
        tex.innerText = "Photographer: " + data.photos[i].photographer;
      });
      let allTheExistingImagepar1 = document.querySelectorAll(
        ".card-text2:nth-of-type(2)"
      );
      console.log(allTheExistingImagepar1);
      allTheExistingImagepar1.forEach((text, i) => {
        text.innerText = "Photographer_url: " + data.photos[i].photographer_url;
      });

      let replaceid = document.querySelectorAll("small");
      replaceid.forEach((id, i) => {
        id.innerText = data.photos[i].id;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const inputfield = document.getElementById("search-input");
document.getElementById("search-button").addEventListener("click", function () {
  pexelsFetch(inputfield.value);
});
