<?php
// $con = mysqli_connect('localhost', 'root', '', 'photo_work');
$con = mysqli_connect('remotemysql.com', 'fybX06nS9K', 'SfbaRpkOst', 'fybX06nS9K');
if (isset($_POST['what']) && $_POST['what'] == 'check_email') {
	$email = $_POST['email'];
	$qry = "select * from stud where email='$email'";
	$res = mysqli_query($con, $qry);
	$num = mysqli_num_rows($res);
	if ($num > 0) {
		echo ("1");
		exit();
	} else {
		echo ("0");
		exit();
	}
}

if (isset($_POST['what']) && $_POST['what']=='insert_data') {
	$roll = strtoupper($_POST['roll']);
	$name = $_POST['name'];
	$email = $_POST['email'];
	$mobile=$_POST['mobile'];
	$laptop=$_POST['laptop'];
	$qry = "insert into stud(roll,name,email,mobile,laptop) values('$roll','$name','$email','$mobile','$laptop')";
	$res=mysqli_query($con,$qry);
	if($qry){
		echo("1");
		exit();
	}else{
		echo("0");
		exit();
	}
}
