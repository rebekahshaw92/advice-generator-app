const dice = document.querySelector(".dice");
const advice = document.querySelector(".card-text");
const adviceNumber = document.querySelector(".number");

const adviceLoad = () => {
fetch("https://api.adviceslip.com/advice")
    .then((respsonse) => respsonse.json())
    .then((data) => {
        advice.textContent = `"${data.slip.advice}"`;
        adviceNumber.textContent = data.slip.id;
        console.log(data);
    });
}

window.onload = () => {
    adviceLoad();
};

dice.addEventListener("click", adviceLoad);
    