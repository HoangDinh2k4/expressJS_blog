const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true },
    discription: { type: String },
    image: { type: String },
    videoID: {type: String, required: true },
    level: { type: String }, 
    slug: { type: String, slug: 'name', unique: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Course', Course);