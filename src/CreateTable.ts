import { y } from "./classSchool";

export class TableFormat{
//create cell <td>

 private column(data: any) {
    return `<td>${data.teacher.id}</td>`
  }
  
  //create row <tr>
  
 private row (data: any) {
    let rowContent = '';
    for (const i of data) {
      rowContent += this.createColumn(i)
    }
    return `<tr>${rowContent}</tr>`;
  }
  
  // create table <table>
  
 private table(data: any){
    let tableContent = '';
    for (const i of data) {
      tableContent += this.createRow(i);
    }
    return `<table border="2">${tableContent}</table>`;
  }
  
  generator(){
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

