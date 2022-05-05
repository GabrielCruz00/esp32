$(document).ready(function(){
    
    $.post('php/lecturas.php', function(res){
        res = JSON.parse(res);
        //console.log(res);
        var temperatura = res[0]['valor'];
        var humedad = res[1]['valor'];
        var intensidad = res[2]['valor'];
        
        $("#temp").text(temperatura);
        $("#hum").text(humedad);
        $("#luz").text(intensidad);
    });

    $.post('php/lecturas.php', function(res){
        res = JSON.parse(res);
        console.log(res);
        var temperatura = res[0]['valor'];
        var humedad = res[1]['valor'];
        var intensidad = res[2]['valor'];
        
        if(temperatura < 10){
            $('#cloudy').hide();
            $('#sunny').hide();
        }
        else if(temperatura >= 10 && temperatura <= 25){
            $('#sunny').hide();
            $('#snowflake').hide();
        }
        else if(temperatura > 25){
            $('#cloudy').hide();
            $('#snowflake').hide();
        }
        
        if(humedad < 33){
            $('#hum1').hide();
            $('#hum2').hide();
        }
        else if(humedad >= 33 && humedad <= 66){
            $('#hum1').hide();
            $('#hum3').hide();
        }
        else if(humedad > 66){
            $('#hum1').hide();
            $('#hum2').hide();
        }

        if(intensidad <= 50){
            $('#pw_on').hide();
        }
        else if(intensidad > 50){
            $('#pw_off').hide();
        }
    });

    $('#btnActualizar').click(function(){
        //console.log('Actualizar');
        location.reload();
    });

});