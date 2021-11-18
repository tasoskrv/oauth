export class DateStringService {
    constructor(private prefix: string) {}
  
    getDateString() {
      return `${this.prefix}: ${(new Date()).toISOString()}`;
    }
  }