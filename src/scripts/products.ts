

// Product gallery functions
function changeMainImage(src: string) {
    const img = document.getElementById("main-image");
    if (!img) {
        return
    }
    img.setAttribute("src", src)

}

function zoomImage() {
    const img = document.getElementById("main-image");
    if (img.classList.contains("scale-150")) {
        img.classList.remove("scale-150", "cursor-zoom-out");
        img.classList.add("cursor-zoom-in");
    } else {
        img.classList.add("scale-150", "cursor-zoom-out");
        img.classList.remove("cursor-zoom-in");
    }
}

// Color selection
function selectColor(colorName, element, colorCode) {
    document.getElementById("selected-color").textContent = colorName;

    const swatches = document.querySelectorAll(".color-swatch");
    swatches.forEach((s) => s.classList.remove("selected"));
    element.classList.add("selected");

    // You could update the main image based on color selection here
}

// Size selection
function selectSize(size, element) {
    const sizes = document.querySelectorAll(".size-option");
    sizes.forEach((s) => s.classList.remove("selected"));
    element.classList.add("selected");
}

export { zoomImage, changeMainImage, selectColor, selectSize }