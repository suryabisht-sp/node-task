const  mongoose = require("mongoose");

const uri = "mongodb+srv://surya-sp:3XPe1TFGnCLlmVAu@cluster0.9savhcm.mongodb.net/pro01?retryWrites=true&w=majority";

// pp:3XPe1TFGnCLlmVAu

const connectDb = (url) => {
  
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => { console.log("---------->DB connected<--------------") }).catch((err) => {
  console.log("error", err)
})
}


module.exports = connectDb;