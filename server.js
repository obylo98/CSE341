const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  

const mongodb = require('./data/database');

app.use('/', require('./routes'));  

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
});



