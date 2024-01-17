const express = require('express');
const authenticateToken = require('./AuthMiddleware');
const AuthService = require('./AuthService');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
    const body = req.body;
    const user = body;
    const token = AuthService.generateToken(user);
    res.json({ token });
});

app.use('/secure-data', authenticateToken);

app.get('/secure-data', (req, res) => {
    res.json({ message: 'This data is secure!', user: req.user });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
