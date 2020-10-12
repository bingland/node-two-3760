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
        headerInfo: 'Assignment for DGM 3760; Made with Express Handlebars',
        heroTitle: 'Cool Looking Wave Image',
        imageURL: 'https://lh3.googleusercontent.com/proxy/ijQFxx70g5AHRsG3-U6bd1i4E7vmQTeiA3DrVn9FazXBqIxh4ZXpUrkCf07pLY41ekeVsS5-5kmBJccTdcg_CGcjX4h1QdkXHfR-pkc6FS0CGhDJk4TczfJ8itxUmsAx6kzGxGUu36WTHhXuSQKBCP29fiHOt_n9ydCou8R1-tXTO6b0MKJ8n-ovTmipfIxCp-Bg_3dEPj8XVMhenabODxlpN7GEwz5suzBwF9I2lrI7WUZ1nz0pvFDN9Qcw0g',
        list: `
        <iframe
        style="width: 100%; height: 550px; overflow: hidden;"
        src="https://playpager.com/embed/chess/index.html"
        scrolling="no">
        </iframe>
        `
    })
});
app.listen(port, () => console.log(`App running on port ${port}...`))