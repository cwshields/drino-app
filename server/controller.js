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
        img: info[0].profile_img,
        description: info[0].description,
        jobTitle: info[0].job_title
      }
      res.status(200).json(req.session.user)
    } else {
      res.status(401).json({
        error: "INCORRECT_USERNAME_OR_PASSWORD"
      })
    }
  },
  registerUser: async function (req, res) {
    const db = req.app.get('db')
    const {
      firstName, lastName, username, password, email, 
      profileImg, description, employee, admin, jobTitle
    } = req.body
    let user = await db.checkForUser([username, email])
    if (user[0]) {
      res.status(406).json({
        error: "USERNAME_OR_EMAIL_TAKEN"
      })
    } else {
      const hash = await bcrypt
        .hash(password, 10)
      let newUser = await db
        .registerUser([firstName, lastName, username, hash, email, 
          profileImg, description, employee, admin, jobTitle])
      // req.session.user = {
      //   id: newUser[0].id,
      //   name: firstName + ' ' + lastName,
      //   username,
      // }
      res.status(200).json(newUser);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
  },
  editUser: async function (req, res) {
    const { id } = req.params
    const { description } = req.body
    const db = req.app.get('db')
    const editDescription = await db.editDescription(description, id)
    console.log(id, description)
    res.status(200).json(editDescription)
  },
  getUsers: async function(req,res) {
    const db = req.app.get('db')
    const getUsers = await db.getAllUsers()
    res.status(200).json(getUsers)
  },
  getUsersCount: async function(req, res) {
    const db = req.app.get('db')
    const count = await db.totalUsers()
    res.json(Number(count[0].count))
  },
  addUser: async function(req, res) {
    const db = req.app.get('db')
    const { firstName, lastName, username, hash, email, 
      profileImg, description, employee, admin, jobTitle } = req.body
    const person = await db.checkForUser([username, email])
    if (person[0]) {
      res.status(406).json({
        error: "USERNAME_TAKEN"
      })
    }
    // pass in user info. send response back.
    const user = await db.addUser([firstName, lastName, username, hash, email, 
      profileImg, description, employee, admin, jobTitle])
    res.status(200).json(user)
  },
  postMessage: async function(req, res) {
    const db = req.app.get('db')
    const { firstName, lastName, email, message } = req.body
    await db.postMessage(firstName, lastName, email, message)
    res.sendStatus(200)
  },
  getMessages: async function(req, res) {
    const db = req.app.get('db')
    const messages = await db.getMessages()
    res.status(200).json(messages)
  },
  getItems: async function(req, res) {
    const db = req.app.get('db')
    const items = await db.getItems()
    res.status(200).json(items)
  },
  getItem: async function (req, res) {
    const db = req.app.get('db')
    const { id } = req.params
    const getItem = await db.getItemInfo(id)
    res.status(200).json(getItem)
  },
  getSales: async function(req, res) {
    const db = req.app.get('db')
    const { id } = req.session.user
    const sales = await db.getSales(id)
    res.status(200).json(sales)
  },
  sumRepSales: async function(req, res) {
    const db = req.app.get('db')
    const { id } = req.session.user
    const sumRepSales = await db.sumRepSales(id)
    res.status(200).json(sumRepSales)
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