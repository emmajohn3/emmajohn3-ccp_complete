
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

document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const images = document.querySelectorAll(".travel_container figure");
    
    function showImage() {
        // Hide all images
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        // Display the current image
        images[index].style.display = "block";
        // Increment index
        index++;
        // Reset index if it exceeds the number of images
        if (index >= images.length) {
            index = 0;
        }
        // Call showImage() again after a delay (e.g., 2 seconds)
        setTimeout(showImage, 2000); // Change image every 2 seconds
    }
    
    // Start the slideshow
    showImage();
});
