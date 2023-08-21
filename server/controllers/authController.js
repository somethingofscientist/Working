const User = require('../models/users');

const test = (req, res) => {
    res.json('Test is Working');
}

const registerUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        if (!name || !email || !password) {
            return res.json({
                error: 'All Field Are Required !'
            })
        }
        if (password.length < 6) {
            return res.json({
                error: 'Password Must Be 6 Character Long !'
            })
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: 'This Email Is Already Registered !'
            })
        }
        const user = await User.create({
            name, email, password
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    test,
    registerUser
}