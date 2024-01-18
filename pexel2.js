const getSingleImage = function () {
  const addressBarContent = new URLSearchParams(location.search);
  console.log(addressBarContent);
  const cardId = addressBarContent.get("cardid");
  console.log(cardId);

  const myUrl = "https://api.pexels.com/v1/photos/";
  fetch(myUrl + cardId, {
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
      let allTheExistingImageTags = document.getElementById("im");
      allTheExistingImageTags.src = data.src.medium;
      console.log(allTheExistingImageTags);
      let allTheExistingImageTitle = document.getElementById("tit");
      allTheExistingImageTitle.innerHTML = data.alt;
      let allTheExistingImagepar = document.getElementById("ph");
      allTheExistingImagepar.innerText = "Photographer: " + data.photographer;
      let allTheExistingImagepar1 = document.getElementById("ur");
      allTheExistingImagepar1.innerText =
        "Photographer_url: " + data.photographer_url;

      let replaceid = document.getElementById("changeid");

      replaceid.innerText = data.id;
    });
};
document.getElementById("but").addEventListener("click", function () {
  location.assign("./pexels-start.html");
});
getSingleImage();
