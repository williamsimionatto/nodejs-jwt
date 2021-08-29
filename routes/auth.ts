import { Request, Response } from "express";
const router = require('express').Router();
const User = require('../model/user');

router.post('/register', async (req : Request, res : Response) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;