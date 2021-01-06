import { Students } from './Students';
import { Courses } from './Courses';


const onefirst = new Students(
    "SC18A447", "Shanks", [
        new Courses("CSC 205", 6, 90), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,87), new Courses("MAT 201",6,84), new Courses("ENG 101",2,75), new Courses("FRE 101",2,64), new Courses("CVE 100",4,64)
    ]
    );

const oneSecond = new Students(
    "SC18A430", "Black Beard", [
        new Courses("CSC 205", 6, 80), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,30), new Courses("MAT 201",6,64), new Courses("ENG 101",2,29), new Courses("FRE 101",2,64), new Courses("CVE 100",4,59)
    ]
    );

const oneThird = new Students(
        "SC18A424", "Katakuri", [
            new Courses("CSC 205", 6, 80), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,30), new Courses("MAT 201",6,64), new Courses("ENG 101",2,29), new Courses("FRE 101",2,64), new Courses("CVE 100",4,59)
        ]
    );

const oneFourth = new Students(
        "SC18A480", "Kaido", [
            new Courses("CSC 205", 6, 80), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,30), new Courses("MAT 201",6,64), new Courses("ENG 101",2,29), new Courses("FRE 101",2,64), new Courses("CVE 100",4,59)
        ]
);

export const StudentData:Students[] = [
    onefirst, oneSecond, oneThird, oneFourth
]; 

export const CalGpa = function(): number{
    //Run through the student data array
    for(let i = 0; i < StudentData.length; i++) {

      return  StudentData[i].calGPA();

        
    }
   
}


 //enter each student data array object and run through it to call on the fucntions for calculating GPA
   
    // for(let j = 0; j < StudentData[i].coursesArray.length; j++) {
        //     j
        // }