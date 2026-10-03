import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

// Do not change code below this line

app.get('/api{/:date}',(req,res)=> {
  const dateInput = req.params.date;
  if (!dateInput) {
    const currentDate = Date.now();
    res.json({
      "unix": currentDate,
      "utc": new Date(currentDate).toUTCString()
    })
  }
const datechecked = /^\d+$/.test(dateInput);
const finalDate = datechecked ? parseInt(dateInput) : dateInput;
const date = new Date(finalDate);
if (date.toString()==="Invalid Date") {
  res.json({error: "Invalid Date"});
}
res.json({
  unix: date.getTime(),
  utc: date.toUTCString(),
})
})

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
