function validate(){
	var myForm = document.forms["sign-up-form"]["fullName"].value;
	if(myForm == null || myForm == ""){
		alert("Please fill out your full name.");
	}
}