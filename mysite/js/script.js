$(document).ready(function(){


    var $animation_elements = $('.animation-element');
    var $window = $(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    
    // Proto Persona modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal 
    var popup = document.getElementById("proto-persona");
    var modalImg = document.getElementById("img01");
    popup.onclick = function(){
      modal.style.display = "block";
      modalImg.src = "../images/USARC/USARC-proto-persona.png";
    
      console.log('working?');
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere else, close the modal. 
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";}}


$ease: cubic-bezier(.2,1,.3,1);


// below is closing for document-ready function
});