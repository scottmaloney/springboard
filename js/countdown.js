$(function(){
  $('[data-countdown]').each(function() {
     var $this = $(this), finalDate = $(this).data('countdown');
     $this.countdown(finalDate, function(event) {
       $this.html(event.strftime(''
         + '<span class="count"><span class="count-wrap"><span class="digits" id="days">%D</span> day%!d </span></span>'
         + '<span class="count"><span class="count-wrap"><span class="digits" id="hours">%H</span> hr </span></span>'
         + '<span class="count"><span class="count-wrap"><span class="digits" id="minutes">%M</span> min </span></span>'
         + '<span class="count"><span class="count-wrap"><span class="digits" id="seconds">%S</span> sec</span></span>'));
     });
 });
});
