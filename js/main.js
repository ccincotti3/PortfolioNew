let indexButtons = $("button");

// $(document).ready(function () {
//   var back = ["#ff0000","blue","gray"];
//   var rand = back[Math.floor(Math.random() * back.length)];
//   $('.splash').css('background',rand);
// })

 $("#code").mouseenter(
   function() {
     $("#covid").css("visibility", "visible");
 }).mouseleave(function() {
   $("#covid").css("visibility", "hidden");
 }
);

$("#hotdog").mouseenter(
  function() {
    $("#hdvid").css("visibility", "visible");
}).mouseleave(function() {
  $("#hdvid").css("visibility", "hidden");
}
);

$(window).scroll(handleHitTop);

function handleHitTop(event) {
    var currentScrollTopValue = $(this).scrollTop();

    if (handleHitTop.lastTop === undefined) {
        handleHitTop.lastTop = currentScrollTopValue ;

        return;
    }

    if (handleHitTop.lastTop == 0 && currentScrollTopValue == 0) {
        return;
    }

    handleHitTop.lastTop = currentScrollTopValue;
    var eaterBar = $("#eater-bar")
    if (handleHitTop.lastTop == 0) {
      eaterBar.css("background-color","transparent");
      console.log("to clear")
        }

    if (handleHitTop.lastTop != 0 && eaterBar.css("background-color") != "rgb(255, 255, 255)") {
      eaterBar.css("background-color","white");
      console.log("to white")
    }
}

$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});
