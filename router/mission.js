const getData = require('../config');

const allMissions = (req, res) => {
    getData('/missions')
    .then(result => {
        res.status(200).json({ missions: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneMission = (req, res) => {
    getData(`/missions/${req.params.mission_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({message: 'No data found for this mission id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const mission = {}
mission.allMissions = allMissions;
mission.oneMission = oneMission;

module.exports = mission;