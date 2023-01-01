// this in global variable

// var school ="global public school"
// console.log(this.school)

// this in object 

// var school = {
//     class:11,
//     totalstudent(){
//         console.log( `${this.class} have 400 students`)
//     }
// }
// school.totalstudent();



 //this inside a function by using call back function
//  let student={male:40,female:60}

//  function totalstudent(){
//     console.log(`${this.male+ this.female}`)
//  }

//  totalstudent.call(student);


 //function inside a function 

 let student={male:40,female:60}

 function totalstudent(){
    //var that=this

    function innerfunction(){
        console.log(`${this.male+ this.female}`)
    }
    innerfunction.call(this);

 }

 totalstudent.call(student);




// class student{
//  static count=0;
//     constructor(name,age,phn_no,boardmarks)
//     {
//         this.name=name;
//         this.age=age;
//         this.phn_no=phn_no;
//         this.boardmarks=boardmarks;
//         student.count=student.count+1;
//     }

//    numberofstudent(){
//      console.log(student.count)

//    }
        
//     eligibilityForCollege(boardmarks){
          
//         let result= this.boardmarks > 40? "eligible for college" : "not eligible for college";
//         console.log(result);
//     }
// }




// let candidate1= new student("rahul",25,25632563,45)

// let candidate2= new student("rekha",18,25632563,30)

// let candidate3= new student("kiran",23,25632563,40)

// let candidate4= new student("himesh",26,25632563,48)

// let candidate5= new student("amit",25,25632563,4)

// candidate1.numberofstudent();
// candidate4.eligibilityForCollege();