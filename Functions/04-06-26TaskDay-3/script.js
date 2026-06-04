function validateMobile(){

let mobile=document.getElementById("mobile").value

// let mobilePattern=/^[0-9]{10}$/

// if(mobilePattern.test(mobile)){
// document.getElementById("output").innerHTML=
// "Valid Mobile Number"
// }
// else{
// document.getElementById("output").innerHTML=
// "Enter exactly 10 digits"
// }
if(mobile.length===10 && !isNaN(mobile)){
    document.getElementById('output').textContent = 'Valid phone Number'
    document.getElementById('output').style.color = 'blue'
}
else{
    document.getElementById('output').textContent = 'Not a valid phone Number'
    document.getElementById('output').style.color = 'red'
}

}