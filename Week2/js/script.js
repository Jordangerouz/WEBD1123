/*var heading1 = document.getElementById("heading1")
console.log(heading1);
heading1.innerHTML = "javascript rules!";*/
var paragraph = document.getElementById("paragraph");
paragraph.classList.add("hide");
var btn = document.getElementById("btn");
var content = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.";
function showparagraph() {

paragraph.innerHTML = content;
paragraph.classList.remove("hide")
}