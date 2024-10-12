// why need oops concept -reduce this same work multiple time again and again and avoiding the extra copy of in memmory

// const stu1={
//     name:"ajit",
//     class:"4th",
//     marks:90,
//     getmarks:function(){
//     return    this.marks;
//     }
// }

// console.log(stu1.getmarks());


// const stu2={
//     name:"manjit",
//     class:"5th",
//     marks:50,
//     getmarks:function(){
//     return    this.marks;
//     }
// }

// console.log(stu2.getmarks());
// const stu3={
//     name:"sanjit",
//     class:"6th",
//     marks:80,
//     getmarks:function(){
//     return    this.marks;
//     }
// }
// console.log(stu3.getmarks());


// note:-each and every object in array has their own protopye property so they can access it


// 1.approach to resolove this concept -factory function
//its reduce the making multiple copy issue for object -its provide single copy and use it but it take space for each object again (prototype)

// factory function

// function factoryfunction(name,age){
//     const person={
//         name:name,
//         age:age,
//         type(){
//     console.log("hi this is ",this.name)
//         },
//     };
    
//     return person;
    
//     }
    
//     let p1=factoryfunction("ajit",34);
//     let p2=factoryfunction("mohan",33);


    //2nd:New operator


    //constructor:-doesn't return anything and start with capital letter


//    function Person(name,age){
// this.name=name;
// this.age=age;
//    }

//    Person.prototype.talk=function(){
//     console.log("hi this is ",this.name)
//    }


//    let p1=new Person("aman",22);
//    let p2=new Person("sohan",24);


//3rd :classed one more better approch

//class name should on capital letter
//constructor use as a keyword

// class Person{
//     constructor(name,age){
//         this.name=name,
//         this.age=age
//     }
//     talk(){
//         console.log(`hey man i am ${this.name}`);
//     }
// }

// let p1=new Person("adam",23);
// let p2=new Person("sudan",28);


//inheritance

//extend:-which help parent property access/inherit
//super:-is used to call parent constructor



class Student{
constructor(name,age,marks){
    //2nd parent class constructor call
    this.name=name,
    this.age=age,
    this.marks=marks
}

}


class Subject extends Student{
    constructor(name,age,marks,subject){
        //1st student class constructer call
        super(name,age,marks);//2nd parent class cunstructor call
        this.subject=subject;
    }
}

let s1=new Subject("mohan",32,55,"english");
let s2=new Subject("sohan",32,55,"english");
let s3=new Subject("rohan",32,55,"english");

console.log(s1,s2,s3)





