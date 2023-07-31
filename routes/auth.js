import express from 'express'
import { create, get } from '../repository/user.js';

const router = express.Router();
// POST /user/signin
router.post('/register', (req, res) => {
    // Validate incoming input

    const user = req.body
    create(user)

    res.status(200).json({
        success: true,
        message: 'Registration successful',
    });
});

router.get('/user', async (req, res) => {
    // Validate incoming input

    const list = await get()

    res.status(200).json({
        success: true,
        message: 'Registration successful',
        list: list
    });
});

export default router;