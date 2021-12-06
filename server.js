
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
app.use(express.static(__dirname + '/build'))


app.get('*', (req, res) => {
    console.log("app")
    res.sendFile(__dirname + '/build' + '/index.html')
})
app.listen(PORT, () => console.log(`server listen localhost ${PORT}`));

