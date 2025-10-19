// 1. Повертає імена студентів з оцінкою більше 80
function getTopScoringStudents(students) {
  const topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topStudents.push(students[i].name);
    }
  }
  return topStudents;
}

// 2. Обчислює середній вік студентів
function getAverageAge(students) {
  if (students.length === 0) return 0;

  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
}

// 3. Додає нового студента до масиву
function addStudent(students, student) {
  students.push(student);
}

// 4. Повертає новий масив без студента з певним ім'ям
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
