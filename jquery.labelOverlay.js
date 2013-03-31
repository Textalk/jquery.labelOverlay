/**
 * Simple label overlay plugin to make labels act as a default value to input
 * element. It will hide itself when users want to enter text but reappear if
 * input has no value. It will also vanish if another input field triggers
 */
(function($){
  $.fn.labelOverlay = function(options) {
    var labelclass;
    if (typeof options.class !== 'undefined') labelclass = options.class;
    return this.each(function() {
      var input = $('input[name="' + $(this).attr('for') + '"]');
      var label = $(this);
      label.addClass(labelclass);

      interval_check = function() {
        if (input.val() !== '') {
          label.hide();
          console.log('sadfasdfasdf');
        }
      }

      input.change(
        function() {
          if ($(this).val() === '') setInterval(interval_check, 100);
          else clearInterval(interval_check);
        }
      );

      if (input.val() === '') {
        label.show();
      }
      else {
        label.hide();
      }

      input.focus(function() {
        label.hide();
      }).blur(function() {
        if ($(this).val() === '') label.show();
      });

      label.click(function() {
        $(this).hide();
        input.focus();
      });
    });
  };
})(jQuery);