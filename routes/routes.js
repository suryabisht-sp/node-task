const express = require("express");
const { getAllTask, createTask, getTask, deleteTask, updateTask } = require("../controller/task");

const router = express.Router()


// router.route('/').get(getAllTask)
// router.route('/').post(createTask)
// router.route('/:id').get(getTask)
// router.route('/:id').patch(updateTask)
// router.route('/:id').delete(deleteTask)
router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router