const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice__text");
const adviceButton = document.querySelector(".advice__dice");
const url = "https://api.adviceslip.com/advice";

function getApi() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      adviceId.innerHTML = `Advice #${data.slip.id}`;
      adviceText.innerHTML = `“${data.slip.advice}”`;
    });
}

getApi();

adviceButton.addEventListener("click", getApi);
