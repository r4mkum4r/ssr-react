import compression from 'compression'
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import Greet from './public/components/Greet'
import NestedRoute from './public/components/NestedRoute'

const app = express()

app.use(compression())

app.use('/static', express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
  const { name = 'SSR Rendering!' } = req.query

  const componentStream = ReactDOMServer.renderToNodeStream(
    <Greet name={name} />
  )

  const htmlStart = `
  <!doctype html>
    <html>
    <head>
      <title>SSR</title>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <div id="root">`

  res.write(htmlStart)

  // node streaming
  componentStream.pipe(
    res,
    { end: false }
  )

  const htmlEnd = `</div>
    <script src="/static/vendors~home.js~routes.js"></script>
    <script src="/static/home.js"></script>
  </body>
  </html>`

  componentStream.on('end', () => {
    res.write(htmlEnd)

    res.end()
  })
})


















// SPA route
app.get('/spa*', (req, res) => {
  const context = {}

  const component = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <NestedRoute />
    </Router>
  )

  const html = `
  <!doctype html>
    <html>
    <head>
      <title>SSR - SPA</title>
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    <body>
      <div id="root">${component}</div>

      <script src="/static/vendors~home.js~routes.js"></script>
      <script src="/static/vendors~routes.js"></script>
      <script src="/static/routes.js"></script>
    </body>
    </html>
  `

  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
  } else {
    res.send(html)
  }
})

app.get('*', (req, res) =>
  res
    .status(404)
    .send(
      `<body style="background-color: #3c3c3c;"><h1 style="font-family: sans-serif; color: #c7c7c7; text-align: center;">404 - Not Found</h1></body>`
    )
)

const { PORT = 3000 } = process.env

app.listen(PORT, () => console.log('######## app running ########'))
