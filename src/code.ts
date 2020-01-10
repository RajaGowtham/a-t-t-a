import "./style.css";
let teachersData = [
  { id: "001", subjects: ["tamil", "english"], name: "sfyds" },
  { id: "002", subjects: ["english", "math"] },
  { id: "003", subjects: ["scie", "soci"] },
  { id: "004", subjects: ["tamil", "soci"] },
  { id: "005", subjects: ["english", "soci"] },
  { id: "006", subjects: ["tamil", "soci"] },
  { id: "007", subjects: ["english", "socil"] },
  { id: "008", subjects: ["english", "soci"] }
];

let a = [
  { name: "I" },
  { name: "II" },
  { name: "III" },
  { name: "IV" },
  { name: "V" },
  { name: "VI" },
  { name: "VII" },
  { name: "VIII" }
];

let y: any[] = [];
let z = [];

// Teacher Class

class Teacher {
  constructor(
    public id: string,
    public subjects: Array<string>,
    public day: number,
    public hour: number
  ) {}
}

// ClassRoom Class

class Classroom {
  teacher: any;
  constructor(public name: string, public day: number, public hour: number) {}
}

// School Class

class School {
  classRooms: Array<Classroom> = [];

  teachers: Array<Teacher> = [];

  constructor(
    public name: string,
    public workingDays: number,
    public hours: number
  ) {}

// Import Teachers

  importTeachers(arr: Array<{ id: string; subjects: Array<string> }>) {
    for (const x of arr) {
      for (let i = 0; i < this.workingDays; i++) {
        for (let j = 0; j < this.hours; j++) {
          const teacher = new Teacher(x.id, x.subjects, i + 1, j + 1);
          this.teachers.push(teacher);
        }
      }
    }
  }

// Add ClassRooms

  addClassRoom(name: string) {
    for (let i = 0; i < this.workingDays; i++) {
      for (let j = 0; j < this.hours; j++) {
        const classRoom = new Classroom(name, i + 1, j + 1);
        this.classRooms.push(classRoom);
      }
    }
  }

// Teachers Shuffle

  Shuffle() {
    this.teachers = this.teachers.sort(() => Math.random() - 0.5);
  }

// Assign Teacher to Class

  assign(x: any) {
    const teacfound = this.teachers.filter(teacher => teacher.day == x.day && teacher.hour ==x.hour);
    for(let i of teacfound) {
      x.teacher = i;
    }
  }

  start() {
    for (let x of this.classRooms) {
      this.Shuffle();
      let s = this.assign(x);
    }
  }
}

const sample = new School("Sample", 6, 8);

sample.importTeachers(teachersData);
sample.addClassRoom("I");
sample.addClassRoom("II");
sample.addClassRoom("III");
sample.addClassRoom("IV");
sample.addClassRoom("V");
sample.addClassRoom("VI");
sample.addClassRoom("VII");
sample.addClassRoom("VIII");

sample.start();

//divide classRoom day

function daydiv(t: any) {
  for (let i = 0; i < sample.workingDays; i++) {
    var rowfound = t.filter((teachers: any) => teachers.day == i + 1);
      for(let j=0;j<8;j++){
        t.shift();
      }
    t.push(rowfound);
  }
  y.push(t);
} 

// divide classRooms

function clsdiv(data: any) {
  for (var i = 0; i < a.length; i++) {
    var clsfound = data.filter((teachers1: any) => teachers1.name == a[i].name);
    daydiv(clsfound);
  }
}

clsdiv(sample.classRooms);

//create cell <td>

const createColumn = (data: any) => {
  return `<td>${data.teacher.id}</td>`
}

//create row <tr>

const createRow = (data: any) => {
  let rowContent = '';
  for (const i of data) {
    rowContent += createColumn(i)
  }
  return `<tr>${rowContent}</tr>`;
}

// create table <table>

function createTable(data: any){
  let tableContent = '';
  for (const i of data) {
    tableContent += createRow(i);
  }
  return `<table border="2">${tableContent}</table>`;
}

export function schooltable(){
  let content = '';
  for (const i of y) {
    content += createTable(i);
  }
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    ${content}
  </body>
  </html>
`;
}
