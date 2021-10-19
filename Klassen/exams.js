"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
exports.Exams = void 0;
/*=================== Klasse Exams/ Prüfung ============================================================= */
class Exams {
    constructor() {
        /*=> Fügen Sie der Klasse Exams einen Zustand hinzu, der es erlaubt bis zu
             10 Instanzen der Klasse Exam zu verwalten (in Form einer
             Exemplarvariable). */
        this.exams = [];
        return this;
    }
    getExam() {
        return this.exams;
    }
    indexOfExam(index) {
        for (let i = index; i < this.exams.length; i++)
            console.log(`Teilprüfung: ${this.exams[i].examNumber} `);
    }
    printExam() {
        for (let i = 0; i < this.exams.length; i++)
            console.log(`Teilprüfung: ${this.exams[i].examNumber} hatt den Notendurchschnitt: ${this.exams[i].meanGrade()}! `);
    }
    addExam(newExam) {
        if (this.exams.length < 10) {
            this.exams.push(newExam);
        }
        else {
            console.log("Es können keine weiteren Prüfungsergebnisse erfasst werden!");
        }
    }
    removeExam(examNumber) {
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
