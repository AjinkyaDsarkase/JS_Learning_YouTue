// function display(){
//     console.log("Ajinkya");
// }

// function addTwoNumbers(num1, num2){
//     // let result = num1 + num2
//     // console.log("Result: ", result);
//     console.log("Ajinkya")
//     return num1 + num2
//     // console.log("Ajinkya")
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


// function logInUserName(username = "sam"){
//     // if(username === undefined){
//     if(!username){
//         console.log("Please enter username...");
//         return
//     }
//     return `${username} just logged in.`
// }
// console.log(logInUserName("Ajinkya"));


// function calculateCartPrice(...num){
//     // return num.reduce((acc,x) => acc+x, 0)
//     return num
// }
// console.log(calculateCartPrice(200, 300, 400));

// function calculateCartPrice(val1, val2, ...num){
//     // return num.reduce((acc,x) => acc+x, 0)
//     return num
// }
// console.log(calculateCartPrice(200, 300, 400, 500));


// let user = {
//     username : "Ajinkya",
//     age : 30
// }
// function userId(anyObject){
//     console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
// }
// userId({
//         username : "Ajinkya",
//         age : 30
// })


let myNewArray = [100, 200, 300, 400, 500]
function returnSecondValue(anyArray){
    return anyArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 5000]));

