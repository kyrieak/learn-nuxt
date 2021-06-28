const { Router } = require('express')

const router = Router()

const hellos = [
    'Habari',
    'Hoi',
    'Yassou',
    'Cześć, Witaj',
    'selam',
    'hai',
    'helo',
    'halo',
    'hej',
]

/* GET users listing. */
router.get('/hellos', function (req, res, next) {
  res.json(hellos)
})

/* GET user by ID. */
router.get('/hello/:id', function (req, res, next) {
  const id = parseInt(req.params.id)

  if (id >= 0 && id < hellos.length) {
    res.json(hellos[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
