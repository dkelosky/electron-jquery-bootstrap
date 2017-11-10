declare class Student {
    firstName: any;
    middleInitial: any;
    lastName: any;
    fullName: string;
    constructor(firstName: any, middleInitial: any, lastName: any);
}
interface Person {
    firstName: string;
    lastName: string;
}
declare function greeter(person: Person): string;
declare var user: Student;
