Stripe.setPublishableKey('pk_test_1ejKLCjIWwvKauXLgvNrC7Vx');


$(document).ready(function() {
  $("#charge-error").hide()
  $('#payment-form').submit(function(event) {
    $("#charge-error").hide()
    var $form = $(this);

    // Disable the submit button to prevent repeated clicks
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken($form, stripeResponseHandler);
    // Prevent the form from submitting with the default action
    return false;
  });
  // $("#datepicker").datepicker('getDate');
  $('#seat-form').submit(function(e) {
    var data=$(this).serialize();
    console.log(data)
   
    
  
    $.get("/buyticket",data,function(data){
      
    var info ='<div class="row"><div class=" alert alert-danger"> The Seat Number: '+data.seat+ ' And Date:'+data.date +' available</div><a><button type="button" onclick=location.href="/charge" class="btn btn-default">Buy</button></a></div>';
       $("#ticket-container").html(info);
    });
   
    return false;
  });


});

function stripeResponseHandler(status, response) {
  if (response.error) {
    // show the errors on the form
    $("#charge-error").show()
    $(".payment-errors").text(response.error.message);
    $(".submit-button").removeAttr("disabled");
  } else {
    var form$ = $("#payment-form");
    // token contains id, last4, and card type
    var token = response['id'];
    // insert the token into the form so it gets submitted to the server
    form$.append("<input type='hidden' name='stripeToken' value='" + token + "'/>");
    // and submit
    form$.get(0).submit();
  }
}

