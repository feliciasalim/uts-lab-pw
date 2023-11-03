//Carousel
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.landing');

    let currentSlideIndex = 0;
    const autoPlayInterval = 2700; 

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }

    function prevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      showSlide(currentSlideIndex);
    }

    showSlide(currentSlideIndex);
  
    const autoPlay = setInterval(nextSlide, autoPlayInterval);

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        clearInterval(autoPlay); 
        prevSlide();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        clearInterval(autoPlay);
        nextSlide();
      });
    }
  });


//Scroll Up Button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}