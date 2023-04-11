import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		// Connect to Mongo
		const conn = await mongoose.connect('mongodb://localhost:27017/mydatabase', {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		}) // New mongo url parser
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		// exit with failure
		process.exit(1)
	}
}

export default connectDB
