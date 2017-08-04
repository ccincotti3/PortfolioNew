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
