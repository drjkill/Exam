"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exam_1 = require("./Klassen/exam");
/*====================== Erstelle Teilprüfung 1 ================================================== */
const teilprüfung1 = new exam_1.Exam(1, 5, []);
/*====================== Füge initial Studenten hinzu ============================================ */
teilprüfung1.students.push("Donald Duck");
teilprüfung1.students.push("Dagobert Duck");
teilprüfung1.students.push("Goofy Goof");
teilprüfung1.students.push("Kater Karlo");
teilprüfung1.students.push("Daisy Duck");
/*====================== Füge neuen Studenten hinzu ============================================== */
teilprüfung1.addStudent("Phantomias");
/*======================================================================== */
/**Fügen Sie eine Methode ein (printExams), die die vorhandenen
   Prüfungen in die Konsole ausgibt (Nummer der Prüfung und
   Durchschnittsnote) (externer Methodenaufruf ). */
/*======================================================================== */
/*======================= Gebe alles in Console aus ============================================== */
console.log(teilprüfung1.getExamNumber());
console.log(teilprüfung1.getAnzahlTeilnehmer());
console.log(teilprüfung1.getStudents());
