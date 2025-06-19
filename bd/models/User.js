import mongoose from 'mongoose'
const { Schema } = mongoose;

const User = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

export default mongoose.model('User', User)