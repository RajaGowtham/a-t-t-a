import { Classroom } from "./Classroom";
import { Teacher } from "./Teacher";





export class School {

  classRooms: Array<Classroom> = [];

  teachers: Array<Teacher> = [];

  constructor(
    public name: string,
    public workingDays: number,
    public hours: number
  ) { }

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

  shuffle() {
    this.teachers = this.teachers.sort(() => Math.random() - 0.5);
  }


  // Assign Teacher to Class

  assign() {
    for (let j = 0; j < this.workingDays; j++) {
      for (let k = 0; k < this.hours; k++) {
        const cls = this.classRooms.filter(cla => cla.day === j + 1 && cla.hour === k + 1);
        const teach = this.teachers.filter(tea => tea.day === j + 1 && tea.hour === k + 1);
        for (let i = 0; i < 8; i++) {
          cls[i].teacher = teach[i];
        }
      }
    }
  }



  start() {
    this.shuffle();
    this.assign();
  }
}





