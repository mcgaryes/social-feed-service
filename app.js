const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

module.exports = app;
