    /*========================== Klasse Exams ==================================== */
    /**Fügen Sie eine Klasse Exams in ihr Projekt ein. */
export class Exams { 
    exams:  Array<Exam>= []
     /** Fügen Sie der Klasse Exams einen Zustand hinzu, der es erlaubt bis zu
         10 Instanzen der Klasse Exam zu verwalten (in Form einer
         Exemplarvariable).*/
     
     /**Fügen Sie im Konstruktor der Klasse Exams 5 Prüfungen hinzu
       (Klassen definieren Typen; Eine Klasse, viele Instanzen/Exemplare */  
     /**Fügen Sie eine Methode ein, die eine Prüfung anhand der
        Indexnummer (Parameter) an den Aufrufer als Ergebnis zurückgibt */           
     getExam(){ 
        console.log(`Prüfung: ${this.exams} `)
        return this.exams
     };
     /**Ermöglichen Sie das Hinzufügen addExam - hier soll ein Examen
        übergeben werden. (Methode, Parameter, Typ) Wenn alle Examen
        hinzugefügt worden sind führt jeder weitere Aufruf der Methode zu der
        Ausgabe „Es können keine weiteren Prüfungsergebnisse erfasst
        werden!“ (Methode, bedingte Anweisung, boolescher Ausdruck) */           
     addExam(exam:Exam){                     
        if (this.exams.length < 10 ) {
            this.exams.push(exam); } 
        else { 
            console.log("Es können keine weiteren Prüfungsergebnisse erfasst werden!"); 
        }
     };
     /** Ermöglichen Sie das Löschen eines Examens removeExam. Das zu
         löschende Examen soll durch einen Parameter identifiziert werden.
         Sollte kein solches Examen existieren wird die Meldung „Das
         angegebenen Examen existiert nicht und kann somit nicht gelöscht
         werden“ ausgegeben werden. (Methode, bedingte Anweisung,
         boolescher Ausdruck)*/            
     removeExam(examNumber:number){
        this.exams = this.exams.filter(exam => exam.examNumber !== examNumber);
    };
};
      
/*=================== Klasse Exam ========================================= */
 export class Exam extends Exams{     
     examNumber:       number;
     anzahlTeilnehmer: number;
     students:         string[];
     grades:           number[];
 constructor (examNumber: number, anzahlTeilnehmer: number, students:string[],grades:number[]) {
      super();
      this.examNumber       = examNumber;
      this.anzahlTeilnehmer = anzahlTeilnehmer;
      this.students         = students;
      this.grades           = grades;
    };
    setExamNumber(examNumber: number) {    
        this.examNumber = examNumber;
    };    
    getExamNumber() {
        console.log(`Teilprüfung: ${this.examNumber} `)
        return this.examNumber 
    }; 
    addStudent(student: string) {         
        if (this.students.length < this.anzahlTeilnehmer ) {
            this.students.push(student); } 
        else { 
            console.log(" Es sind keine Plätze mehr frei !"); 
        }
    }; 
     printStudents() {    
            return this.students 
        };
     setStudentGrade(student: string , grade: number) {        
        if (this.students.indexOf(student) === -1) {
            console.log("Kein Student mit diesem Namen gefunden!");} 
        else {
            this.grades.push(grade); }
            return this.grades    
     };
     meanGrade() {
        const summe = this.grades.reduce((a, b) => a + b, 0);
        const average = summe / this.grades.length
        console.table("Notendurchschnitt: " + average);
     };
     bestGrade() {       
        const bestGrade = this.grades;        
        console.log("Beste Note: " + Math.min.apply(null, bestGrade))
        return bestGrade
     };
     studentsWithGrade() {       
        const studentsWithGrade: (string | number)[][] = [];
        for (let i = 0; i < this.students.length && i < this.grades.length; i++)
        studentsWithGrade[i] = [ this.students[i] , this.grades[i] ];
        return studentsWithGrade
     };
     bestStudents() {       
        let best:(string | number)[][] = this.studentsWithGrade().sort(function(a,b) {
            return (a[1] as number) - (b[1] as number);
        });
        console.log("Bester Student: " + best[0][0])
        
    };
     printStudentsWithGrades() {
        const grade:number[] = this.grades
        switch (true) {
            case (grade < 2.0):
                console.log('sehr gut');
                break;
            case (gradess < 3.0):
                console.log('gut');
                break;
            case (gradess < 4.0):
                console.log('befriedigent');
                break;
            case (gradess < 5.0):
                console.log('ausreichend');
                break;
            case (gradess < 6.0):
                console.log('mangelhaft');
                break;    
            default:
                console.log('OMG Atmendes Gemüse');
        }
      };
    };



