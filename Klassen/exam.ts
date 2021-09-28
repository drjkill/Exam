
/*=================== Klasse Exam ========================================= */
 export class Exam {
     examNumber:       number;
     anzahlTeilnehmer: number;
     students:         string[];
     grades:           number[];
 constructor (examNumber: number, anzahlTeilnehmer: number, students: string[],grades:number[]) {
      this.examNumber       = examNumber;
      this.anzahlTeilnehmer = anzahlTeilnehmer;
      this.students         = students;
      this.grades           = grades;
    };
    setExamNumber(examNumber: number) {    
    /* eine verändernde Methode und eine sondierende Methode für die
       Exemplarvariable examNumber */    
        this.examNumber = examNumber;
    };    
    getExamNumber() {
        return `Teilprüfung: ${this.examNumber} ` 
    };
    addStudent(student: string) {
    /* fügen Sie eine Methode ein (addStudent), die es erlaubt einen
       Studenten „hinzuzufügen“ (mit einem Parameter für den Namen
       (Typ: String)). Sollten keine weiteren Studenten hinzugefügt werden
       können geben Sie die Meldung „Keine weiteren Prüfungsplätze
       vorhanden“ aus. (bedingte Anweisung, boolescher Ausdruck) */      
        if (this.students.length < this.anzahlTeilnehmer ) {
            this.students.push(student);
        }
        else {
            console.log(" Es sind keine Plätze mehr frei !");            
        }
     };
     printStudents() {
     /* Fügen Sie eine Methode ein, die die Namen aller Studierenden ausgibt
        (printStudents). Integrieren Sie eine bedingte Anweisung, so dass
        null-Werte nicht ausgegeben werden (formulieren Sie dazu den
        entsprechenden booleschen Ausdruck). */ 

            return `Studenten: ${this.students}`; 
        };
     setStudentGrade(student: string , grade: number) {
     /* fügen Sie eine Methode ein (setStudentGrade), die es erlaubt eine
        Note für einen Studenten festzulegen (mit einem Parameter für den
        Namen und einen für die Note). Noten dürfen nur für vorhandene
        Studenten gesetzt werden. Andernfalls geben Sie die Meldung aus
        „Kein Student mit diesem Namen gefunden“ (bedingte Anweisung,
        boolescher Ausdruck) */     
        
        if (this.students.indexOf(student) === -1) {
            console.log("Kein Student mit diesem Namen gefunden!");
        }
        else {
            this.grades.push(grade); 
            }    
            return `Noten: ${this.grades}`;    
     };
     meanGrade() {
     /* fügen Sie eine (Geschäfts-)Methode hinzu (meanGrade), die den
        Durchschnitt aller Noten ausrechnet und diesen zurückgibt (Ergebnis).
        Verwenden Sie dazu eine for-Schleife. Gehen Sie davon aus, dass für
        jeden Studenten vorher eine Note erfasst wurde. Gehen Sie ebenfalls
        davon aus, dass mindestens ein Student existiert. */
        
        const sum = this.grades.reduce((a, b) => a + b, 0);
        const avarage = sum / this.grades.length
        console.log("Notendurchschnitt: " + avarage);
     }
     bestGrade() {
     /* fügen Sie eine (Geschäfts-)Methode hinzu, die die beste aller Noten
        findet (bestGrade) und diese zurückgibt (Ergebnis, lokale Variable).
        Verwenden Sie dazu eine for-each-Schleife. Gehen Sie davon aus, dass
        mindestens ein Student mit einer Note existiert. */
        
        const bestgrade = this.grades;        
        console.log("Beste Note: " + Math.min.apply(null, bestgrade))
     }
     studentsWithGrade() {
     /* fügen Sie eine (Geschäfts-)Methode hinzu studentsWithGrade, die
        die Namen der Studenten zurückgibt, die eine übergebene Note haben
        (Ergebnis). Verwenden Sie dazu while-Schleifen. */
        
        /*for (let student = 0; student < this.students.length; student++  ) {
            console.log( "Student: " + this.students[student] + " bekommt die Note: " + "???" );
        }*/
        let studentsWithGrades = [];
        for (var i=0; i<this.students.length && i<this.grades.length; i++)
        studentsWithGrades[i] = [this.students[i], [this.grades[i]]];
        return `Students with Grades: ${studentsWithGrades}`;
     }
     bestStudents() {
     /* fügen Sie eine (Geschäfts-)Methode hinzu, die Namen der Studenten
        mit der besten Note in die Konsole ausgibt (bestStudents) - denken
        Sie dabei an das Konzept: interne Methodenaufrufe. Gehen Sie davon
        aus, dass mindestens ein Student mit einer Note bereits erfasst wurde. */
     }
     printStudentsWithGrades() {
     /* fügen Sie eine (Geschäfts-)Methode hinzu
        (printStudentsWithGrades), die die Namen der Studierenden
        zusammen mit der Notenstufe (sehr gut, gut, befriedigend,
        ausreichend, mangelhaft) auf die Konsole ausgibt */
     }
    };












    /*========================== Klasse Exams ==================================== */
export class Exams {
    
/**Fügen Sie eine Klasse Exams in ihr Projekt ein. */
examNumber: number = 10;
/** Fügen Sie der Klasse Exams einen Zustand hinzu, der es erlaubt bis zu
    10 Instanzen der Klasse Exam zu verwalten (in Form einer
    Exemplarvariable).*/
    constructor (/*prüfung1, prüfung2, prüfung3, prüfung4, prüfung5*/) {
/**Fügen Sie im Konstruktor der Klasse Exams 5 Prüfungen hinzu
   (Klassen definieren Typen; Eine Klasse, viele Instanzen/Exemplare */  
 
/**Fügen Sie eine Methode ein, die eine Prüfung anhand der
   Indexnummer (Parameter) an den Aufrufer als Ergebnis zurückgibt */  
  
   //addExam(){ 
 /**Ermöglichen Sie das Hinzufügen addExam - hier soll ein Examen
    übergeben werden. (Methode, Parameter, Typ) Wenn alle Examen
    hinzugefügt worden sind führt jeder weitere Aufruf der Methode zu der
    Ausgabe „Es können keine weiteren Prüfungsergebnisse erfasst
    werden!“ (Methode, bedingte Anweisung, boolescher Ausdruck) */
   }
   // removeExam(){
 /** Ermöglichen Sie das Löschen eines Examens removeExam. Das zu
     löschende Examen soll durch einen Parameter identifiziert werden.
     Sollte kein solches Examen existieren wird die Meldung „Das
     angegebenen Examen existiert nicht und kann somit nicht gelöscht
     werden“ ausgegeben werden. (Methode, bedingte Anweisung,
     boolescher Ausdruck)*/
     }

function student(student: any) {
    throw new Error("Function not implemented.");
}

function grade(grade: any) {
    throw new Error("Function not implemented.");
}
 /** Zum Vergleich zweier Gleitkommazahlen (a und b) verwenden Sie
     bitte den Ausdruck
     Double.compare(a, b).
     Dieser liefert
     0 wenn a = b
     -1 wenn a < b
     +1 wenn a > b */



 



    
/*================================================================================== */

 /** Halten Sie sich an die (partiellen) Signaturen der Methoden, die
     gegebenen Bezeichner für Exemplarvariablen und Klassen und an die
     Reihenfolge der Parameter.*/

 /** Annahme: Namen von Studenten sind niemals gleich! */     