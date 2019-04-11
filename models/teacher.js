const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  text: {
    type: String,
    unique: true,
    require: true
  }
}, {
  timestamps: true
})

const teacherSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  quotes: [quoteSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('teacher', teacherSchema);