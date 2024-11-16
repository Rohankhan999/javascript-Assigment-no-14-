//  Chapter no 35 to 38 Function //

// Question no 01 //

// function showdate() {
//     var date = new Date();
//     return date
// }
// console.log(showdate());


// Question no 02 //

// function greetuser(Firstname , Lastname) {
//     var Fullname = `${Firstname} ${Lastname}`
//     return `Hello ${Fullname}! Welcome!!!!!!`
// }
// document.write("<h1>" + greetuser("Rohan","Khan") + "</h1>");
                         
                            //  OR
 
// function greetuser(){
//     var Firstname = prompt('Enter your First Name');
//     var Lastname = prompt('Enter your Last Name');
//     const Fullname = `${Firstname} ${Lastname}`;
//     alert(`Hello ${Fullname}! Welcome!!!!!`);
// }
// greetuser();

   // Question no 03 //

//    function addnum(){
//     var Firstnumber = prompt('Enter your First Number!');
//     var secondNumber = prompt('Enter your second Number!');
//     var num1 = parseFloat(Firstnumber);
//     var num2 = parseFloat(secondNumber);
//     var sum = num1 + num2;
//     alert(`Your Answer is ${sum}!`);
// }

// addnum();

   // Question no 04 //
// function calculator(num1, num2, operator) {
//     let result;

//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2; 
//     } else if (operator === "/") {
//         result = num1 / num2; 
//     } else {
//         result = "Invalid operator"; 
//     }
//     document.write("The result is: " + result);
//     return result;
// }

// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter the operator (+, -, *, /):");
// calculator(num1, num2, operator);


  // Question no 05 //
// function squareNumber(num) {
//     return num * num; 
// }

// let number = parseFloat(prompt("Enter a number to square:"));
// let result = squareNumber(number);
// document.write("The square of " + number + " is: " + result);

