interface DirectorInterface {
	workFromHome(): string,
	getCoffeeBreak(): string,
	workDirectorTasks(): string,
}

interface TeacherInterface {
workFromHome(): string,
getCoffeeBreak(): string,
workTeacherTasks(): string,
}

export class Director implements DirectorInterface {
	workFromHome(): string {
	  return "Working from home";
	}
getCoffeeBreak(): string {
	return "Getting a coffee break";
	}
workDirectorTasks(): string {
	return "Getting to director tasks"
	}
}
export class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return "Cannot work from home";
	}
	getCoffeeBreak(): string {
	  return "Cannot have a break";
	}
	workTeacherTasks(): string {
	  return "Getting to work"
	}
  }

export const createEmployee = function(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
	  return new Teacher();
	} else {
	  return new Director();
	}
}

export function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
	return (employee instanceof Director);
  }

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
if (employee instanceof Director) {
	return (employee.workDirectorTasks());
} else if (employee instanceof Teacher){
	return(employee.workTeacherTasks());
}
}

type Subjects = "Math" | "History";

export function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return `Teaching Math`;
  } else if (todayClass === "History") {
    return `Teaching History`;
  }
}
