var fullImageBox = document.getElementById("fullImageBox");
var fullImage = document.getElementById("fullImage");

function openFullImage(pic){                                       /*this will make image visible when it's clicked*/
    fullImageBox.style.display = "flex"
    fullImage.src = pic;                                            /*this will update the source of the image and only shows the one that's being clicked*/
}

function closeFullImage() {
    fullImageBox.style.display = "none";
}