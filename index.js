const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

// sets the app to use handlebars as the engine
app.set('view engine', 'handlebars')

// handlebars configurations 
app.set('views', __dirname + '/public')
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/public',
}))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main', {
        title: 'Handlebars Assignment', 
        headerInfo: 'Assignment for DGM 3760; Made with Express Handlebars'
    })
});
app.listen(port, () => console.log(`App running on port ${port}...`))