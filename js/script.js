$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
  // $('.navbar').addClass("transparent");
  $(".navbar").toggleClass("white");
});

$("body").on("click", function () {
  let navbarQuery = document.querySelector(".navbar-collapse");

  $(".navbar-collapse").collapse("hide");

  if (navbarQuery.className == "navbar-collapse collapsing") {
    $(".navbar").removeClass("white");
  }
});

$(".navbar-toggler").on("click", function () {
  $(".navbar").toggleClass("white");
});

//cookies
const cookiesBtn = document.querySelector('#cookiesBtn');

const cookiesSection = document.querySelector('#cookies');

cookiesBtn.addEventListener('click', function () {
  cookiesSection.style.display = 'none';
  cookiesToStorage();

})

function cookiesToStorage() {
  localStorage.setItem('cookie', 'agreed');
}

function cookiesCheck() {
  if (localStorage.getItem('cookie') == 'agreed') {
    cookiesSection.style.display = 'none';
  }

}

cookiesCheck();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
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
  setTimeout(showSlides, 2000);
}


//fipp Team cell onscroll

function scrollRotate() {
  const teamCells = [...document.querySelectorAll('.flipCardInner')];
  teamCells.forEach(element => {
    if (element.getBoundingClientRect().bottom <= window.innerHeight) {
      console.log(element.getBoundingClientRect().bottom, "bottom");
      element.style.transform = "rotateY(180deg)"
    }
    if (element.getBoundingClientRect().bottom > window.innerHeight) {
      console.log(window.innerHeight,"window h");
      element.style.transform = "";
    };
  });
}


window.addEventListener('scroll', function () {
  scrollRotate()
})


function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

