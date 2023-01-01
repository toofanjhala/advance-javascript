



class student{
 static count=0;
    constructor(name,age,phn_no,boardmarks)
    {
        this.name=name;
        this.age=age;
        this.phn_no=phn_no;
        this.boardmarks=boardmarks;
        student.count=student.count+1;
    }

   numberofstudent(){
     console.log(student.count)

   }
        
    eligibilityForCollege(boardmarks){
          
        let result= this.boardmarks > 40? "eligible for college" : "not eligible for college";
        console.log(result);
    }

    eligibleforplacement(){
        if (this.boardmarks>40)
        {
            let checkage=()=>{
                if(this.age>20){
            
                console.log(`${this.name} congratulation for eligibility`);}
                else
                console.log("not eligible because of age below 20");
            }
            return checkage();
        }
        else
        console.log("not eligible beacuse of boardmarks less than 40");
    }
}




let candidate1= new student("rahul",25,25632563,45)

let candidate2= new student("rekha",18,25632563,30)

let candidate3= new student("kiran",19,25632563,43)

let candidate4= new student("himesh",26,25632563,48)

let candidate5= new student("amit",14,25632563,34)

//candidate1.numberofstudent();
//candidate4.eligibilityForCollege();
candidate1.eligibleforplacement();
candidate2.eligibleforplacement();
candidate3.eligibleforplacement();
candidate4.eligibleforplacement();
candidate5.eligibleforplacement();








