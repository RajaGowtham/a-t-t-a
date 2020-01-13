import { y } from "./classSchool";

export class Tablecreation{
//create cell <td>

createColumn(data: any) {
    return `<td>${data.teacher.id}</td>`
  }
  
  //create row <tr>
  
 createRow (data: any) {
    let rowContent = '';
    for (const i of data) {
      rowContent += this.createColumn(i)
    }
    return `<tr>${rowContent}</tr>`;
  }
  
  // create table <table>
  
  createTable(data: any){
    let tableContent = '';
    for (const i of data) {
      tableContent += this.createRow(i);
    }
    return `<table border="2">${tableContent}</table>`;
  }
  
  schooltable(){
    let content = '';
    for (const i of y) {
      content += this.createTable(i);
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
}

export const tablecreation=new Tablecreation();
  