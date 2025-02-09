const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        require: true
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        require: true
    },
    message : [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Message'
        }
    ]
},{
    timestamps: true
})

const conversation = mongoose.model('Conversation', conversationSchema)