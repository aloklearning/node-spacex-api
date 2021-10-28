const getData = require('../config');

module.exports =  aboutCompany = (req, res) => {
    getData('/info')
    .then(result => {
        res.status(200).send(result.data);
    }).catch(err => {
        res.json({ message: err.message });
    });
}