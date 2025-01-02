// forof()

// let arr = [1, 2, 3, 4, 5 ]

// for (const num of arr) {
//     console.log(num);
    
// }

// let greetings = "Hello World"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

//Maps

// let map = new Map()
// map.

// const map = new Map()
// map.set("In", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")
// map.set("In", "India")
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
    
// }

// const myObject = {
//     'game1' : "NFS",
//     'game2' : "Spiderman"
// }

// for (const [key, value] of myObject) {
//     console.log(key);
    
// }   //forof don't work on objects

const myObject = {
    js : "javaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}
//forin

// for (const key in myObject) {
//     // console.log(key);
//     // console.log(myObject[key]);
//     // console.log(`${key} shortcut for ${myObject[key]}`);
    
    
// }

// const arr = ["ajinkya", "subhash", "vinayak"]

// for (const key in arr) {
//     // console.log(key);
//     console.log(arr[key]);
    
    
// }


const map = new Map()
map.set("In", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("In", "India")

for (const key in map) {
    console.log(key);
    
} //map is not iterable


//foreach()

const coding = ["js", 'cpp', 'python', 'java', 'c']

// coding.forEach( function (item) {    //callback functions don't have names. 
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})