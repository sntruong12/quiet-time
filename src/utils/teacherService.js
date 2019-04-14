const BASE_URL = '/api/teachers/';

// returns an array of all the teachers name
const getAllTeachers = async () => {
  let teacherNames = [];
  try {
    let teachers = await fetch(BASE_URL, {mode: "cors"}).then(res => res.json()).then(data => data);
    teachers.forEach(t => {
      teacherNames.push(t.name)
    });
    return teacherNames;
  }
  catch(err) {
    console.log(err);
    teacherNames.push('much emptiness in our soul');
    return teacherNames;
  }
}

export default {
  getAllTeachers,
}