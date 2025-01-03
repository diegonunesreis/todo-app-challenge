const app = require('./infrastructure/config/server-config')
const todoRoutes = require('./presentation/routes/todo-routes')

const port = process.env.PORT || 5000

app.use('/', todoRoutes)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports = app
