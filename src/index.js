const express = require('express');
const morgan = require('morgan');
const app = express ();

// middlewares
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use(require('./routes/index'))
app.use('/api/productos',require('./routes/productos'))

//Server
app.set('port',2000)
app.listen(app.get('port'), () => {
    console.log("Server Listening on PORT:", app.get('port') );
  });



