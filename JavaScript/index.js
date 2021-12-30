// let name="K";
// var age="19";
// if(age>18){
//     let name="Ka";
//     console.log(name);
// }
// console.log(name)

// Objects

// let employee={
//     name:"K",
//     designation:"Jr. Software Developer",
//     salary:"4LPA",
//     mobile:"9876543210"
// }
// console.log(employee.mobile)

//Arrays

// let employee=["C","S","K","N"];
// console.log(employee[0])

// Alerts

// alert("Registration is complted Succesfully")
// let num=prompt("Enter Username")
// console.log(num)

// confirm("Are You Sure about that")

// Control Statements

// console.log("Welcome")
// console.info("Hello")
// console.warn("Check It Once Again")
// console.error("Error!!!")

// Spread Operator

// let e_mks=[1,2,3,4]
// let i_mks=[5,4,3,2,1]
// let rst=[9,i_mks]
// let final=[...e_mks,...i_mks]
// console.log(final)
// console.log(rst)

// Rest Parameter

// function addition(x,y,...remaindata)
// {
//     console.log(x,y);
//     console.log(y);
//     console.log(remaindata)
//     console.log(typeof(remaindata))
// }
// console.log(addition(2,3,4,5,6,7,8,))

// Destructuring of Array

// let employee=["K","C","S","N"]
// let name1 = employee[0]
// let name2 = employee[2]
// console.log(name1)
// console.log(name2)

// let [k,c,...data]=employee
// console.log(k)
// console.log(c)
// console.log(data)




// let employee={
//     name:"K",
//     designation:"Jr. Software Developer",
//     salary:"4LPA",
//     mobile:"9876543210"
// }

// let{name,...rd}=employee
// console.log(employee.name)
// console.log(employee.designation)
// console.log(rd)

//Functions

// let demo = function(x,y){
//     return x+y
// }
// console.log(demo(2,3))

// let demo = (x,y)=>{
//     return x*y
// }
// console.log(demo(2,3))

// SetTimeOut function

// setTimeout(function(){
//     console.log("Welcome")
// },3000)

// let employee=["C","S","K","N"]

// for(let i=0;i<employee.length;i++){
//     console.log(employee[i])
// }

let employee=["C","S","K","N"]

// for(let i in employee){
//     console.log(employee[i])
// }

// for(let i of employee){
//     console.log(i)
// }

// employee.forEach(function(element,index)
// {
//     console.log(index,element+" Okay")
// })

// let result=employee.map(function(element,index)
// {
//     return index,element+" Okay"
// })
// console.log(result)