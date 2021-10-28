const getData = require('../config');

const allHistoricalEvents = (req, res) => {
    getData('/history')
    .then(result => {
        res.status(200).json({ historicalEvents: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneHistoricalEvent = (req, res) => {
    getData(`/history/${req.params.history_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({ message: 'No data available for this history id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const historicalEvent = {}
historicalEvent.allHistoricalEvents = allHistoricalEvents;
historicalEvent.oneHistoricalEvent = oneHistoricalEvent;

module.exports = historicalEvent;