const request = require('postman-request')

const movieSearchAPICall =(movieName,callback) =>{


  const url = 'http://www.omdbapi.com/?t='+ encodeURIComponent(movieName) + '&apikey=74648ab2'

  request({ url:url,json:true}, (err,res) =>{  
    if(err){
      callback('Unable to connect to the server',undefined)
    }

    const movieInfo = res.body;
    callback(undefined,movieInfo);
  
})
}

module.exports = movieSearchAPICall