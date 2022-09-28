const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const unlikesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})


const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    name: String,
    chain: String,
    price: String,
    likes: [likesSchema] ,
    unlikes: [unlikesSchema],
  })
 

module.exports = mongoose.model('Post', postSchema);