const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Task = require('./moduls/task');
const filterCollectionByInterval = require('./services/filterCollectionByInterval').filterCollectionByInterval;
const cors = require('cors')

const PORT = 3001;
const url = 'mongodb+srv://todo-list-cluster:w-12@cluster0.5qxprcm.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(url)
    .then(() => console.log('Connected to MongoDb'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listaning port ${PORT}`);
});

let db;

app.get('/todos/:timeInterval', async (req, res) => {
    const timeInterval = req.params.timeInterval;
    const collection = await Task.find()
    res.json(filterCollectionByInterval(collection, timeInterval))
}) 


app.get('/todos', (req, res) => {
    Task
        .find()       
        .then((tasks) => {
            res.status(200)
                .json(tasks);
        })
        .catch(() => {
            res.status(500)
                .json({ error: 'Error' });
        })
});



app.get('/todo/:id', (req, res) => {

    Task
        .findById(req.params.id)
        .then((task) => {
            res.status(200)
                .json(task);
        })
        .catch(() => {
            res.status(500)
                .json({ error: 'Error' });
        })

});

app.delete('/todo/:id', (req, res) => {

    Task
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200)
                .json(result);
        })
        .catch(() => {
            res.status(500)
                .json({ error: 'Error' });
        })

});

app.post('/create-todo', (req, res) => {
    const task = new Task({...req.body, _createdAt: +new Date(), status: "new" });
    
    task
        .save()
        .then((result) => {
            res.status(201)
                .json(result);
        })
        .catch(() => {
            res.status(500)
                .json({ error: 'Error' });
        })
})

app.patch('/update-todo/:id', (req, res) => {

    Task
        .findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        .then((result) => {
            res.status(200)
                .json(result);
        })
        .catch(() => {
            res.status(500)
                .json({ error: 'Error' });
        })

});


