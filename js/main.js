$(document).ready(function(){
    
    $.post('php/lecturas.php', function(res){
        res = JSON.parse(res);
        var temperatura = res[0]['valor'];
        var humedad = res[1]['valor'];
        var intensidad = res[2]['valor'];
        
        $("#temp").text(temperatura);
        $("#hum").text(humedad);
        $("#luz").text(intensidad);

        if(temperatura < 10){
            $('#cloudy').hide();
            $('#sunny').hide();
            $('#snowflake').show();
        }
        else if(temperatura >= 10 && temperatura <= 25){
            $('#sunny').hide();
            $('#snowflake').hide();
            $('#cloudy').show();
        }
        else if(temperatura > 25){
            $('#cloudy').hide();
            $('#snowflake').hide();
            $('#sunny').show();
        }
        
        if(humedad < 33){
            $('#hum1').hide();
            $('#hum2').hide();
            $('#hum3').show();
        }
        else if(humedad >= 33 && humedad <= 66){
            $('#hum1').hide();
            $('#hum3').hide();
            $('#hum2').show();
        }
        else if(humedad > 66){
            $('#hum1').hide();
            $('#hum2').hide();
            $('#hum3').show();
        }

        if(intensidad <= 50){
            $('#pw_on').hide();
            $('#pw_off').show();
        }
        else if(intensidad > 50){
            $('#pw_off').hide();
            $('#pw_on').show();
        }
    });

    $('#btnActualizar').click(function(){
        //location.reload();
        $.post('php/lecturas.php', function(res){
            res = JSON.parse(res);
            var temperatura = res[0]['valor'];
            var humedad = res[1]['valor'];
            var intensidad = res[2]['valor'];
            
            $("#temp").text(temperatura);
            $("#hum").text(humedad);
            $("#luz").text(intensidad);
    
            if(temperatura < 10){
                $('#cloudy').hide();
                $('#sunny').hide();
                $('#snowflake').show();
            }
            else if(temperatura >= 10 && temperatura <= 25){
                $('#sunny').hide();
                $('#snowflake').hide();
                $('#cloudy').show();
            }
            else if(temperatura > 25){
                $('#cloudy').hide();
                $('#snowflake').hide();
                $('#sunny').show();
            }
            
            if(humedad < 33){
                $('#hum1').hide();
                $('#hum2').hide();
                $('#hum3').show();
            }
            else if(humedad >= 33 && humedad <= 66){
                $('#hum1').hide();
                $('#hum3').hide();
                $('#hum2').show();
            }
            else if(humedad > 66){
                $('#hum1').hide();
                $('#hum2').hide();
                $('#hum3').show();
            }
    
            if(intensidad <= 50){
                $('#pw_on').hide();
                $('#pw_off').show();
            }
            else if(intensidad > 50){
                $('#pw_off').hide();
                $('#pw_on').show();
            }
        });
    });

});