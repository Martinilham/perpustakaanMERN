import mongoose from 'mongoose'
import express from 'express'
import { ServerApiVersion } from 'mongodb'
// import UserRoute from './routes/userRoute.js'
import cors from "cors"

const url = "mongodb+srv://martinilham15:2Azct32sNLJqNgj2@myserver.aw1tteh.mongodb.net/perpus?retryWrites=true&w=majority";
const port = 5000

const app = express()
mongoose.connect(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

  const db = mongoose.connection;
db.on('error', (error)=>(console.log(error)));
db.once('open',()=>(console.log("databases connected")))

app.use(cors());
app.use(express.json());
// app.use(UserRoute);

app.listen(port,()=>console.log(`server berjalan di port ${port}`))