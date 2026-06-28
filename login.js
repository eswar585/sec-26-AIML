function login(){

const regNo =
document.getElementById("regNo").value.trim();

const password =
document.getElementById("password").value.trim();

const student =
studentDatabase[regNo];

if(student && student.password === password){

localStorage.setItem(
"loggedInStudent",
regNo
);

window.location.href =
"marks.html";

}
else{

document.getElementById("error").innerText =
"Invalid Registration Number or Password";

}

}
