// function add(a, b) {
//     let c = a+b;
//     console.log("This is a add Function");
//   //  console.log("Result = ",c);
//     return c;
// }
// const subtract = function(a, b) {
//     console.log("This is a Subtract Function");
//     let c = a-b;
//    // console.log("Result = ",c)
//     return c;
// }
// module.exports = {
//     add,
//     subtract
// }

exports.add = function (a, b) {
    let c = a+b;
    console.log("This is a add Function");
  //  console.log("Result = ",c);
    return c;
}
exports.subtract = function(a, b) {
    console.log("This is a Subtract Function");
    let c = a-b;
   // console.log("Result = ",c)
    return c;
}

