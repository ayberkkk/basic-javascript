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

// *** JavaScript Exercises  *** //

// ********************** //

//pathname

/*
console.log(document.location.pathname);

console.log(document.body);
console.log(document.body);

document.body.style.backgroundColor = "#f5f5f5";

// var h2 = document.getElementsByTagName("h2");
// console.log(h2.title.innerHTML);

var title = document.getElementById("title");
title.innerHTML = "DOM manipulation";
console.log(title.innerHTML);

var link = document.querySelector("ul#list>li>a");
link.innerHTML += "erisildi";
link.style.color = "red";
link.classList.add("active");

*/
// ********************** //

// var userName = prompt("User name : ");

// let userDesc = document.querySelector("#userDesc");
// userDesc.innerHTML = `${userDesc.innerHTML} <small>${userName}</small>`;

// ********************** //

/*
let lastItem = document.querySelector("ul#list>li:last-child");
lastItem.innerHTML = "son oge degistirildir";

let firstItem = document.querySelector("ul#list>li:first-child");
firstItem.innerHTML = "ilk oge degistirildir";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "bir oge eklendi";

//  ulDOM.append(liDOM); en sona ekler

ulDOM.prepend(liDOM); //en başa ekler
*/
// ********************** //
/*
let userDesc = document.querySelector("#userDesc");
userDesc.classList.add("primary");
*/

// ********************** //

/* 

let price = "100";
let user = "guest";

console.log(price == 1);
console.log(price == 100);

console.log(price === 1);
console.log(price === 100);

console.log(price != 1);

console.log(price != 100 && user == "guest");

console.log(price != 100 || user == "guest"); 

*/

// ********************** //

/*

let userName = prompt("Username: ");
let age = prompt("Age: ");
let userInfo = document.querySelector("#info");

if (userName && age >= 18) {
  userInfo.innerHTML = `welcome ${userName}, araba sürebilirsin`;
} else if (!userName) {
  userInfo.innerHTML = "Kullanici adiniz yok";
} else if (!(age >= 18)) {
  userInfo.innerHTML = "Yas girilmemis ya da 18'den kücüksün";
}
userName.length > 0 ? console.log("true") : console.log("false");

*/

// ********************** //

/*

let userName = prompt("Username: ");
let userInfo = document.querySelector("#info");

// userInfo.innerHTML = `${userName.length > 0 ? userName : "Kullanici adiniz yok"}`;

userInfo.innerHTML = `${userName ? userName : "Kullanici adiniz yok"}`;

*/

// ********************** //

/*

let examGrade = prompt("examGrade: ");
let userInfo = document.querySelector("#info");
let textInfo;

const smile = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
  </svg>
`;

const sad = ` 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`;

if (examGrade >= 0 && examGrade <= 100) {
  textInfo = smile;
  userInfo.classList.add('text-primary');
  if (examGrade >= 90) {
    textInfo += " AA";
  } else if (examGrade >= 85) {
    textInfo += " BA";
  } else if (examGrade >= 80) {
    textInfo += " BB";
  } else if (examGrade >= 75) {
    textInfo += " CB";
  } else if (examGrade >= 70) {
    textInfo += " CC";
  } else if (examGrade >= 65) {
    textInfo += " CD";
  } else if (examGrade >= 60) {
    textInfo += " DD";
  } else if (examGrade >= 50) {
    textInfo += " FD";
  } else if (examGrade < 50) {
    textInfo= `${sad} FF`;
    userInfo.classList.remove('text-primary');
    userInfo.classList.add('text-danger');
  }
} else {
  textInfo = "Bilgiler Doğru Değil !  ";
}

userInfo.innerHTML = `${textInfo} ->  ${examGrade}`;

*/

// ********************** //
/*

const userName = prompt("Kullanıcı adınızı giriniz : ");
let userInfo = document.querySelector("#info");
let date = document.querySelector("#getDate");
const now = new Date(); // Şu anki tarih ve saat bilgisini alır
const hour = now.getHours(); // Saat bilgisini alır
const minute = now.getMinutes(); // Dakika bilgisini alır
const second = now.getSeconds(); // Saniye bilgisini alır

if (userName.length > 0) {
  date.innerHTML = `${hour}:${minute}:${second}`;
  userInfo.innerHTML = `Merhabalar ${userName} Hoş geldin !! `;
} else {
  date.innerHTML = `${hour}:${minute}:${second}`;
  userInfo.innerHTML = "Kullanıcı adiniz yokk !!!";
}

*/

// ********************** //

// function hello() {
//   console.log("hi");
// }

// function customFunction() {
//   console.log("customFunction");
//   hello();
// }

// customFunction();

// function userCheck() {
//   if (userName && age >= 18) {
//     userInfo.innerHTML = `welcome ${userName}, araba sürebilirsin`;
//   } else if (!userName) {
//     userInfo.innerHTML = "Kullanici adiniz yok";
//   } else if (!(age >= 18)) {
//     userInfo.innerHTML = "Yas girilmemis ya da 18'den kücüksün";
//   }
// }

// ********************** //

// let firsName = "Lorem";

// function greetings(firsName = "") {
//   // console.log(`Merhaba ${firsName ? firsName : " "}`);
//   console.log(`Merhaba ${firsName}`);
// }

// greetings("name");

// function domID(id, info) {
//   let domObject = document.querySelector(`#${id}`);
//   domObject.innerHTML = info;
// }

// domID("info", "not yet ;)");

// ********************** //

// let info = document.querySelector("#info");
// // info.addEventListener("click", function () {
// //   console.log("tiklandi");
// // });
// info.addEventListener("click", domClick);

// function domClick() {
//   console.log("tikladi");
//   console.log((this.innerHTML = "bilgi atandi"));
//   return;
// }

// ********************** //

// let counter = localStorage.getItem("counter")
//   ? Number(localStorage.getItem("counter"))
//   : 0;
// let counterDOM = document.querySelector("#counter");
// let increaseDOM = document.querySelector("#increase");
// let decreaseDOM = document.querySelector("#decrease");

// counterDOM.innerHTML = counter;
// increaseDOM.addEventListener("click", domClick);
// decreaseDOM.addEventListener("click", domClick);

// increaseDOM.addEventListener("click", () => {
//   if ((this.id = "increase")) {
//     counterDOM.innerHTML = counter += 1;
//   } else {
//     counterDOM.innerHTML = counter -= 1;
//   }
// });
// decreaseDOM.addEventListener("click", () => {
//   if ((this.id = "decrease")) {
//     counterDOM.innerHTML = counter -= 1;
//   } else {
//     counterDOM.innerHTML = counter += 1;
//   }
// });

// function domClick() {
//   this.id == "increase" ? (counter += 1) : (counter -= 1);
//   localStorage.setItem("counter", counter);
//   counterDOM.innerHTML = counter;
// }

// ********************** //

// let user = {
//   userName: "lorem ipsum.",
//   isActive: true,
// };S
// console.log(user);
// localStorage.setItem("userInfo", JSON.stringify(user));

// let userInfo = JSON.parse(localStorage.getItem("userInfo"));
// console.log(userInfo);

// ********************** //

// let user = ["lorem", "ipsum", "dolor"];
// const userListDOM = document.querySelector("#list-group");

// for (let i = 0; i < user.length; i++) {
//   const liDOM = document.createElement("li");
//   liDOM.innerHTML = user[i];
//  userListDOM.appendChild(liDOM);
// }

const loremList = ["lorem", "ipsum", "dolor"];

let counter = 0;

// for (; counter < 10; counter++) {
//   console.log(counter);
//   if (counter === 5) {
//     break;
//   }
// }

// for (; counter < 10; counter++) {
//   if (counter === 5) {
//     continue;
//   }
//   console.log(counter);
// }

// const ulDOM = document.querySelector("#list-group");

// let index = 0;
// for (; index < loremList.length; index++) {
//   if (loremList[index] === "ipsum") {
//     break;
//   }
//   let liDOM = document.createElement("li");
//   liDOM.innerHTML = loremList[index];
//   ulDOM.append(liDOM);
// }
// ********************** //

// while (counter < 10) {
//   console.log(counter);
//   counter++;
// }

// let userName = "";

// while (!userName) {
//   userName = prompt("Username");
//   console.log(userName);
// }

// ********************** //

const products = [
  "laptop",
  "ipad",
  "phone",
  "tablet",
  "mouse",
  "keyboard",
  "switches",
  "mac",
  "speaker",
];

// products.forEach((product, index, array) => {
//   console.log((array[index] = product + "11"));
// });

// products.forEach((product, index, array) => {
//   array[index] = `${product.toUpperCase()}`;
// });

// console.log(products);

// const ulDOM = document.querySelector("#list-group");
// products.forEach((item) => {
//   const liDOM = document.createElement("li");
//   liDOM.innerHTML = item;
//   ulDOM.append(liDOM);
// });

// ********************** //

// const new_products = products.filter((item) => item.length > 5);
// console.log(new_products);

// const users = [
//   { fullName: "Ayberk Tığlı", email: "ayberk@gmail.com", isActive: true },
//   { fullName: "Hatice Tığlı", email: "Hatice@gmail.com", isActive: false },
//   { fullName: "Hüseyin Tığlı", email: "Hüseyin@gmail.com", isActive: true },
//   { fullName: "Behiye Tığlı", email: "behiye@gmail.com", isActive: false },
// ];

// // const active_users = users.filter((user) => user.isActive === true);
// const active_users = users.filter((user) => user.isActive); //zaten true bir işlem false ise belirtmek gerekir.
// console.log(active_users);

// ********************** //

// const users = ["Ali", "Velik", "Ayşe", "Fatma"];

// const new_users = users.map((user) => user.toLowerCase());
// console.log(new_users);

// // const users_obj = users.map((item) => {
// //   return {
// //     userName: item,
// //     shortName: `${item[0]}`,
// //     newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
// //   };
// // });

// const users_obj = users.map((item) => ({
//   userName: item,
//   shortName: `${item[0]}`,
//   newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
// }));

// console.log(users_obj);

// ********************** //

const form = document.querySelector("#todoForm");
const input = document.querySelector("#to-do-input");
const list = document.querySelector("#list-group");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    // Yeni öğeyi yapılacak listesine ekle
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      item.classList.toggle("completed");
      updateLocalStorage();
    });
    const span = document.createElement("span");
    span.textContent = text;
    const button = document.createElement("button");
    button.textContent = "Sil";
    button.addEventListener("click", () => {
      item.remove();
      removeFromLocalStorage(text);
    });
    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(button);
    list.appendChild(item);

    // Yeni öğeyi localStorage'a kaydet
    addToLocalStorage(text);

    // Input alanını temizle
    input.value = "";
  } else {
    alert("Please enter something to do.");
  }
});

function addToLocalStorage(text) {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}

function removeFromLocalStorage(text) {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  const index = items.indexOf(text);
  if (index > -1) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
  }
}

function updateLocalStorage() {
  const items = [];
  list.querySelectorAll("li span").forEach((span) => {
    items.push(span.textContent);
  });
  localStorage.setItem("items", JSON.stringify(items));
}

// Sayfa yüklendiğinde localStorage'dan öğeleri al ve sayfaya ekle
document.addEventListener("DOMContentLoaded", () => {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  items.forEach((text) => {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      item.classList.toggle("completed");
      updateLocalStorage();
    });
    const span = document.createElement("span");
    span.textContent = text;
    const button = document.createElement("button");
    button.textContent = "Sil";
    button.addEventListener("click", () => {
      item.remove();
      removeFromLocalStorage(text);
    });
    item.appendChild(checkbox);
    item.appendChild(span);
    item.appendChild(button);
    list.appendChild(item);
  });
});

// ********************** //

// let arrayObj = [1, 2, 3];
// let object = { obj: 1 };

// console.log("arrayObj", typeof arrayObj);
// console.log("object", typeof object);

// let item = new Object();
// let item2 = {};

// console.log("item", typeof item);
// console.log("item2", typeof item2);

// ********************** //

// let laptop1 = {
//   brand: "ASUS",
//   model: "TUF-504",
//   inc: 15.6,
//   weight: 1,
// };

// console.log(laptop1);

// laptop1.version = "1.5.4";
// console.log(laptop1);

// keys = Object.keys(laptop1);
// console.log(keys);
// console.log(Object.keys(laptop1));

// keys.forEach((key) => {
//   console.log(key);
//   console.log(laptop1[key]);
// });

// console.log(Object.values(laptop1));

// let values = Object.values(laptop1);

// values.forEach((value) => {
//   console.log("value : ", value);
// });

// ********************** //

// let user1 = {
//   firstName: "John",
//   lastName: "Doe",
//   score: [1, 2, 3, 4],
//   isActive: true,
//   shortNameFunct: function () {
//     return `${this.firstName[0].toUpperCase()}`;
//   },
// };

// ********************** //

// let settings = {
//   userName: "loremIpsum",
//   password: "1234567890",
//   isActive: true,
//   ip: "127.0.0.1",
//   serverName: "localhost:5500",
// };

// let { userName, password, isActive, ip: serverIP, serverName } = settings;
// console.log(userName, password, isActive, serverIP, serverName);

// let {
//   userName: userName2,
//   password: password2,
//   isActive: isActive2,
//   ...newSettings
// } = settings;

// // let settings2 = settings;

// // settings2.userName = "degisenBilgi";
// // console.log("settings : " ,  settings);
// // console.log("settings2 : " ,  settings2);

// let settings2 = { ...settings };
// settings2.userName = "degisenBilgi";
// console.log("settings : ", settings);
// console.log("settings2 : ", settings2);

// ********************** //
// let items ;

// try {
//   items.forEach(element => {
//     console.log(element);
//   });
// } catch (error) {
//   alert(error.message);
// }

// ********************** //

/*

fetch("data/setting.json")
  .then((response) => {
    return response.json();
  })
  .then((respomseJson) => {
    console.log(respomseJson);
  });

let userListDOM = document.querySelector("#list-group");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.forEach((element) => {
      let liDOM = document.createElement("li");
      liDOM.innerHTML = element.title;
      userListDOM.appendChild(liDOM);
    });
  });

  */
