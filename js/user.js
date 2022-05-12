$(document).ready(function(){
   
    $('#btnSubmit').click(function(){
        var user = $('#txtUser').val();
        var pswd = $('#password').val();
        var datos = {'user': user, 'pswd': pswd};
        
        $.post('./iniciarSesion.php', datos, function(res){
            var respuesta = JSON.parse(res);
                        
            if (respuesta['res'] == true){
                console.log('Se inicio sesión');
            } else {
                console.log('No se inicio sesión');
            }
        });
    });
    
});