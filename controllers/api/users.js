const User = require('../../models/user');

const index = async (req, res) => {
  res.json({
    'message': 'api users route hit'
  })
}

const create = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    res.status(201)
      .json(newUser)
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to create new user',
        error: err.errmsg
      })
  }
}

module.exports = {
  index,
  create,
}