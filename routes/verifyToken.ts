import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken')

module.exports = function (req : Request, res : Response, next : NextFunction) {
  const token = req.header('auth-token');

  if (!token) return res.status(401).send('Accss Denied');

  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(400).send('Invliad token');
  }
}