import mongoose from 'mongoose'
const { Schema } = mongoose;

const Chat = new Schema({
    fromId: {
        type: Schema.ObjectId,
        required: true
    },
    toId: {
        type: Schema.ObjectId,
        required: true
    },
    message:{
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Chat', Chat)