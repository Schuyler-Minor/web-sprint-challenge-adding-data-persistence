// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.use("*", (req, res) => {
  res.json({ api: "project up" });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the project router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
