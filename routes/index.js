var express = require('express');
var router = express.Router();
const YOUR_API_KEY = process.env.YOUR_API_KEY

router.get('/movies', (req, res) => {
    // https://api.themoviedb.org/3/discover/movie?api_key={YOUR_API_KEY}
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${YOUR_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json({ movies: data.results});
        })
  
});

module.exports = router;
