const Teacher = require('../../models/teacher');

const index = async (req, res) => {
  const teacher = await Teacher.findById(req.params.id)
  try {
    res.status(200)
      .json(teacher.quotes);
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to get all quotes',
        error: err.errmsg
      })
  }
}

const create = async (req, res) => {
  const teacher = await Teacher.findById(req.params.id)
  try {
    teacher.quotes.push(req.body);
    teacher.save();
    
    // helper to get last quote
    let newQuotePosition = teacher.quotes.length - 1;

    res.status(201)
      .json(teacher.quotes[newQuotePosition])
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to create a quote',
        error: err.errmsg
      })
  }
}

module.exports = {
  index,
  create
}