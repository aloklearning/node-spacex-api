// This file will take care of all the capsule related information
const getData = require('../config');

const allCapsules = (req, res) => {
    getData(`/capsules`)
    .then((results) => {
        res.status(200).json({ capsules: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneCapsule = (req, res) => {
    getData(`/capsules/${req.params.capsule_serial}`)
    .then(results => {
        // Result comes as undefined for 404
        if(results.data !== undefined){
            res.status(200).send(results.data);
        }else{
            res.status(400)
            .json({ message: 'No data found with the mentioned capsule serial'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const upcomingCapsules = (req, res) => {
    getData('/capsules/upcoming')
    .then(results => {
        res.status(200)
        .json({ upcomingCapsules: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const pastCapsules = (req, res) => {
    getData('/capsules/past')
    .then(results => {
        res.status(200)
        .json({ pastCapsules: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const capsule = {}
capsule.allCapsules = allCapsules;
capsule.oneCapsule = oneCapsule;
capsule.upcomingCapsules = upcomingCapsules;
capsule.pastCapsules = pastCapsules;

module.exports = capsule;