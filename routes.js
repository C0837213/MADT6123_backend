import express from 'express'
import * as model from './models.js'

const { userModel, taskModel, projectModel } = model;
const routes = express.Router();

routes.post("/auth", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  userModel.findOne({ email, password }, (err, user) => {
    if (err) {
      res.status(400).send(`Error auth! Error : ${err.message}`);
    } else {
      res.json(user);
    }
  });
});

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
                } else{
                    res.json(users)
                }
            })
        }
    })
})

routes.get('/tasks/:id', async function(req, res) {
    const id = req.params.id;
    taskModel.find({"projectId": id}, (err, tasks) => {
        if(err) {
            res.status(400).send(`Error retrieving tasks with id: ${id}! Error: ${err.message}`)
        } else {
            res.json(tasks)
        }
    })
})

routes.post('/task/:pid', async function(req, res) {
    const projectId = req.params.pid;
    const task = req.body;
    projectModel.updateOne({_id: projectId }, {
        $push: { task: task }
    },(err,_result) => {
        if(err) {
            res.status(400).send(`Error add task with projectId: ${projectId}! Error : ${err.message}`)
        } else {
            res.json({ status: "success" });
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

routes.get("/projects", async function (req, res) {
  projectModel.find({}, (err, projects) => {
    if (err) {
      res.status(400).send(`Error retrieving projects! Error: ${err.message}`);
    } else {
      res.json(projects);
    }
  });
});

routes.post("/projects/:id", async function(req, res) {
    const projectId = req.params.id;
    const project = req.body;
    projectModel.updateOne({_id: projectId }, project, (err, _result) => {
        if (err) {
            res.status(400).send(`Error update project ${projectId}! Error: ${err.message}`)
        } else {
            res.json({ status: "success" })
        }
    })
})

routes.post("/projects", async function(req, res){
    const projectIn = new projectModel(req.body);
    projectIn.save(err => {
        if(err) {
            res.status(400).send(`Error create project! Error: ${err.message}`)
        } else {
            res.json({ status:'success' })
        }
    })
});

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