<!DOCTYPE html>
<html>

<head>
  <title>Units Converter</title>
  <link rel="stylesheet" type="text/css" href="style.css">




   


</head>
<body>
<header>
<h1> Nepali Units Converter</h1>
<p><marquee> All Neplai Land areas , volumes and weights Converter.</marquee></p>

</header>

  <section>
  <div class="row">
    <div class="column side">
      <nav>
   <a href="index.php">Home </a><br><br><br><br>
  <a href="land.php">Lands Unit </a><br><br><br><br>

  <a href="gold.php">Convert Golds Weight</a><br><br><br><br>

  <a href="volume.php">Volumes</a><br><br><br><br>

  <a href="about.php">About Us</a><br><br><br><br>

  <a href="policy.php">Privacy Policy</a><br>
  <br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>

       </nav>
</div>
</section>

<section>

  <div id="main" class="container">


    <!-- input field -->
    <div class="row">
      <div class="column middle">
        <form>
              <div class="form-group mb-3">
                <input id="input" type="number"  placeholder="Enter Value">
              </div>
        </form>

      <!-- Start Mass Converter -->
      <div id="land" class="col">
        <h1 class="display-5 text-center ">Land</h1>
       
          <button type="button"  >Muthi</button>
          <button type="button" >Mana</button>
          <button type="button" >Karuwa</button>
          <button type="button" >Pathi</button>
          <button type="button" >Muri</button>
          
        </div>
        <br>
        


        <div id="output-weight" class="output hidden">

          <div class=" column side">
            <h4>Muthi:</h4>
              <div id="muthiOutput">0</div>
            </div>
          </div>

          <div class=" column side">
           <h4>Mana:</h4>
              <div id="manaOutput">0</div>
            </div>
          </div>

          <div class="column side">
            <h4>Karuwa:</h4>
              <div id="karuwaOutput">0</div>
            </div>
          </div>

          <div class=" column side">
            <h4>Pathi:</h4>
              <div id="pathiOutput">0</div>
            </div>
          </div>

          <div class=" column side">
            
              <h4>Muri:</h4>
              <div id="muriOutput">0</div>
            </div>
          </div>
          <div class=" column side">
            
              

        </div>
      </div>
      <!-- End Mass Converter -->
      <br>

<img src="volume.png" alt="volume image" width="500" height="333">
       <!-- End Temp Converter -->
      </div>
    </div>
  </div>
</section>


<script src="volume.js" type="text/JavaScript"></script>
<footer>Copyright &copy; 2021 Aashish Acharya</footer>
</body>

</html>