$(function() {

  // Init show and hide title bars to display the matching keyword
  $(".blockShow .title").append("<span>[hide]</span>");
  $(".blockHide .title").append("<span>[show]</span>");

  // Listen to click on folding title bars and do the matching action
  $(".blockShow, .blockHide").click(function(event) {
    //event.preventDefault();
    // Update title [action] label
    let titleAction = $(this).find(".title span").html();
    $(this).find(".title span").html( titleAction === "[show]" ? "[hide]" : "[show]");
    // Invert classes (show becomes hide and vice versa) to get css display none/block working
    $(this).toggleClass("blockShow");
    $(this).toggleClass("blockHide");
  });

});