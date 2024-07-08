const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
        .then(course => {
            res.render('courses/show', {course})
        })
        .catch(next)
    }

    // [GET] courses/create
    create(req, res) {
        res.render('courses/create')
    }

    // [POST] courses/store
    store(req, res) {
        const dataForm = req.body;
        dataForm.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
        const course = new Course(dataForm);
        course.save()
          .then(() => {res.redirect('/')})
          .catch( errors => {
            
          })
    }

    //[GET] courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
           .then(course => {res.render('courses/edit', {course})})
           .catch(next)
    }

    //[PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[DELETE] courses/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CourseController();
