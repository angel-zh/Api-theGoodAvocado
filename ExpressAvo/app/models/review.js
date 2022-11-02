const mongoose = require('mongoose')

// Subdoc - Review
const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3, 4, 5]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ownerEmail: {
        type: String,
        required: false
    }

}, {
    timestamps: true,
    toObject: { virtuals: true },
	toJSON: { virtuals: true }
})

reviewSchema.virtual('highlyRecommend').get(function () {
	if (this.rating >= 4) {
        return true
    } else {
        return false  
    }
})

module.exports = reviewSchema