const getData = require('../config');

const allPayloads = (req, res) => {
    getData('/payloads')
    .then(result => {
        res.status(200).json({ payloads: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const onePayload = (req, res) => {
    getData(`/payloads/${req.params.payload_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({message: 'No data found for this payload id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const payload = {}
payload.allPayloads = allPayloads;
payload.onePayload = onePayload;

module.exports = payload;