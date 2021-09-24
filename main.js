"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exam_1 = require("./Klassen/exam");
/*====================== Erstelle Teilprüfung 1 ================================================== */
const teilprüfung1 = new exam_1.Exam(1, 5, [], []);
/*====================== Füge initial Studenten hinzu ============================================ */
teilprüfung1.addStudent("Donald Duck");
teilprüfung1.addStudent("Dagobert Duck");
teilprüfung1.addStudent("Goofy Goof");
teilprüfung1.addStudent("Kater Karlo");
teilprüfung1.addStudent("Daisy Duck");
/*====================== Füge neuen Studenten hinzu ============================================== */
teilprüfung1.addStudent("Phantomias"); // Es sind keine Plätze mehr frei
/*======================= Füge Note für studenten hinzu ========================================== */
teilprüfung1.setStudentGrade("Donald Duck", "1.0");
teilprüfung1.setStudentGrade("Dagobert Duck", "1.3");
teilprüfung1.setStudentGrade("Goofy Goof", "2.6");
teilprüfung1.setStudentGrade("Kater Karlo", "");
teilprüfung1.setStudentGrade("Daisy Duck", "1.0");
teilprüfung1.setStudentGrade("Phantomias", "1.0"); // Kein Student mit diesem Namen gefunden
/*================================================================================================ */
/**Fügen Sie eine Methode ein (printExams), die die vorhandenen
   Prüfungen in die Konsole ausgibt (Nummer der Prüfung und
   Durchschnittsnote) (externeranzahl Methodenaufruf ). */
/*================================================================================================ */
/*======================= Gebe alles in Console aus ============================================== */
console.log(teilprüfung1.getExamNumber()); // Teilprüfung: 1
console.log(teilprüfung1.printStudents()); // Studenten: ...,...
