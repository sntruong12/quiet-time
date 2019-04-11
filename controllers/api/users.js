const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save();
    const token = createJWT(user);
    res.status(201)
      .json({ token })
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

/*----- Helper Functions -----*/
function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    process.env.SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
  create
};