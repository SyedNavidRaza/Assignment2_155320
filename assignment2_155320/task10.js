var a = "admin123";
b = prompt("User should enter his/her password");
if (b == ""){
    alert("Please enter your password")
}
else if (a == b){
    alert("Correct! The password you entered matches the orignal password")
}
else{
    alert("Incorrect password")
}