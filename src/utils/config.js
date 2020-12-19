require('dotenv')
    .config();

const OMD_API_KEY=process.env.OMD_API_KEY;
const PORT = process.env.PORT || 3000;

module.exports = {
    OMD_API_KEY,
    PORT,
}

