require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const emailRouter = require('./router/email.router.js');
const webRouter = require('./router/web.router.js');

app.use('/', webRouter);
app.use('/api', emailRouter);

app.use(express.static(path.resolve(__dirname, "public"),{
 setHeaders: (res, path) => {
        res.status(200);
        res.setHeader('Cache-Control', 'public, max-age=86400');
    }
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running at PORT:${PORT}`);
});