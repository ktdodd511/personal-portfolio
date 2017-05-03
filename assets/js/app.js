$(document).ready(function () {


  $('#first-para').fadeIn(2000).removeClass('hidden');
  $('#second-para').fadeIn(10000).removeClass('hidden');



  $('#my-name').on('click', function() {
      window.location.replace('index.html')

  });



  //PUPSHARE//


  $('#pupshare-img').on('click', function () {
    window.location.replace('pupshare.html');

  });

  $('#pupshare-img').hover(function () {
    $('.pupshare-view').show();

  },
    function () {
      $('.pupshare-view').hide();
});



//HIPTRAVELER//


  $('#hiptraveler-img').on('click', function () {
    window.location.replace('hiptraveler.html');

  });

  $('#hiptraveler-img').hover(function () {
    $('.hip-view').show();

  },
    function () {
      $('.hip-view').hide();
});



//REVIEWTHATBOOK//


  $('#book-img').click(function () {
    window.location.replace('book.html');

  });

  $('#book-img').hover(function () {
    $('.book-view').show();

  },
    function () {
      $('.book-view').hide();
});



//RESUME PAGE//

$('#contact-head').hover(function () {
  $('#resume-contact').show(2000);

});

$('#skills-head').hover(function () {
  $('#resume-skills').show(2000);

});

$('#experience-head').hover(function () {
  $('.experience-body').show(2000);

});


//email button
$('.fa-envelope-open-o').on('click', function () {
  window.location.href = "mailto:ktdodd511@gmail.com";
});


//linkedin button
  $('.fa-linkedin-square').on('click', function () {
    window.location.replace('https://www.linkedin.com/in/katieadodd/');
  });

});
