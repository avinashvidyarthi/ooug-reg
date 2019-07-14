<!DOCTYPE html>
<html lang="en">
<head>

  <!-- ogp start -->
  <meta property="og:url" content="http://ooug-reg.herokuapp.com" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Odisha Oracle Users Group" />
  <meta property="og:title" content="Odisha Oracle Users Group" />
  <meta property="og:description" content="OOUG: Registration" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:locale:alternate" content="hi_IN" />
  <!-- <meta property="fb:app_id" content="1916383908681524" /> -->
  <!-- og images -->
  <meta property="og:image" content="http://ooug-reg.herokuapp.com/ooug.png" />
  <!-- <meta property="og:image:secure_url" content="https://teckat.com/images/og/default.webp" /> -->
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="240" />
  <meta property="og:image:height" content="240" />
  <!-- og images end -->
  <!-- ogp start end -->

  <title>Register for Workshop</title>
  <meta charset="utf-8">
  <meta name="theme-color" content="black">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="embed.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Good+Times" rel="stylesheet" type="text/css">
  <link rel="icon" href="ooug.png" sizes="16x16" type="image/png">
</head>
<body style="background-color: #000000 !important;">

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3">
      </div>
      <div class="col-md-6">
        <div class="jumbotron p-4">
          <center>
            <img src="ooug.png" height="80px" width="80px"><br>
            <font style="font-family: Good Times; color: red; padding-bottom: 0px; font-size: 30px;" class="text-center">OOUG</font>
          </center>
          <br>
          <h3>Register for Workshop:</h3>
          <!-- <div id="seats" style="float:right;"></div><br> --><br>
          <div id="signup"> 
            <label>Email:</label>
            <input type="email" id="email" class="form-control" placeholder="Email" required><br>
            <button class="btn btn-primary btn-block" onclick="send_otp()" id="otp_btn">Send OTP</button>
            <div id="app"></div>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</body>
</html>
