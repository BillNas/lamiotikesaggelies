const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, 'Please add a title'],
      },
      description: {
        type: String,
        required: [true, 'Please add a description'],
      },
      category: {
        type: String,
        required: [true, 'Please add a category'],
      },
      salary: {
        type: Number,
      },
    },
    {
      timestamps: true,
    }
  )
  
  module.exports = mongoose.model('Goal', postSchema)