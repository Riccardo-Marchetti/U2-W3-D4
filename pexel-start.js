const changeimage = function () {
  const myUrl = "https://api.pexels.com/v1/search?query=fiori";
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
    .then((fiori) => {
      console.log("fiori", fiori);
      const bottone1 = document.getElementById("bot1");
      console.log(bottone1);
      const takeimg = document.getElementsByTagName("img");
      console.log(takeimg);
      const c = fiori.photos;
      bottone1.addEventListener("click", function () {
        c.forEach((fio, i) => {
          takeimg.src = `${c[i].src}`;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
changeimage();
