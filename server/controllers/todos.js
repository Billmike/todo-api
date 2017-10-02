const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(200).send({ status: 'Success', message: todo }))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }]
      })
      .then(todos => res.status(200).send({ status: 'Success', feed: todos }))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({ status: false, message: 'The todo you are looking for does not exist' });
        }
        return res.status(200).send({ status: true, feed: todo });
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }]
      })
      .then((todo) => {
        if (!todo) {
          res.status(404).send({
            status: 'Not Found',
            message: 'Todo not found.'
          });
        }
        return todo
          .update(
            req.body, {
              fields: Object.keys(req.body),
            },
          )
          .then(() => res.status(201).send({ status: 'Success', feed: todo }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then((todo) => {
        if (!todo) {
          res.status(404).send({ status: false, message: 'Todo does not exist.' });
        }
        return todo
          .destroy()
          .then(() => res.status(200).send({ status: true, message: 'Todo deleted successfully.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
