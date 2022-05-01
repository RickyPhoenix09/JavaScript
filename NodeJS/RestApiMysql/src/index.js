const express = require ('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());

// routes 
app.use(require('./routes/employees'));
// Starting the server
app.listen(app.get('port'), () => {
        console.log('server on port', app.get('port'));
});