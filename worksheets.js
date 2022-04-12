//1.

// let dayOfWeek = 'Monday';
// console.log(dayOfWeek);
// dayOfWeek = 'Friday';
// console.log("I can't wait for " + dayOfWeek);

//2.

// animalInput = prompt("What is your favorite animal?");
// colorInput = prompt("What is your favorite color?");
// string = "i've never seen a " + colorInput+" "+animalInput + "!";
// console.log(string);

//1.

// let timeOfDay = '1300';
// let mealChosen = '';
// if (timeOfDay < 1200){
//     mealChosen = prompt("Enter Breakfast:");
// }
// else if(timeOfDay >= 1200 && timeOfDay <= 1700){
//     mealChosen = prompt("Enter lunch:");
// }
// else if(timeOfDay > 1700){
//     mealChosen = prompt("Enter Dinner:");
// }

//2.

// var randomNumber = Math.floor(Math.random()*11);
// if(randomNumber >= 0 && randomNumber <=2){
//     console.log("Beatles" + randomNumber);
// }
// else if(randomNumber >= 3 && randomNumber <=5){
//     console.log("Stones"+ randomNumber);
// }
// else if(randomNumber >= 6 && randomNumber <=8){
//     console.log("Floyd"+ randomNumber);
// }
// else if(randomNumber >= 9 && randomNumber <=10){
//     console.log("Hendrix"+ randomNumber);
// }

// Loops

// for(let i = 0; i < 5; i++){
//     console.log("JavaScript is cool!");
// }
// for(let i=0; i<5; i++){
//     console.log("Hello");
//     console.log("goodbye")
// }

// let isInstructorAwesome = true;
// while(isInstructorAwesome){
//     isInstructorAwesome = prompt("Is your instructor Awesome? y/n")
//     if (isInstructorAwesome == "n"){
//         isInstructorAwesome = false;
//     }
// }

// Functions

// function getFavoriteMove(){
//     let favoriteMove = "The Outsiders";
//     console.log(favoriteMove);
// }
// let test = getFavoriteMove();

// function getFavoriteBand(){
//     let favoriteBand = prompt("Enter your favorite band:")
//     return favoriteBand;
// }
// test = getFavoriteBand();
// console.log(test);

// function concertDisplay(musicalAct){
//     let myStreet = prompt("Enter the street you live on:");
//     let string = "It would be great if " + musicalAct + " played a show on " + myStreet; 
//     console.log(string)
// }
// concertDisplay(test);

// Arrays

let desktopItems = ["gandalf", "Tardis", "Crafting Bench"];
console.log(desktopItems[0]);
desktopItems.push("Infinity Gauntlet");
for(let i = 0;i<desktopItems.length; i++){
    console.log(desktopItems[i]);
}

//Magic Number

var magicNumber = Math.floor(Math.random()*101);
var guess = 0;
let isCorrect = true;
console.log(magicNumber);
while(isCorrect){
    guess = prompt("Guess the lucky number:");
    if(guess < magicNumber){
        if(guess >=(magicNumber-10)){
            console.log("Too low! Getting warmer!");
            continue;
        }
        console.log("Too low!");
    }
    else if(guess > magicNumber){
        if(guess<=(magicNumber+10)){
            console.log("Too high! Getting warmer!");
            continue;
        }
        console.log("Too high!");
    }
    else if(guess == magicNumber){
        console.log(magicNumber + " Winner");
        isCorrect = false;
    }
}