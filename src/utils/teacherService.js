const BASE_URL = '/api/teachers/';

// returns an array of all the teachers name
const getAllTeachers = async () => {
  let teacherNames = [];
  let teachers = await fetch(BASE_URL).then(res => res.json()).then(data => data);
  teachers.forEach(t => {
    teacherNames.push(t.name)
  });
  return teacherNames;
}

export default {
  getAllTeachers,
}