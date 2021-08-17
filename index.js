// function------------------------

// function myFunction() {
//     console.log("rukon");
//     console.log("uddin")
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();




// parameter function--------------------------

// function myFunction(number1, number2) {

//     var total = number1 + number2;

//     var price = 10;
//     var vag = total / price;
//     console.log(vag);

// }
// var number1 = 50;
// var number2 = 40
// myFunction(number1, number2);


// 18-5 Declare multiple objects with multiple properties..................................

// var computer = {
//     color: "black",
//     width: "22 inches",
//     hight: "16 inches",
//     rem: "8 gb",
//     storage: "500 gb",
//     price: 70000


// }
// console.log(computer.rem);   // কোনো একটা Object এর value জানতে।
// var newPrice = "price"; //কোনো একটা object এর নাম variable এর মধ্যে রাখার জন্য।
// computer[newPrice] = 500;//variable এ রাখা variable এর নাম- object এর value change করার জন্য ।
// computer["price"] = 2000;  //variable এর নাম এবং Object নাম দিয়ে new value সেট করে দেওয়ার জন্য  ।
// console.log(computer);   // একটি variable এর সব কইটা Object দেখার জন্য।




// 18-7 (optional) Javascript switch case break and default-------------------------------
// var color = 'yellow';
// switch (color) {
//     case 'blue':
//         console.log('color is blue!')
//         break;

//     case 'red':
//         console.log('color is red!')
//         break;

//     case 'yellow':
//         console.log('color is yellow!')
//         break;

//     case 'black':
//         console.log('color is black!')
//         break;

//     default:
//         console.log('color of no massing in the switch')
// }




//18-8 (advanced) while and for loop break and continue----------------------


// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
//     if (i == 5) {
//         break;
//     }
// }


// -----------------------------------------------------


// for (var i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }


// --------------------------------------------------------

// var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (i = 0; i < numbers.length; i++) {
//     var number = numbers[i];

//     // console.log(number);
//     // if (number > 70) {
//     //     break;
//     // }
//     if (number > 70) {
//         continue;
//     }
//     console.log(number);
// }



// var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// if (numbers.indexOf(110) == -1) {
//     console.log("number is not available")
// }