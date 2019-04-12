const Teacher = require('../../models/teacher');

const index = async (req, res) => {
  try {
    const teachers = await Teacher.find({}).then(res => res);
    res.status(200)
      .json(teachers)
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to get all teachers',
        error: err.errmsg
      })
  }
}

const create = async (req, res) => {
  const teacher = new Teacher(req.body)
  try {
    await teacher.save();
    res.status(201)
      .json(teacher)
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to create new teacher',
        error: err.errmsg
      })
  }
}

module.exports = {
  index,
  create
}