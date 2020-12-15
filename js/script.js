window.addEventListener('scroll', function scroll() {
    const scrolled = window.scrollY;


    if (scrolled < 50) {
        document.getElementById('scroll-to-top').style.bottom = " -100px";
    }
    else {
/*         menu.style.background = "white"; */
        document.getElementById('scroll-to-top').style.bottom = "0px"
    }
    if (scrolled > 1200 & scrolled < 2000 ) {
        document.getElementById('social-contact').style.left = "0px";
    } else {
        document.getElementById('social-contact').style.left = "-100px";
    }
});


var pictures = Array.from(document.querySelectorAll('#home-content-left img'));
var modal = document.getElementById('modalPicture');
var ContentModal = document.getElementById('contentModal');
modal.onclick = function () {
    modal.style.display = " none";
}
pictures.forEach(img => {
    img.onclick = function () {
        modal.style.display = "flex";
        contentModal.src = this.src;
    }
});

/*
function openForm() {
    document.getElementById('blog-form-contact').style.display="none";
    document.getElementById('blog-form').style.display="block";
} */


/* slide show */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2300); // Change image every 2 seconds
}


/* open form search */
function openSearchForm() {
    document.getElementById('open-form-contact').style.display ="none";
    document.getElementById('close-form-contact').style.display ="block";
    document.getElementById('form-contact').style.display ="flex";
    setTimeout(() => {
        document.getElementById('form-contact').style.maxHeight ="600px";
    }, 5);
}
function closeSearchForm() {
    document.getElementById('open-form-contact').style.display ="block";
    document.getElementById('close-form-contact').style.display ="none";
    document.getElementById('form-contact').style.display ="none";
    document.getElementById('form-contact').style.maxHeight ="0";
}

/* responsive menu */
function openResponsiveMenu() {
   var ul=  Array.from(document.querySelectorAll('#menu ul'));
    ul[0].style.right = "0px";

   var header =  Array.from(document.getElementsByTagName('header'));
   header[0].style.display="none";
   document.getElementById('close').style.display="inline-block";
   document.getElementById('bars').style.display="none";
}
function closeResponsiveMenu() {
   var ul=  Array.from(document.querySelectorAll('#menu ul'));
    ul[0].style.right = "-100%";
   var header =  Array.from(document.getElementsByTagName('header'));
   header[0].style.display="block";
   document.getElementById('close').style.display="none";
    document.getElementById('bars').style.display ="inline-block";
}