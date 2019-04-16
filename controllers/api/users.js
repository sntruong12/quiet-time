const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const index = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200)
      .json(users)
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to get all users',
        error: err.errmsg
      })
  }
}

const signup = async (req, res) => {
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

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    });
    if(!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401)
          .json({err: 'bad credentials'});
      }
    });
  }
  catch(err) {
    res.status(401)
      .json(err)
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

const addlevel = async (req,res) => {
  try {
    const user = await User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true })
    res.status(200)
      .json(user)
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to update user',
        error: err.errmsg
      })
  }
}

const deleteUser = async (req,res) => {
  try {
    const user = await User.findOneAndDelete({ email: req.params.email })
    res.status(200)
      .json(user)
  }
  catch(err) {
    console.log(err)
    res.status(500)
      .json({
        status: 500,
        message: 'Unable to delete user',
        error: err.errmsg
      })
  }
}

module.exports = {
  index,
  signup,
  login,
  addlevel,
  delete: deleteUser
};