// chapter# 5
// Question 1
var num = ("a + b")
let a = 5
let b = 3
var Add = a + b
console.log(Add)

// Question 2
var Sub = a - b
console.log(Sub)


// Multiply
var Multiply = a * b
console.log(Multiply)

// Division
var Division = a / b
console.log(Division)

// Modulus
var modulus = a % b
console.log(modulus)

// Question 3

// undefined
var undefined = 34;
console.log(undefined)

// Initial
var Initial = a;
console.log(Initial)

// increment
var increment = a;
console.log(++a);

// Addition 7 in initial number
console.log(a + 7);

// Decrement
var decrement = a + 7;
console.log(--decrement)

// Remainder dividing by 3
var remainderDividing = decrement;
console.log(remainderDividing / 4)

//  output value 
var remainder = 3;
console.log(remainder - 3)


// Question 4

var price = 600;
var tickets = 5;
console.log(price * tickets)


// Question 6

var cal = 90;
var fah = 50;

var c = (fah - 32) * 5 / 9;
console.log(c)

var f = (cal * 9 / 5) + 32;
console.log(f)

// Question # 7

// price of item 1 
var price1 = 650;
console.log(price1);
// // price of item 1
var price2 = 100;
console.log(price2);
// quantity of item 1
var quantity1 = 3
console.log(quantity1);

// quantity of item 2
var quantity2 = 7;
console.log(quantity2)

// Delivery charges
var deliver = 100;
console.log(deliver)
// totalCost your delivery
var totalCost = (price1 * quantity1) + (price2 * quantity2) + deliver;
console.log(totalCost);
document.write("<h1>Shopping Cart </h1>  " + "<br>")
document.write("Price of item 1  is " + price1 + '<br>')
document.write("Quantity of item 1 is " + quantity1 + '<br>')
document.write("Price of item 2  is " + price2 + '<br>')
document.write("Quantity of item 2 is " + quantity2 + '<br>')
document.write("Delivery charges is " + deliver + '<br>' + '<br>')
document.write("Total cost of your order is " + totalCost + '<br>' + '<br>')

// Question  8

// var totalMarks = +prompt('Enter Your Total Marks');

// var obtainedMarks = +prompt("Enter Your Obtained Marks");

// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade = ""

// alert ("your percentage is " + "\n" + percentage )
// document.write("<h1>MarkSheet</h1>" + "<br>" + "<br>")

// document.write('Total Marks :' + " "+ totalMarks + "<br>");

// document.write("Marks obtained :" + " " + obtainedMarks+ "<br>");

// document.write("Percentage :" + " " + percentage + "%" + "<br>");


// if (percentage <= 40){
//    grade = "Failed"
// }else if(percentage <= 50){
//    grade = "D"
// }else if(percentage <= 60 ){
//    grade = "C"
// }else if(percentage <= 70){
//    grade = "B"
// }else if(percentage <= 80){
//    grade = "A"
// }else if(percentage <= 100){
//    grade = "A+"
// };

// document.write("Grade :" +" " + grade + "<br>");

// // Question # 9

// var usDoller = 104.80;

// var riyal = 28;

// var totalPKR = ((usDoller * 10) + (riyal * 25));

// console.log(totalPKR);

// document.write("<h1>Currency in PKR</h1>" + " <br>");
// document.write("Total currency in <b>PKR</b> is 1748" + " <br>")

// // Question # 10

// var anyNum = 6;

// var arithmeticMean = (((anyNum + 5) * 10) / 2);

// console.log(arithmeticMean);

// // Question # 11

// var currentYear = + prompt ("Enter Current Year ");
// var birthYear = + prompt("Enter your Birth Year");

// var age = (currentYear - birthYear);
// alert("your Age is " + "\n" + age)
// console.log(age);

// document.write("<h1>Age Calculator</h1>" + "<br>");
// document.write("Current Year  " +  currentYear + "<br>")
// document.write("Birth Year" + birthYear  + "<br>")
// document.write("Your Age is " + age + "<br>")

// // Question # 11

// var radius = +prompt(" Enter Radius of circle");

// var circumference = (2 * (3.142) * radius);

// var area = ( 3.142  * radius * radius )

// console.log(circumference);
// console.log(area);


// document.write("<h1>The Geometrizer</h1>" + "<br>");
// document.write("Radius of circle : " + radius + "<br>")
// document.write("The circumference is  : " + circumference + "<br>")
// document.write("The circumference is  : " +  area + "<br>")


// Question # 12

let snack = "Lays";
let currentAge = 19;
let expectAge = 60;

let amount = 3;

var youNeed = ((expectAge - currentAge) * amount);
console.log(youNeed);


document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>");
document.write("Favourite Snack :" + snack + "<br>")
document.write("Currant Age  :" + currentAge+ "<br>");
document.write("Expected Age  :" + expectAge+ "<br>");
document.write("Amount of Snacks per days :" + amount+ "<br>");
document.write("You will need " +  youNeed  + snack +  "to last you until tne ripe old age of " + expectAge + " <br>"  + " <br>");

// chapter # 6

// Question # 2
var mynum = 10 ;
console.log(mynum);

console.log(++mynum);
console.log(mynum);

console.log(mynum++);
console.log(mynum);

console.log(--mynum);
console.log(mynum);

console.log(mynum--);
console.log(mynum);


document.write("<h1>Chapter # 02 </h1>" + "<br>" + "<br>")
document.write("<h2>Question # 01 </h2>" + "<br>" + "<br>")
document.write("<h1>Result: </h1>" + "<br>" + "<br>")
document.write("The Value of a is :" + 10 + "<br>" )

document.write("..............................."  + "<br>" + "<br>" )

document.write("The Value of ++a is :" + 11 + "<br>" )
document.write("Now the Value of a is :" + 11 + "<br>" + "<br>" )
document.write("The Value of a++ is :" + 11 + "<br>" )
document.write("Now the Value of a is :" + 12 + "<br>" + "<br>" )
document.write("The Value of --a is :" + 11 + "<br>" )
document.write("Now the Value of a is :" + 11 + "<br>"+ "<br>"  )
document.write("Now the Value of a-- is :" + 11 + "<br>")
document.write("Now the Value of a is :" + 10 + "<br>"+ "<br>"  )

// Question # 2
var t = 2 , y =  3;
console.log (t);
console.log (--t);
console.log (--t - --y);
console.log (--t - --y+ ++y) ;
var result = (--t - --y+ ++y +y--)
console.log(result);

document.write("<h2>Question # 02 </h2>" + "<br>" + "<br>")

document.write("value of a is " +  2 + "<br>" )
document.write("value of b is " +  3 + "<br>" )
document.write("Result is " + 1 + "<br>" + "<br>")

// Question # 5 
// var numOne = +prompt( "Enter First Number", 5 )
// var numTwo = +prompt("Enter second Number", 4)
// var operator = prompt("Enter a operator")

// if ( operator=== "+") {
//     alert("sum of " + numOne +  " and "   +  numTwo  + " is " + (numOne + numTwo))
//     console.log("sum of " + numOne +  " and "   +  numTwo  + " is " + (numOne + numTwo))

// }else if (  operator=== "-"){
//     alert("sub of " + numOne +  " and "   +  numTwo  + " is " + (numOne - numTwo))
//     console.log("sub of " + numOne +  " and "   +  numTwo  + " is " + (numOne - numTwo))

// }
// else if (  operator=== "*"){
//     alert("Multiple of " + numOne +  " and "   +  numTwo  + " is " + (numOne * numTwo))
//     console.log("Multiple of " + numOne +  " and "   +  numTwo  + " is " + (numOne * numTwo))

// }
// else if (  operator=== "/"){
//     alert("Division  of " + numOne +  " and "   +  numTwo  + " is " + (numOne / numTwo))
//     console.log("Division  of " + numOne +  " and "   +  numTwo  + " is " + (numOne / numTwo))

// }
// else{
//     alert("Invalid Operator")
// // }
// document.write("<h2>Question # 5 </h2>" + "<br>" + "<br>")
// document.write( "Multiplacation of " + numOne +  " and " + numTwo  + " is " + (numOne *  numTwo))


// Question # 6 
var subNameOne = "English"
var subNametwo = "Urdu"
var subNamethree = "Math"
var Eng = prompt("Enter your English Marks " + "\n " + " Out Of 100")
var Urdu  = prompt("Enter your Urdu  Marks " + " \n " + " Out Of 100 ")
var Math = prompt("Enter your Math Marks " + " \n "+ "Out Of 100 ")

var outOf = 100;
var per1 = (Eng / outOf ) * 100;
var per2 = (Urdu / outOf ) * 100;
var per3= (Math / outOf ) * 100;


var sumOfnum = +Eng+ + Urdu + +Math ;
console.log(sumOfnum);
var percent = ( sumOfnum  / 300) * 100 ;
console.log(percent);


document.write("<h2>Question # 6 </h2>" + "<br>" + "<br>")
document.write("Subject"+  "" + " Total " + " Obtained " + "  Percentage " + "<br>" )
document.write(subNameOne   + " " +   100 + " " + Eng + " " + per1+"%" + " <br>")
document.write(subNametwo   + " " + 100 + " " + Urdu + " " + per2+"%" + " <br>")
document.write(subNamethree  + " " + 100 + " " + Math + " " + per3+"%" + " <br>" + " <br>")
document.write("300" + " " + sumOfnum + " " + percent+"%")

// Question # 03

var gj = 'hjjjjjjjjjjjj' ;
