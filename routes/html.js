const path = require('path')

module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('hit')
        res.sendFile('index.html');
    });
    
    app.get('/exercise', (req, res) => {
        console.log('hiot');
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    
    })
}