

const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name can't be empty"], trim: true, maxlength: [2000, "can't be more than 2000"] },
  completed: { type: Boolean, default: false, require: true },
  timestamp: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
})

module.exports = mongoose.model("Task-Modal", TaskSchema)


// trim will remove the unnecessary space like name:"    sdfsdf" to name:"sdfsdf"