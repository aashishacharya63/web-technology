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
<div class="column middle">
	 
	<h2> About Us</h2>

	This Website is Developed by the student of Gandaki Collage of Engineering and Science. This website can be used to for units  conversion of areas of land , volume of some materials , weight of golds, etc. <br>
    The main goal of developing this website is to make easier in conversion. People from hilly region of nepal may not know about the way people of terai calculate the area of land. People of terai use land areas like bigga , kath etc and people of hilly region use land area like ropani, aana , etc. Now , this website can help people to calculate units they need.

</section>
<section>
	<form action="connect.php" method="POST">
		<b>Connect With Us.</b><br>

		<label for="First Name">First Name :</label>
		<input type="text" id="First Name" name="fname"  required> &nbsp;<br><br>

		 <label for="Last Name">Last Name  :</label>
		 <input type="text" id="Last Name" name="lname" required><br><br>
		
		Gender     :
		            <label for="male">Male:
                      <input type="radio" id="male" name="gender" value="male" required>
                    </label>
                    <label for="female">Female:
                      <input type="radio" id="female" name="gender" value="female" required>
                      </label><br><br><br>
		Address    :<input type="text" name="address"><br><br>

		Give us your feedback.<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea rows="6" cols="70" id="feedback" name="feedback">

         </textarea>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit"
		 name="submit" value="submit">
              
	</form>
</section>
<img src="stayconnected.png" alt="area image" width="500" height="333">
<footer>Copyright &copy; 2021 Aashish Acharya</footer>
</body>
<script src="main.js"></script>
</html>