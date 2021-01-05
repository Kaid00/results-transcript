import { importExpr } from "@angular/compiler/src/output/output_ast";

import {Courses} from './Courses';

export class Students {
    matNumber:string;
    studentName:string;
    coursesArray:Courses[];
    sumCoursePt:number;
    sumCreditVal:number;
    GPA:number;

    constructor(matNum:string, studName:string, courseAry:Courses[]){
        
        this.matNumber = matNum;
        this.studentName = studName;
        this.coursesArray = courseAry;
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
        return this.GPA = this.sumCoursePt / this.sumCreditVal;
     }
}