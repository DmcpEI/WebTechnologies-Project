const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const codeRouter = require('./router/codeRouter');
const userRouter = require('./router/userRouter')
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/codes', codeRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
	res.send("<h2>This is the CodeShare App!</h2>");
});

app.listen(PORT, () => {
  console.log('API is listening on port ', PORT);
});