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
    const isCorrect = await bcrypt.compare(password, info[0].password)
    console.log(info, isCorrect)
    //send back a response
    if (isCorrect === true) {
      req.session.user = {
        id: info[0].id,
        firstName: info[0].first_name,
        lastName: info[0].last_name,
        username,
        email: info[0].email,
        isAdmin: info[0].is_admin,
        isEmployee: info[0].is_employee,
        img: info[0].profile_img
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
      let newUser = await db.addUser([firstName, lastName, username, hash, email])
      req.session.user = {
        id: newUser[0].id,
        name: firstName + ' ' + lastName,
        username,
      }
      res.status(200).json(req.session.user);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
  },
  getUsersCount: async function(req, res) {
    const db = req.app.get('db')
    let count = await db.totalUsers()
    res.json(Number(count[0].count))
  },
  postMessage: async function(req, res) {
    const db = req.app.get('db')
    const { message } = req.body
    const { id } = req.session.user
    await db.postMessage([message, id])
    res.sendStatus(200)
  },
  getMessages: async function(req, res) {
    const db = req.app.get('db')
    const messages = await db.getMessages()
    res.status(200).json(messages)
  },
  sumSales: async function(req, res) {
    const db = req.app.get('db')
    const sales = await db.sumSales()
    res.status(200).json(sales)
  },
  getRevenue: async function(req, res) {
    const db = req.app.get('db')
    const revenue = await db.sumRevenue()
    res.status(200).json(revenue)
  },
  deleteMessage: async function(req, res) {
    const { id } = req.params
    const db = req.app.get('db')
    const deleteMessage = await db.deleteMessage(id)
    res.status(200).json(deleteMessage)
  }
}