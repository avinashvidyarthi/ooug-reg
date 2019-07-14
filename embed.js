var x;
var email;

$(document).ready(function () {
	//check_no();
});

// function check_no() {
// 	$.ajax({
// 		url: "backend.php",
// 		type: "POST",
// 		data: {
// 			what: "check_no"
// 		},
// 		success: function (result) {
// 			console.log(result);
// 			$("#seats").html(60-result+" seats remaining.")
// 			if(result>=60){
// 				$("#signup").html("<h2 class='text-danger text-center'>Registration Closed!!!<h2><h4 class='text-center'>Seats Full!!!</h4>")
// 			}
// 		}
// 	});
// }


function send_otp() {
	email = $("#email").val();
	$.ajax({
		type: "POST",
		url: "backend.php",
		data: {
			what: 'check_email',
			email: email
		},
		success: function (response) {
			//console.log("res"+response);
			if (response == 0) {
				$.ajax({
					url: 'https://otp-avi.herokuapp.com/otp_api.php',
					type: 'POST',
					data: {
						what: "send_otp",
						from: 'OOUG',
						to_email: email,
						to_name: 'participant',
						subject: 'OOUG: OTP Verification',
						body: '',
						send_otp: 1,
						otp_len: 6
					},
					success: function (result, status) {
						x = JSON.parse(result);
						if (x.status === 'success') {
							$("#otp_btn").html("OTP sent");
							var a = "<br><label>OTP:</label> <input type='number' required id='otp' class='form-control'> <br> <button class='btn btn-primary btn-block' onclick='verify_otp()'>Verify</button>";
							$("#app").html(a);
						}
						else {
							$("#otp_btn").html("Try again!!!");
							$("#otp_btn").removeAttr('disabled');
						}
					},
					beforeSend: function () {
						$("#otp_btn").html("Sending OTP...");
						$("#otp_btn").attr('disabled', 'disabled');
					},
					error: function () {
						alert("Something went wrong!!!");
					}
				});
			} else {
				alert("Email registered!!!");
				$("#otp_btn").html("Send OTP");
				$("#otp_btn").removeAttr('disabled');
			}
		}
	});
}


function verify_otp() {
	var otp = $("#otp").val();
	if (x.otp == otp) {
		var a = "<label>Name:</label> <input type='text' id='name' required class='form-control' placeholder='Name'> <br> <label>Roll No:</label> <input type='text' id='rollno' class='form-control' style='text-transform:uppercase' required placeholder='Roll No'> <br> <label>Mobile:</label> <input type='tel' required id='mobile' class='form-control' placeholder='Mobile No'> <input type='hidden' id='email' value='" + email + "'><br> <label>Do you have Laptop?</label> <select class='form-control' id='laptop'> <option value='1'>Yes</option> <option value='0'>No</option></select><br> <button id='insert_btn' class='btn btn-primary btn-block' onclick='insert()'>Signup</button>";
		$("#signup").html(a);
	}
	else {
		alert("Wrong OTP!!!");
	}
}


function insert() {
	var name = $("#name").val();
	var roll = $("#rollno").val();
	var mobile = $("#mobile").val();
	var email = $("#email").val();
	var laptop = $("#laptop").val();

	if (roll[0] == '1' && roll[1] == '8') {
		$.ajax({
			url: 'backend.php',
			type: 'POST',
			data: {
				what: 'insert_data',
				name: name,
				roll: roll,
				mobile: mobile,
				email: email,
				laptop: laptop
			},
			beforeSend: function () {
				$("#insert_btn").html('Loading...');
				$("#insert_btn").attr('disabled', 'disabled');
			},
			success: function (result, status) {
				//console.log(result);
				if (result == 1) {
					$.ajax({
						url: 'https://otp-avi.herokuapp.com/otp_api.php',
						type: 'POST',
						data: {
							what: "send_otp",
							from: 'OOUG',
							to_email: email,
							to_name: name,
							subject: 'OOUG: Registration Successfull!!',
							body: 'Thank you for registering for workshop. Hope you will have a great learning experience.<br><br><b>Team OOUG</b>',
							send_otp: 0,
						},
						success: function (result, status) {
							//console.log(result);
							alert("You have successfully registered");
							var b = "<h2 class='text-success'>Registration Successfull<h2><br><a href='index.php' class='btn btn-primary btn-block'>Register More</a>";
							$("#signup").html(b);
						}
					});
				}
				else {
					alert("Something went wrong");
				}
			}
		});
	}
	else {
		alert("Invalid Roll Number!!");
		return;
	}
}


