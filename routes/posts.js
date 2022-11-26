const express = require('express');
const mongoose = require("mongoose");
const {Post} = require("../schemas/post-scheme");
const router = express.Router();

router.get('/', async (req, res) => {

    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.f9rpp2v.mongodb.net/?retryWrites=true&w=majority`)
    let posts = await Post.find()
    res.status(200).json(posts);

});

router.post('/', async (req, res) => {

    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.f9rpp2v.mongodb.net/?retryWrites=true&w=majority`)
    const post = new Post;
    post.content = req.body.content || ""
    await post.save();

    res.status(200).json(post);

});

router.put('/:id/like', async (req, res) => {

    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.f9rpp2v.mongodb.net/?retryWrites=true&w=majority`)
    let post = await Post.findOne({_id: req.params.id})
    post.hypeCount++;
    post.save();

    res.status(200).json(post);

});

module.exports = router;
