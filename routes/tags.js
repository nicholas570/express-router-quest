const express = require('express');
const faketags = require('../data/tags');
const fakePosts = require('../data/posts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(faketags);
});

router.get('/:tagId', (req, res) => {
  const { tagId } = req.params;
  const foundTag = faketags.find((tag) => tag.id == tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundTag);
});

router.use('/:tagId/posts', (req, res) => {
  const { tagId } = req.params;
  const foundPosts = fakePosts.filter((post) => post.tag_ids == tagId);
  res.json(foundPosts);
});

module.exports = router;
