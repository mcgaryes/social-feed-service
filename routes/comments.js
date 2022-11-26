const express = require('express');
const mongoose = require("mongoose");
const {Post} = require("../schemas/post-scheme");
const {Comment} = require("../schemas/comment-schema");
const router = express.Router();

router.post('/', async (req, res) => {

    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.f9rpp2v.mongodb.net/?retryWrites=true&w=majority`)
    const post = await Post.findOne({_id: req.body.pid});

    const comment = new Comment;
    comment.content = req.body.content || ""

    post.comments.push(comment)

    await post.save();

    res.status(200).json(comment);

});

router.put('/:id/like', async (req, res) => {

    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.f9rpp2v.mongodb.net/?retryWrites=true&w=majority`)
    let post = await Post.findOne({"comments._id": req.params.id})

    let comment = post.comments.find(comment => comment.id === req.params.id)
    comment.hypeCount++;

    post.save();

    res.status(200).json(comment);

});

module.exports = router;
