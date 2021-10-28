const getData = require('../config');

const allCores = (req, res) => {
    getData('/cores')
    .then(result => {
        res.status(200).json({ cores: result.data});
    }).catch(err => {
        res.json({ message: err.message })
    });
}

const oneCore = (req, res) => {
    getData(`/cores/${req.params.core_serial}`)
    .then(results => {
        // Result comes as undefined for 404
        if(results.data !== undefined){
            res.status(200).send(results.data);
        }else{
            res.status(400)
            .json({ message: 'No data found with the mentioned core serial'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const upcomingCores = (req, res) => {
    getData('/cores/upcoming')
    .then(result => {
        res.status(200).json({ upcomingCores: result.data });
    }).catch( err => {
        res.json({ message: err.message });
    });
}

const pastCores = (re1, res) => {
    getData('/cores/past')
    .then(result => {
        res.status(200).json({ pastCores: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const core = {}
core.allCores = allCores;
core.oneCore = oneCore;
core.upcomingCores = upcomingCores;
core.pastCores = pastCores;

module.exports = core;

