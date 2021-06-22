namespace Subjects {
	export interface TeacherInterface {
	  experienceTeachingC?: number;
	}
	export class Cpp extends Subject {
	  getRequirements(): string {
		return "Here is the list of requirements for Cpp";
	  }
	  getAvailableTeacher(): string {
		if (this.teacher.experienceTeachingC === undefined) {
		  return "No available teacher";
		} else {
		return `Available Teacher: ${this.teacher.firstName}`;
		}
	  }
	}
  }
