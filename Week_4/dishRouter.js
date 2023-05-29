const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Dishes = require('./models/dishes');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .get(async (req, res, next) => {
        try {
            const dishes = await Dishes.find({});
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dishes);
        } catch (err) {
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const dish = await Dishes.create(req.body);
            console.log('Dish created ', dish);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish);
        } catch (err) {
            next(err);
        }
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Not supported');
    })
    .delete(async (req, res, next) => {
        try {
            const response = await Dishes.remove({});
            console.log('Dish created ', dish);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        } catch (err) {
            next(err);
        }
    });

dishRouter.route('/:dishId')
    .get(async (req, res, next) => {
        try {
            const dish = await Dishes.findById(req.params.dishId);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish);
        } catch (err) {
            next(err);
        }
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Not supported');
    })
    .put(async (req, res, next) => {
        try {
            const dish = await Dishes.findByIdAndUpdate(req.params.dishId, {
                $set: req.body
            }, { new: true });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish);
        } catch (err) {
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try {
            const response = await Dishes.findByIdAndRemove(req.params.dishId);
            console.log('Dish created ', dish);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        } catch (err) {
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try {
            const response = await Dishes.deleteMany({});
            console.log('Dish created ', dish);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        } catch (err) {
            next(err);
        }
    });

module.exports = dishRouter;
