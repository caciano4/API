const express = require("express");
const axios = require("axios");
const cors = require("cors")
const app = express();


app.use(cors() || console.log("Quase Tudo Certo!"))
app.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    // const { data } = await axios('https://jsonplaceholder.typicode.com/comments')
    res.send(data)
  } catch (error) {
    console.error(error)
  }
})

app.listen("3001" || 5000, console.log('Deu Tudo Certo!'))

// res.json([
//   { funcao: "Desenvolvedor", name: "Walter Caciano", idade: 28 },
//   { funcao: "Empilhaderista", name: "Fagner Caciano", idade: 28 }
// ])