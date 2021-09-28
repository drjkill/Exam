"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var exam_1 = require("./Klassen/exam");
/*====================== Erstelle Teilprüfung 1 ================================================== */


var teilprüfung1 = new exam_1.Exam(1, 5, [], []);
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
teilprüfung1.setStudentGrade("Phantomias", 1.5); // Kein Student mit diesem Namen gefunden

/*================================================================================================ */

/**Fügen Sie eine Methode ein (printExams), die die vorhandenen
   Prüfungen in die Konsole ausgibt (Nummer der Prüfung und
   Durchschnittsnote) (externeranzahl Methodenaufruf ). */

/*================================================================================================ */

teilprüfung1.meanGrade();
teilprüfung1.bestGrade();
/*======================= Gebe alles in Console aus ============================================== */

console.log(teilprüfung1.getExamNumber()); // Teilprüfung: 1

console.log(teilprüfung1.printStudents()); // Studenten: ...,...

console.log(teilprüfung1.studentsWithGrade());
console.log(teilprüfung1.students[0]);
console.log(teilprüfung1.students[1]);
console.log(teilprüfung1.students[2]);
console.log(teilprüfung1.students[3]);
console.log(teilprüfung1.students[4]);
console.log(teilprüfung1.grades[0]);
console.log(teilprüfung1.grades[1]);
console.log(teilprüfung1.grades[2]);
console.log(teilprüfung1.grades[3]);
console.log(teilprüfung1.grades[4]);
teilprüfung1.students;