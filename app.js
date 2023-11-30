require('dotenv').config();

const express = require ("express")
const route = require('./routes/routes.js')
const dbConnect= require('./db/connect.js')
const cors = require('cors');
const notFound = require('./middleware/not-found.js');
const app = express()
const port = 3005

//middleware
app.use(express.json())

// Use the cors middleware for all routes
app.use(cors());

const DbPath = process.env.MONGO_URL

const start = async () => {
  try {
     await dbConnect(DbPath)
     app.listen(port,() => {
     console.log(`Server up at ${port}`  )
})
  } catch (erro) {
    console.log("Database connection erro", erro)    
  }
}


//routes

app.use("/api/v1/task", route)
app.get("/", (req, res) => {
res.send("<h1>Hello req</h1>")
})


//middleware to handle 404 error
app.use(notFound)


start()