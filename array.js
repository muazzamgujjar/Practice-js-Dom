// // ARRAY METHODS
//  let num = [1,2,3,4,5]
//  let a =num.toString()
// //  a now a string 
//  console.log(a,typeof a)
//  let c = num.join
//  consol.log(c, typeof c)
// Number#2
// // pop is used to return the last element of array? 
// let r = num.pop()
// //  console.log(r)
//  0@Number#3
// //  Appends new elements to the end of an array, and returns the new length of array?
//  let  r = num.push(8,6,9)
//  console.log(r)
// NUMBER # 4,
// Removes the first element from an array and returns it.
//  let num = [1,2,3,4,5]
//  let a = num.shift()
//  consol.log(a)

// // If the array is empty, undefined is returned and the array is not modified.
// let r = [ ]
// let b = r.shift()
// console.log(b)

// NUMBER # 5,
// Inserts new elements at the start of an array,
// and returns the new length of the array.
// let g = [1,2,3,4,5]
// let h =g.unshift(3)
// console.log(g+(h))

// let num = [1,2,3,4,5]
//  delete num(0)
// conso
// // NUMBER # 6,
// // mbines two or more arrays. This method returns 
// // a new array without modifying any existing arrays.
//   let a = [ 1, 2, 3, 4, 5 ] 
// let b = [ 12, 32, 34, 54, 65 ]
//  let c = [ 122, 442, 553, 664, 577 ]
// let d = a.concat(b,c)
// console.log(d)

// // NUMBER # 7, sort?
// // Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. 
// // If omitted, the elements are sorted in ascending, ASCII character order.
// let num  = [ 82,32,21,2,75,65 ]
//  let b = num.sort()
// console.log(b)
// let a = [ 2,32,21,24,75,65 ]
// let b = [ 34,45,56,67,476 ]
// let compare = (a,b) =>{
//     return a-b
// }
// console.log(compare)

// NUMBER # 8, REVERS?
// let b = [ 34,45,56,67,476 ]
//  let c = b.reverse()
//  console.log(c)
//  OUTPUT
//  [ 476, 67, 56, 45, 34 ]

 // NUMBER # 8, SPLICE & SLICE?
 // let a = [ 1, 2, 3, 4, 5 ]
//    let b =[340,450,560,670,476]
// let c = b.SPLICE(2,3,102,103,104)
// console.log(c)
// let d = a.slice(2)
// console.log(d)
// BASIC CONCEPT:
// NUMBER # 1/ MAP: 
// :map,filter,redues.
// let arr = [45,46,78,35]
// let a = arr.map((value, index, array)=>{
//     console.log(value,index, array)
//   return value + 1
// })
// // console.log(a)
// let d = arr.forEach((element) => {
//     console.log(element)
    
// });
// NUMBER # 2/ FILTER: 
let arr2 = [45,46,78,35]
let a2 = arr2.filter((a)=>{
    return a<50
})
console.log(a2)
// NUMBER # 3 REDUCE:
// let b = [45,46,78,35]
// let d = b.reduce((h1,h2)=>{
//     return h1 + h2
// })
// console.log(b)
 
// CHAPTER # 5 PRACTICE SET:
// QUESTION # 1:
// Creat an array of number and take input from user to add number to this array?
// let arr = [1,2,3,4,54,5.6,76]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log (a)
// let age = prompt("What is your age?"); 
// console. log("You are "+age+" years old")


// QUESTION # 3:
// FILTER FOR NUMBER DIVISIBLE BY 10 FROM GIVEN ARRAY?
// let arr = [50,34,24,,30,80,12]
// let b = arr.filter((x) => {
// return x %10
// })
// console.log(b)

let a = ("Enter the value of a")
a = Number.parseInt(a)
a =prompt(  ) =>{

}










