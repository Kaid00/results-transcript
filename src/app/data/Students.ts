import { importExpr } from "@angular/compiler/src/output/output_ast";

import {Courses} from './Courses';

export class Students {
    matNumber:string;
    studentName:string;
    coursesArray:Courses[];
    sumCoursePt:number;
    sumCreditVal:number;
    GPA:number;

    Course:Courses;
    

    constructor(matNum:string, studName:string, courseAry:Courses[]){
        
        this.matNumber = matNum;
        this.studentName = studName;
        this.coursesArray = courseAry;
        this.calGPA();
    };

    // Sum of Course Points
    calSumCoursePt(){
        
        this.sumCoursePt = 0;
         for(let i = 0; i < this.coursesArray.length; i++) {
             this.coursesArray[i].calCoursePoint();
             this.sumCoursePt += this.coursesArray[i].calCoursePoint();
         };
         return this.sumCoursePt;
     }
 // Sum of Credit Value
     calSumCreditVal(){
         this.sumCreditVal = 0;
         for(let i = 0; i < this.coursesArray.length; i++) {
            this.sumCreditVal += this.coursesArray[i].getCreditVal();
         };
         return this.sumCreditVal;
     }
 // GPA calculator
     calGPA(){
       this.calSumCreditVal();
       this.calSumCoursePt();
        this.GPA = this.sumCoursePt / this.sumCreditVal;
        return this.GPA.toFixed(2);
     }


// Get Course Code 
    // getCourseCode() {
    //     // for(let i = 0; i < this.coursesArray.length; i++) {

    //     //     this.things = [this.coursesArray[i]];
           
    //     // }
    //     // return this.things;

    // }

    getCCode1(){
         return this.Course = this.coursesArray[0];
    }

    getCCode2(){
        return this.Course = this.coursesArray[1];
    }

    getCCode3(){
        return this.Course = this.coursesArray[2];
    }

    getCCode4(){
        return this.Course = this.coursesArray[3];
    }

    getCCode5(){
        return this.Course = this.coursesArray[4];
    }

    getCCode6(){
        return this.Course = this.coursesArray[5];
    }

    getCCode7(){
        return this.Course = this.coursesArray[6];
    }

    getCCode8(){
        return this.Course = this.coursesArray[7];
    }
   
        
}




