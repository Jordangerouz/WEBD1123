// let a;
// let b;
// let c;
let a, b, c;
a = "User Name";
b = "Password";
c = "Email";
let name = "Tunji Akanbi";
// let stuff = [a, b, c]; array lteral
let stuff = new Array( a, b, c); //constructor array
stuff[0] = name;
console.log(stuff[0]);

function sayHello() {
    console.log("Hello " + name);
}
sayHello();

function getArea(width, height) { //width are parameters
    return width * height;
}
// let test = getArea(3, 5); //width are arguments
// console.log(test);
// console.log(getArea(4, 5));
wallWidth = 5;
wallHeight = 5;
//console.log(getArea(wallWidth, wallHeight));
function calculateArea(width, height) {
    let area = width * height;
    return area;
}
let wallone = calculateArea(3, 5);
let walltwo = calculateArea(8, 5);
console.log(wallone + " , " + walltwo);

function getSize(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}
let areaone = getSize(3,2,3)[0];
let volumeone = getSize(3,2,3);
console.log(areaone);
console.log(volumeone[1]);

let area = (
    function() {
        let width = 3;
        let height = 7;
        return width * height;
    }()
);
console.log(area)