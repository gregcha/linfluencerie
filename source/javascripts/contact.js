$(document).ready(function(){
  $(function() {
    $(".form").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: "//formspree.io/charles@linfluencerie.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          $('#footer h3').html("Message Envoyé <i class='fa fa-check'></i>");
          $('#footer h3 i').css('color', '#086788');
          $('.form').trigger("reset");
        },
        error: function(){
          $('#footer h3').html("Une erreur s'est produite<i class='fa fa-times'></i>");
          $('#footer h3 i').css('color', '#DD1C1A');
          $('.form').trigger("reset");
        }
      });
    });
  });
});
