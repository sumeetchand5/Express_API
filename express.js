const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

let app = express();
app.use(express.static(__dirname+'/public'));

app.use((req,res,next) => { //logger
    let now = new Date().toString();
    fs.appendFile('server.log',now+' '+req.url+' '+req.method+'\n',err => {
            if(err) console.log('Error');
    });
    next();
});

app.get('/', (req,res) => {
    res.send('Server is up on the web');
});

app.listen(PORT,() => {
    console.log('server running on port '+PORT);
});