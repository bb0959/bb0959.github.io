let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "dove.png") {
        myImage.setAttribute("src", "banana.png");
    } else {
        myImage.setAttribute("src", "dove.png");
    }
};