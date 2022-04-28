$(document).ready(function(){
    
    $('#enviarTemp').click(function(){
        var temperatura = $('#inputTemp').val();
        temperatura = {'dato': temperatura, 'sensor': 'LM35'};

        $.post('./php/actualizar.php', temperatura, function(res){
            console.log(res);
        });
    });

    $('#enviarHum').click(function(){
        var humedad = $('#inputHum').val();
        humedad = {'dato': humedad, 'sensor': 'humedad'};

        $.post('./php/actualizar.php', humedad, function(res){
            console.log(res);
        });
    });

    $('#enviarLuz').click(function(){
        var luz = $('#inputLuz').val();
        luz = {'dato': luz, 'sensor': 'LDR'};

        $.post('./php/actualizar.php', luz, function(res){
            console.log(res);
        });
    });
});