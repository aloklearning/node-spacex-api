const getData = require('../config');

module.exports = (req, res) => {
    getData('/roadster')
    .then(result => {
        res.status(200).send(result.data);
    }).catch(err => {
        res.json({ message: err.message });
    })
}
