$(document).ready(function () {
    $('.card-body .btn').click(function () {
      var $button = $(this);
      var $content = $button.siblings('.card-text');

      $content.slideToggle('slow', function () {
        $button.text($content.is(':visible') ? 'Hide Content' : 'Show Content');
        $button.attr('aria-expanded', $content.is(':visible'));
      });
    });
    });


    $(document).ready(function() {
        $(".btn1").click(function() {
          $(".card1").toggleClass("expanded1");
        });
      });
      $(document).ready(function() {
        $(".btn2").click(function() {
          $(".card2").toggleClass("expanded2");
        });
      });$(document).ready(function() {
        $(".btn3").click(function() {
          $(".card3").toggleClass("expanded3");
        });
      });
      

