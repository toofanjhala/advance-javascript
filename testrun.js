// application of call method


// let obj1={ age:25}
// function sum(a,b,c){

//   return  this.age+a+b+c;

// }
// console.log(sum.call(obj1,12,2,1));




// application of apply method


// let obj1={ age:25}

// function sum(a,b,c){

//   return  this.age+a+b+c;

// }

// arr=[1,2,3]

// console.log(sum.apply(obj1,arr));





// application of bind method



// let obj1={ age:25}

// function sum(a,b,c){

//   return  this.age+a+b+c;

// }

// var bound =sum.bind(obj1);

// console.log(bound(2,9,3));





// application of object with this and bind method


// var student={age:20}
// function print(){

//     console.log(this.age)

// }



// var answer=print.bind(student)

// answer();







// currying by using bind method


// function multiply(x,y){
//     console.log(x*y)
// }

// var multiplybytwo= multiply.bind(this,2)
// multiplybytwo(5)

// var multiplybyfive= multiply.bind(this,5)
// multiplybyfive(5)





// currying by closure


// function multiply(x){
//     return function(y) {
//         console.log(x*y);
//     }
// }

// let multiplybytwo=multiply(2);
// multiplybytwo(5)



// let multiplybynine=multiply(9);
// multiplybynine(10)