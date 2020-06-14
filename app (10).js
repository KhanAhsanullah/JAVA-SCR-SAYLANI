
//==========================
document.write("<hr>");


document.write("<hr>");


document.write(" 1. Declare an empty array using JS literal notation to storestudent names in future.." + "<br><br>");

var stdNames = [];

document.write(" 2. Declare an empty array using JS object notation to store student names in future.." + "<br><br>");

var allStdNames = new Array();

document.write("<hr>");



//====================
document.write(" 3. Declare and initialize a strings array." + "<br><br>");

var stringArray = [
    
    name = ' Govind Rai ',
    status = ' Application developer '

];

document.write("This is string array " +"<br>"+ stringArray+ "<br><br>"+ "<br><br>");



document.write("<hr>");
//====================
document.write(" 4. Declare and initialize a numbers array." + "<br><br>");

var number = [1,3,5,6,7];

document.write("This is numbers array " +"<br>"+ number+ "<br><br>"+ "<br><br>");





document.write("<hr>");
//====================
document.write(" 5. Declare and initialize a boolean array." + "<br><br>");

var boolenNum = [false, true];
document.write("This is boolean array " +"<br>"+ number+ "<br><br>"+ "<br><br>");
document.write("<hr>");




document.write("<hr>");
//====================
document.write(" 6. Declare and initialize a mixed array." + "<br><br>");

var mixArray = ["computer science",2,"rai","Govind",false, true];
document.write("This is mixed array " +"<br>"+ mixArray+ "<br><br>"+ "<br><br>");






//====================\
document.write("<hr>");

document.write(" 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:" + "<br><br>");


document.write("<b>"+"QULIFICATIONS"+"<br><br>");

var eduQualif = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];

document.write("<ol>")
for ( i  =0; i <= eduQualif.length;i++){
    document.write("<li>"+eduQualif[i] +"</li>"+"<br>")    
}
document.write("</ol>"+"</b>")



//====================\
document.write("<hr>");

document.write(" 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:" + "<br><br>");

//students names
var stdsName = [
    std1 = 'Govind Rai',
    std2 = 'Ahmed',
    std3 = 'Raza'
];


// students score
var stdsScore = [
    stdScore1 = 480,
    stdScore12 = 360,
    stdScore13 = 450
];

// total marks
var totalMarks = 500;

// calculate percentage
percentage1 = ((stdsScore[0]*100)/totalMarks);
percentage2 = ((stdsScore[1]*100)/totalMarks);
percentage3 = ((stdsScore[2]*100)/totalMarks);

// display score and percentage
document.write(" Score of "+ stdsName[0] + " is "+ stdsScore[0] +"."+" Percentage: " + percentage1 + "%."+"<br>");
document.write(" Score of "+stdsName[1]+ " is "+ stdsScore[1]+"."+" Percentage: " + percentage2+"%."+"<br>");
document.write(" Score of "+stdsName[2]+ " is "+ stdsScore[2]+"."+" Percentage: " + percentage3+"%."+"<br>");



//====================\
document.write("<hr>");

document.write("9. Initialize an array with color names. Display the array elements in your browser." + "<br><br>");

var color = ['red','green','yellow'];
document.write(color+"<br><br><br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var addcolor = prompt("Add color of your choice");
// color.unshift(addcolor); 
document.write("Updated Array: "+color+"<br><br>" );


// // b. Ask the user what color he/she wants to add to the end  & add that color to the end of the array. Display the  updated array in your browser.

// var addcolor = prompt("Add color of your choice");
// color.push(addcolor); 
document.write("Updated Array: "+color+"<br><br>" );



// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// var addcolor = prompt("Add  first color of your choice");
// color.unshift(addcolor); 
// var addcolor = prompt("Add second color of your choice");
// color.unshift(addcolor); 
document.write("Updated Array: "+color+"<br><br>" );


// d. Delete the first color in the array. Display the updated array in your browser.
 color.shift();
 document.write("Updated Array for delete first color: "+color+"<br><br>" );

 

// e. Delete the last color in the array. Display the updated array in your browser.
color.pop();
document.write("Updated Array for delete last color: "+color+"<br><br>" );


// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var addColorindex = prompt("At which index want to add color of your choice");
// color.splice(addColorindex); 

document.write("Updated Array at index:  "+color+"<br><br>" );


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then

// var addColorindex = prompt("At which index want to delete color of your choice");
// color.splice(addColorindex); 

document.write("Updated Array at index:  "+color+"<br><br>" );


//====================\
document.write("<hr>");

document.write("10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method." + "<br><br>");

// var stdsScores = [333,443,453,588];
// stdsScores.sort();
// document.write("Score of students in sort and ascending order:  "+stdsScores+"<br><br>" );



//====================\
document.write("<hr>");

document.write("11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array." + "<br><br>");

var cities = ["karachi","Lahore","Isamabad","Quetta","Peshawar"];
document.write("Cities: "+cities+"<br><br>"); 

var copy = cities.slice(1,3);
document.write("Selected Cities list: "+"<br>"+copy);


//====================\
document.write("<hr>");

document.write("12. Write a program to create a single string from thebelow mentioned array:." + "<br><br>");

document.write("Array:"+"<br>");
var arr = [" This "," is "," my ", " cat "];
document.write(arr +"<br><br>");

//creating here
document.write("String: "+"<br>");

var string = arr.join("");
document.write(string+"<br>");




//====================\
document.write("<hr>");

document.write("13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)." + "<br><br>");

var arr1 = ["keyboard","mouse","printer","monitor"];
document.write( arr1 +"<br><br>");


//output keyboard
var takingOutput= arr1.slice(0,1);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output mouse
var takingOutput= arr1.slice(1,2);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output printer
var takingOutput= arr1.slice(2,3);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output monitor
var takingOutput= arr1.slice(3,4);
document.write("out: " + "<br>" + takingOutput +"<br>");



//====================\
document.write("<hr>");

document.write("14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)" + "<br><br>");


document.write( arr1 +"<br><br>");


//output keyboard
var takingOutput= arr1.slice(-1);
document.write("out: " + "<br>" + takingOutput +"<br>");

//output mouse
var takingOutput= arr1.slice(-2,-1);

document.write("out: " + "<br>" + takingOutput +"<br>");


//output printer
var takingOutput= arr1.slice(-3,-2);

document.write("out: " + "<br>" + takingOutput +"<br>");

// //output monitor
var takingOutput= arr1.slice(-4,-3);
document.write("out: " + "<br>" + takingOutput +"<br>");