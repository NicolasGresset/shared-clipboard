import express from "express";
import clipboardy from "clipboardy";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3333;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get("/copy", (req, res) => {
  const clipboardText = clipboardy.readSync();
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send(clipboardText);
});

app.get("/paste", (req, res) => {
  res.send("succesfully logged in");
});

app.post("/paste", (req, res) => {
  const value = req.body.value;
  clipboardy.writeSync(value);
  res.send("succesfullfy copied");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
