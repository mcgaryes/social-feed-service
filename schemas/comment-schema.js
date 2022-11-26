const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    createdAt: { type: Date, default: Date.now },
    avatar: String,
    username: String,
    hypeCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
    replyCount: { type: Number, default: 0 }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
    CommentSchema,
    Comment
}
