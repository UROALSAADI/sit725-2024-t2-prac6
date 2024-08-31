import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './server.mjs';

chai.use(chaiHttp);
const { expect } = chai;

describe('API Tests', () => {
  
  describe('GET /addTwoNumbers/:firstNumber/:secondNumber', () => {
    it('should add two numbers and return the result', (done) => {
      chai.request(app)
        .get('/addTwoNumbers/5/3')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(8);
          done();
        });
    });

    it('should return a 400 error if the input is not a number', (done) => {
      chai.request(app)
        .get('/addTwoNumbers/abc/3')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(400);
          expect(res.body.result).to.be.null;
          done();
        });
    });
  });

  describe('POST /writeToDatabase/:key/:value', () => {
    it('should write data to the database and return success', (done) => {
      chai.request(app)
        .post('/writeToDatabase/testKey/testValue')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body.message).to.equal('Data written successfully');
          done();
        });
    });
  });

  describe('GET /readFromDatabase/:key', () => {
    it('should read data from the database and return the value', (done) => {
      chai.request(app)
        .get('/readFromDatabase/testKey')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body.value).to.equal('testValue');
          done();
        });
    });

    it('should return a 404 error if the key does not exist', (done) => {
      chai.request(app)
        .get('/readFromDatabase/nonExistentKey')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Data not found');
          done();
        });
    });
  });

});
