const jwt = require('jsonwebtoken');

const secretKey = 'Siddharth';

function generateToken(user) {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken,
};
