/**
 * Options:
 *  css_class: css class to bind on labels.
 *  related_label
 */
$.fn.overlayValue = function(options) {
  var label = this;
  var input = 'input[name="' + $(label).attr('for') + '"]';

  // options
  var css_class, css, related_label;
  if (typeof options.css_class !== 'undefined') css_class = options.css_class;
  if (typeof options.related_label !== 'undefined') related_label = options.related_label;

  if (css_class) $(label).addClass(css_class);

  if (typeof related_label !== 'undefined') {
    var related_input = 'input[name="' + $(label).attr('for') + '"]';
    $(input).change(function() {
      interval_check = setInterval(
       function() {
          if ($(related_input).val() !== '') $(related_label).hide();
          else $(related_label).show();
        },
        100
      );
    });

    $(input).blur(function() {
      clearInterval(interval_check);
    });
  }

  if ($(input).val() === '') {
    $(label).show();
  }

  $(input).focus(function() {
    $(label).hide();
  }).blur(function() {
    if ($(this).val() === '') $(label).show();
  });

  $(label).click(function() {
    $(label).hide();
    $(input).focus();
  });
};
