import expres from 'express'
import morgan from 'morgan'
import cors from 'cors'

// initialize express
const app = expres()

/**
 * Setings
 */
app.set('port', process.env.PORT || 3000)


/**
 * Middleware
 */
app.use(morgan('dev'))
app.use(expres.urlencoded({extended: false}))
app.use(expres.json())
app.use(cors())

/**
 * Routes
 */

app.get('/', (req, res) => {
  res.send(`The API is at http://localhost:${app.get('port')}`)
})


export default app
