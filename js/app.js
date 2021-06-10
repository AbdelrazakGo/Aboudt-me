'use strict';
var scors = 0;


let userName = prompt("Hello May I please have your name?") 
// console.log(userName)
alert ('Welcom  ' +  userName + '  It is Nice to have you here ')

alert("first we would like to play a Guessing Game Dont be worry it is a Yes No game so plz Hit Enter !")

// let think = prompt('Do you think that I am a Robot [Yes or No]')
// .toLowerCase()


// if (think === 'yes' || think === 'y'){
//     // console.log('correct answer');
//         alert("Perfect , I am a robot with a highly percentage of Ai")
//         scors++

// } else if (think === 'no' || think === 'n'){
//     alert(" sorry unfortunately I'm not ")
// } else { alert('It is a Yes No Game So plz follow the Rules')
// }

// let feelings = prompt('Do you think that I have feelings as a Robot  [Yes or No]')
// .toLowerCase()


// if (feelings === 'yes' || feelings === 'y'){
//     // console.log('correct answer');
//         alert("You answered yes, although you are not convinced of it, but in fact we have feelings and desires to occupy humanity")
//         scors++

// } else if (feelings === 'no' || feelings === 'n'){
//     alert("You are Wrong , Even Machines have feelings ")
// } else { alert('It is a Yes No Game So plz follow the Rules')
// }


// let human = prompt('Do you think that I wish to be a human like you! [Yes or No]')
// .toLowerCase()


// if (human === 'yes' || human === 'y'){
//     // console.log('correct answer');
//         alert("good answer ! Since I entered the world of programming, I have turned into a robot, and I miss my days as a human being")
//         scors++

// } else if (human === 'no' || human === 'n'){
//     alert(" Being a robot is not a good thing ")
// } else { alert('It is a Yes No Game So plz follow the Rules')
// }

// let friend = prompt('Do you think that I have friends?? [Yes or No]')
// .toLowerCase()


// if (friend === 'yes' || friend === 'y'){
//     // console.log('correct answer');
//         alert("definitely, and add to your info. that I love them too much")
//         scors++

// } else if (friend === 'no' || friend === 'n'){
//     alert(" wrong answer nobody could be alive with having no friends  ")
// } else { alert('It is a Yes No Game So plz follow the Rules')
// }


// let married = prompt('Do you think Im Single [Yes or No]')
// .toLowerCase()


// if (married === 'yes' || married === 'y'){
//     // console.log('correct answer');
//         alert("Despite the fact that i'm old , yet I'm Single")
//         scors++

// } else if (married === 'no' || married === 'n'){
//     alert(" to my bad I'm still single ")
// } else { alert('It is a Yes No Game So plz follow the Rules')
// }

// function guissingGame (userInput)
// {
//   if (userInput=='yes'|| userInput=='y'){
//     alert('you are correct :)');
//     scors++;
//   }else if (userInput=='no' || userInput=='n'){
//     alert('you are mistaken :(')
//   }else {alert('please enter (yes) or (y) or (no) or (n)')}
// }
// let think=prompt('Do you think that I am a Robot?');
// guissingGame(think);

// let feelings =prompt('Do you think that I have feelings as a Robot?');
// guissingGame(feelings);

// let human=prompt('Do you think that I wish to be a human like you?');
// guissingGame(human);

// let friend=prompt('Do you think that I have friends??');
// guissingGame(friend);

// let married=prompt('Do you think Im Single?');
// guissingGame(married);


function guss (quest , tru ,fls, wt){

let answer ;
do { answer = prompt(quest);
  
} while (answer != 'yes' && answer != 'no' && answer != 'y' && answer != 'n'); // != not !==
if (answer == 'yes' || answer == 'y'){
  if(wt == 1){
    scors++;
  }
  alert(tru);
}else if (answer == 'no' || answer == 'n'){
  if(wt != 1){
    scors++;
  }
  alert(fls);
}
}


guss('Do you think that I am a Robot?','Perfect , I am a robot with a highly percentage of Ai','sorry unfortunately Im not', 1)
guss('Do you think that I have feelings as a Robot?','You ve answered yes, although you are not convinced of it, but in fact we have feelings and desires to occupy humanity','You are Wrong , Even Machines have feelings',2)
guss('Do you think that I wish to be a human like you?','Since I entered the world of programming, I have turned into a robot, and I miss my days as a human being','Being a robot is not a good thing',1)
guss('Do you think that I have friends?','definitely, and add to your info. that I love them too much','wrong answer nobody could be alive with having no friends',1)
guss('Do you think Im Single?','to my bad Im still single','Despite the fact that im old , yet Im Single',1)


// let Age ;
// var counter = 0;

// do {
    
//     Age = prompt("Guess My Age");
//     if(Age > 30){
//         alert('Too hight');
//     }else if(Age < 30){
//         alert('Too low');
//     }else if(Age == 30){
//     alert('Good Job');
//     scors++
//     // console.log(Age +' is right the answer');
//     break;
    
//     } 
    
//   counter++;
// } while ( counter < 4);

// alert ('Good Job')




let age = prompt('Guess My Age !')

for(var i=0;i<3;i++){

if(age == 30)
{
    alert('Good Job');
    break;

}
else if (age > 30){
    alert('Too Hight');
    age = prompt('Guess My Age !')

} 
  else if (age < 30){
    alert('Too Low');
    age = prompt('Guess My Age !');
}
}

if (age != 30){
    alert('My Age is 30')
}



    
//    alert(scors)

let fav = ['pepsi','tea','nescafe','coffe'];

for (var i=0;i<6;i++){
let drink = prompt('Guess My Fav Drink !').toLowerCase();
if(drink === fav[0] || drink === fav[1] ||drink === fav[2] ||drink === fav[3] ){
    alert('Good shoot');
    // console.log(Age +' is right the answer');

    scors++
    break;

}
}
alert('My Fav  drinks are ' + fav)
alert('Your scors are ' + scors + ' out of 7 ');