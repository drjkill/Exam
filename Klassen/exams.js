"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exams = void 0;
const exam_1 = require("./exam");
/*=================== Klasse Exams/ Prüfung ============================================================= */
class Exams {
    constructor() {
        this.exams = [];
        this.addExam(new exam_1.Exam(1, 10, ["aaa", "bbb", "ccc", "ddd", "eee", "fff"], [1.1, 2.2, 3.3, 4.4, 4.6, 5, 5]));
        this.addExam(new exam_1.Exam(2, 10, ["ggg", "hhh", "iii", "jjj", "kkk", "lll"], [2.1, 3.2, 1.3, 2.4, 5.6, 3, 5]));
        this.addExam(new exam_1.Exam(3, 10, ["mmm", "nnn", "ooo", "ppp", "qqq", "rrr"], [4.1, 3.2, 2.3, 1.4, 3.6, 5, 5]));
        this.addExam(new exam_1.Exam(4, 10, ["sss", "ttt", "uuu", "vvv", "www", "xxx"], [3.1, 4.2, 3.3, 4.4, 4.6, 5, 5]));
        this.addExam(new exam_1.Exam(5, 10, ["yyy", "zzz", "ööö", "äää", "üüü", "ßßß"], [5.1, 2.2, 3.3, 4.4, 4.6, 5, 5]));
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
            console.log(`Teilprüfung: ${this.exams[i].examNumber} hatt den Notendurchschnitt: ${this.exams[i].meanGrade().toFixed(1)}! `);
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
