// Teacher Class

export class Teacher {
    constructor(
      public id: string,
      public subjects: Array<string>,
      public day: number,
      public hour: number
    ) {}
  }