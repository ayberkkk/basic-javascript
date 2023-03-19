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

// //*** Basic Math *** //

var totalDistance, distanceX, distanceY;
totalDistance = 20;
distanceX = 15;
distanceY = 10;

var distanceMath = totalDistance - distanceX;
var distanceMath2 = totalDistance - distanceY;

console.log(
  "Distance 1: " + distanceMath + " " + "Distance 2 : " + distanceMath2
);

// //*** *** /

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

// //*** *** /

const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
console.log(a > 0 || b > 0);

// //*** *** /

var grade;
grade = 38;

if (grade < 40) {
  console.log("You can not go to next class.");
} else if (grade > 40 && grade < 50) {
  console.log("You can not go to next class but you can enter the exam.");
} else {
  console.log("You can go to next class.");
  ss;
}

var userGrade = prompt("Please enter grade: ");

if (userGrade < 40) {
  console.log("You can not go to next class.");
} else if (userGrade > 40 && userGrade < 50) {
  console.log("You can not go to next class but you can enter the exam.");
} else {
  console.log("You can go to next class.");
}

// //*** *** /

var gradeUser = 42;

gradeUser < 45
  ? console.log("You can not pass the class.")
  : log("You can pass the class");

var result = grade < 45 ? "failure" : "success";

console.log(result);

if (grade < 45) {
  result = "failure";
} else {
  result = "success";
}

// //*** *** /

var day;
day = "monday";
switch (day) {
  case "saturday":
    console.log("I like saturday");
    break;
  case "monday":
    console.log("I dont like monday");
    break;
  case "tuesday":
    console.log("I really like tuesday");
    break;
  default:
    console.log("I do not know the day");
    break;
}

//*** *** /

var gradeAlex = {
  grade1: 90,
  grade2: 80,
  grade3: 95,
};
var gradeSara = {
  grade1: 89,
  grade2: 76,
  grade3: 98,
};
var gradeNancy = {
  grade1: 42,
  grade2: 98,
  grade3: 83,
};

var totalGradeIndexAlex =
  (gradeAlex.grade1 + gradeAlex.grade2 + gradeAlex.grade3) / 3;
var totalGradeIndexSara =
  (gradeSara.grade1 + gradeSara.grade2 + gradeSara.grade3) / 3;
var totalGradeIndexNancy =
  (gradeSara.grade1 + gradeSara.grade2 + gradeSara.grade3) / 3;

console.log(
  "Alex : " +
    totalGradeIndexAlex +
    " " +
    "Sara: " +
    totalGradeIndexSara +
    " " +
    "Nancy " +
    totalGradeIndexNancy
);

if (
  totalGradeIndexAlex > totalGradeIndexSara &&
  totalGradeIndexAlex > totalGradeIndexNancy
) {
  console.log("Alex has the highest grade", totalGradeIndexAlex);
} else if (
  totalGradeIndexSara > totalGradeIndexAlex &&
  totalGradeIndexSara > totalGradeIndexNancy
) {
  console.log("Sara has the highest grade", totalGradeIndexSara);
} else if (
  totalGradeIndexNancy > totalGradeIndexSara &&
  totalGradeIndexNancy > totalGradeIndexNancy
) {
  console.log("Nancy has the highest grade", totalGradeIndexNancy);
} else {
  console.log("Maybe there is same avarage");
}
