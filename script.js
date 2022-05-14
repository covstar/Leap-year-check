function check(){
    // variable declaration
    var year = document.getElementById('year').value;
    if (year == "") {
        return false;
    }
    // conditional statement to check if a year is leap or not
    if (year % 4 == 0 || year % 400 == 0 && year % 100 !==0)     {
        document.getElementById('result').innerHTML = "A Leap Year";
    }
     else {
        document.getElementById('result').innerHTML =  "Not A Leap Year";
    }
}