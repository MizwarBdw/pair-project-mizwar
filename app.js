const express = require('express')
const app = express()
const port = 3000
const homeRouter = require('./routes/home-route.js')
const storeRouter = require('./routes/store-route')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(homeRouter)
app.use(storeRouter)

app.listen(port, ()=> {
    console.log(`This app run on port : ${port}`)
})