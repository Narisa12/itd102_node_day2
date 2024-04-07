const express = require ('express');
const app = express();
const PORT = process.env.app_PORT = 5000 ;
app.get('/', function(req, res) {
    res.send('default rounte');    
});

app.listen(PORT, function(){
    console.log('sever is running on port ' + PORT);
});