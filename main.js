console.log("Hi (from seperated file)");

var name = "John";
var surName = "Doe";

console.log(name + " " + surName);

var schoolTeam = "Football";
var schoolNumber = 84;
var isRegistered = true;
var job;
job = "Student";

/*
var user = {
  name: "Johny",
  surName: "Doees",
  schoolTeam: "Football",
  schoolNumber: 2,
  isRegistered: true,
};

console.log(user);
*/

//*** *** /

var schoolName, hasCourse;
schoolName = "Basic Javascript";
hasCourse = true;

console.log("name:" + name + " " + schoolName + " " + hasCourse);

var userAge = prompt("How old is he?");
console.log("John is " + userAge + " year old.");

//*** Basic Math *** //

var totalDistance, distanceX, distanceY;
totalDistance = 20;
distanceX = 15;
distanceY = 10;

var distanceMath = totalDistance - distanceX;
var distanceMath2 = totalDistance - distanceY;

console.log(
  "Distance 1: " + distanceMath + " " + "Distance 2 : " + distanceMath2
);

//*** *** /

var isCloser = distanceMath < distanceMath2;
console.log("isCloser: " + isCloser);

var isCloser2 = distanceMath > distanceMath2;
console.log("isCloser2: " + isCloser2);

var isCloser3 = distanceMath <= distanceMath2;
console.log("isCloser3: " + isCloser3);

var isCloser4 = distanceMath >= distanceMath2;
console.log("isCloser4: " + isCloser4);

var isCloser5 = distanceMath != distanceMath2;
console.log("isCloser5: " + isCloser5);

var isCloser6 = distanceMath == distanceMath2;
console.log("isCloser6: " + isCloser6);

var isCloser6 = distanceMath === distanceMath2;
console.log("isCloser6: " + isCloser6);

//*** *** /

const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
console.log(a > 0 || b > 0);
