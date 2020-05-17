const express = require("express")
const ejs = require("ejs")
const path = require("path")

const PORT = 2000

const app = express()

app.set("views", path.join(__dirname, "/templates"))
app.set("view enginge", "ejs")
app.use(express.static("src"))

app.get("/", (req, res) => {
  res.render("index.ejs", {
    page: {
      title: "Home",
    },
  })
})

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
})
