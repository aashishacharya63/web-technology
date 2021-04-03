<!DOCTYPE html>
<html>
<head>
  <title> Sorting in php</title>
</head>
<body>
<?php
echo "<b>1.using sort</b>\n<br>";
$food=array("apple", "orange", "banana", "mango");
print_r($food);
echo "<br>After sorting<br>";
sort($food);
print_r($food);


echo "<br><br><b>2. Using rsort </b><br>";
$animal=array("cow","dog","goat","buffalo");
print_r($animal);
echo "<br>";
rsort($animal);
echo "<br>After rsort <br>";
print_r($animal);

echo "<br><br><b>3. Using asort .</b><br>";
$city=array("a"=>"pokhara", "b"=>"katmnandu", "c"=>"chitwan","d"=>"dharan");
print_r($city);
echo "<br> After using asort<br>";
asort($city);
print_r($city);

echo "<br><br><b>4. Using arsort .</b><br>";
$city=array("a"=>"pokhara", "b"=>"katmnandu", "c"=>"chitwan","d"=>"dharan");
print_r($city);
echo "<br> After using arsort<br>";
arsort($city);
print_r($city);

echo "<br><br><b>5. Using ksort .</b><br>";
$city=array("a"=>"pokhara", "z"=>"katmnandu", "k"=>"chitwan","u"=>"dharan");
print_r($city);
echo "<br> After using ksort<br>";
ksort($city);
print_r($city);

echo "<br><br><b>6. Using krsort .</b><br>";
$city=array("a"=>"pokhara", "b"=>"katmnandu", "c"=>"chitwan","d"=>"dharan");
print_r($city);
echo "<br> After using krsort<br>";
krsort($city);
print_r($city);

?>


</body>
</html>