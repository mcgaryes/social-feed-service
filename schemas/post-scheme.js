const mongoose = require("mongoose");
const {CommentSchema} = require("./comment-schema");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: String,
    createdAt: { type: String, default: new Date().toISOString() },
    avatar: String,
    username: String,
    hypeCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
    viewCount: { type: Number, default: 0 },
    comments: { type: [CommentSchema], default: [] }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = {
    PostSchema,
    Post
}
