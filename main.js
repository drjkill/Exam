"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exam_1 = require("./Klassen/exam");
/*====================== Erstelle Teilprüfung 1 ================================================== */
const prüfung = new exam_1.Exams();
const teilprüfung1 = new exam_1.Exam(1, 10, [], []);
const teilprüfung2 = new exam_1.Exam(1, 10, [], []);
/*====================== Füge initial Studenten hinzu ============================================ */
teilprüfung1.addStudent("Donald Duck");
teilprüfung1.addStudent("Dagobert Duck");
teilprüfung1.addStudent("Goofy Goof");
teilprüfung1.addStudent("Kater Karlo");
teilprüfung1.addStudent("Daisy Duck");
/*====================== Füge neuen Studenten hinzu ============================================== */
teilprüfung1.addStudent("Phantomias"); // Es sind keine Plätze mehr frei
/*======================= Füge Note für studenten hinzu ========================================== */
teilprüfung1.setStudentGrade("Donald Duck", 1.1);
teilprüfung1.setStudentGrade("Dagobert Duck", 2.2);
teilprüfung1.setStudentGrade("Goofy Goof", 3.3);
teilprüfung1.setStudentGrade("Kater Karlo", 4.4);
teilprüfung1.setStudentGrade("Daisy Duck", 5.5);
teilprüfung1.setStudentGrade("Phantomias", 0); // Kein Student mit diesem Namen gefunden
/*================================================================================================ */
/**Fügen Sie eine Methode ein (printExams), die die vorhandenen
   Prüfungen in die Konsole ausgibt (Nummer der Prüfung und
   Durchschnittsnote) (externeranzahl Methodenaufruf ). */
/*================================================================================================ */
/*======================= Gebe alles in Console aus ============================================== */
console.log(teilprüfung1.getExamNumber()); // Teilprüfung: 1
console.table(teilprüfung1.printStudents()); // Studenten: ...,...
teilprüfung1.meanGrade(); // Notendurchnitt:
teilprüfung1.bestGrade(); // Beste Note:
console.table(teilprüfung1.studentsWithGrade()); // Studenten mit Note:
teilprüfung1.bestStudents(); // Bester Student
console.table(teilprüfung1.printStudentsWithGrades());
/*=============================== EXAMS ================================*/
prüfung.addExams(teilprüfung1);
console.log(prüfung.exams);
prüfung.printExam();
