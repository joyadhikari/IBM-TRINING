// // let name ="synchronous";

// // console.log(name);

// // let surName ="code";

// // console.log(surName);

// // setTimeout(()=>{
// //     console.log("synchronously syncing...1");
// // },2000);


// // setTimeout (() =>{
// //     console.log("synchronously syncing...2");

// // },0);

// // queueMicrotask(()=>console.log("Microtask syncing"));

// // for (let i =0; i<5; i++) {
// //     console.log(i);
    
// //     setTimeout(()=>{
// //         console.log(i);
// //     },1000);
// //     console.log(i)
// // }

// // console.log(name, surName);



// let myPromise = new Promise((resolve, reject)=>{
//     let flag = false;
//     if (flag){
//         resolve("promise resolve");
//     }
//     else{
//         reject("reject resolve");
//     }
// })

// console.log(myPromise);


 async function fetchData(){
   let {

  
    let data = await fetch("https://fakestoreapi.com/products");
   
    let ans = await data.json()

    } console.log(ans);{
        
    }

    
}
 
fetchData();
