//Setting up the express Server

const express = require('express')
const path = require('path');
const hbs = require('hbs');

const movieSearchAPICall = require('./utils/movieSearch');
const config = require('./utils/config')

const app = express()

// Serving static files

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));


// Setting up hbs template engine for serving dynamic pages

app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/movie', (req, res) => {
    if (!req.query.name) {
        return res.send({
            error: "Your query string is empty"
        })
    }
    movieSearchAPICall(req.query.name, (error, movieInfo) => {

        if (error) {
            return console.log(err);
        } else if (movieInfo.Response == 'False') {
            return console.log(`We were unable to find ${req.query.name}`);
        }
        return res.send({
            movieName: movieInfo.Title,
            YearofRelease: movieInfo.Year,
            rating: movieInfo.imdbRating,
            imgSrc: movieInfo.Poster,
            director: movieInfo.Director,
        })
    })
})

app.get('/guess', (req, res) => {
    if (!req.query.id) {
        return res.send({
            error: "No id was passed"
        })

    }
})


// To handle error pages

app.get('*', (req, res) => {
    res.render('error')
})


app.listen(config.PORT, () => {
    console.log(`Server is up on ${config.PORT}`)
})

