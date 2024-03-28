
// function readMore() {
//     const extraText = document.getElementById("extra-text")
//     if (extraText.style.display === "none" || extraText.style.display === "") {
//         console.log("button has been clicked!")
//         extraText.style.display = "inline";
//       } else {
//         extraText.style.display = "none";
//       }
// }
let button = document.getElementById("read-button")
button.addEventListener("click", readMore)

function readMore() {
    const extraText = document.getElementById("extra-text");
    if (extraText.style.display === "none" || extraText.style.display === "") {
        extraText.style.display = "inline";
        button.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        button.textContent = "Read More";
    }
}
