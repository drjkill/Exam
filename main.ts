import { Exam } from "./Klassen/exam";
import { Exams } from "./Klassen/exams";

console.log()
console.log("Ab hier beginnt Ausgabe von Exam / Teilprüfung");
console.log("==============================================")

const prüfung = new Exams()

/*====================== Erstelle Teilprüfung 1 ================================================== */
const teilprüfung1 = new Exam(1,10,[],[]);
const teilprüfung2 = new Exam(2,10,[],[]);
const teilprüfung3 = new Exam(3,10,[],[]);
const teilprüfung4 = new Exam(4,10,[],[]);
const teilprüfung5 = new Exam(5,10,[],[]);
const teilprüfung6 = new Exam(6,10,[],[]);
const teilprüfung7 = new Exam(7,10,[],[]);
const teilprüfung8 = new Exam(8,10,[],[]);
const teilprüfung9 = new Exam(9,10,[],[]);
const teilprüfung10 = new Exam(10,10,[],[]);
const teilprüfung11 = new Exam(11,10,[],[]);



/*====================== Füge initial Studenten hinzu ============================================ */
teilprüfung1.addStudent("Donald Duck");
teilprüfung1.addStudent("Dagobert Duck");
teilprüfung1.addStudent("Goofy Goof");
teilprüfung1.addStudent("Kater Karlo");
teilprüfung1.addStudent("Daisy Duck");

/*====================== Füge neuen Studenten hinzu ============================================== */
teilprüfung1.addStudent("Phantomias");                      // Es sind keine Plätze mehr frei

/*======================= Füge Note für studenten hinzu ========================================== */
teilprüfung1.setStudentGrade("Donald Duck",1.1);
teilprüfung1.setStudentGrade("Dagobert Duck",2.2);
teilprüfung1.setStudentGrade("Goofy Goof",3.3);
teilprüfung1.setStudentGrade("Kater Karlo",4.4);
teilprüfung1.setStudentGrade("Daisy Duck",5.5);
teilprüfung1.setStudentGrade("Phantomias",0);             // Kein Student mit diesem Namen gefunden

/*======================= Gebe alles in Console aus ============================================== 
console.log(teilprüfung1.getExamNumber());      // Teilprüfung: 1
console.table(teilprüfung1.printStudents());      // Studenten: ...,...
teilprüfung1.meanGrade();                       // Notendurchnitt:
teilprüfung1.bestGrade();                       // Beste Note:
console.table(teilprüfung1.studentsWithGrade());  // Studenten mit Note:
teilprüfung1.bestStudents();                    // Bester Student
console.table(teilprüfung1.printStudentsWithGrades())*/


/*=============================== EXAMS ================================*/
console.log()
console.log("Ab hier beginnt Ausgabe von Exams / Prüfung");
console.log("===========================================")
prüfung.addExam(teilprüfung1);
prüfung.addExam(teilprüfung2);
prüfung.addExam(teilprüfung3);
prüfung.addExam(teilprüfung4);
prüfung.addExam(teilprüfung5);
prüfung.addExam(teilprüfung6);
prüfung.addExam(teilprüfung7);
prüfung.addExam(teilprüfung8);
prüfung.addExam(teilprüfung9);
prüfung.addExam(teilprüfung10);
prüfung.getExam()
prüfung.indexOfExam(0)
prüfung.printExam()
prüfung.addExam(teilprüfung1);
//console.table(prüfung.getExam());
prüfung.removeExam(1);
prüfung.removeExam(22);

