const express = require('express');
const os = require('os');
const app = express();
const port = 80;
const hostname = os.hostname();
const color = 'blue';
app.get('/', (req, res) => {
  res.send(`<h1 style="color: blue;">Hello from color api</h1>
    <p>Hostname: ${hostname}</p>`); 
})

app.get('/api', (req, res) => {
  const format = req.query.format;
if (format === 'json') {
   return res.json({
    color: color,
    hostname: hostname
  });
} else { 
  return res.send(`<h1 style="color: blue;">Color API</h1>
    <p>Hostname: ${hostname}</p>`);
}
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});