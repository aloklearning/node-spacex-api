const getData = require('../config');

const allLandingPads = (req, res) => {
    getData('/landpads')
    .then(result => {
        res.status(200).json({ landingPads: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneLandingPad = (req, res) => {
    getData(`/landpads/${req.params.landpad_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({message: 'No data found for this landing pad id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const landingPad = {}
landingPad.allLandingPads = allLandingPads;
landingPad.oneLandingPad = oneLandingPad;

module.exports = landingPad;