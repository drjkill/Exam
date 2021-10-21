

/*=================== Klasse Exam / Teilprüfung============================================================== */
 export class Exam {
    examNumber: number
    anzahlTeilnehmer: number;
    students: string[];
    grades: number[];


    constructor(examNumber: number, anzahlTeilnehmer: number, students: string[], grades: number[]) {
        this.examNumber = examNumber;
        this.anzahlTeilnehmer = anzahlTeilnehmer;
        this.students = students;
        this.grades = grades;
    };
    setExamNumber(examNumber: number): void {
        this.examNumber = examNumber;
    };
    getExamNumber(): number {
        console.log(`Teilprüfung: ${this.examNumber} `)
        return this.examNumber
    };
    addStudent(student: string): void {
        if (this.students.length < this.anzahlTeilnehmer) {
            this.students.push(student);
        }
        else {
            console.log(" Es sind keine Plätze mehr frei !");
        }
    };
    printStudents(): string[] {
        return this.students
    };
    setStudentGrade(student: string, grade: number): number[] {
        if (this.students.indexOf(student) === -1) {
            console.log("Kein Student mit diesem Namen gefunden!");
        }
        else {
            this.grades.push(grade);
        }
        return this.grades
    };
    meanGrade(): number {
        const summe = this.grades.reduce((a, b) => a + b, 0);
        const average = summe / this.grades.length
        return average
    };
    bestGrade(): number[] {
        const bestGrade = this.grades;
        console.log("Beste Note: " + Math.min.apply(null, bestGrade))
        return bestGrade
    };
    studentsWithGrade(): (string | number)[][] {
        const studentsWithGrade = [];
        for (let i = 0; i < this.students.length && i < this.grades.length; i++)
            studentsWithGrade[i] = [this.students[i], this.grades[i].toFixed(1)];
        return studentsWithGrade
    };
    bestStudents(): void {
        let best = this.studentsWithGrade().sort(function (a, b) {
            return (a[1] as number) - (b[1] as number);
        });
        console.log("Bester Student: " + best[0][0])

    };
    printStudentsWithGrades() {
        const pSWG = this.studentsWithGrade()
        for (let i = 0; i < pSWG.length; i++) {
            for (let j = 0; j < pSWG[i].length; j++) {
                if (pSWG[i][1] < 2.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "sehr gut"
                } else if (pSWG[i][1] < 3.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "gut"
                } else if (pSWG[i][1] < 4.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "befriedigent"
                } else if (pSWG[i][1] < 5.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "ausreichend"
                } else if (pSWG[i][1] == 5.0 && pSWG[i][1] > 0) {
                    pSWG[i][1] = "mangelhaft"
                } else if (pSWG[i][1] > 5.0) {
                    pSWG[i][1] = "OMG!!! Atmendes Gemüse :("
                }
            }
        };  return pSWG
    }
};
/*============================================================================================== */
