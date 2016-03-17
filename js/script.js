
function validate(){
	var myName = document.forms["sign-up-form"]["fullName"].value;
	if(myForm == null || myForm == ""){
		alert("Please fill out your full name.");
		return false;
	}
} 

function validateName(){
	var myName = document.form["sign-up-form"]["fullName"].value;
	if(myName == null || myName == ""){
		alert("Please enter your full name.");
		return false;
	}
}

function validateAddress(){
	var myAdd = document.form["sign-up-form"]["address1"].value;
	if(myAdd == null || myAdd == ""){
		alert("Please enter your address.");
		return false;
	}
}

function validateEmail(inputText){ 
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(inputText.value.match(mailformat)){ 
		document.form1.text1.focus();  
		return true;  
	}else{  
		alert("You have entered an invalid email address!");  
		document.form1.text1.focus();  
		return false;  
	}  
}  

function validatePhoneNumber(inputText){  
	var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
  	if((inputText.value.match(phoneNumber)){  
      return true;  
    }else{  
        alert("Please enter your phone number.");  
        return false;  
    }  
}  

function checkPassword(inputText){   
	var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;  
	if(inputText.value.match(password)){     
		return true;  
	}else{   
		alert("Your password must be at least 8 characters long and contain one uppercase letter and one number.")  
		return false;  
	}  
}  

function confirmPassword(){
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("confirmPassword").value;
    if (password1 != password2) {
        alert("Passwords Do not match");
        return false;
    }else{
       return true;
    }
}

function validateSkills(){
    var listid = document.getElementById("listid");
    if (listid.value == "") {
        alert("Please select an option!");
        return false;
    }else{
        return true;
    }
}

function validateAge(){
    var age = document.getElementById("age").value;
	if(isNaN(age) || age <= 0 || age > 150 || age.indexOf(".") >= 0){
        alert("Please enter your age.");
        return false;
    }else{
		return true;
  	}
}






// $(document).ready(function(){
//     $("input[type=submit]").click(function(){
//         $("input:text").val("fullName");
//     });
//     // alert("Please enter your full name.");
// });






// $(document).ready(function() {
//       $("#sign-up-form").validate({
//         messages: {

//             fullname: "Please enter your fullname",
//             password: {
//                 required: "Please enter a password",
//                 minlength: "Your password must consist of at least 8 characters",
//                 uppercase: "Your password must contain at least one uppercase letter",
//                 minnumber: "Your pasword must contain at least one number"
//             },

//             email: "Please enter a valid email address",
//             address:  "Please enter your address",
//             phonenumber:  "Please enter your phonenumber",
//             skill:  "Please select a skill",
//             age:  "Please enter your age",
//             birthday:  "Please enter your birthday"

//         },
//         rules: {
//           fullname: "required",
//           password: "required", 
//           email: "required",
//           address: "required",
//           phonenumber: "required",
//           skill: "required",
//           age: "required",
//           birthday: "required",
//           required: true,
//           passwd: true,
//           email: true,
//         },
      

//     });
// });