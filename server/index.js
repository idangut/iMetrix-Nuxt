const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const bodyParser = require('body-parser');
let cookie = require('cookie');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(bodyParser.json()); 
  app.use(bodyParser.urlencoded({ extended: true }))

  // Establecer token de sesión
  app.post('/_s_token', (req, res) => {
      
    let token  = req.body.token
    let key    = req.body.key
    let client = req.body.client
    let dat

    if (client) {
      key = key + '_' + client
    }

    dat = JSON.stringify({
      token,
      client
    })
    
    res.setHeader('Set-Cookie', cookie.serialize(key, dat, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));
    
    let json = JSON.stringify({
      response: true
    });
    
    res.end(json);
  })

  // Verificar token de sesión
  app.post('/_c_token', (req, res) => {

    let key = req.body.key
    let client = req.body.client
    let json

    let cookies = cookie.parse(req.headers.cookie || '');

    if (client) {
      key = key + '_' + client
    }
    
    json = cookies[key] || ''
    res.end(json);
  })

  // Eliminar token de sesión
  app.post('/_d_token', (req, res) => {

    let key    = req.body.key
    let client = req.body.client
    let dat    = ''
    
    if (client) {
      key = key + '_' + client
    }

    res.setHeader('Set-Cookie', cookie.serialize(key, dat, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));

    let json = JSON.stringify({
      response: true
    });
    
    res.end(json);
  })

  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
