require('dotenv').config();
const express = require ('express');
const massive = require('massive');
const session = require('express-session');
const path = require('path'); // Usually moved to the start of file

const { 
  login, 
  getSales,
  getItems,
  sumSales,
  sumRepSales,
  addSale, 
  getUsers,
  registerUser,
  editUser,
  getUsersCount,
  postMessage, 
  getMessages,
  deleteMessage,
  getRevenue,
  logout
} = require('./controller')

const app = express();
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 20 // * 24
  }
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Database Connected');
})

app.get('/api/sales', sumSales)
app.get('/api/items', getItems)
app.get('/api/revenue', getRevenue)
app.get('/api/users', getUsers)
app.get('/api/users-count', getUsersCount)
app.get('/api/messages', getMessages)
app.get('/api/get-sales', getSales)
app.get('/api/sum-rep-sales', sumRepSales)
app.get('/auth/logout', logout)

app.delete('/api/messages/:id', deleteMessage)

app.use(express.json());

app.post('/auth/login', login)
app.post('/api/register', registerUser)
app.post('/api/send-message', postMessage)

app.put("/api/users/:id", editUser)

app.get('/api/user', function(req, res) {
  if(req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(404).json({
      error: "USER_NOT_FOUND"
    })
  }
})

// app.post('/api/sales', addSale)
// app.delete("/api/user/:id", deleteUser)
// app.put("/api/sales/:id", editSale)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`));