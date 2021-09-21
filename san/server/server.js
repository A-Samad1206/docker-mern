const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos', async (_req, res) => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );
  res.json(data);
});

app.listen(PORT, () =>
  console.log(`Server is listening on port http://localhost:${PORT} `)
);
