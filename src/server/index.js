    
const express = require('express');

const publicweb = './angularDocker';
const app = express();

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);
app.get('/home', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.SERVER_PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));