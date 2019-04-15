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

const show = async (req,res) => {
  console.log(req.params.t_name);
  const name = req.params.t_name;
  try {
    const teacher = await Teacher.findOne({name}).then(res => res);
    res.status(200)
      .json(teacher)
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to find a teacher',
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

const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findOneAndDelete( {name: req.params.t_name} )
    res.status(200)
      .json(teacher)
  }
  catch(err) {
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to delete teacher',
        error: err.errmsg
      })
  }
}

module.exports = {
  index,
  show,
  create,
  delete: deleteTeacher
}