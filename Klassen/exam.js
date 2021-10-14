"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = exports.Exams = void 0;
/*=================== Klasse Exams ============================================================= */
class Exams {
    constructor(exams) {
        this.exams = exams;
    }
    addExam() {
        if (this.exams.length < 10) {
            this.exams.push(Exam);
            return exam;
        }
        else {
            console.log("Es können keine weiteren Prüfungsergebnisse erfasst werden!");
        }
    }
    removeExam(exam) {
        const dontExists = (!this.exams.some(exam => exam !== exam));
        if (dontExists) {
            console.log("Das angegebenen Examen existiert nicht und kann somit nicht gelöscht werden");
        }
        else {
            this.exams = this.exams.filter(exam => exam !== exam);
        }
    }
    ;
}
exports.Exams = Exams;
;
/*============================================================================================== */
/*
    => Exam ist eine Instanz von Exams
    => Exams hat maximal 10 Exam
    =>
*/
/*=================== Klasse Exam ============================================================== */
class Exam {
    constructor(examNumber, anzahlTeilnehmer, students, grades) {
        this.examNumber = examNumber;
        this.anzahlTeilnehmer = anzahlTeilnehmer;
        this.students = students;
        this.grades = grades;
    }
    ;
    setExamNumber(examNumber) {
        this.examNumber = examNumber;
    }
    ;
    getExamNumber() {
        console.log(`Teilprüfung: ${this.examNumber} `);
        return this.examNumber;
    }
    ;
    addStudent(student) {
        if (this.students.length < this.anzahlTeilnehmer) {
            this.students.push(student);
        }
        else {
            console.log(" Es sind keine Plätze mehr frei !");
        }
    }
    ;
    printStudents() {
        return this.students;
    }
    ;
    setStudentGrade(student, grade) {
        if (this.students.indexOf(student) === -1) {
            console.log("Kein Student mit diesem Namen gefunden!");
        }
        else {
            this.grades.push(grade);
        }
        return this.grades;
    }
    ;
    meanGrade() {
        const summe = this.grades.reduce((a, b) => a + b, 0);
        const average = summe / this.grades.length;
        console.table("Notendurchschnitt: " + average);
    }
    ;
    bestGrade() {
        const bestGrade = this.grades;
        console.log("Beste Note: " + Math.min.apply(null, bestGrade));
        return bestGrade;
    }
    ;
    studentsWithGrade() {
        const studentsWithGrade = [];
        for (let i = 0; i < this.students.length && i < this.grades.length; i++)
            studentsWithGrade[i] = [this.students[i], this.grades[i]];
        return studentsWithGrade;
    }
    ;
    bestStudents() {
        let best = this.studentsWithGrade().sort(function (a, b) {
            return a[1] - b[1];
        });
        console.log("Bester Student: " + best[0][0]);
    }
    ;
    printStudentsWithGrades() {
        const printStudentsWithGrades = [];
        for (let i = 0; i < this.students.length && i < this.grades.length; i++)
            printStudentsWithGrades[i] = [this.students[i], this.grades[i]];
        printStudentsWithGrades[0][1] = "sehr gut";
        printStudentsWithGrades[1][1] = " gut";
        printStudentsWithGrades[2][1] = "befriedigent";
        printStudentsWithGrades[3][1] = "ausreichend";
        printStudentsWithGrades[4][1] = "mangelhaft";
        printStudentsWithGrades[5][1] = "sehr gut";
        console.table(printStudentsWithGrades);
    }
    ;
}
exports.Exam = Exam;
;
/*============================================================================================== */ 
