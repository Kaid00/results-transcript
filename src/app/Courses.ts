import { ClassMethod } from "@angular/compiler";


export class Courses {
    courseCode:string;
    creditValue:number;
    score:number;
    gradePoint:number
    letterGrade:string;
    coursePoint:number;

    constructor(crsCode:string, credVal:number, score:number){
        this.courseCode = crsCode;
        this.creditValue = credVal;
        this.score = score;
    };

    calCoursePoint() {
        if(this.score >= 80 && this.score <= 100) {
           this.gradePoint = 4.0;
           this.letterGrade = 'A';
        } else if (this.score >= 70 && this.score <= 79) {
            this.gradePoint = 3.5;
           this.letterGrade = 'B+';
        } else if (this.score >= 60 && this.score <= 69) {
            this.gradePoint = 3.0;
           this.letterGrade = 'B';
        } else if (this.score >= 55 && this.score <= 59) {
            this.gradePoint = 2.5;
           this.letterGrade = 'C+';
        } else if (this.score >= 50 && this.score <= 54) {
            this.gradePoint = 2.0;
           this.letterGrade = 'C';
        } else if (this.score >= 45 && this.score <= 49) {
            this.gradePoint = 1.5;
           this.letterGrade = 'D+';
        } else if (this.score >= 40 && this.score <= 44) {
            this.gradePoint = 1.0;
           this.letterGrade = 'D';
        } else if (this.score >= 0 && this.score <= 49) {
            this.gradePoint = 0.0;
           this.letterGrade = 'F';
        } 

        return this.coursePoint = this.creditValue * this.gradePoint;
    }

    // Getter for Credit value
    getCreditVal(){
        return this.creditValue;
    }

    getGradePoint(){
        return this.gradePoint;
    }

    
}