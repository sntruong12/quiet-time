const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  text: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const teacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quotes: [quoteSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('teacher', teacherSchema);