console.log("hello main js");

var greeting= 'You look terrific!';
console.log(greeting);

var hoursinYear= 24 * 365;
console.log("hours in a year is " + hoursinYear);

var minInDecade= (hoursinYear * 60) * 10;
console.log('Minutes in Decades ' + minInDecade);

var age= prompt("How old are you?");
var minInYear= ((hoursinYear * 60)* 60);
var eightYearsOld= minInYear * age;
console.log(eightYearsOld + " seconds old");

var veryWiseAge= 35;
if(age >= veryWiseAge) {
    console.log("you are very wise");
} else if(age <= 8){
    console.log("you are too young to be wise");

} else if (age <veryWiseAge){
    console.log("you aren't very wise");

}
var myNum= 1;
var mySecondNum= '2';
console.log(myNum + mySecondNum);

var myJunkDrawer= [3, 'dime', 'sock', true, null, '28', 'box of toothpicks'];


for (var i=0; i < myJunkDrawer.length; i++){
    console.log(myJunkDrawer[i]);

}

var mySong= {};
    mySong.title ="Welcome to the Jungle";
    mySong.artist ="Guns N Roses";
    mySong.genre ="Rock";
    mySong.award= ["first award ", "second award ", 'third award ']


console.log(mySong);