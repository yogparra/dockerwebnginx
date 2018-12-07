
$(function () {   

    $dinbot = $("#idinbot");
    var chat_bot =
        "<div id='chat-bot'>"
        + "    <div id='wrapperBot' class='wrapper-bot'>"
        + "         <div id='headerFull' style='display: none;' >"
        + "          <span class=''></span><span class='icons-bot'></span>"
        + "               <h2 class='title-bot'> MINVU - Asistente Virtual</h2>"
        + "         </div>"
        + "         <div id='headerMin'>"
        + "          <span class='switch-icons-bot-min'></span>"
        + "               <p id='help'> Hola <br /> ¿necesitas ayuda?</p>"
        + "         </div>"
        + "         <div class='content-bot'>"
        + "              <iframe id='botchat' src='http://botpostulacionenlinea.minvu.cl/bot-postulacion-en-linea/dinbot.html' scrolling='no' frameborder='0' style='width:100%; height: 100%;'>"
        + "              </iframe>"
        + "         </div>"
        + "    </div>"
        + "</div>";        

    $dinbot.append(chat_bot);

    $('#idinbot .switch-icons-bot-min').on('click', function () {        
        maximizar();
    });


    $('#idinbot .icons-bot').on('click', function () {               
        minimizar();
    });

    function minimizar() {
        $('#headerFull').hide();
        $('#headerMin').show();
        $('.content-bot').slideToggle('slow', null, function(){
             $('#chat-bot').attr('style', 'max-height: 0px ; height: 0px ; padding-right: 0% !important');       
        }); 
        
        $('#wrapperBot').attr('style', 'border-style: hidden');        
        
    }

    function maximizar() {
        $('#headerMin').hide();
        $('#headerFull').show();
        $('.content-bot').slideToggle();
        $('#chat-bot').attr('style', 'max-height: 450px; height: 450px; padding-right: 0% !important');
        $('#wrapperBot').attr('style', 'border-style: solid');        
    }

    function darPosicion(posicion){
        switch(posicion){
            case 'izquierda': 
            $('#chat-bot').addClass('izquierda');
            break;            
        }
    }

    function parametros(){
        var jsLlamadaBot = $('script[src*=dinbot]');        
        var posicion = jsLlamadaBot.attr('data-posicion');           

        if(posicion !== undefined || posicion === ""){
            darPosicion(posicion);
            //console.log('Posicion: ' + posicion);
        }        
    }

    parametros()
    // setTimeout(() => {
    //     minimizar();    
    // }, );
    minimizar();
});

window.onload = function () {
    $('.content-bot').css('display', 'none');
    $('body').focus(); //fix para quitar el cursor del área de texto que se cargaba en IE11
}

