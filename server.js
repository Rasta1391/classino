const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <h1>کلاسینو 🎓</h1>
    <p>به کلاس آنلاین کلاسینو خوش آمدید!</p>
  `);
});

app.listen(PORT, "0.0.0.0", () => {}
  console.log("Classino is running on port " + PORT);
});
