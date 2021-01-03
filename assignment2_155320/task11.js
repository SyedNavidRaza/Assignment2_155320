time = parseInt(prompt("Take time as input"));
if (time >= 0000 && time < 1200){
    alert("Good Morning!")
}
else if (time >= 1200 && time < 1700){
    alert("Good afternoon")
}
else if (time >= 1700 && time < 2100){
    alert("Good evening")
}
else {
    alert("Good night")
}
