const app = require('./shared/config/server-config.js')
const todoRoutes = require('./presentation/routes/todo-routes')

const port = process.env.PORT || 5001

app.use('/', todoRoutes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports = app
