const Course = require('../models/Course');

class SiteController {

    home(req, res) {

        Course.find({}).then(courses => {
            res.json(courses);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: 'ERROR!!!' });
        })
       // res.render('home')
    }

    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;
