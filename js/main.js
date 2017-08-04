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


$("#hotdog").click(function() {
  $(".splash").hide();
  $(".navbar").show();
  $(".eater-splash").show();
  $(".eater-splash").css(
    {
        "display": "flex",
        "align-items": "center",
        "flex-direction": "column",
        "justify-content": "center"
    })
});


$("#headshot").click(function() {
  alert( "Handler for headshot called." );
});
