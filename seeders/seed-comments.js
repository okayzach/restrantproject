require('dotenv').config()
const mongoose = require('mongoose')
const places = require('../models/places')
const comments = require('../models/comment')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await places.findOne({ name: 'H-Thai-ML' })
    
    // Create a fake sample comment.
    let comment = await comments.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()