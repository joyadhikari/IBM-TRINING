// //foreach

//  let aman = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

// // arr.forEach((index, element)=>{
//     // console.log(element, index)
//     // let ans =arr.forEach((el. i)=>{
//     //     return el
//     // });

// // console.log(ans)
// let ans =arr.map((el, i)=>{
//     return el*  40
// })

//  console.log(ans);

//filter
// let output = arr.filter((el, i)=>{
//     return el%5==0;
// }).map((el, index)=>{
//     return el*2;

// }).reduce((acc, el)=>{
//     return acc+el;

// })
// console.log(output)

// reduce

// let output = arr.reduce((acc,el)=>{
//     return acc+el
// }, 1);

// console.log(output)

// let arr = [3,5,1,8,5,34,90,67,45,34,89,100,23];

// let  ans = arr.sort((a,b)=>{return a-b});

// console.log(ans);

let data =[
    {name:"watch", price: 2000, desc:"good watch", rating:4},
    {name:"shoe", price: 1200, desc:"good shoe", rating:4.5},
    {name:"car", price: 2000000, desc:"good car", rating:5},
    {name:"phone", price: 25000, desc:"good phone", rating:4.2},
    {name:"laptop", price: 70000, desc:"good laptop", rating:4.8},
    {name:"headphone", price: 500, desc:"good headphone", rating:3},
    {name:"bag", price: 200, desc:"good bag", rating:5},

]
// data.sort((a,b)=>{
//     return a.price-b. price
// })

data.sort((a,b)=>{
    let nameA=a.name;
    let nameB=b.name;

    if(a.name<b.name){
        return-1;

    }
    if(nameA>nameB){
        return 1;
    }
})

console.log(data)