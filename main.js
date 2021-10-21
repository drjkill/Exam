"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exam_1 = require("./Klassen/exam");
const exams_1 = require("./Klassen/exams");
console.log();
console.log("Ab hier beginnt Ausgabe von Exam / Teilprüfung");
console.log("==============================================");
const prüfung = new exams_1.Exams();
/*====================== Erstelle Teilprüfung 1 ================================================== */
const teilprüfung6 = new exam_1.Exam(6, 10, [], []);
/*====================== Füge initial Studenten hinzu ============================================ */
teilprüfung6.addStudent("Donald Duck");
teilprüfung6.addStudent("Dagobert Duck");
teilprüfung6.addStudent("Goofy Goof");
teilprüfung6.addStudent("Kater Karlo");
teilprüfung6.addStudent("Daisy Duck");
/*====================== Füge neuen Studenten hinzu ============================================== */
teilprüfung6.addStudent("Phantomias"); // Es sind keine Plätze mehr frei
/*======================= Füge Note für studenten hinzu ========================================== */
teilprüfung6.setStudentGrade("Donald Duck", 1.1);
teilprüfung6.setStudentGrade("Dagobert Duck", 2.2);
teilprüfung6.setStudentGrade("Goofy Goof", 3.3);
teilprüfung6.setStudentGrade("Kater Karlo", 4.4);
teilprüfung6.setStudentGrade("Daisy Duck", 5.5);
teilprüfung6.setStudentGrade("Phantomias", 0); // Kein Student mit diesem Namen gefunden
/*======================= Gebe alles in Console aus ==============================================*/
console.log(teilprüfung6.getExamNumber()); // Teilprüfung: 1
console.table(teilprüfung6.printStudents()); // Studenten: ...,...
teilprüfung6.meanGrade(); // Notendurchnitt:
teilprüfung6.bestGrade(); // Beste Note:
console.table(teilprüfung6.studentsWithGrade()); // Studenten mit Note:
teilprüfung6.bestStudents(); // Bester Student
console.table(teilprüfung6.printStudentsWithGrades());
/*=============================== EXAMS ================================*/
console.log();
console.log("Ab hier beginnt Ausgabe von Exams / Prüfung");
console.log("===========================================");
prüfung.getExam();
prüfung.indexOfExam(0);
prüfung.printExam();
prüfung.addExam(teilprüfung6);
console.table(prüfung.getExam());
prüfung.removeExam(1);
prüfung.removeExam(22);
