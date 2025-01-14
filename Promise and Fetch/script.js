// const promiseOne = new Promise (function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName : "example", email : 'abc@example.com'})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({userName : "example", email : 'abc@example.com'})
//         }else{
//             reject('Error: Something went wrong.')
//         }
//     }, 1000)
// })
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.userName
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);  
// }).finally(() => console.log('The Promise is either resolved or rejected'))



const promiseFIve = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName : "javascript", password : '123'})
        }else{
            reject('Error: JS went wrong.')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFIve
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()