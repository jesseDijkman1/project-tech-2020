const express = require("express")
const ejs = require("ejs")
const path = require("path")

const PORT = 2000

const app = express()

const test_account_data = {
  full_name: "John Doe",
  first_name: "John",
  last_name: "Doe",
  matches: [
    {
      id: 1,
      name: "Jane Doe",
    },
    {
      id: 2,
      name: "Anna Smith",
    },
  ],
}

app.set("views", path.join(__dirname, "/templates"))
app.set("view enginge", "ejs")
app.use(express.static("src"))

app.get("/", (req, res) => {
  res.render("index.ejs", {
    head: {
      title: "Home",
    },
    account: test_account_data,
  })
})

app.get("/chat/:match_id", (req, res, next) => {
  const matchId = parseInt(req.params.match_id) // For now use numbers as id

  const matchData = test_account_data.matches.find(
    (match) => match.id == matchId
  )

  if (!matchData) return next()

  res.render("chat.ejs", {
    head: {
      title: "Jane Doe",
    },

    match: matchData,
  })
})

// Error page
app.get("*", (req, res) => {
  res.render("404.ejs", {
    head: {
      title: "404",
    },
  })
})

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
})
