require('dotenv').config()
const mongoose = require('mongoose')
const { Creature } = require('./Schema')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
// using async/await
const saved = async () => {
    await Creature.remove()
    const luke = new Creature({ name: 'Luke', description: 'Jedi' })
    await luke.save()
    const darth = new Creature({ name: 'Darth Vader', description: 'Father of Luke' })
    await darth.save
    db.close()
}
saved()
