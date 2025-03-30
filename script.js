const logo = document.getElementById("logo");
        
        /* Rotate logo 360 degrees on hover */
        logo.addEventListener("mouseenter", () => {
            logo.style.transform = "rotate(360deg)";
        });
        
        /* Return logo to original position when hover ends */
        logo.addEventListener("mouseleave", () => {
            logo.style.transform = "rotate(0deg)";
        });

        
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function disableRightClick(event) {
    if (event.button == 2) {
      event.preventDefault(); // Prevent the default right-click behavior
      return false;
    }
}

document.getElementById("year").textContent = new Date().getFullYear();