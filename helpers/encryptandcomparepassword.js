
const bcrypt = require('bcrypt');
const saltRounds = 10;
const encrypt = async (password) => {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}
const compare = async (password, userPasswordHash) => {
    const match = await bcrypt.compare(password, userPasswordHash);
    return match;
}
module.exports = {encrypt, compare};