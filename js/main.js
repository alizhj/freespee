$( document ).ready(function() {


  $('.btn').on('click', function(e) {
    e.preventDefault();

    var target = $(this);

    //get the uniqe value and add class active
    var value = target.attr('data-value');
    target.addClass('active');

    //remove class active
    setTimeout(function(){
        target.removeClass('active');
    },200);

    //show value in input and add next value
    var showInput = $('.result');
    showInput.val( showInput.val() + value );
  });


  $('.submit').on('click', function(e) {
    e.preventDefault();

    //get value from input
    var result = $('.result').val();

    //split input value into array
    var res = result.split('');

    //remove all non number values from array
    var cleanResult = res.filter(function(el) {
      return el.length && el==+el;
    });

    var total = 0;
    //sum every number in array
    for (var i = 0; i < cleanResult.length; i++) {
        total += cleanResult[i] << 0;
    }

    //
    $('.result').html(total);
  });
});
