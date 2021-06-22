namespace Subjects {
	export interface TeacherInterface {
	  experienceTeachingReact?: number;
	}
	export class React extends Subject {
	  getRequirements(): string {
		return "Here is the list of requirements for React";
	  }
	  getAvailableTeacher(): string {
		if (this.teacher.experienceTeachingReact === undefined) {
		  return "No available teacher";
		} else {
		return `Available Teacher: ${this.teacher.firstName}`;
		}
	  }
	}
  }
