process.env.NODE_ENV = 'test';

import Sequelize from 'sequelize';
import supertest from 'supertest';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
const should = require('chai').should;
const expect = require('chai').expect;
const Todo = require('../models/todo');
const TodoItem = require('../models/todoitem');
const request = supertest(server);

chai.use(chaiHttp);

let data = {};

describe('Todos', () => {
  beforeEach(() => {
    data = {
      title: 'New Titties for you man',
    };
  });
  it('it should create a new Todo list in the application', (done) => {
    request.post('/api/todos')
      .send(data)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.an('object');
        expect(res.body.status).to.equal('Success');
        done();
      });
  });
  it('it should get all the Todos in the application', (done) => {
    request.get('/api/todos')
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(res.body.status).to.equal('Success');
        done();
      });
  });
});
