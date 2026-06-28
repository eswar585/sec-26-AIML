const regNo =
localStorage.getItem("loggedInStudent");

if(!regNo){

window.location.href =
"login.html";

}

const student =
studentDatabase[regNo];

document.getElementById(
"studentName"
).innerText =
student.name;

document.getElementById(
"studentReg"
).innerText =
"Registration Number: " + regNo;

const marksTable =
document.getElementById(
"marksTable"
);

for(let subject in student.marks){

marksTable.innerHTML += `
<tr>
<td>${subject}</td>
<td>${student.marks[subject]}</td>
</tr>
`;

}

function logout(){

localStorage.removeItem(
"loggedInStudent"
);

window.location.href =
"login.html";

}
