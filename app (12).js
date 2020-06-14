document.write("Chapter 17 to 20"+"<br><br>");

//==========================
document.write("<hr>");
document.write("<hr>");

document.write(" 1. Declare and initialize an empty multidimensional array.(Array of arrays)" + "<br><br>");

var multiDemArry = [
    ["Gvoind","Rai"],
    ["Rai",22,false],
    ["Santosh",234,"pass"]
];


//==========================
document.write("<hr>");

document.write(" 2. Declare and initialize a multidimensional arrayrepresenting the following matrix:." + "<br><br>");

var multiDemArry1 = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
for(i = 0; i < multiDemArry1.length; i++){
document.write(multiDemArry1[i]+'<br>');
}


//==========================
document.write("<hr>");

document.write(" 3. Write a program to print numeric counting from 1 to 10.." + "<br><br>");

for(i = 1; i <= 10; i++){
    document.write([i]+'<br>');
    }
    

//==========================
document.write("<hr>");

document.write(" 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user" + "<br><br>");

// var tableNum = +prompt("Enter table number which you want to print: ");
// var tablelength = +prompt("Enter table length which you want to print: ");


// for (var i = 1; i <= tablelength; i++ ){
//     document.write(+ tableNum + "x" + i + "="+ tableNum*i+ "<br>");
// }



//==========================
document.write("<hr>");

document.write(" 5. Write a program to print items of the following array using for loop:" + "<br><br>");

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];


for (var i = 0; i < fruits.length ; i++ ){
    document.write(fruits[i]+ "<br>");
}

document.write("<br>");

// showing index
document.write("Element at index 0 " +fruits[0]+"<br>");
document.write("Element at index 1 " +fruits[1]+"<br>");
document.write("Element at index 2 " +fruits[2]+"<br>");
document.write("Element at index 3 " +fruits[3]+"<br>");
document.write("Element at index 4 " +fruits[4]+"<br>");





//==========================
document.write("<hr>");

document.write(" 6. Generate the following series in your browser. See example output." + "<br><br>");

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b>"+"Counting: "+ "</b>"+"<br>");
for(i = 1; i <= 15; i++){
    document.write([i]+",");
    }
    


    document.write("<br><br>");    

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var counting = [1,2,3,4,5,6,7,8,9,10];
var reverse = counting.reverse();
document.write("<b>"+"Reverse counting: "+ "<br>"+"</b>"+reverse + "<br><br>");


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("<b>"+"Even: "+ "</b>"+ "<br><br>");

// var even = Even %3 !== 0;


// for(i = 0; i <= 20; i++){
//     document.write(odd[i]+",");
//     }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<b>"+"Odd: "+ "</b>"+ "<br><br>");


// var odd = odd %3 !== 0;


// for(i = 0; i <= 20; i++){
//     document.write(odd[i]+",");
//     }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<b>"+"Series: "+ "</b>"+ "<br><br>");
var array = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
for(i = 0; i < array.length; i++){
    document.write(array[i]+",");
    }



//==========================
document.write("<hr>");

document.write(" 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a  program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:" + "<br><br>");

var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var items = prompt("Welcome to our backry,what do you want to order?: ");

 if(a === items){
  alert(items + " is available at index number " + " " + a.indexOf + " in or backry ");
}else{
    alert("We are sorry " + items + " is not available at our backry.");
 }



//==========================
document.write("<hr>");

document.write(" 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a  program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:" + "<br><br>");

