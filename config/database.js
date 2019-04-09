const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
  {useNewUrlParser: true}
);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Database connected at ${process.env.DATABASE_URL}`)
})