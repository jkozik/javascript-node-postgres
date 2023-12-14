// const mysql = require("mysql")
const mysql = require('mysql2/promise')
const express = require("express")
const app = express()
const port = 3000

let db


async function go () {
    db = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'test',
        password: 'test',
        database: 'test'
    })
    app.listen(3000)
}

go()

/***
  const connection = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test",
    database: "test"
  })

  connection.connect(() => {
    console.log("MYSQL connection success")
  })

  
app.get("/", function(req, res) {
  res.send("hello from devcontainer")
})

app. listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

***/

app.get ('/', async(req, res) => {
  const [users] = await db.execute('SELECT * FROM users')
  console.log(users)
  // res.send('<h1>Hello! Welcome.</h1>')
  res.send(`<ul>${users.map(animal => `<li>${animal.name}</li>`).join('')}</ul>`)
})
