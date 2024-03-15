namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
      firstName: string; // Add the firstName property
      lastName: string;
    }
  
    export class Java extends Subjects.Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingJava! <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
}
