function getTopScoringStudents(students) {
  const topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topStudents.push(students[i].name);
    }
  }
  return topStudents;
}

function getAverageAge(students) {
  if (students.length === 0) return 0;

  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
}

function addStudent(students, student) {
  students.push(student);
}

function removeStudentByName(students, name) {
  const newStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      newStudents.push(students[i]);
    }
  }
  return newStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
