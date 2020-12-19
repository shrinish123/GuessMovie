const request = require('postman-request')
const config = require('./config')
const pad = (number, length) => {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}


const randomMovie = (callback) => {

    const id = pad(Math.floor((Math.random() * 2155529) + 1), 7);
    const url = `http://www.omdbapi.com/?i=tt${id}&apikey=${config.OMD_API_KEY}`

    request({url: url, json: true}, (err, res) => {
        if (err) {
            callback('Unable to connect to the server', undefined)
        }

        const movieInfo = res.body;
        callback(undefined, movieInfo);

    })
}

// const movieGenerate= ()=>{

//     let plot = randomMovie((err,res)=>{
//         if(err){
//             return  console.log('unable to find a movie')
//          }
//          return res.Plot;
//     })
//     console.log(plot)

//    while(plot ==='N/A') {

//        plot = randomMovie((err,res)=>{
//         if(err){
//             return  console.log('unable to find a movie')
//          }
//          return res.Plot;
//     })
//    }
//    console.log(plot);
// }

//  movieGenerate();

let plot = randomMovie((err, res) => {
    // if(err){
    //     return  console.log('unable to find a movie')
    //  }
    return res.Plot;
})

console.log(plot)
