export let tbldata: any[] = [];
import { a } from "./sampleData";

export class Tablecreation {
  constructor(
    public workingDays: number,
    public classRooms: Array<object>
  ) { }

  private daydiv(cls: any) {
    for (let i = 0; i < this.workingDays; i++) {
      var dayfound = cls.filter((clsday: any) => clsday.day == i + 1);
      for (let j = 0; j < 8; j++) {
        cls.shift();
      }
      cls.push(dayfound);
    }
    tbldata.push(cls);
  }

  private clsdiv() {
    for (var i = 0; i < a.length; i++) {
      var clsfound = this.classRooms.filter((clsroom: any) => clsroom.name == a[i].name);
      this.daydiv(clsfound);
    }
  }

  private row(data: any) {
    let rowContent = '';
    for (const i of data) {
      rowContent += this.column(i)
    }
    return `<tr>${rowContent}</tr>`;
  }

  private table(data: any) {
    let tableContent = '';
    for (const i of data) {
      tableContent += this.row(i);
    }
    return `<table border="2">${tableContent}</table>`;
  }

  private column(data: any) {
    return `<td>${data.teacher.id}</td>`
  }

  generator() {
    this.clsdiv();
    let content = '';
    for (const i of tbldata) {
      content += this.table(i);
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
        `
  }
}
