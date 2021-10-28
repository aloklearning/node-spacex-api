const getData = require('../config');

const allShips = (req, res) => {
    getData('/ships')
    .then(result => {
        res.status(200).json({ ships: result.data });
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const oneShip = (req, res) => {
    getData(`/ships/${req.params.ship_id}`)
    .then(result => {
        if(result.data !== undefined){
            res.status(200).send(result.data);
        }else{
            res.status(404).json({message: 'No data found for this ship id'});
        }
    }).catch(err => {
        res.json({ message: err.message });
    });
}

const ship = {}
ship.allShips = allShips;
ship.oneShip = oneShip;

module.exports = ship;