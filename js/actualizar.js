$(document).ready(function(){
    
    $.post('php/lecturas.php', function(res){
        res = JSON.parse(res);
        //console.log(res);
        var temperatura = res[0]['valor'];
        var humedad = res[1]['valor'];
        var intensidad = res[2]['valor'];
        
        $("#inputTemp").val(temperatura);
        $("#inputHum").val(humedad);
        $("#inputLuz").val(intensidad);
    });

    $('#alertTemp').hide();
    $('#alertHum').hide();
    $('#alertLuz').hide();

    $('#enviarTemp').click(function(){
        var temperatura = $('#inputTemp').val();
        temperatura = {'dato': temperatura, 'sensor': 'LM35'};

        $.post('./php/actualizar.php', temperatura, function(res){
            //console.log(res);
            res = JSON.parse(res);
            // console.log(res);
            if(res['res']){
                $('#alertTemp').show();
                $('#alertHum').hide();
                $('#alertLuz').hide();
            }
        });
    });

    $('#enviarHum').click(function(){
        var humedad = $('#inputHum').val();
        humedad = {'dato': humedad, 'sensor': 'humedad'};

        $.post('./php/actualizar.php', humedad, function(res){
            // console.log(res);
            res = JSON.parse(res);
            // console.log(res);
            if(res['res']){
                $('#alertTemp').hide();
                $('#alertHum').show();
                $('#alertLuz').hide();
            }
        });
    });

    $('#enviarLuz').click(function(){
        var luz = $('#inputLuz').val();
        luz = {'dato': luz, 'sensor': 'LDR'};

        $.post('./php/actualizar.php', luz, function(res){
            // console.log(res);
            res = JSON.parse(res);
            // console.log(res);
            if(res['res']){
                $('#alertTemp').hide();
                $('#alertHum').hide();
                $('#alertLuz').show();
            }
        });
    });
});