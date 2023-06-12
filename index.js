$(document).ready(function () {

    //                   new

    $('.new').waypoint(function () {
        $('.new').addClass('animate__animated animate__heartBeat')
    }, {
        offset: '100%'
    });
});


// benifits of coledra cloud  //   three cloud
$(document).ready(function () {
    $('.btn3').click(function () {
      var $button = $(this);
      var $content = $button.siblings('.c1');

      $content.slideToggle('slow', function () {
        $button.text($content.is(':visible') ? 'Read Less' : 'Read More');
        $button.attr('aria-expanded', $content.is(':visible'));
      });
    });
    });
