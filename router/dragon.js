const getData = require('../config');

const allDragons = (req, res) => {
    getData('/dragons')
    .then(result => {
        res.status(200).json({ dragons: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneDragon = (req, res) => {
    getData(`/dragons/${req.params.dragon_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({message: 'No data found for this dragon id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const dragon = {}
dragon.allDragons = allDragons;
dragon.oneDragon = oneDragon;

module.exports = dragon;