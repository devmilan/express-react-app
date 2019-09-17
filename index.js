const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Server Side'))

app.listen(port, () => console.log(`Switchsid Webapp running on port ${port}!`))