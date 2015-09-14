$(document).ready(function() {
  $('#section1').hide(); //esocnde la section1 donde esta hellow world!
  $('#section1').fadeIn('slow'); //hace el fade in
  $('.alias').focus(); //pone el cursor dentro del boton

   $("button").click(function() { //fundion que al hacer click al boton, muestra el saludo

    var term = $('.alias').val(); //guardo en una variable lo que contiene el textbox con val()
    console.log(term); //muestro en consola lo que contiene la variable
    $.get("http://bootcamp.aws.af.cm/welcome/" +term, Respond).error(Error); //cargo la data del server usando el url  + lo que contiene la variable y llamo a la funcion Respond(esta, muestra la respuesta del server en la section1)

    });

    function Respond(data) {
    $("#section1").append("<h3> Resupesta:" + data.response + "</h3>");
    console.log("Todo ok");
    }
    function Error() {
    $("#section1").append("<h3> ERRORRR" + "</h3>");
    $('#section1').css("color","red");
    console.log("Error");
    }

});
