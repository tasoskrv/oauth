export class DateStringService {
    constructor(prefix) {
        this.prefix = prefix;
    }
    getDateString() {
        return `${this.prefix}: ${(new Date()).toISOString()}`;
    }
}