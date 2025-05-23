const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.static(path.resolve(__dirname, "public")));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running at PORT:${PORT}`);
});