import express from "express";

const router = express.Router();

// GET /users
route.get('/', (req, res) => {
  res.send('Get all users');
});

// POST /user
router.post('/', (req, res) => {
  res.send('Create a new user');
});

export default router;
