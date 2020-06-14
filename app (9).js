
//==========================
document.write("<hr>");


document.write("<hr>");


document.write(" 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)." + "<br><br>");

// var char = prompt("Enter the character to check: ");
// var value = char.charCodeAt(0);

// //checking uppercase
// if(value >= 65 && value <= 90 ){
//     document.write(char+" is a Uppercase ");    
// } 
// //checking lowercase
// else if(value >= 97 && value <= 122 ){
//     document.write(char +" is a lowercase ");    
// }
// //checking for number
// else if(value){
//     document.write(char +" is a number ");    
// }

document.write("<hr>");


document.write("<hr>");


document.write(" 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal." + "<br><br>");

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// if(num1 == num2){
//     document.write("Both are equal");
// }else if(num1 >= num2)
// {
//      document.write("This is number larger " + num1);
// }
// else if(num2 >= num1)
// {
//     document.write("This is number larger " + num2);
// }

document.write("<hr>");


document.write("3. Write a program that takes input a number from user & state whether the number is positive, negative or zero." + "<br><br>");

// var user = +prompt("Enter number: ");

// if (user > 0){
//         document.write(user + " is positive ");
// }else if(user < 0){
//     document.write( user+ " is negative ");
// }else if(user == 0){
//     document.write(user + " zero " , );
// }
document.write("<hr>");


document.write("4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise" + "<br><br>");



// var checkVowel = function(isVowel) {

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

document.write("<hr>");



document.write("<hr>");


document.write("6. This if/else statement does not work. Try to fix it:" + "<br><br>");

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