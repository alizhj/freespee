$( document ).ready(function() {


  $('.btn').on('click', function(e) {
    e.preventDefault();
    var target = $(this);
    var value = target.attr('data-value');

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
    var cleanRes = res.filter(function(el) {
      return el.length && el==+el;
    });

    var total = 0;
    for (var i = 0; i < cleanRes.length; i++) {
        total += cleanRes[i] << 0;
    }
    console.log(total);


    // $.each(cleanRes, function (index, value) {
    //   console.log(value);
    // });
  });


});
