const request = require('postman-request')

const movieSearchAPICall = (movieName, callback) => {
    const config = require('./config')

    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMD_API_KEY}`

    request({url: url, json: true}, (err, res) => {
        if (err) {
            callback('Unable to connect to the server', undefined)
        }

        const movieInfo = res.body;
        callback(undefined, movieInfo);

    })
}

module.exports = movieSearchAPICall
