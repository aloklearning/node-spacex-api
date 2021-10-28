const getData = require('../config');

const allLaunchPads = (req, res) => {
    getData('/launchpads')
    .then(result => {
        res.status(200).json({ launchPads: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneLaunchPad = (req, res) => {
    getData(`/launchpads/${req.params.site_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({message: 'No data found for this launch pad site id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const launchPad = {}
launchPad.allLaunchPads = allLaunchPads;
launchPad.oneLaunchPad = oneLaunchPad;

module.exports = launchPad;