const express = require('express');
const fakeComments = require('../data/comments');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  const { postId } = req.params;
  const postComments = fakeComments.filter(
    (comment) => comment.post_id == postId
  );
  res.json(postComments);
});

module.exports = router;
