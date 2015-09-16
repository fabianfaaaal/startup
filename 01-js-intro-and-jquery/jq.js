$(document).ready(function() {
  $('#section1').hide(); //esconde la section1 donde esta hello world!
  $('#section1').fadeIn('slow'); //hace el fade in
  $('.alias').focus(); //pone el cursor dentro del boton

   $("button").click(function() { //fundion que al hacer click al boton, muestra el saludo

    var term = $('.alias').val(); //guardo en una variable lo que contiene el textbox con val()
    console.log(term); //muestro en consola lo que contiene la variable
    $.get("http://bootcamp.aws.af.cm/welcome/" +term, Respond1).error(Error1); /*cargo la data del server usando
    el url  + lo que contiene la variable y llamo a la funcion
    Respond(esta, muestra la respuesta del server en la section1)*/

    });

    var serch_term = {
      q: 'Rolling Stones',
      type:'album'
    };
    console.log(serch_term);

    $.ajax({
      url:'https://api.spotify.com/v1/search?'+ $.param(serch_term), //param(jquery) transforma todo caracter raro, para que la url lo reconozca
      dataType:'json',
      success: function(data){
        console.dir(data);
      }

    }).error(Error2);




    function Respond1(data) { //funcion para tomar la data obtenida, y hacer aparecer la respuesta en la web
    $("#section1").append("<h3> Resupesta:" + data.response + "</h3>");//muestra un mensaje con la respuesta al final de section1
    console.log("Todo ok"); //pequeño mensaje para saber que entra a la funcion
    console.log(data); //log para saber que contiene 'data'
    }
    function Error1() { //funcion para ver si hay error
    $("#section1").append("<h3> ERRORRR" + "</h3>"); //crea un mensaje con error
    $('#section1').css("color","red"); //cambia el color a rojo si hay error
    console.log("Error"); //pequeño mensaje de error en consola si entra a la funcion
    }

    function Respond2(data) { //funcion para tomar la data obtenida, y hacer aparecer la respuesta en la web
    $("#section1").append("<h3> Spotify:" + data.response + "</h3>");//muestra un mensaje con la respuesta al final de section1
    console.log("Todo ok spotify"); //pequeño mensaje para saber que entra a la funcion
    console.dir(data);
    }
    function Error2() { //funcion para ver si hay error
    $("#section1").append("<h3> Spotify error!" + "</h3>"); //crea un mensaje con error
    $('#section1').css("color","orange"); //cambia el color a rojo si hay error
    console.log("ErrorSpotify"); //pequeño mensaje de error en consola si entra a la funcion
    }
});
