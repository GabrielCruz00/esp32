<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Inicio de Sesión</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>


    <script src="./js/main.js"></script>
</head>
<body style="background-color: black;">
    <div class="container">
        
        <div class="row my-5 d-flex justify-content-center">
            <div class="col-2">
                <img src="../assets/user.png" alt="user" class="col-12">
            </div>
        </div>

        <div class="row my-4 d-flex justify-content-center">
            <div class="col-6">
                <input type="text" name="txtUser" id="txtUser" placeholder="User" class="form-control">
            </div>
        </div>
        <div class="row my-4 d-flex justify-content-center">
            <div class="col-6">
                <input type="password" name="password" id="password" placeholder="Password" class="form-control">
            </div>
        </div>

        <div class="row my-5 d-flex justify-content-center">
            <div class="col-3 d-flex justify-content-center">
                <input type="button" class="btn btn-outline-success" name="btnSubmit" id="btnSubmit" value="Submit">
            </div>
        </div>
    </div>
</body>
</html>