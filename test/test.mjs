import chai from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';

const app = express();
const port = 8080;

app.get('/addTwoNumbers/:firstNumber/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber, 10);
  const secondNumber = parseInt(req.params.secondNumber, 10);
  const result = firstNumber + secondNumber || null;
  if (result == null) {
    res.status(400).json({ result: result, statusCode: 400 });
  } else {
    res.status(200).json({ result: result, statusCode: 200 });
  }
});

// Use chai-http with chai
chai.use(chaiHttp);
const { expect } = chai;

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

  it('should return a 400 error if the result is null', (done) => {
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
