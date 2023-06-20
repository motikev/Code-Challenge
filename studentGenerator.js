let studentMarks = prompt("enter your marks")


if (studentMarks >= 79 && studentMarks <= 100){
    alert ("Your score is A")
}
 else if (studentMarks >= 60 && studentMarks< 79){
    alert ("Your score is B")
 }
 else if(studentMarks >= 49 && studentMarks <= 59){
    alert ("Your score is C")
 }
 else if(studentMarks > 40 && studentMarks < 49){
    alert("Your score is D")
 }
 else if(studentMarks >= 0 && studentMarks <= 40){
    alert("Your score E")
 }
 else{
    alert("Invalid")
 }