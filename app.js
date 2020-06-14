// Chapter No 01 <Alert>

//  Q no : 01
alert("welcome to our website");

// Q no : 02

var user = prompt("Enter your password");
   if(user === null){
    alert("Enter! please enter a valid password. ");
   }else {
       alert("Thank you and welcome");
   }

//    Q no : 03
 alert("Welcome to JS land \n Happy coding");

//  Q no : 04
alert("Welcome to JS land.");
alert( "Happy Coding!");

//  Q no : 05
var msg = alert("Hello.. I can run JS through my web browser's console.");
console.log(msg);

//  Q no : 06
// alert(a);

//  END OF CHAPTER NO 1  
//  *******************








// Chapter no 02 <Varaible For Strings>
// Q no :01 
var username = "Ahsan";

// Q no :02
var myName = "AHSAN KHAN";

// Q no :03
var titleMesaage = "Hello World";
alert(titleMesaage);

// Q no :04

var BD = [
    name = "Ahsan khan",
    age = 22,
    Course = "WEB AND MOBILE APP Development"

]

for (i = 0; i < BD; i++) {
    document.write(BD);
}

alert(name);
alert(age);
alert(Course);


// Q no : 05
var NewAlert = "PIZZA";


for (var i = 0; i < 5; i++) {

    alert(NewAlert[i]);
}


// Q no :06
var email = "aukhan756@gmail.com";

alert(" Email address is : " + email);

// Q no :07
var BOOK = "A smarter way to learn JavaScript";
alert(BOOK);

// Q no :08
document.write("Yah! I can write HTML content through JavaScript");

// Q no :09
var showPic = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(showPic);

//  END OF CHAPTER NO 02  
//  *******************

// Chapter no 03 < VARIABLES FOR NUMBERS >

// Q no 01
var age = 22;
// alert(" I am "+age + " years old.");

// Q no 02

// Q no 03
var DOB = 1998;
// document.write("My birth year is: " + DOB);
// document.write("<br>"+  " Data type of my declared variable is: "+typeof(birthYear));

// Q no 04
var visiterName = ' Ahsan Khan ';
var productTitle = ' Samsung ';
var quantity = 5;
var mobileCenterName = ' www.samsung.com ';

document.write(visiterName + " ordered " +  productTitle + quantity +" on " + mobileCenterName + 'mobile center.');


 //  END OF CHAPTER NO 03  
//  *******************

// Chapter no 04<VARIABLE NAMES: LEGAL & ILLEGAL>

//Q no 1
var a,b,c;

//Q no 02
var Ahsan;
var Rollno;
var Id;
var Id_number
var $Fifty 

// legal variables
// var 13;
// var -Ahsan;
// var "Id123";
// var 1234
// var a h s a n;

// Q no 03
//<a>
document.write("Rules for naming JS variables."+"<br><br>");
//<b>
document.write( " Variable names can only contain, numbers, $ , and _. For example: $my_1stVariable." +"<br>");
//<c>
document.write( "Variables must begin with a letter, $ or _. For example $name, _name or name." +"<br>");


// <d>
document.write( "Variable names are case sensitive." +"<br>");

// <e>

document.write("Variable names should not be JS keywords.");

//  END OF CHAPTER NO 04  
//  *******************

// Chapter no 05<MATH EXPRESSIONS>

// Q no 01

var a = 3;
var b = 8;
var c = a + b;
document.write(" Sum of 3 and 5 is: " + c + "<br><br>");

// Q no 02
// SUB
var c = a - b;
document.write(" Substraction  of 3 and 5 is: " + c + "<br>");

// MULT
var c = a * b;
document.write(" Multiplication  of 3 and 5 is: " + c + "<br>");

// DIV
var c = a / b;
document.write(" Division  of 3 and 5 is: " + c + "<br>");

// MOD
var c = a % b;
document.write(" Modulus of 3 and 5 is: " + c + "<br> <br>");

// Q no 3
// a. Declare a variable.
var test;

// b. Show the value of variable in your browser like “Value  after variable declaration is: ??”.
document.write("a & b. Value  after variable declaration is: " + test + "<br>");

// c. Initialize the variable with some number.
var num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("c & d. Initial value: " + num + "<br>");

// e. Increment the variable.
var num = ++num;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("e & f. Value after increment is " + num + "<br>");

// g. Add 7 to the variable after addition is: 13”.
num += 7;
document.write("g & h. Value after additon is: " + num + "<br>");

// i. Decrement the variable.
var num = --num;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("i & j. Value after additon is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var num = num % 3;

// l. Output : “The remainder is : 0”.
document.write("k & l. The remainder is : " + num + "<br><br>");

// Q no 04
var costOfTicket = 6000;
var totalCost = costOfTicket * 5;

document.write("Total cost to buy 5 ticket to a movie is: " + totalCost + "PKR");

// Q no 05
//var table = +prompt("ENTER TABLE : ");

// for (var i = 1; i <= 10; i++ ){
//     document.write(+ table + "x" + i + "="+ table*i+ "<br>");
// }

// Q no 05
// a. Store a Celsius temperature into a variable.
var CelTemp = 25;
var CelToF = (CelTemp * 9 / 5) + 32;


// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
document.write("a. 25  &#176C is: " + CelToF + " &#176f" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.
var FTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var FToCel = ((FTemp - 32) * 5 / 9);
document.write("c&d. 70  &#176F is: " + FToCel + " &#176C");

// Q no 07
document.write(" 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable." + "<br><br>");

document.write("<br>" + "<b>" + " Shopping Cart" + "</b>" + "<br><br>");
// a. Price of item 1
var priceOfItem1 = 650;

// b. Price of item 2
var priceOfItem2 = 100;

// c. Ordered quantity of item 1
var OrderQuantity1 = 3;

// d. Ordered Quantity of item 2
var OrderQuantity2 = 7;

// e. Shipping charges
var ShippingCharges = 100;

// Q no 8 
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained * 100) / totalMarks;

document.write("Total Marks: " + totalMarks + "<br>")
document.write("Obtained Marks: " + marksObtained + "<br>")
document.write("Percentage: " + percentage + "%")

// Q no 09
var dollar = 104.80;
var dollars = 10;
var saudiRiyal = 28;
var saudiRiyals = 25;

totalUsDollars = dollar * dollars;
totalSaudiyals = saudiRiyal * saudiRiyals;

totalCurrrency = totalUsDollars + totalSaudiyals;


document.write("<br>" + "<b>" + " Currency in PKR" + "</b>" + "<br><br>");

document.write("Total Currency is PKR: " + totalCurrrency);

// Q no 10
var num1 = 20;
//  a. Add 5
//  b. Multiply by 10
//  c. Divide the result by 2
//  Perform all calculations in a single expression

num1 = num1 + 5 * 10 / 2;
document.write("Total sum of expression is: " + num1);

// Q no 11
// a. Store the current year in a variable.
var currentYear = 2020;

// b. Store their birth year in a variable.
var birthYear = 1996

// c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NNyears old”.
age = currentYear - birthYear;

document.write("Current year is: " + currentYear + "<br>");
document.write("birth year is: " + birthYear + "<br>");
document.write("Your Age is: " + age);

document.write("<hr>");

//=====================
document.write("12. The Geometrizer: Calculate properties of a circle. " + "<br><br>");

document.write("<br>" + "<b>" + "The Geometrizer " + "</b>" + "<br><br>");

// a. Store a radius into a variable
var radius = r;
var π = 3.142;
var r = 20;
var circumference = 2 * π * r;
var area = π * (r * r);

// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



document.write("The radius of circle is: " + r + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

// End of Chapter 05
//*****************/

// Chapter 06

// Q no 1
var a = 10;
document.write("Result" + "<br>");
document.write("The value of a is: " + a + "<br>");

document.write("........................." + "<br><br>");

a = ++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now value of a is: " + a + "<br><br>");
a = 11;
document.write("The value of a++ is:" + a + "<br>");


a + a++;
document.write("Now value of a is: " + a + "<br><br>");

//......
a = 11
document.write("The value of --a is: " + a + "<br>");


a = --a;
document.write("Now value of a is: " + a + "<br><br>");

//....
a = 11;
document.write("The value of a-- is: " + a + "<br>");


a = a--;
document.write("Now value of a is: " + a + "<br><br>");

// Q no 02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("resutl is " + result + "<br><br>");

// --a;
var result = --a;
document.write("resutl is  " + result + " --a of a Prefix Decrement " + "<br>");

// --a - --b
var result = --a - --b;
document.write("resutl is  " + result + " --a - --b of a and b Prefix Decrement  " + "<br>");

var result = --a - --b + ++b + b--;
document.write("resutl is  " + result + "  of  --a - --b + ++b + b-- a and  b Prefix Decrement and Prefix Inrement and Post Decrement of b" + "<br>");

// Q no 03
 var nameOfuser = prompt("Enter your name: ");
// alert("Welcome to my JS world"+nameOfuser);

//==========end
document.write("<hr>");


document.write("5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default " + "<br><br>");


var table = +prompt("Enter table value: ");
table =5

if (table == " "){
    table;
}else{
    for (var i = 1; i <= 10; i++ ){
        document.write(+ table + "x" + i + "="+ table*i+ "<br>");
    }

}

// Q no 
document.write(" 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”" + "<br><br>");


var user2 = prompt("Enter city: ");

if (user2) {
    user2 == karachi;
    alert("Welcome to city of lights");
} else {
    alert("Welcome");
}

//================


document.write(" 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am." + "<br><br>");

var gender = prompt("Enter your gender: ")

if(gender == female){
    console.log("Good Morning Sir.")
}else{
    console.log("Good Morning Ma'am.")
}
 // End of Chapter
 //****************/

// Chapter no 7
// Q :
document.write("<table>");
document.write("<tr>");
document.write("<th>" + " " + "Single color" + " " + "</th>");
document.write("<th>" + " " + "Message" + " " + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Red" + " " + "</th>");
document.write("<td>" + " " + "Must stop" + " " + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Yellow" + " " + "</th>");
document.write("<td>" + " " + "Read to move" + " " + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + " " + "Green" + " " + "</th>");
document.write("<td>" + " " + "Move on" + " " + "</td>");
document.write("</tr>");

document.write("<table>");

// Q
var fuel = +prompt("Enter you fuel: ");

if (fuel == 0.25) {
    document.write("Please refill the fuel in your car")
} else {
    document.write(" Move your car")
}
// Q
a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
};

document.write("a. alert is running"+"<br>");

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

document.write("b. alert is not running"+"<br>");


//c 

 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

document.write("c. There are two alert box first is" + "<br>" + "condition 2 is true"+"<br>"+ "condition 4 is true" + "<br>");

// d
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

document.write("d. alert is running"+"<br>");


//e

 if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }


    document.write("e. alert is running"+"<br>"+"true"+"<br>");
document.write("<hr>");


document.write("<hr>");

//Q :
document.write("Mark Sheet"+"<br><br>");

var sub1 =+prompt( "Enter your first subject marks:");
var sub2 = +prompt("Enter your second subject marks: ");
var sub3 = +prompt("Enter your third subject marks: ");
var totalMarks = +prompt( "Enter you total marks:");
var obMarks = (sub1+sub2+sub3);
percentage = ((obMarks * 100)/ totalMarks);
var grade;
var remarks;

conditions
if(percentage >= 80){
     grade = 'A-one';
     remarks = 'excellent';
}else if(percentage >= 70){ 

     grade = 'A';
     remarks = 'Good';
}else if(percentage >= 60){ 

    grade = 'B';
    remarks = 'you need to improve';
}
else if (percentage < 60){ 

    grade = 'Fail';
    remarks = 'Sorry';
}


document.write("Total Marks: "+totalMarks+"<br>");
document.write("Obtained Marks: "+obMarks+"<br>");
document.write("Percentage:  "+percentage+"%"+"<br>");
document.write("Grade: "+grade+"<br>");
document.write("Remarks: "+remarks+"<br>");


document.write("<hr>");
document.write("<hr>");

//Q :
 var user = prompt("Enter your value");
var userValue =  user % 3 == 0;
if (userValue){
    document.write("the number is divisible by 3"+"<br><br>");
}else {
    document.write("Sorry pick another value"+"<br><br>");
}

//Q :
// var temp1 = prompt("Enter temperature: ");

// if(temp1 > 40){
//     document.write("It is too hot outside.");
// }else if (temp1 > 30){
//     document.write("The Weather today is Normal.");
// }else if (temp1 > 20){
//     document.write("Today’s Weather is cool.");
// }else if (temp1 > 10){
//     document.write("OMG! Today’s weather is so Cool");
// }







document.write("<hr>");

//===============
document.write("11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: " + "<br><br><br>");


var num1 = +prompt("Enter first number: ");
var op = prompt("Enter operator number: ");
var num2 = +prompt("Enter second number: ");


if (op == '+'){
 document.write("Addition:  " ,num1 + num2) ;
}else if(op == '-'){
    document.write("Substraction:  ",num1 - num2) ;
}else if(op == '*'){
    document.write("Multiplication:  ",num1 * num2) ;
}else if(op == '/'){
    document.write("Division:  ",num1 / num2) ;
}else if(op == '/'){
    document.write("Modulus:  ",num1 % num2) ;
}

// End Of Chapter 
//************** */

// Chapter no 

//Q 
var checkVowel = function(isVowel) {

    //     var vowels = ["a", "e", "i", "o", "u"];
    
    //     for(var i = 0; i < vowels.length; i++){ 
    //         if(isVowel === vowels[i]){
    //             return true;
    //          }
    //     }
    
    //     return false;
    
    // };
    
    // var char = prompt("Enter character:");
    // char.length = 1;
    // if (checkVowel(char)){
    // 	document.write(char + " is a vowel");
    // } else {
    // 	document.write(char + " is not a vowel");
    // }
    
     document.write("<hr>");
    
    
    document.write("<hr>");
    
    
    document.write("5. Write a program that" + "<br><br>");
    
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
    // i. Check if user has entered password. If not, then give message “ Please enter your password” 
    // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
    
    
    // var userPassword = "mera password"; //user password
    
    // var user = prompt("Enter your password"); // input from user
    
    
    // if(user === ''){
    //     alert("Please enter your password");  // if empty
    // }
    // // if match password
    // else if(user === userPassword){
    //     alert("Correct! The password you entered matches the original password"); 
    // }
    // //if not match
    // else if (user !== userPassword){
    //     alert("Incorrect password");
    // }

    //Q
    var greeting;
var hour = 13;

if (hour < 18){
greeting = "Good day";}
else{
greeting = "Good evening";
}

document.write(greeting);



document.write("<hr>");

document.write("7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements" + "<br><br>");

var hours =+prompt("Enter hours");
// user.length = 24;



if( hours >= 0000 && hours < 1200){
    document.write("Good morning");
}else if( hours >= 1200 && hours < 1700){
    document.write("Good Afternoon");
}else if( hours >= 2100 && hours <= 2359){
    document.write("Good Good night");
}

// End Chapter
//************** */

// New Chapter

var char = prompt("Enter the character to check: ");
var value = char.charCodeAt(0);

//checking uppercase
if(value >= 65 && value <= 90 ){
    document.write(char+" is a Uppercase ");    
} 
//checking lowercase
else if(value >= 97 && value <= 122 ){
    document.write(char +" is a lowercase ");    
}
//checking for number
else if(value){
    document.write(char +" is a number ");    
}

document.write("<hr>");


document.write("<hr>");


document.write(" 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal." + "<br><br>");

// var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

if(num1 == num2){
    document.write("Both are equal");
}else if(num1 >= num2)
{
     document.write("This is number larger " + num1);
}
else if(num2 >= num1)
{
    document.write("This is number larger " + num2);
}

document.write("<hr>");


document.write("3. Write a program that takes input a number from user & state whether the number is positive, negative or zero." + "<br><br>");

var user = +prompt("Enter number: ");

if (user > 0){
        document.write(user + " is positive ");
}else if(user < 0){
    document.write( user+ " is negative ");
}else if(user == 0){
    document.write(user + " zero " , );
}
//Q :
 var checkVowel = function(isVowel) {

    // //     var vowels = ["a", "e", "i", "o", "u"];
    
    // //     for(var i = 0; i < vowels.length; i++){ 
    // //         if(isVowel === vowels[i]){
    // //             return true;
    // //          }
    //     }
    
        return false;
    
    };
    
    var char = prompt("Enter character:");
    char.length = 1;
    if (checkVowel(char)){
    	document.write(char + " is a vowel");
    } else {
    	document.write(char + " is not a vowel");
    }
    
     document.write("<hr>");

//********************** */

//New Chapter
var stdNames = [];

document.write(" 2. Declare an empty array using JS object notation to store student names in future.." + "<br><br>");

var allStdNames = new Array();

var stringArray = [
    
    name = ' Govind Rai ',
    status = ' Application developer '

];

document.write("This is string array " +"<br>"+ stringArray+ "<br><br>"+ "<br><br>");
