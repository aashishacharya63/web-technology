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
       
          <button type="button"  >Lal</button>
          <button type="button" >Tola</button>
          <button type="button" >Chatak</button>
          <button type="button" >Pau</button>
          <button type="button" >Dharni</button>
          
        </div>
        <br>
        


        <div id="output-weight" class="output hidden">

          <div class=" column side">
            <h4>Lal:</h4>
              <div id="lalOutput">0</div>
            </div>
          </div>

          <div class=" column side">
           <h4>Tola:</h4>
              <div id="tolaOutput">0</div>
            </div>
          </div>

          <div class="column side">
            <h4>Chatak:</h4>
              <div id="chatakOutput">0</div>
            </div>
          </div>

          <div class=" column side">
            <h4>Pau:</h4>
              <div id="pauOutput">0</div>
            </div>
          </div>

          <div class=" column side">
            
              <h4>Dharni:</h4>
              <div id="dharniOutput">0</div>
            </div>
          </div>
          <div class=" column side">
            
              

        </div>
      </div>
      <!-- End Mass Converter -->
<h2>HTML Image</h2>
<img src="weight.png" alt="weight image" width="500" height="333">

       <!-- End Temp Converter -->
      </div>
    </div>
  </div>
</section>
<script src="gold.js" type="text/JavaScript"></script>
<footer>Copyright &copy; 2021 Aashish Acharya</footer>
</body>

</html>