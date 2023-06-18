let studentMarks = 10;

if (studentMarks >= 79 && studentMarks <= 100){
    console.log ("Your score is A")
}
 else if (studentMarks > 60 && studentMarks<= 79){
    console.log("Your score is B")
 }
 else if(studentMarks > 49 && studentMarks <= 59){
    console.log("Your score is C")
 }
 else if(studentMarks > 40 && studentMarks <= 49){
    console.log("Your score is D")
 }
 else if(studentMarks > 0 && studentMarks <= 40){
    console.log("Your score E")
 }
 else{
    console.log("Invalid")
 }