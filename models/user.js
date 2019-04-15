const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 1,
    required: true
  }
}, {
  timestamps: true
});

// Middleware function - is ran before the user is instantiated 
// Hashes and salts the password before it's stored in the db
userSchema.pre('save', function(next) {
  const user = this;
  if(!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if(err) return next(err);
    //replace the user provided password with the hash
    user.password = hash;
    next();
  });
})

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('user', userSchema);