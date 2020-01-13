import { Classroom } from "./classClassRooms";
import { Teacher } from "./classTeachers";
import { a, teachersData } from "./sampleData";

export let y: any[] = [];
// School Class

export class School {
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

    //divide classRoom day

    daydiv(t: any) {
    for (let i = 0; i < this.workingDays; i++) {
      var rowfound = t.filter((teachers: any) => teachers.day == i + 1);
        for(let j=0;j<8;j++){
          t.shift();
        }
      t.push(rowfound);
    }
    y.push(t);
  } 
  
  // divide classRooms
  
    clsdiv(data: any) {
    for (var i = 0; i < a.length; i++) {
      var clsfound = data.filter((teachers1: any) => teachers1.name == a[i].name);
      this.daydiv(clsfound);
    }
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
      this.clsdiv(this.classRooms);
    }
  }
  
  export const sample = new School("Sample", 6, 8);
  
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
  