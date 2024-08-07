import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticateJWT } from '../middleware/authMiddleware';

const router = Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

//Trying of a protected route that requires authentication
router.get('/profile', authenticateJWT, (req, res) => {
  res.send(`Welcome, ${req.user.username}`);
});

export default router;