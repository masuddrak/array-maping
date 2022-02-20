const numbers=[2,4,6,8,10];
// const newNumber=[];
// for(const number of numbers){
//     const result=number*number;
//     newNumber.push(result);
// }
// console.log(newNumber)

// const squre=number=>number*number;
// for(const number of numbers){
//     const result=squre(number);
//     newNumber.push(result);
// }
// console.log(newNumber)
const squre=numbers.map(number=>number*number);
console.log(squre)