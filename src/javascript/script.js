// MOBILE MENU SECTION
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}



// SLIDE SECTION
function slideShow(n) {
    let   slides  = document.getElementsByClassName("slide");
    const slidesL = slides.length;

    if (n > slidesL) {galleryIndex = 1      ;}
    if (n < 1      ) {galleryIndex = slidesL;}

    for (let i = 0; i < slidesL; i++) {
        slides[i].style.display = "none";
    }
    slides[galleryIndex - 1].style.display = "block";
}

function plusSlide(n) {
    galleryIndex += n;
    slideShow(galleryIndex);
}

function automaticSlide() {
    galleryIndex += 1;
    slideShow(galleryIndex);
    setTimeout(automaticSlide, 3000);
}

let galleryIndex = 1;
automaticSlide();



// POPUP SECTION
document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
})