const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: 'your-secret-key', // Change this to a secret key
    resave: false,
    saveUninitialized: true,
  })
);

// Your authentication routes go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
