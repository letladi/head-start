import mongoose from 'mongoose'
import { DB_URI } from 'constants/urls'

mongoose.connect(DB_URI, { useMongoClient: true })

mongoose.Promise = global.Promise

mongoose.connection.on('error', () => {
  process.exit()
})

export default mongoose
