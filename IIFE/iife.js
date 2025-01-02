// Immedietely Invoked Function Expression(IIFE)

// function  chai(){
//     console.log(`DB connected`);
// }
// chai()

//IIFE
//Named IIFE
(function  chai(){
    console.log(`DB connected`);
})();
//If you dont end the IIFE statement the error will occur so you need to put semicolon after IIFE function call.
//IIFE
((name) => {
    console.log(`DB connected two ${name}`);
})("Ajinkya");