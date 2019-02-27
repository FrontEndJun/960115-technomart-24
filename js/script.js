let slides = document.getElementsByName('promo-slider');
let currentSlide = 0;
let buttonBuy = document.querySelectorAll('.action-buy');

function openMap() {
  document.querySelector('.popup-map').style.display = 'block';
}
function closeMap() {
  document.querySelector('.popup-map').style.display = 'none';

}
function openFeedback() {
  document.querySelector('.modal-write-us').style.display = 'block';
}
function closeFeedback() {
  document.querySelector('.modal-write-us').style.display = 'none';
}

for (let i = 0; i < buttonBuy.length; i++){
  let btn = buttonBuy[i];
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.modal-order').style.display = 'block';
  })
}

function closeModalOrder() {
  document.querySelector('.modal-order').style.display = 'none';
}

function check() {
  for(let i =0; i < slides.length; i++){
    if(slides[i].checked) currentSlide = i;
  }

}

function nextSlide() {
  check();
  if(++currentSlide >= slides.length) currentSlide = 0;
  slides[currentSlide].checked = true;
}

function prevSlide() {
  check();
  if(--currentSlide < 0) currentSlide = slides.length - 1;
  slides[currentSlide].checked = true;
}
