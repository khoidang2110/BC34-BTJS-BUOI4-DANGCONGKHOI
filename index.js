



//Bai tap 1:
document.getElementById("arrange").onclick = function (){
 //input:
  var num1 = document.getElementById("num1").value*1;
  var num2 = document.getElementById("num2").value*1;
  var num3 = document.getElementById("num3").value*1;
  //process:
  var pos1=0;
  var pos2=0;
  var pos3=0;

  if(num1>num2&&num1>num3&&num2>num3){
  pos1=num3;
  pos2=num2;
  pos3=num1;
  }else if(num1>num2&&num1>num3&&num2<num3){
    pos1=num2;
    pos2=num3;
    pos3=num1;
  }else if(num1>num2&&num1<num3){
    pos2=num1;
    pos3=num3;
    pos1=num2;
  }else if(num1<num2&&num1<num3&&num2<num3){
    pos1=num1;
    pos2=num2;
    pos3=num3;
  }else if(num2>num1&&num2>num3&&num1>num3){
 pos3=num2;
 pos2=num1;
 pos1=num3;
  }else{
    pos1=num1;
    pos2=num3;
    pos3=num2;
  }
//output:
var result = "<p> Số thứ tự tăng dần: " + pos1 + "<" + pos2 + "<" + pos3 +"</p>";
document.getElementById("showArrange").innerHTML = result;
  }

//Bai tap 2:
document.getElementById("sayWelcome").onclick = function () {
  //input:
  var family = document.getElementById("family").value;
  //process:
  var famSelect="";
  if(family=="dad"){
    famSelect = "Bố";
  }else if(family=="mom"){
    famSelect = "Mẹ";
  }else if(family=="brother"){
    famSelect = "Anh trai";
  }else{
    famSelect = "Em gái";
  }
  //output:
  document.getElementById("welcome").innerHTML = "<p>Chào " +famSelect;
};
//Bai tap 3:
document.getElementById("count").onclick = function(){
  //input:
  var numb1 = document.getElementById("numb1").value*1;
  var numb2 = document.getElementById("numb2").value*1;
  var numb3 = document.getElementById("numb3").value*1;
  //process:
  var even = 0;
  var odd = 0;

if(numb1 % 2 > 0 && numb2%2>0&&numb3%2>0 ){
  odd=3;
  even=0;
}else if((numb1%2>0&&numb2%2>0&&numb3%2<=0)||(numb1%2>0&&numb2%2<=0&&numb3%2>0)||(numb1%2<=0&&numb2%2>0&&numb3%2>0)){
  odd=2;
  even=1;
}else if ((numb1%2>0&&numb2%2<=0&&numb3%2<=0)||(numb1%2<=0&&numb2%2>0&&numb3%2<=0)||(numb1%2<=0&&numb2%2<=0&&numb3%2>0)){
  odd=1;
  even=2;
}else{
  odd=0;
  even=3;
}


//output:
  var result = "<p> Có "+even+" số chẵn "+ odd +" số lẻ</p>";
  
document.getElementById("showCount").innerHTML = result;
}


//Bài tập 4
document.getElementById("guess").onclick = function(){
  //input
  var length1 = document.getElementById("length1").value*1;
  var length2 = document.getElementById("length2").value*1;
  var length3 = document.getElementById("length3").value*1;

  //process
  var square ="tam giác vuông";
  var even ="tam giác đều";
  var balance ="tam giác cân";
  var other = "tam giác khác";
  var type="";
  if((length1==length2)&&(length1==length3)){
  type=even;
  }else if((length1==length2&&length1!==length3)||(length1==length3&&length1!==length2)||(length2==length3&&length2!==length1)){
    type=balance;
  }else if((length1%3==0&&length2%4==0&&length3%5==0)||(length1%3==0&&length2%5==0&&length3%4==0)||(length1%4==0&&length2%3==0&&length3%5==0)||(length1%4==0&&length2%3==0&&length3%5==0)||(length1%4==0&&length2%5==0&&length3%3==0)||(length1%5==0&&length2%4==0&&length3%3==0)){
type=square;
  }else {
    type=other;
  }
  //output

  document.getElementById("showType").innerHTML ="Đây là " + type;
}