const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {

    const users = await User.find();

    res.send(users);
})

module.exports = router;