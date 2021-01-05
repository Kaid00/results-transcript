import { Students } from './Students';
import { Courses } from './Courses';


const onefirst = new Students("SC18A447", "neba", [new Courses("CSC 205", 6, 90), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,87), new Courses("MAT 201",6,84), new Courses("ENG 101",2,75), new Courses("FRE 101",2,64), new Courses("CVE 100",4,64)]);

const oneSecond = new Students("SC18A446", "Kalistus", [new Courses("CSC 205", 6, 80), new Courses("CSC 207",4,55), new Courses("CSC 209",6,66), new Courses("CSC 211",4,30), new Courses("MAT 201",6,64), new Courses("ENG 101",2,29), new Courses("FRE 101",2,64), new Courses("CVE 100",4,59)]);

export const studentData:Students[] = [
    onefirst, oneSecond
]; 




