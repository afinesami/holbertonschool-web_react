import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const s = Seq(object);

  const getStudent = s.filter((value) => value.score > 70);

  const student = getStudent.toJS();

  const structure = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(student).map((key) => {
    student[key].firstName = structure(student[key].firstName);
    student[key].lastName = structure(student[key].lastName);
    return student[key];
  });

  console.log(student);
};

export default printBestStudents;
