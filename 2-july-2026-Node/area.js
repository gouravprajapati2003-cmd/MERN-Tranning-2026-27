// area of circle
const circle = (r) => {
    console.log("This is Circle Function")
    let a = 3.14 * r * r;
    return a;
}
// area of rectangle 
const rectangle = (l, b) => {
    console.log("This is Circle Rectangle")
    let a = l*b;
    return a;
}
// area of right angle triangle
const triangle = (b, h) => {
    console.log("This is Circle Triangle")
    let a = 1/2*(b*h);
    return a;
}
module.exports = {
    circle,
    rectangle,
    triangle
}