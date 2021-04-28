$(document).ready(function() {
  var pageItem = $(".pagination a").not(".prev,.next");
  var prev = $(".pagination a.prev");
  var next = $(".pagination a.next");

  pageItem.click(function() {
    pageItem.removeClass("current");
    $(this).not(".prev,.next").addClass("current");
  });

  next.click(function() {
    var $a = $('a.current')
    $a.removeClass('current')
    if($a.next().length > 0 )
      $a.next().addClass('current');
    else
      $('.pagination').find("a.first").addClass("current")
  });

 prev.click(function() {
    var $a = $('a.current')
    $a.removeClass('current')
    if($a.prev().length > 0 )
      $a.prev().addClass('current');
    else
      $('.pagination').find("a.last").addClass("current")
  });


});