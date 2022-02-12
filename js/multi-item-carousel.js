$('.carousel[data-type="multi"] .item').each(function () {
  let next = $(this).next();
  // if current item is the last one, set the first item as its following item
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  // insert the following slide/image into the current item, output see alternative.html
  next.children(':first-child').clone().appendTo($(this));

  // insert the two slides/images after the next slide into the current item, output see alternative.html
  for (let i = 0; i < 2; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});
