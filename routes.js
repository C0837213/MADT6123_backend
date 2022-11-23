import express from 'express'
import * as model from './models.js'

const { userModel, taskModel } = model;
const routes = express.Router();

routes.get('/users', async function (req, res) {
    userModel.find({}, (err, users) => {
        if (err) {
            res.status(400).send(`Error retrieving users! Error: ${err.message}`);
        } 
        else{
            res.json(users)
        }
    })
})

routes.post('/users', async function (req, res) {
    const userInstance = new userModel(req.body)
    userInstance.save(err => {
        if (err) {
            res.status(400).send(`Error creating user with id ${req.body.id}! Error: ${err.message}`);
        }
        else{
            userModel.find({}, (err, users) => {
                if (err) {
                    res.status(400).send(`Error retrieving users! Error: ${err.message}`);
                } 
                else{
                    res.json(users)
                }
            })
        }
    })
})

routes.put('/users', async function (req, res) {
    userModel.updateOne({ _id: req.body._id }, {$set: req.body}, (err, _result) => {
        if (err) {
            res.status(400).send(`Error updating user with id ${req.body.id}! Error: ${err.message}`);
        }
        else{
            userModel.find({}, (err, users) => {
                if (err) {
                    res.status(400).send(`Error retrieving users!  Error: ${err.message}`);
                }
                else{
                    res.json(users)
                }
            })
        }
    })
})

routes.delete('/users', async function (req, res) {
    userModel.deleteOne({ _id: req.body._id }, (err, _result) => {
        if (err) {
            res.status(400).send(`Error deleting user with id ${req.body.id}! Error: ${err.message}`);
        }
        else{
            userModel.find({}, (err, users) => {
                if (err) {
                    res.status(400).send(`Error retrieving users! Error: ${err.message}`);
                }
                else{
                    res.json(users)
                }
            })
        }
    })
})

routes.get('/tasks', async function (req, res) {
    taskModel.find({}, (err, tasks) => {
        if (err) {
            res.status(400).send(`Error retrieving tasks! Error: ${err.message}`);
        } 
        else{
            res.json(tasks)
        }
    })
})

routes.post('/tasks', async function (req, res) {
    const taskInstance = new taskModel(req.body)
    taskInstance.save(err => {
        if (err) {
            res.status(400).send(`Error creating task with id ${req.body.id}! Error: ${err.message}`);
        }
        else{
            taskModel.find({}, (err, tasks) => {
                if (err) {
                    res.status(400).send(`Error retrieving task! Error: ${err.message}`);
                } 
                else{
                    res.json(tasks)
                }
            })
        }
    })
})

routes.put('/tasks', async function (req, res) {
    taskModel.updateOne({ _id: req.body._id }, {$set: req.body}, (err, _result) => {
        if (err) {
            res.status(400).send(`Error updating user with id ${req.body.id}! Error: ${err.message}`);
        }
        else{
            taskModel.find({}, (err, tasks) => {
                if (err) {
                    res.status(400).send(`Error retrieving tasks!  Error: ${err.message}`);
                }
                else{
                    res.json(tasks)
                }
            })
        }
    })
})

routes.delete('/tasks', async function (req, res) {
    taskModel.deleteOne({ _id: req.body._id }, (err, _result) => {
        if (err) {
            res.status(400).send(`Error deleting user with id ${req.body.id}! Error: ${err.message}`);
        }
        else{
            taskModel.find({}, (err, tasks) => {
                if (err) {
                    res.status(400).send(`Error retrieving tasks! Error: ${err.message}`);
                }
                else{
                    res.json(tasks)
                }
            })
        }
    })
})

export default routes