const app = require('./app/config/express')();
const http = require('http').Server(app);

// console.log(app)

const port = process.env.PORT || 3000;

http.listen(port, () => {
    console.log('listening on *:3000');
});