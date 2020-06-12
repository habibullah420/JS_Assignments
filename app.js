// chapter 1
// task 1
alert("Welcome User");

// task 2
window.alert("Error! Please enter a valid password");

// task 3
alert("Welcome to JS land..\nHappy Coding!!");

//task 4
alert("Welcome to JS land..");
alert("Happy Coding!!");

//CHAPTER 2
// task 1
var username;

// task 2
var myName = "Habib Ullah";

//task 3
var titled;
titled = "Hello World";
alert(titled);

// task 4
var name = "Habib Ullah";
var age = "25 years old";
var Qualification = "Certified Mobile Application Developer";
alert(name);
alert(age);
alert(Qualification);

//task 5

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

//task 6

var email = "alihabib405@gmail.com";
alert("My email address is " + email);

// task 7

var book = "A smarter way to learn javascript";

alert("I am trying to learn from the book " + book);

// task 8

document.write("YAH! i can write html content through javascript");

// task 9

document.write("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

// CHAPTER 3

// Task 1
var age = 25;
alert("I am " + age + " year old");

// task 2
var num = 14;
alert("You have visted this site " + num + " times");

// task 3

var birthYear = 1994;

document.write(
  "My birth year is " +
    birthYear +
    "<br>" +
    "Data type of my decleared variable is integer"
);

// task 4
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(
  visitorName + " ordered " + quantity,
  productTitle + " on XYZ clothing store"
);

// CHAPTER 4

// task
var [num1, num2, num3] = ["Habib", "ali", "khan"];
alert(num1);
alert(num2);
alert(num3);

// task 2
var num2;
var $book;
var _word;
var full_name;
var last$name;

// var !num1 = 10;
// var #book;
// var @word;
// var Full*name;
// var last^name;

// CHAPTER 5

//task 1

var num1 = 6;
var num2 = 4;
var result = num1 + num2;
alert(result);

//task 2

var num1 = 5;
var num2 = 2;
var sub = num1 - num2;
alert(sub);

var mul = num1 * num2;
alert(mul);

var div = num1 / num2;
alert(div);

var mod = num1 % num2;
alert(mod);

//task 3
var num;
document.write("Value after variable declaration is undefined", "<br>");
var num = 5;
document.write("Initial value: ", num, "<br>");
num++;
document.write("Value after increment is: ", num, "<br>");
var num1 = num + 7;
document.write("Value after addition is ", num1, "<br>");
num1--;
document.write("After value decrement is:", num1, "<br>");
var num2 = num1 % 3;
document.write("The remainder is:", num2);

//task 4
var ticket = 600;
var totalTickets = 5;
var result = ticket * totalTickets;

document.write(
  "Total cost to buy ",
  totalTickets,
  " tickets to a movie is ",
  result,
  " PKR"
);

// task 5
var num = 5;

document.write(num, " * ", 1, " = ", num * 1, "<br>");
document.write(num, " * ", 2, " = ", num * 2, "<br>");
document.write(num, " * ", 3, " = ", num * 3, "<br>");
document.write(num, " * ", 4, " = ", num * 4, "<br>");
document.write(num, " * ", 5, " = ", num * 5, "<br>");
document.write(num, " * ", 6, " = ", num * 6, "<br>");
document.write(num, " * ", 7, " = ", num * 7, "<br>");
document.write(num, " * ", 8, " = ", num * 8, "<br>");
document.write(num, " * ", 9, " = ", num * 9, "<br>");
document.write(num, " * ", 10, " = ", num * 10, "<br>");

// task 6
var C = 25;

var F;
F = (C * 9) / 5 + 32;

document.write(C, "°C is ", F, "°F", "<br>");

var F = 70;
C = ((F - 32) * 5) / 9;

document.write(F, "°C is ", C, "°C");

// task 7
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shipping = 100;

document.write("Prive of Item 1 is ", priceItem1, "<br>");
document.write("Quantity of item 1 is ", quantityItem1, "<br>");
document.write("Price of Item 2 is ", priceItem2, "<br>");
document.write("Quantity of item 2 is ", quantityItem2, "<br>");
document.write("Shipping charges ", shipping, "<br>", "<br>");
document.write(
  "Total cost of order is ",
  priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shipping
);

// task 8
var totalMarks = 980;
var marksObtained = 804;

document.write("Total marks :", totalMarks, "<br>");
document.write("Marks obtained :", marksObtained, "<br>");
document.write("Percentage :", (marksObtained * 100) / totalMarks);

//task 9

var USdollar = 104.8;
var saudiRayal = 28;

document.write("Total currency in PKR :", USdollar * 10 + saudiRayal * 25);

// task 10
var num = 5;

console.log((num + 5 * 10) / 2);

// task 11

var currentYear = 2019;
var birthYear = 1996;

document.write("Current year: ", currentYear, "<br>");
document.write("Birth year: ", birthYear, "<br>");
document.write(currentYear - birthYear);

// task 12
var radius = 20;
document.write("Radius of a circle :", radius, "<br>");
document.write("The circumference is :", 2 * 3.142 * radius, "<br>");
document.write("The area is :", 3.142 * (20 * 20));

// task 13

var favSnack = "chocolate chip";
var currentAge = 15;
var estimatedAge = 65;
var amountPerDay = 3;

document.write("Favouriye snack :", favSnack, "<br>");
document.write("Current age :", currentAge, "<br>");
document.write("estimated Maximum age :", estimatedAge, "<br>");
document.write("Amount of snacks per day :", amountPerDay, "<br>");
document.write(
  "You will need ",
  (estimatedAge - currentAge) * 365 * 3,
  " chocolate chips to late you until the riped old age of ",
  estimatedAge
);

// CHAPTER 6-9
// TASK 1

var a = 10;

document.write("Result", "<br>", "<br>");
document.write("The value of a is : ", a, "<br>");
document.write("...................................", "<br>", "<br>");
++a;
document.write("The value of ++a is: ", a, "<br>");
document.write("Now the value of a is: ", a, "<br>", "<br>");

document.write("The value of a++ is: ", a, "<br>");
a++;
document.write("Now the value of a is: ", a, "<br>", "<br>");
--a;
document.write("The value of --a is: ", a, "<br>");
document.write("Now the value of a is: ", a, "<br>", "<br>");

document.write("The value of a is: ", a, "<br>");
a--;
document.write("Now the value of a is: ", a);

// TASK 2

var name = prompt("What is your name ?");
alert("Welcome " + name + " !");

// TASK 3
var num = prompt("Enter a number ", 5);
var num1 = 1;

document.write(num + " * " + num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");
document.write(num + " * " + ++num1 + " = " + num * num1, "<br>");

// TASK 4

var subject1 = prompt("Enter subject 1");
var subject2 = prompt("Enter subject 2");
var subject3 = prompt("Enter subject 3");

var totalMarks = 100;
var marksObtained1 = prompt("Enter Marks obtained in " + subject1);
var marksObtained2 = prompt("Enter Marks obtained in " + subject2);
var marksObtained3 = prompt("Enter Marks obtained in " + subject3);

var totalmarksObtained = +marksObtained1 + +marksObtained2 + +marksObtained3;

var totalPercentage =
  (+((marksObtained1 * 100) / totalMarks) +
    +((marksObtained2 / totalMarks) * 100) +
    +((marksObtained3 * 100) / totalMarks)) /
  300;

document.write(
  "<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>"
);
document.write(
  "<tr> <td>",
  subject1,
  "</td> <td>" +
    totalMarks +
    "</td> <td>" +
    marksObtained1 +
    "</td><td>" +
    +((marksObtained1 * 100) / totalMarks) +
    " %</td> </tr>"
);
document.write(
  "<tr> <td>" +
    subject2 +
    "</td> <td>" +
    totalMarks +
    "</td> <td>" +
    marksObtained2 +
    "</td><td>" +
    +((marksObtained2 / totalMarks) * 100) +
    "%</td> </tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td> <td>" +
    totalMarks +
    "</td><td>" +
    marksObtained3 +
    "</td><td>" +
    +((marksObtained3 * 100) / totalMarks) +
    "%</td></tr>"
);
document.write(
  "<tr><td></td> <td>" +
    300 +
    "</td><td>" +
    totalmarksObtained +
    "</td> <td>" +
    totalPercentage +
    "</td> </tr></table>"
);

// CHAPTER 9-11
// TASK 1
var greet = prompt("Enter your city");

if (greet == "karachi") {
  alert("Welcome to city of lights");
}

var gender = prompt("Enter your gender");

// TASK 2

if (gender == "male") {
  alert("Good morning Sir");
}
if (gender == "female") {
  alert("Good morning Ma'am");
}

// TASK 3

var signalColor = prompt("Enter road traffic Signal colour");

if (signalColor == "red") {
  alert("Must Stop");
} else if (signalColor == "yellow") {
  alert("Ready to move");
} else if (signalColor == "green") {
  alert("Move now");
}

// TASK 4
var remainingFuel = prompt("Enter Remaining fuel of car (in litres)");

if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// TASK 5
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (false) {
  alert("False");
}
if (true) {
  alert("True");
}

if ("car" < "cat") {
  alert("car is greater than cat");
}

// TASK 6

var sub1 = prompt("Enter Subject 1 marks");
var sub2 = prompt("Enter subject2 marks");
var sub3 = prompt("Enter subject 3 marks");

var totalmarks = prompt("Enter total marks");

var totalmarksObtain = +sub1 + +(+sub2) + +sub3;

var percentage = (totalmarksObtain / totalmarks) * 100;

document.write("<h1>Marks Sheet</h1>", "</br>");

document.write("Total marks : ", totalmarks, "</br>");
document.write("Marks Obtained : ", totalmarksObtain, "</br>");
document.write("Percentage : ", percentage, "</br>");

if (percentage >= 80) {
  document.write("Grade : A-one", "</br>");
  document.write("Remarks : Excellent");
} else if (percentage >= 70) {
  document.write("Grade : A", "</br>");
  document.write("Remarks : Good");
} else if (percentage >= 60) {
  document.write("Grade : B", "</br>");
  document.write("Remarks : You need to improve");
} else if (percentage < 60) {
  document.write("Grade : Fail", "</br>");
  document.write("Remarks : Sorry");
}

// TASK 7
var secretNo = 6;
var Ques = prompt("Guess the secret no !");

if (Ques == secretNo) {
  alert("Bingo! Correct answer");
}
secretNo++;
if (Ques == secretNo) {
  alert("Close enough to the correct answer");
}

// TASK 8
var num = prompt("Enter number");

if (num % 3 == 0) {
  alert("Divisible by 3");
}

// TASK 9

var num = prompt("Enter the number");

if (num % 2 == 0) {
  alert("Number is even");
} else {
  alert("Number is odd");
}

// TASK 10

var temp = prompt("Enter the temperature ");

if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today’s Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today’s weather is so Cool.");
}

// TASK 11
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number ");
var operator = prompt("Enter operator");

var add = +num1 + +num2;
var sub = +num1 - +num2;
var mul = +num1 * +num2;
var div = +num1 / +num2;
var per = +num1 % +num2;

if (operator == "+") {
  alert(num1 + operator + num2 + "=" + add);
} else if (operator == "-") {
  alert(num1 + operator + num2 + "=" + sub);
} else if (operator == "*") {
  alert(num1 + operator + num2 + "=" + mul);
} else if (operator == "/") {
  alert(num1 + operator + num2 + "=" + div);
} else if (operator == "%") {
  alert(num1 + operator + num2 + "=" + per);
}

// chapter 12-13

// task 1
var num = prompt("Enter a character(number or string)");

if (num >= 65 && num <= 90) {
  alert("Uppercase letter");
} else if (num >= 97 && num <= 122) {
  alert("lower case letter");
} else {
  alert("its a number");
}

// task 2

var num1 = prompt("Enter first number ");

var num2 = prompt("Enter Second number");

if (num1 > num2) {
  alert(num1 + " is greater");
} else if (num2 > num1) {
  alert(num2 + " is greater");
} else if (num1 == num2) {
  alert(num1 + " is equal to " + num2);
}

// task 3
var num = prompt("Enter number");

if (num < 0) {
  alert("Number is negative");
} else if (num > 0) {
  alert("Number is positive");
} else if (num == 0) {
  alert("Number is zero");
}

// task 4
var cha = prompt("Enter character");

if (cha == "a") {
  alert("True !! its a vowel");
} else if (cha == "e") {
  alert("True !! its a vowel");
} else if (cha == "i") {
  alert("True !! its a vowel");
} else if (cha == "o") {
  alert("True !! its a vowel");
} else if (cha == "u") {
  alert("True !! its a vowel");
} else {
  alert("false !! its not a vowel");
}

// task 5
var pass = "osama123";
var checkPass = prompt("Enter Password");
if (checkPass == "") {
  alert("Enter your password");
} else if (checkPass == pass) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect Password");
}

// task 6

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// task 7
var time = prompt("Enter time");

if (time >= 0000 && time < 1200) {
  alert("Good morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening");
} else {
  alert("Good night");
}

//chapter 14-16

// task1


// task 2 

 
let arr = new Array();
    

//task 3

let stdname = ["habib","ali","khan","fahad"];
console.log(stdname);

//task 4
let num = [1,2,3,4,5,6,7];
console.log(num);


// task 5


let bol = [true,false];
console.log(bol);

// task 6
let mix = ["osama",5,"ali",98,true,"pak",false];
console.log(mix);

// task 7 
document.write("<h1>Qualification</h1>");

let Qualification =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PHD"];
document.write("1-",Qualification[0],"<br>");
document.write("2-",Qualification[1],"<br>");
document.write("3-",Qualification[2],"<br>");
document.write("4-",Qualification[3],"<br>");
document.write("5-",Qualification[4],"<br>");
document.write("6-",Qualification[5],"<br>");
document.write("7-",Qualification[6],"<br>");


   //task 8
let stdname =["osama","saad","ahsan"];
let scoreStd=[320,230,480];
var total=500;

document.write("Score of ",stdname[0]," is ",scoreStd[0],".","Percentage :",scoreStd[0]/total*100,"<br>");
document.write("Score of ",stdname[1]," is ",scoreStd[1],".","Percentage :",scoreStd[1]/total*100,"<br>");
document.write("Score of ",stdname[2]," is ",scoreStd[2],".","Percentage :",scoreStd[2]/total*100);



   //task 9
let color=["red","yellow","green","blue"];
    document.write("Array : ",color,"<br>");

    var addcolor = prompt("Add color to the beginning of an array");

    let newColor = color.unshift(addcolor);
    document.write("a)  Add color at start : ",color,"<br>");

    var addcolor1 = prompt("Add color to the end of an array ");

    let newColor1= color.push(addcolor1);
    document.write("b)  Add color at end : ",color,"<br>");

    let newColor2 = color.splice(0,0,"voilet","brown");
    document.write("c)  Add two color at start : ",color,"<br>");
    
    let deletecolor = color.shift();
    document.write("d)  Delete first element in array : ",color,"<br>");

    let deletecolorlast = color.pop();
    document.write("e)  Delete last element in array : ",color,"<br>");

    var insertelement = prompt("In which index you want to enter an element ?");    
    var colorname = prompt("Enter the color name you want to add");

    let addcolor3 = color.splice(insertelement,0,colorname);
    document.write("f)  New color added at index ",insertelement," is ",color,"<br>");

    var deleteElement = prompt("In which index you want to delete an element ?");    
    var noOfelements = prompt("Enter the no of colors you want to delete");

    let addcolor4 = color.splice(deleteElement,noOfelements);
    document.write("g)  You deleted ",noOfelements," no of colors from ",deleteElement," index ",color);



    
    
   //task 10
    let student = [320 ,230, 480, 120];
    document.write(student,"<br>");
    student.sort();
    document.write(student);
    

   //task 11

    let country =["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    document.write(country,"<br>");
    var result = country.slice(1,3);
    document.write(result);


   //task 12
    var arr = ["This"," is ","my ","cat"];
        document.write("Array : ",arr,"<br>");    

        var res= arr.join(" ");
        document.write("String :" ,res);


   //task 13

        let devices = ["Keyboard", "mouse","printer","Moniter"];

    document.write("Devices : ","<br>","<br>");
    document.write(devices,"<br>","<br>");

    document.write("Out : ", devices.shift(0),"<br>");
    document.write("Out : ", devices.shift(1),"<br>");
    document.write("Out : ", devices.shift(2),"<br>");
    document.write("Out : ", devices.shift(3),"<br>");


   //task 14

    let devices = ["Keyboard", "mouse","printer","Moniter"];

    document.write("Devices : ","<br>","<br>");
    document.write(devices,"<br>","<br>");

    document.write("Out : ", devices.pop(0),"<br>");
    document.write("Out : ", devices.pop(1),"<br>");
    document.write("Out : ", devices.pop(2),"<br>");
    document.write("Out : ", devices.pop(3),"<br>");



     //task 15
    let manufacturers = ["Apple", "Samsumg", "Motrolla", "Nokia", "Sony", "Haier"];

        document.write("<select><option value='maufacturers[0]'>Apple</option><option value='Samsumg'>Samsumg</option><option value='Motrolla'>Motrolla</option><option value='Nokia'>Nokia</option></select>");




        //chapter 17-20

        //task 1

        let multi = [[],[],[]];


    //task 2

        let multi = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];


        //task 3
    for(var i = 1; i<=10; i++){
        document.write(i,"<br>");
        
    }


        //task 4
    
    var input = prompt("Enter a number to show its mutiplication table");
    var input2 = prompt("Enter lenght of multiplication table");

    for(var i =1; i<input2; i++){

        document.write(input, " * " , i," = ",input*i,"<br>");

    }




        //task 5

    fruits = ["apple", "banana", "mango", "orange","strawberry"];

    for(var i =0; i<fruits.length; i++){

        document.write(fruits[i] ,"<br>");
       
    }
           document.write("<br> <br>");  
    

         for(var i =0; i<fruits.length; i++){
        document.write("Element at index ", i, " is ",fruits[i],"<br>");
       }
    



        //task 6

       document.write("<h2>Counting : </h2> ");
       for(var i=1; i<=15; i++){
           document.write(i,",");
       }
   
       document.write("<br>");
   
       document.write("<h2>Reverse Counting : </h2>");
       for(var i=10; i>=1; i--){
           document.write(i,",");
       }
       document.write("<br>");
       
           document.write("<h2>Even Counting : </h2> ");
       for(var i=0; i<=20; i++){
           if(i%2===0){
               document.write(i,",");
          }
       }
   
       document.write("<br>");
       
       document.write("<h2>Odd Counting : </h2>");
       for(var i=1; i<=20; i++){
           if(i % 2 !== 0){
               document.write(i,",");
           }
       
   }
   
   
   document.write("<br>");
   document.write("<h2>Series :</h2> ");
   for(var i = 2; i<=20; i+=2){
       document.write(i,"k",",");
   }
    
   



        //task 7

    
   let item = ["cake","apple pie","cookie","chips","patties"];

   var search = prompt("Enter the item to check the item are in the list or not");
     
      var ismatched = false;
   
   for(var i = 0; i<=item.length; i++){

       if( item[i] === search){

           var ismatched = true;

           alert(search+ " is available at index "+i+" in our Bakery");
           
           break;

           }
       }
   if(ismatched === false){

       alert("We are Sorry."+search+" is not available in our Bakery");

   }
   





        //task 8

   let A = [24, 53, 78, 91, 12];

   var x= Math.max(...A);

   document.write("Array item : ",A,"<br>");
   document.write("The largest number is ",x);




        //task 9
   let A = [24, 53, 78, 91, 12];

   var x= Math.min(...A);

   document.write("Array item : ",A,"<br>");
   document.write("The smallest number is ",x);




        //task 10
    
   for(var i= 1; i<=100; i++){
    if(i%5 == 0){
        document.write(i,",");
    }
}
