$(document).ready(function(){
  // Hack related to: https://github.com/twbs/bootstrap/issues/10236
  $(window).on("load resize", function() {
    $(window).trigger("scroll");
  });

  // Smooth scrolling
  $("a.scrollto").on("click", function(e) {
    var target = this.hash;
    e.preventDefault();
    $("body").scrollTo(target, 800, { offset: 0, "axis": "y" });
  });

  actionCdTop.init(".cd-top");
  actionHome.init(".home");
  actionCards.init(".card-section");
});