const express = require('express');
const comments = require('./comments');
const fakePosts = require('../data/posts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(fakePosts);
});

router.get('/:postId', (req, res) => {
  const { postId } = req.params;
  const foundPost = fakePosts.find((post) => post.id == postId);
  if (!foundPost) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundPost);
});

router.use('/:postId/comments', comments);

module.exports = router;
