document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("<br>");
var totalMarks = prompt("Total marks : ")
var obtainrdMarks = prompt("Marks obtained : ")
var x = ("Total Marks :  ")
var y = ("Marks Obtained : ")
document.write(x + totalMarks)
document.write("<br>");
document.write(y + obtainrdMarks)
document.write("<br>");
var percent = (obtainrdMarks * 100 / totalMarks);
document.write("Percentage : " + percent + "%");
document.write("<br>");
var z = ("Grade : ");
var a = ("Remarks : ");
if(percent >= 80 && percent<= 100){
    document.write(z + "A-one" + "<br>" + a + "Excellent");
}
else if(percent >= 70 && percent< 80){
    document.write(z + "A" +"<br>" + a + "Good")
}
else if(percent >= 60 && percent< 70){
    document.write(z + "B" + "<br>" + a + "You need to improve")
}
else if(percent < 60){
    document.write(z + "Fail" + "<br>" + a + "Sorry")
}