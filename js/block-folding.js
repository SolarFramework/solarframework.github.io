$(function() {

  // Init show and hide title bars to display the matching keyword
  $(".blockShow .title").append('<span class="display-action">[hide]</span>');
  $(".blockHide .title").append('<span class="display-action">[show]</span>');

  // Listen to click on folding title bars and do the matching action
  $(".blockShow .display-action, .blockHide .display-action").click(function(event) {
    // Update title [action] label
    const $this = $(this);
    const titleAction = $this.html();
    $this.html(titleAction === "[show]" ? "[hide]" : "[show]");
    // Invert classes (show becomes hide and vice versa) to get css display none / block working
    $this.closest('.blockShow, .blockHide').toggleClass('blockShow blockHide');
  });
});