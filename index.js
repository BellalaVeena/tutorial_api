const express = require('express');
const bodyparser = require('body-parser');
const constant = require('./utils/constant');


require('./db');//importing database connection 

const app = express();
app.use(bodyparser.json());

app.use(`/${constant.BASE_URI}/signup`, require('./controller/userController'));
app.use(`/${constant.BASE_URI}/signin`, require('./controller/authController'));
app.use(`/${constant.BASE_URI}/tutorials`, require('./controller/tutorialController'));



app.listen(constant.PORT, () => {
    console.log("listening to the port" + constant.PORT);
});
