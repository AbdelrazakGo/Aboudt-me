'use strict';
var scors = 0;


let userName = prompt("Hello May I please have your name?") 
// console.log(userName)
alert ('Welcom  ' +  userName + '  It is Nice to have you here ')

alert("first we would like to play a Guessing Game Dont be worry it is a Yes No game so plz Hit Enter !")




function guss (quest , tru ,fls, wt){

let answer ;
do { answer = prompt(quest);
  
} while (answer != 'yes' && answer != 'no' && answer != 'y' && answer != 'n'); 
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



    


let fav = ['pepsi','tea','nescafe','coffe'];

for (var i=0;i<6;i++){
let drink = prompt('Guess My Fav Drink !').toLowerCase();
if(drink === fav[0] || drink === fav[1] ||drink === fav[2] ||drink === fav[3] ){
    alert('Good shoot');
    scors++
    break;

}
}
alert('My Fav  drinks are ' + fav)
alert('Your scors are ' + scors + ' out of 7 ');