const form =document.getElementById('form');
const firstname = document.getElementById('username');
const lastname = document.getElementById('username2');
const email=document.getElementById('email');
const password = document.getElementById("password");
form.addEventListener('submit' , e=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const firstNameValue = username.value.trim();
    const lastNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
if(firstNameValue ===''){
setErrorFor(username,'please enter your name');
} else{
    setSuccessFor(username)
}
if(lastNameValue ===''){
    setErrorFor(lastname,'please enter your name');
    } else{
        setSuccessFor(lastname)
    }

    if(emailValue ===''){
        setErrorFor(email,'email can not blank');
    }else if (!isEmail(emailValue)){
        setErrorFor(email,'Not Availd Email'); 
    }else{
        setSuccessFor();
    }
    if(passwordValue ===''){
        setErrorFor(password ,'please enter your password');
    } else{
        setSuccessFor(password)
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'input-group error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl  = input.parentElement;
	formControl.className = 'input-group success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}










