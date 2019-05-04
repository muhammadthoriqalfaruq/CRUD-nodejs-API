const path = require('path');
const express = require('express');
const app = express();
 
app.set('view engine', 'ejs');
app.set('views', 'views');
 
const router = require('./routes/router');
 
app.use(router);
 
app.listen(1234, () => console.log(`Server listening on port 1234!`))
