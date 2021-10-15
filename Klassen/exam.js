"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = exports.Exams = void 0;
/*=================== Klasse Exams/ Prüfung ============================================================= */
class Exams {
    constructor() {
        this.exams = [];
        return this;
    }
    getExams() {
        console.log(`Prüfung: ${this.exams} `);
        return this.exams;
    }
    indexOfExams() {
        /*
          Fügen Sie eine Methode ein, die eine Prüfung anhand der
          Indexnummer (Parameter) an den Aufrufer als Ergebnis zurückgibt
        */
    }
    printExam() {
        /*
        Fügen Sie eine Methode ein (printExams), die die vorhandenen
        Prüfungen in die Konsole ausgibt (Nummer der Prüfung und
        Durchschnittsnote) (externer Methodenaufruf )
        */
        console.log(`Teilprüfung: ${this.exams} hatt den Notendurchschnitt: $ {}! `);
    }
    addExams(newExam) {
        if (this.exams.length < 10) {
            this.exams.push(newExam);
        }
        else {
            console.log("Es können keine weiteren Prüfungsergebnisse erfasst werden!");
        }
    }
    removeExams(examNumber) {
        const dontExists = (!this.exams.some(exams => exams.examNumber === examNumber));
        if (dontExists) {
            console.log("Das angegebene Examen existiert nicht und kann somit nicht gelöscht werden!");
        }
        else {
            this.exams = this.exams.filter(exams => exams.examNumber !== examNumber);
            console.log("Exam " + examNumber + " removed");
        }
    }
}
exports.Exams = Exams;
/*=========================================================================================================== */
/*
    => Exam ist eine Instanz von Exams
    => Exams hat maximal 10 Exam
    =>
*/
/*=================== Klasse Exam / Teilprüfung============================================================== */
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
        return average;
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
        const pSWG = this.studentsWithGrade();
        for (let i = 0; i < pSWG.length; i++) {
            for (let j = 0; j < pSWG[i].length; j++) {
                if (pSWG[i][1] < 2.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "sehr gut";
                }
                else if (pSWG[i][1] < 3.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "gut";
                }
                else if (pSWG[i][1] < 4.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "befriedigent";
                }
                else if (pSWG[i][1] < 5.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "ausreichend";
                }
                else if (pSWG[i][1] < 6.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "mangelhaft";
                }
                else if (pSWG[i][1] == 0) {
                    pSWG[i][1] = "OMG!!! Atmendes Gemüse :(";
                }
            }
        }
        ;
        console.table(pSWG);
    }
}
exports.Exam = Exam;
;
/*============================================================================================== */
