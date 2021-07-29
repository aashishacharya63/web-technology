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
       
          <button type="button"  >Daam</button>
          <button type="button" >Paisa</button>
          <button type="button" >Aana</button>
          <button type="button" >Ropani</button>
          <button type="button" >Dhur</button>
          <button type="button" >Katha</button>
          <button type="button" >Bigha</button>
        </div>
        <br>
        


        <div id="output-weight" class="output hidden">

          <div class=" column side">
            <h4>Daam:</h4>
              <div id="daamOutput">0</div>
            </div>
          </div>

          <div class=" column side">
           <h4>Paisa:</h4>
              <div id="paisaOutput">0</div>
            </div>
          </div>

          <div class="column side">
            <h4>Aana:</h4>
              <div id="aanaOutput">0</div>
            </div>
          </div>

          <div class=" column side">
            <h4>Ropani:</h4>
              <div id="ropaniOutput">0</div>
            </div>
          </div>

          <div class=" column side">
            
              <h4>Dhur:</h4>
              <div id="dhurOutput">0</div>
            </div>
          </div>
          <div class=" column side">
            
              <h4>Katha:</h4>
              <div id="kathaOutput">0</div>
            </div>
          </div>
          <div class=" column side">
            
              <h4>Bigha:</h4>
              <div id="bighaOutput">0</div>
            </div>
          </div>

        </div>
      </div>
      <!-- End Mass Converter -->
<h2>Measurement For Land's area.</h2>
<i>This system is mostly used in the area region of Nepal.</i><br><br>
<img src="land.png" alt="area image" width="500" height="333">

       <!-- End Temp Converter -->
      </div>
    </div>
  </div>
</section>
<script src="main.js" type="text/JavaScript"></script>
<footer>Copyright &copy; 2021 Aashish Acharya</footer>
</body>

</html>