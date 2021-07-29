<?php
    $conn=mysqli_connect('localhost','root','','unitconverter');
   if(isset($_POST['submit']))
    {
        $fname = $_POST['fname'];
        $lname =$_POST['lname'];
        $gender =$_POST['gender'];
        $address=$_POST['address'];
        $feedback =$_POST['feedback'];

        $sql = "INSERT INTO regestration (fname, lname, gender, address, feedback) VALUES ('$fname','$lname','$gender','$address','$feedback')";
        if (mysqli_query($conn, $sql)) {
            echo "Added Successfully";
        }
        else {
            echo "Failed to add";
        }
        mysqli_close($conn);
        header('location:/2nd_sem_project/index.php');
    }
?>