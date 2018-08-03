const createError = require('http-errors')
const express = require('express')
const resource = require('express-resource')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const serverRouter = require('./routes/server')
const imageRouter = require('./routes/image')
const tohyoTorokuRouter = require('./routes/tohyo_toroku')
const senkyoKanriRouter = require('./routes/senkyo_kanri')
const senkyoTorokuRouter = require('./routes/senkyo_toroku')
const commentShokaiRouter = require('./routes/comment_shokai')
const coinShokaiRouter = require('./routes/coin_shokai')
const loginRouter = require('./routes/login')
const tohyoShokaiKobetsuRouter = require('./routes/tohyo_shokai_kobetsu')
const tohyoIchiranRouter = require('./routes/tohyo_ichiran')
const tohyo_shokai_shosaiRouter = require('./routes/tohyo_shokai_shosai')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/server', serverRouter)
app.use('/image', imageRouter)
app.use('/tohyo_toroku', tohyoTorokuRouter)
app.use('/senkyo_kanri', senkyoKanriRouter)
app.use('/senkyo_toroku', senkyoTorokuRouter)
app.use('/comment_shokai', commentShokaiRouter)
app.use('/coin_shokai', coinShokaiRouter)
app.use('/login', loginRouter)
app.use('/tohyo_shokai_kobetsu', tohyoShokaiKobetsuRouter)
app.use('/tohyo_ichiran', tohyoIchiranRouter)
app.use('/tohyo_shokai_shosai', tohyo_shokai_shosaiRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
