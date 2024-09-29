//for each map filter find indexof
let arr = [1, 2, 3 ,4]
arr.forEach((x) =>{
    console.log(x + "hello");
})

let newArr = arr.map((x) => {
    return x * 3;//returns a new array wrt previous one
})
 console.log(newArr);

 let ans = arr.filter((x) => {
    if(x >= 3){
        return true;
    } 
 })
 console.log(ans)

 let ans2 = arr.find((x) => {
    if(x == 2) return x;
 })
 console.log(ans2)

 console.log(arr.indexOf(4))

 //objects
 let obj = {
    name: "vaishnavi",
    age: 20
 }
 console.log(obj.name)
 Object.freeze(obj);//it freezes the object, and obj can't be changed
 obj.age = 21;
 console.log(obj.age)

 //async js coding
 async function abcd() {
   let blob = await fetch(`https://randomuser.me/api/`);
   let res = await blob.json();
   console.log(ans.results[0].name);
 }
//whenever we have to run something async, we need to add async in front of it and we can use await inside
//this code will not stop our entire code to run