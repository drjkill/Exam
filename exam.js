"use strict"


/*=================== Klasse Exam ========================================= */
 class Exam {
   constructor (exam_Number, anzahl_Teilnehmer, studenten) {
      this.exam_Number       = exam_Number;
      this.anzahl_Teilnehmer = anzahl_Teilnehmer;
      //this.note              = note;
      this.studenten         = studenten;
    };
    get_exam_Number() {
           return `Die Teilprüfung: ${this.exam_Number} findet mit`; 
    };
    get_anzahl_Teilnehmer() {
           return `den ${this.studenten.length} Studenten: ${this.studenten} statt.`; 
    };
    add_student(student) {
       this.studenten[this.studenten.length] = student;
    }          
};
/*======================================================================== */



/*================== Erstelle Examen ===================================== */
const exam1 = new Exam(1, 4, ["Mikey Maus,1.0",
                              " Donald Duck",
                              
                              " Dagobert Duck",
                              " Kater Carlo"
                             ]);
/*======================================================================== */


/*================== Erstelle Student ==================================== */
exam1.anzahl_Teilnehmer = 5;
if (exam1.studenten.length < exam1.anzahl_Teilnehmer) {
    exam1.add_student(" Goofy Goof");
}
else {
  console.log("Es sind keine Plätze mehr frei")
}
/*======================================================================== */


/*================== suche Student ======================================= */  
if (exam1.studenten.indexOf("Phantomias")) {
    console.log("Kein Student mit diesem Namen gefunden")
  }
/*======================================================================== */


/*================== Ausgabe Konsole ===================================== */
 console.log(exam1.get_exam_Number(),exam1.get_anzahl_Teilnehmer());
/*======================================================================== */