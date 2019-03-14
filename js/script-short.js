var slides = document.getElementsByName('promo-slider');
var isLocalStorage = true, currentSlide = 0;
var buttonBuy = document.querySelectorAll('.action-buy');
var writeUsLink = document.querySelector('.write-us-button');
var mapLink = document.querySelector('.map');
var modal;
var nextSlideButton = document.querySelector('.next-slide');
var previousSlideButton = document.querySelector('.prev-slide');
var form = document.querySelector('.modal-write-us form');
var userName, userEmail;

try {
  userName = localStorage.getItem('name');
  userEmail = localStorage.getItem('mail')
}
catch (e) {
  isLocalStorage = false;
}

if (writeUsLink){
  writeUsLink.addEventListener('click', function (event) {
    event.preventDefault();
    modal = document.querySelector('.modal-write-us');
    // modal.style.animation = 'modal-open 0.5s';
    modal.classList.add("modal-show");
    modal.querySelector('input[name=name]').focus();
    if (isLocalStorage){
      if (userName) {
        modal.querySelector('input[name=name]').value = userName;
        modal.querySelector('input[name=mail]').focus();
      }
      if (userEmail) {
        modal.querySelector('input[name=mail]').value = userEmail;
        modal.querySelector('textarea[name=letter-text]').focus();
      }
    }

    modal.querySelector('.close').addEventListener('click', function (event) {
      event.preventDefault();
      modal.classList.remove("modal-show");
    });
  })
}

if (mapLink){
  mapLink.addEventListener('click', function (event) {
    event.preventDefault();
    modal = document.querySelector('.popup-map');
    modal.classList.add("modal-show");
    modal.querySelector('.close').addEventListener('click', function (event) {
      event.preventDefault();
      modal.classList.remove("modal-show")
    });
  });
}


for (var i = 0; i < buttonBuy.length; i++){
  var btn = buttonBuy[i];
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal = document.querySelector('.modal-order');
    modal.classList.add("modal-show");
    modal.querySelector('.close').addEventListener('click', function (event) {
      event.preventDefault();
      modal.classList.remove("modal-show");
    });
    modal.querySelector('.continue-shopping').addEventListener('click', function (event) {
      event.preventDefault();
      modal.classList.remove("modal-show");
    })
  })
}



function check() {
  for(var i =0; i < slides.length; i++){
    if(slides[i].checked) currentSlide = i;
  }

}

previousSlideButton.addEventListener('click', function (event) {
  event.preventDefault();
  check();
  if(++currentSlide >= slides.length) currentSlide = 0;
  slides[currentSlide].checked = true;
});

nextSlideButton.addEventListener('click', function (event) {
  event.preventDefault();
  check();
  if(--currentSlide < 0) currentSlide = slides.length - 1;
  slides[currentSlide].checked = true;
});

window.addEventListener('keydown', function (event) {
  if(event.keyCode === 27) document.querySelector('.modal-show').classList.remove('modal-show');
});

if (form){
  form.addEventListener('submit', function (event) {
    modal = document.querySelector('.modal-write-us');
    var name = this.querySelector('input[name=name]').value,
      mail =this.querySelector('input[name=mail]').value,
      letter = this.querySelector('textarea[name="letter-text"]').value;
    if (name && mail && letter){
      localStorage.setItem('name', name);
      localStorage.setItem('mail', mail);
    }
    else {
      event.preventDefault();
      modal.style.animation = 'shake 0.3s';
      setTimeout(function () {
        modal.style.animation = 'modal-open 0s'
      },500);
    }
  });
}

