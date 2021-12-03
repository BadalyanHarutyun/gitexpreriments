const jwt = require("jsonwebtoken");
const privateKey = "private";
const encode = async (data, expiresTime) => {
    try {
        const token = jwt.sign({
            data: data
        }, privateKey, { expiresIn: expiresTime || 3600 });
        return token;
    } catch (err) {
        throw err;
    }

}
const decode = async (token) => {
    try {
        const decoded = jwt.verify(token, privateKey);
        return decoded;
    } catch (err) {
        throw err;
    }
}
module.exports = { encode, decode };
