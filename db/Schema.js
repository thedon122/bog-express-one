const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CreaturesSchema = new Schema ({
    name: String,
    description: String
})

const Creature = mongoose.module('Creature', CreaturesSchema)

module.exports = {
    Creature
}