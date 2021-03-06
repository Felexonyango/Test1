const express =require('express');
const cors= require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const connectDB=require('./db')
connectDB();
app.use('/api/',require('./controller/index'))
const PORT =process.env.PORT||5000

app.listen(PORT,()=>console.log(`Server stated at port ${PORT }`))