const express = require('express')
const warAppRoutes = require('./warApp/routes')
const warApp = express()
const PORT = +process.env.PORT || 3000
const cors = require('cors')

warApp.use(cors())
warApp.use(express.json())

warApp.get('/', (req, res) => {
    res.send('test')
})

warApp.use('/api', warAppRoutes)

warApp.listen(PORT, () => console.log(`app is listening on port ${PORT}`))