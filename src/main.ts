import express from 'express'
import { Bootstrap } from './infrastructure/bootstrap/init.ts'
new Bootstrap()

const app = express()
const port = 3000


app.get('/', (_req, res) => {
  res.json({message: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})