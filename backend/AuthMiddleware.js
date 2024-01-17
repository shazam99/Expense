const AuthService = require('./AuthService');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = AuthService.verifyToken(token);

    if (!user) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
}

module.exports = authenticateToken;
