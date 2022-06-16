const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const config = require('config')
const cors = require('cors')
const path = require('path')
const initDatabase = require('./startUp/initDatabase')
const routes = require('./routes/index')

const app = express()
const PORT = config.get('port') ?? 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client')))
  const indexPath = path.join(__dirname, 'client', 'index.html')
  app.get('*', (req, res) => {
    res.sendFile(indexPath)
  })
  console.log(chalk.red('Production'))
} else {
  console.log(chalk.blue('Development'))
}

async function start() {
  try {
    mongoose.connection.once('open', () => {
      initDatabase()
    })
    console.log(chalk.green.inverse('Products loaded!'))
    await mongoose.connect(config.get('mongoUri'))
    console.log(chalk.green.inverse('MongoDB connected'))
    app.listen(PORT, () => {
      console.log(chalk.green.inverse(`Server has been started on port ${PORT}...`))
    })
  } catch (error) {
    console.log(chalk.red(error.message))
    process.exit(1)
  }
}

start()
