import 'dotenv/config';
import app from './app.js'
import config from './config/environment.js'
import { connectDB } from './config/mongoose.config.js'


const port = config.port

connectDB()


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})