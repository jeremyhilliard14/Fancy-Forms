
function validate(){
	var myForm = document.forms["sign-up-form"]["fullName"].value;
	if(myForm == null || myForm == ""){
		alert("Please fill out your full name.");
		return false;
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