$(document).ready(function () {
  $(".owl-carousel1").owlCarousel({
    loop: true,
    margin: 80,
    autoplay: true,
    dots: false,
    nav: false,
    autoplaySpeed: 2000,
    navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive: {
      0: {
        stagePadding:100,
        items: 1,
      },
      600: {
        stagePadding:100,
        items: 4.5,
      },
      1200: {
        stagePadding:100,
        items: 5.5,
      },
      1300: {
        items: 6,
      },
      1400: {
        items: 6.5,
      },
    },
  });

  $('.owl-projects').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
});



///-------- mobile and tablet nav -----------///

const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});



///-------- waypoint sticky nav --------///


$(document).ready(function () {


  $(".js-things-ilove-section").waypoint(function (direction) {

    if (direction == "down") {
      $("nav").addClass("sticky-2");

    }
    else {
      $("nav").removeClass("sticky-2");
    }

  });

});


///-------- waypoint animation --------///

$(document).ready(function () {

  $(".js-contact-section").waypoint(function (direction) {

    $(".card-comment").addClass("animate__animated animate__shakeX")

  }, { offset: "18%"

  });

});

///-------- Form Message --------///

function msg() {

  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var message = document.getElementById('message');
  const success = document.getElementById('success');


  if (name.value === '' || email.value === '' || phone.value === '' || message.value === '') {
    window.alert("Fields can't be empty! Please fill out the fields.");
  }
  else {
    window.alert("Your Message Successfully Submit.");
  }
}


// cursor js

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const numTrailElements = 10;
  const trails = [];

  for (let i = 0; i < numTrailElements; i++) {
      const trail = document.createElement('div');
      trail.classList.add('trail');
      document.body.appendChild(trail);
      trails.push(trail);
  }

  document.addEventListener('mousemove', (event) => {
      cursor.style.left = `${event.pageX}px`;
      cursor.style.top = `${event.pageY}px`;

      trails.forEach((trail, index) => {
          setTimeout(() => {
              trail.style.left = `${event.pageX}px`;
              trail.style.top = `${event.pageY}px`;
          }, index * 20); // Adjust delay to control the trailing effect
      });
  });
});
