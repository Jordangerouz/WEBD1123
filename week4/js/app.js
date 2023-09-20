let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");

const words1 = new Array(
  "24/7",
  "multi-Tier",
  "30,000 foot",
  "B-to-B",
  "win-win"
);
const words2 = new Array(
  "empowered",
  "value-added",
  "oriented",
  "focused",
  "aligned"
);
const words3 = new Array(
  "process",
  "solution",
  "tipping-point",
  "strategy",
  "vision"
);

function makePhrase() {
  let rand1 = Math.floor(Math.random() * words1.length);
  let rand2 = Math.floor(Math.random() * words2.length);
  let rand3 = Math.floor(Math.random() * words3.length);
  let phrase = words1[rand1] + " , " + words2[rand2] + " , " + words3[rand3];
  paragraph.innerHTML = phrase;
}

//const contactcheck = new Object();
//contactcheck.firstname = "Jordan"
//this is how to create a constructor

const contactcheck = {
  firstname: "Jordan",
  lastname: "Pals",
  city: "townsville",
};

function getforminput() {
  let formContent = document.getElementById("form-content");

  //alert("you added some text");
  let firstName = document.getElementById("firstname");
  formContent.textContent = firstName.value;
  formContent.style.visibility = "block";
  //if (firstName.value === contactcheck.firstname) {
 //   alert("your firstname is " + firstName.value);
 // }
}
let button2 = document.getElementById("button2");
button2.addEventListener("click", getforminput);
