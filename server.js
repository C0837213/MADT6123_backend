import express from 'express'
import routes from './routes.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const uri = "mongodb+srv://admin:NqDpggqZxUca1Uod@cluster0.lwbk70a.mongodb.net/?retryWrites=true&w=majority";

await mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json())
app.use('/', routes)

app.listen(3000, function() {
    console.log('listening on 3000')
})
