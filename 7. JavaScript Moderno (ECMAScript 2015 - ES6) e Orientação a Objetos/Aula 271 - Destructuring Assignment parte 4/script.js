// array
//           0  1  2   3
let array = [10,20,30,40];

//   0     (1,2,3)
let [a, ...resto] = array;
// utilizou do spread

console.log(a, resto)


let obj = {
    a: 10,
    b:20,
    c:30,
    d:40
}

let {a:primeiro, ...restoDoObj} = obj

console.log(primeiro,restoDoObj)