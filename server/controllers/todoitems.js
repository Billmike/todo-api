const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId, 
      })
      .then(todoitem => res.status(200).send({ status: true, message: todoitem }))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then((todoItem) => {
        if (!todoItem) {
          res.status(404).send({ status: false, message: 'TodoItem not found '});
        }
        return todoItem
          .update(
            req.body, {
              fields: Object.keys(req.body),
            }
          )
          .then(updatedItem => res.status(200).send({ status: true, message: updatedItem }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then((todoItem) => {
        if (!todoItem) {
          res.status(404).send({ status: false, message: 'Todo Item not found.' });
        }
        return todoItem
          .destroy()
          .then(() => res.status(200).send({ status: 'Successfull.', message: 'Todo Item deleted successfully' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}