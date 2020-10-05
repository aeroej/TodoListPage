const express = require('express');
const router = express.Router();

const { Todo } = require('../../models')

// Todo.create({
//     task: 'test Sequelize',
//     due_date: '2020-09-01 11:28:00',
//     priority: 7
// });

Todo.create({task: "sequelize", due_date: "2020-10-05 11:28:00", priority: 5})
    .then(task => {
        console.log("Task ID : ", task.id);
        console.log("Task Date : ", task.due_date);
    }
)

module.exports = router;
