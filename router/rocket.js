const getData = require('../config');

const allRockets = (req, res) => {
    getData('/rockets')
    .then(result => {
        res.status(200).json({ rockets: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneRocket = (req, res) => {
    getData(`/rockets/${req.params.rocket_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({message: 'No data found for this rocket id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const rocket = {}
rocket.allRockets = allRockets;
rocket.oneRocket = oneRocket;

module.exports = rocket;