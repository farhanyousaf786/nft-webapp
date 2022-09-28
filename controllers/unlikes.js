const Post = require("../models/post");

module.exports = {
  create,
  deleteunLike,
};

async function create(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.unlikes.push({ username: req.user.username, userId: req.user._id });
    await post.save();
    res.status(201).json({ data: "unlike added" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function deleteunLike(req, res) {
  try {
    const post = await Post.findOne({
      "unlikes._id": req.params.id,
      "unlikes.username": req.user.username,
    });
    post.unlikes.remove(req.params.id);
    await post.save();
    res.json({ data: "unlike removed" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}