var y = 5;
var x = parseInt(prompt("Guessthe number ?"));
x = parseInt(x)
if (x === y){
    alert("Bingo! Correct answer");
}
else if (++x){
  alert("Close enough to the correct answer")
}

