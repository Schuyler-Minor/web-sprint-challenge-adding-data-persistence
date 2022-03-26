const Project = require("./../project/model");

function validateTaskBody(req, res, next) {
  if (!req.body.task_description || !req.body.task_description.trim()) {
    next({ status: 400, message: "task description is required" });
  } else if (!req.body.project_id) {
    next({ status: 400, message: "project id is required" });
  } else {
    next();
  }
}

module.exports = { validateTaskBody };
