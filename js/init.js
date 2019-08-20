/************hamburger******/
$(document).ready(function(){
    $('.btn').click(function(){
        $('.navigation-bar').toggleClass('active');
        $('.btn').toggleClass('toggle');
    })
})
/******scroll effect******************/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Preloader
$(document).ready(function(){
    $('#wrapper').hide();
    $(window).on({
      load: function(){
        $('.body').hide();
        $('#wrapper').show();
      }
    })
  })