import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { movie } from './model/Movie'
import { User } from './model/User';
import bodyParser from 'body-parser';
import { register } from 'module'

const app = express()
app.use(cors())
app.use(bodyParser.json());

dotenv.config()

const port = 3000

app.get('/', (req, res) => {
    res.send('ladidabudubadabi')
})
app.post('/register', async (req, res) => {
    console.log(req.body, "REQUEST BODY SIGNUP");
    try {
        const { username, emailReg, passwordReg, passwordConfirm } = req.body
        const userExists = await User.findOne({ where: { email: emailReg } })
        if (userExists) {
            return res.json({ message: "User already exists!" })
        }
        const user = User.create({
            name: username,
            email: emailReg,
            password: passwordReg
        })
        res
            .status(201)
            .json({ message: "User registered successfully", success: true, user });

    } catch (error) {
        console.error(error);
    }
})
app.post('/login', async (req, res) => {
    console.log(req.body, "REQUEST BODY");
    try {
        const { email, password  } = req.body;
        const user = await User.findOne({ where: { email: email } });
        const passwdDB = await User.findOne({where: {password: password}})
        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }
        // Perform password validation here
        if (!passwdDB) {
            return res.status(401).json({ message: "Incorrect password!" });
        }
        // If everything is correct, return success message
        res.status(200).json({ message: "User signed in successfully", success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.get('/catalog', async (req, res) => {
    try {
        const movies = await movie.findAll()
        const count = await movie.count()
        res.status(201).json({ count, movies })
    } catch (error) {
        res.status(500).json(error)
    }
})
app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})