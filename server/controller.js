const bcrypt = require('bcrypt')

module.exports = {
  login: async function (req, res) {
    const db = req.app.get('db')
    const {
      username,
      password
    } = req.body
    console.log(req.body)
    const info = await db.getUserInfo(username)
    console.log(info)
    const isCorrect = await bcrypt.compare(password, info[0].password)
    //send back a response
    if (isCorrect === true) {
      req.session.user = {
        username,
        name: info[0].first_name + ' ' + info[0].last_name
      }
      res.status(200).json(req.session.user)
    } else {
      res.status(401).json({
        error: "INCORRECT_USERNAME_OR_PASSWORD"
      })
    }
  },
  register: async function (req, res) {
    const db = req.app.get('db')
    const {
      firstName,
      lastName,
      username,
      password,
      email
    } = req.body
    let user = await db.checkForUser([username, email])
    if (user[0]) {
      res.status(406).json({
        error: "USERNAME_TAKEN"
      })
    } else {
      const hash = await bcrypt.hash(password, 10)
      await db.addUser([firstName, lastName, username, hash, email])
      req.session.user = {
        name: firstName + ' ' + lastName,
        username,
      }
      res.status(200).json(req.session.user);
    }
  },
  getUsersCount: async function(req, res) {
    const db = req.app.get('db')
    let count = await db.totalUsers()
    res.json(count)
  }
}