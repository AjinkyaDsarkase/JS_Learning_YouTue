// const coding = ["js", 'cpp', 'python', 'java', 'c']

// const value = coding.forEach( (item)=> {
//     // console.log(item);
//     return item
// } )
// console.log(value);

// "forEach returns nothing"


// filter()
// const myNums = [1, 2, ,3 ,4 , 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )
// const newNums = myNums.filter( (num) => (num > 4) )
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


// map()
// const myNums = [1, 2, ,3 ,4 , 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num * 10).map((num) => num + 1).filter( (num) => num > 40)

// console.log(newNums);


// reduce()
// const myNums = [1, 2, 3]

// const intialValue = 0
// const result = myNums.reduce(function (acc, curval) {
//     console.log(`accumulator : ${acc} , current value : ${curval}`);
//     return acc + curval
// }, 0)
// // const result = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue , intialValue)
// console.log(result);


const shoppingCart = [
    {
        itemName : 'js course',
        price : 5999
    },
    {
        itemName : 'java course',
        price : 6999
    },
    {
        itemName : 'python course',
        price : 3999
    },
    {
        itemName : 'ml course',
        price : 15999
    },
]

// const totalPrice = shoppingCart.map( (pr) => pr.price ).reduce( (acc, crr) => acc + crr , 0)
const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price , 0)
console.log(totalPrice);
