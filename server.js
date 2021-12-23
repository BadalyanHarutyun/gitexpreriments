
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const signUpRoute = require('./routes/signuproute');
const registerAuthRoute = require("./routes/registerauthentication");
const signInRoute = require('./routes/signinroute');
const logOutRoute = require('./routes/logout');
const profileRoute = require('./routes/profileroute');
const forgetPasswordRoute = require('./routes/forgetpassword');
const confirmPasswordRoute = require('./routes/confirmpassword');
const editeProfileRoute = require('./routes/editprofile');
const PORT = process.env.PORT || 5000;
const oneDay = 1000 * 60 * 60 * 24;
const {BaseUrl} = require("./config");
const messageRoute = require('./routes/messagesroute');
const server = require('http').Server(app);
const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: process.env.APIC_NAME,
//   api_key: process.env.APIC_KEY,
//   api_secret: process.env.APIC_SECRET,
// });
// cloudinary.uploader.upload("C:/fakepath/zkwljwjgd6e0q6mfvnk5.png", 
//   {resource_type: "raw", folder: "DEV",
//   overwrite: true, },
//   function(error, result) {console.log(result, error)});
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    path:"/proifle"
  } });


// const io = require("socket.io")(3100, {
//     cors: {
//       origin: BaseUrl,
//       path: "/profile",
      
//     },
//   });
let users=[];
const addUser = (userId, socketId, name, photo) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId, name, photo });
};
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};
  io.on("connection", (socket) => {
    //when ceonnect
    console.log("user connected")
    
    socket.on("addUser", (userId, name, photo,) => {
      if(userId) {
        addUser(userId, socket.id, name, photo);
        console.log(users)
        io.emit("getUsers", users)
      }
    })
    //console.log("a user connected.");
    socket.on("hello", (data,receiverId, name, userId, type ) => {
        console.log("data",data,receiverId, name, userId, type)
        console.log(socket.id)
        
        try{
          const user = getUser(receiverId);
          io.to( user.socketId).emit("getNotification", {data, receiverId, name, userId});
          io.to([socket.id, user.socketId]).emit("hello", {data, receiverId, name, userId, type});
          
        } catch(err) {
          console.log("socket err",err)
          return;
        }
        
    })
    socket.on('logout', () => {
      users = users.filter(item => item.socketId != socket.id)
      io.emit("getUsers", users)
      console.log('user disconnected', users);
    });
      socket.on('disconnect', () => {
        users = users.filter(item => item.socketId != socket.id)
        io.emit("getUsers", users)
        console.log('user disconnected', users);
      });
    //take userId and socketId from user
    })


 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use('/', signUpRoute);
app.use('/token', registerAuthRoute);
app.use("/", signInRoute);
app.use("/", logOutRoute);
app.use("/api", profileRoute);
app.use("/api", forgetPasswordRoute);
app.use("/api", confirmPasswordRoute);
app.use("/api", editeProfileRoute);
app.use("/api", messageRoute);
app.use(express.static(__dirname + '/build'));


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build' + '/index.html')
});
//
server.listen(PORT, () => console.log(`server listen localhost ${PORT}`));

