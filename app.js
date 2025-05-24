require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, "public")));
app.get('/', (req, res) => {
  res.render('index.ejs');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running at PORT:${PORT}`);
});