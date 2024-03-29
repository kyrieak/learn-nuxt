const express = require('express')
const cors = require('cors')

// Create express instance
const app = express()

// Require API routes
const hello = require('./routes/hello')

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(hello)


// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
