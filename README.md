[![Build Status](https://travis-ci.org/Billmike/todo-api.svg?branch=master)](https://travis-ci.org/Billmike/todo-api)

## To-do API

### Introduction
> A simple test API for posting Todos

### API Features
* You can create new To-dos
* You can edit existing to-dos
* You can delete to-dos
* You can retrieve all to-dos
* You can retrieve a single to-do with it's to-do details

### Technology Stack
* NodeJs
* PostgreSQL and Sequelize
* ExpressJS

### Getting Started
* Make sure you already have NodeJS and ExpressJS installed on your local machine. Clone the repo to your local machine and change directory
```sh
> $ cd todo-api
```
* run npm install to install the required dependencies
```sh
> $ npm install
```
* Once installation is successful, start the development server
```sh
> $ npm run start:dev
```
* Open up postman and test the existing routes

### Routes
* POST: '/api/v1/todos'
* POST: '/api/todos/:todoId/items'
* GET: '/api/v1/todos'
* PUT: '/api/v1/todos/:recipeId'
* GET: '/api/v1/todos/:todoId'
* DELETE: '/api/v1/todos/:todoId'
* DELETE: '/api/todos/:todoId/items/:todoItemId'
* PUT: '/api/todos/:todoId/items/:todoItemId'

### Testing
* Run the test command to make sure all tests are passing
```sh
> $ npm test
```

### Want to contribute?
* Fork the repository
* Create a feature branch with a feature.md file
* Write tests and make them pass
* Open a pull request
