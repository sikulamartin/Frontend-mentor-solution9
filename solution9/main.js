document.addEventListener("DOMContentLoaded", (event) => {
    const shareIcon = document.getElementById("shareIcon");
    const shareContainer = document.getElementById("shareContainer");
    const shareTriangle = document.getElementById("shareTriangle");
    const shareIconMobile = document.getElementById("shareIconMobile");

    shareIcon.addEventListener("click", function () {
        shareContainer.classList.toggle("active");
        shareTriangle.classList.toggle("active");
    });

    shareIconMobile.addEventListener("click", function () {
        shareContainer.classList.toggle("active");
        shareTriangle.classList.toggle("active");
    });

});