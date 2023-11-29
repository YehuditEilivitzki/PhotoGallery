const express = require('express')
const bodyPasrer = require('body-parser')
const cors = require('cors')
const photoRouter = require('./api/routes/photo')
const app = express()
app.use(cors());
app.use(bodyPasrer.json())
const port = 3000;
app.use('/photo', photoRouter)

app.listen(port, () => {
    console.log(`my app is listening on http://localhost:${port}`);
})
