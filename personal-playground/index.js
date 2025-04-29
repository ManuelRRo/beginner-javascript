// // // // //varible name
// // // // const usjfdasdf = 42;
// // // // //Camel case
// // // // const iLoveCoffe = "espresso";

// // // // //UpperCamelCase
// // // // const ILikeToDance = false;

// // // // //Snake case
// // // // const snake_case = 'cool';

// // // // //Kebab is not allow in variables
// // // // //const hello-keba = 3;


// // // // const rotateArray = (arr, n) => {
// // // //     const arrCopy = [...arr];
    
// // // //     for(let i = 0;i <= n;i++){
// // // //         arrCopy.unshift(arrCopy.pop());
// // // //     }
// // // //     return arrCopy;
// // // // };

// // // const rotateArray = (arr, n) => {
// // //     const arrCopy = [...arr];
// // //     if(n === 0){
// // //         return arrCopy;
// // //     }else if( n > arrCopy.length){
// // //         for(let i = 0;i < n;i++){
// // //             arr.unshift(arr.pop());
// // //         }
// // //         return arrCopy;
// // //     }else if(n < arrCopy.length){
// // //         for(let i = 0;i <= n;i++){
// // //             arr.unshift(arr.pop());
// // //         }
// // //         return arrCopy
// // //         }

// // //     return arrCopy;
// // // };
// // // console.log(rotateArray([1,2,3],5));   
// // // console.log(rotateArray([1,2,3,4,5],7));

// // // //objects
// // // let age = 100
// // // //////////////////////////////////////
// // // const person = {
// // //     age: 100,
// // //     name: 'wes',
// // // };
// // // //////////////////////////////////////
// // // const person1 = {
// // //     age: age,
// // //     name: 'wes',
// // //     'cool-dude': true,
// // //     'really cool': false,
// // //     '777': true

// // // }

// // // console.log(person);
// // // console.log(person1);
// //const numbers = [1,2,3,4,5];
// //const numbers = [1,2,3];
// // let numberPop;

// // numberPop = numbers.pop();
// // numbers.unshift(numberPop);


// // console.log(numbers);
// // console.log(numberPop);

// // numberPop = numbers.pop();

// // console.log(numbers);
// // console.log(numberPop);

// // console.log(numbers.unshift(numbers.pop()));
// // console.log(numbers);
// // console.log(numbers.unshift(numbers.pop()));
// // console.log(numbers);
// // console.log(numbers.unshift(numbers.pop()));
// // console.log(numbers);
// // console.log(numbers.unshift(numbers.pop()));
// // console.log(numbers);
// // console.log(numbers.unshift(numbers.pop()));
const numbers0 = [1,2,3,4,5];
const numbers1 = [1,2,3];
// const rotateArray = (arr, n) => {
//     const arrCopy = [...arr];
//     console.log('iterations ' + n);
//     for(let i = 0;i < n; i++){
//         arrCopy.unshift(arrCopy.pop());
//         console.log(`${i}:`+ arrCopy);
//     }
//     console.log("--------------------------------------------------")
//     return arrCopy;
// };

const factorialChain = (length, lastDigits) => {
    let factorial = 1;
    let sumFactorialResult = 0;

    for (let i = 1; i <= length; i++) {
        factorial *= i;
        sumFactorialResult += factorial;
    }

    const sumStr = sumFactorialResult.toString();
    const lastPart = sumStr.slice(-lastDigits); // toma los últimos 'lastDigits'
    return lastPart.padStart(lastDigits, "0"); // rellena con ceros si es necesario
};

console.log(factorialChain(5,3));
factorialChain(3,6);

