$(function(){

  $('#main-image').scroll(function(){
    $('.header-icon').fadeOut();
  });

  $('.question-modal').click(function(){
    $('#question-modal').fadeIn();
  });

  $('.header-icon').click(function(){
    if ($('.header-left-mini').hasClass('open')){
      $('.header-left-mini').removeClass('open');
      $('.header-left-mini').css('color','white');
      $('span').text('+');
      $('#menu-wrapper').slideUp();
    }else{
      $('.header-left-mini').addClass('open');
      $('.header-left-mini').css('color','#20B2AA');
      $('span').text('-');
      $('#menu-wrapper').slideDown();
    }  
  });

  /*============questions=========*/
  $('.q1').click(function(){
    $('.question-modal-wrapper1').fadeIn();
  });
  $('.q2').click(function(){
    $('.question-modal-wrapper2').fadeIn();
  });
  $('.q3').click(function(){
    $('.question-modal-wrapper3').fadeIn();
  });
  $('.q4').click(function(){
    $('.question-modal-wrapper4').fadeIn();
  });
  $('.q5').click(function(){
    $('.question-modal-wrapper5').fadeIn();
  });
  $('.q6').click(function(){
    $('.question-modal-wrapper6').fadeIn();
  });
  /*===========closemodal============*/
  $('.close-modal').click(function(){
    $('#question-modal').fadeOut();
    $('.questions-modal').fadeOut();
  });

});
