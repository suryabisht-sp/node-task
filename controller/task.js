const task =require("../models/task-model.js")
const asyncWrapper = require('../middleware/asyncWrapper.js')
//fetch all data from db-

const getAllTask =asyncWrapper( async (req, res) => {
 const item=await task.find({}).sort({ timestamp: -1 })
    res.status(200).json({item})
})

// creating new task
const createTask = asyncWrapper(async (req, res) => {
    const item=await task.create(req.body)
    res.status(200).json({item}) 
})

//fetching single task using id
const getTask = async (req, res) => {
  try {
    const item = await task.findOne({ _id: req.params.id })
    res.status(200).json({ item })
    if (!task) {
      return res.status(404).json({msj:`no task found with this id${req.params.id}`})
    }
  } catch (error) {
    res.status(404).json({ msj:error})
  }
}


//updating the task
const updateTask = asyncWrapper(async(req, res) => {
 const { id: taskId } = req.params
    const item = await task.findOneAndUpdate({ _id: taskId }, req.body)
    res.status(200).json({ data: item })
        if (!task) {
      return res.status(404).json({msj:`no task found with this id${req.params.id}`})
    }
})

//delete the task
const deleteTask =asyncWrapper(async (req, res) => {
 const item = await task.findOneAndDelete({ _id: req.params.id })
 if (!task) {
   return res.status(404).json({msj:`no task found with this id${req.params.id}`})
  }
  res.status(200).json({ item })
})



module.exports ={getAllTask, createTask, getTask, updateTask, deleteTask}