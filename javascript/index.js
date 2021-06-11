var day;
var time=new Date().getHours();
var greeting;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

if(time < 12){
    greeting='Good morning';
}
else if (time >12 && time<16){
    greeting='Good afternoon';
}
else if (time >16 && time<18){
    greeting='Good Evening';
}
else{
    greeting='Good Night';
}
document.getElementById('greeting').innerHTML=greeting;