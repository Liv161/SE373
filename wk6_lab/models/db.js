const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Empl', { useNewUrlParser: true, useUnifiedTopology:true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');