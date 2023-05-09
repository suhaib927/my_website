<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body class="bg-primary text-white text-center" >
    <div class="container mx-auto bg-primary">
        <div class="row fs-3 text-center text-white">
            <div class="col-sm-12">
            <?php
                $email = $_POST['username'];
                $password = $_POST['password'];
                $pos =strpos($email, '@');
                
                if ($pos !== false) {
                   
                    $username = substr($email, 0, $pos);
                }
                if($username == $password)
                {
                    echo "<br><br><br><br><br><br><br>HOŞGELDİNİZ \"". strtoupper($username). "\"<br>";
                    echo "<b>5 sn hakkında sayfasına yöneleceksiniz </b>";
                    echo "<div class=\"spinner-border\" role=\"status\">
                    <span class=\"visually-hidden\"></span>
                  </div>";
                   header("refresh: 5; url = ../index.html"); 
                }
                else
                {
                    echo "<br><br><br><br><br><br><br>!!!şifreniz hatalıdır!!!<br>";
                    echo "!!!şifreniz, mail adresinizin ilk kısmı ile aynı olmalıdır!!!<br>";
                    echo "<b>5 saniye içerisinde giriş sayfasına yöneleceksiniz </b>";
                    echo "<div class=\"spinner-border\" role=\"status\">
                    <span class=\"visually-hidden\"></span>
                  </div>";
                    header("refresh: 5; url = ../html/giris.html");
                }
            ?>
            </div>
        </div>
    </div>
    <script src="js/bootstrap.js"></script>
</body>
</html>