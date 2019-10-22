var userName= window.prompt("Please enter your name:");

var greetingParagraph=document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName

var num1=parseInt(window.prompt("Enter a number:"));
var num2=parseInt(window.prompt("Enter another number:"));
var operand1=document.getElementById("operand1");
var operand2=document.getElementById("operand2");
operand1.innerHTML += " " + num1
operand2.innerHTML += " " + num2

var sum=num1+num2;
var difference=num1-num2;
var product=num1*num2;
var quotient=num1/num2;
var modResult=num1%num2;
var myElement=document.getElementById("addition").innerHTML="The sum of "+num1+" and "+num2+" is "+ sum;
var myElement=document.getElementById("subtration").innerHTML="The difference between "+num1+" and "+num2+" is "+difference
var myElement=document.getElementById("multiplication").innerHTML="The product of "+num1+" and "+num2+" is "+product
var myElement=document.getElementById("division").innerHTML="The quotient of "+num1+" and "+num2+" is "+quotient
var myElement=document.getElementById("modulus").innerHTML="The result of the mod operation on "+num1+" and "+num2+" is "+modResult
