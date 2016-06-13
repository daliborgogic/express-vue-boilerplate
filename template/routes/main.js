module.exports = (() => {
  'use strict'
  const app = require('express').Router()

  app.route('/')

    .get((req, res) => res.render('main', {
      lang: 'en',
      title: 'Title',
      description: 'Description',
      color: '#000000',
      image: 'https://placehold.it/1280x768'
    }))

  return app
})()
