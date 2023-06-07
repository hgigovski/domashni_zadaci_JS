//With Else if !

var year = parseInt(prompt("Type here how old are you and see you Chinese Zodiac:"));
var zodiacCalculation =parseInt((year - 4) / 12 );

if(zodiacCalculation == 0){
    console.log('You are  Rat in Chinese Zodiac');
}else if(zodiacCalculation == 1){
    console.log('You are  Ox in Chinese Zodiac');
}else if (zodiacCalculation == 2){
    console.log('You are  Tiger in Chinese Zodiac');
}else if (zodiacCalculation == 3){
    console.log('You are  Rabbit in Chinese Zodiac');
}else if (zodiacCalculation == 4){
    console.log('You are  Dragon in Chinese Zodiac');
}else if (zodiacCalculation == 5){
    console.log('You are  Snake in Chinese Zodiac');
}else if (zodiacCalculation == 6){
    console.log('You are  Horse in Chinese Zodiac');
}else if (zodiacCalculation == 7){
    console.log('You are  Goat in Chinese Zodiac');
}else if (zodiacCalculation == 8){
    console.log('You are  Monkey in Chinese Zodiac');
}else if (zodiacCalculation == 9){
    console.log('You are  Rooster in Chinese Zodiac');
}else if (zodiacCalculation == 10){
    console.log('You are  Dog in Chinese Zodiac');
}else{
    console.log('You are  Pig in Chinese Zodiac');
}


//With ternary operations !


var year1 = parseInt(prompt("Type here how old are you and see you Chinese Zodiac:"));
var zodiacCalculation1 =parseInt((year1 - 4) / 12 );

zodiacCalculation1 == 0 ? console.log('You are Rat in Chinese Zodiac') 
:zodiacCalculation1 == 1 ? console.log('You are Ox in Chinese Zodiac')
:zodiacCalculation1 == 2 ? console.log('You are  Tiger in Chinese Zodiac')
:zodiacCalculation1 == 3 ? console.log('You are  Rabbit in Chinese Zodiac')
:zodiacCalculation1 == 4 ? console.log('You are  Dragon in Chinese Zodiac')
:zodiacCalculation1 == 5 ? console.log('You are  Snake in Chinese Zodiac')
:zodiacCalculation1 == 6 ? console.log('You are  Horse in Chinese Zodiac')
:zodiacCalculation1 == 7 ? console.log('You are  Goat in Chinese Zodiac')
:zodiacCalculation1 == 8 ? console.log('You are  Monkey in Chinese Zodiac')
:zodiacCalculation1 == 9 ? console.log('You are  Rooster in Chinese Zodiac')
:zodiacCalculation1 == 10 ? console.log('You are  Dog in Chinese Zodiac')
:console.log('You are  Pig in Chinese Zodiac')



//With switch !

var year2 = parseInt(prompt("Type here how old are you and see you Chinese Zodiac:"));
var zodiacCalculation2 =parseInt((year2 - 4) / 12 );

switch(zodiacCalculation2){
   case 0: console.log('You are Rat in Chinese Zodiac');
   break;
   case 1: console.log('You are Ox in Chinese Zodiac');
   break;
   case 2: console.log('You are Tiger in Chinese Zodiac');
   break;
   case 3: console.log('You are Rabbit in Chinese Zodiac');
   break;
   case 4: console.log('You are Dragon in Chinese Zodiac');
   break;
   case 5: console.log('You are Snake in Chinese Zodiac');
   break;
   case 6: console.log('You are Horse in Chinese Zodiac');
   break;
   case 7: console.log('You are Goat in Chinese Zodiac');
   break;
   case 8: console.log('You are Monkey in Chinese Zodiac');
   break;
   case 9: console.log('You are Rooster in Chinese Zodiac');
   break;
   case 10: console.log('You are Dog in Chinese Zodiac');
   break;
   default: console.log('You are Pig in Chinese Zodiac');
   break;
}



