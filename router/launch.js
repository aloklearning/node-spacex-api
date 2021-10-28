const getData = require('../config');

const allLaunches = (req, res) => {
    getData(`/launches`)
    .then((results) => {
        res.status(200).json({ launches: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneLaunch = (req, res) => {
    getData(`/launches/${req.params.flight_number}`)
    .then(results => {
        // Result comes as undefined for 404
        if(results.data !== undefined){
            res.status(200).send(results.data);
        }else{
            res.status(400)
            .json({ message: 'No data found with the mentioned launched flight number'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const pastLaunches = (req, res) => {
    getData('/launches/past')
    .then(results => {
        res.status(200)
        .json({ pastLaunches: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const upcomingLaunches = (req, res) => {
    getData('/launches/upcoming')
    .then(results => {
        res.status(200)
        .json({ upcomingLaunches: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const latestLaunch = (req, res) => {
    getData(`/launches/latest`)
    .then((results) => {
        res.status(200).json({ latestLaunch: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const nextLaunch = (req, res) => {
    getData(`/launches/next`)
    .then((results) => {
        res.status(200).json({ nextLaunch: results.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const launch = {}
launch.allLaunches = allLaunches;
launch.oneLaunch = oneLaunch;
launch.pastLaunches = pastLaunches;
launch.upcomingLaunches = upcomingLaunches;
launch.latestLaunch = latestLaunch;
launch.nextLaunch = nextLaunch;

module.exports = launch;