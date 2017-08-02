let indexButtons = $("button");

// indexButtons.click(function(){
//     $( ".splash" ).replaceWith( "<h2>New heading</h2>" );
//     console.log("clcik");
// });

$(".index-buttons").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
   function(e) {
     indexButtons.addClass("upAndDown")
 });


$("#hotdog").click(function() {
  $(".splash").hide();
  $(".eater-splash").show();
});


$("#headshot").click(function() {
  alert( "Handler for headshot called." );
});
