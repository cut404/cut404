const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const fs = require('fs');

describe('cut404', () => {
  it('should open the home page', (done) => {
    request('localhost:3000')
      .get('/' || '/home')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        var html = fs.readFileSync(__dirname + '/../test/index.html', 'utf8');
        expect(res.text).to.eql(html);
        done();
      });
  });
  it('should have a separate get request to /plain that sends a plain text of hello world', (done) => {
    request('localhost:3000')
    .get('/plain')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Hello World');
      done();
    });
  });
  it('should have a separate get request to /json that sends a JSON name', (done) => {
    request('localhost:3000')
    .get('/json')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body).to.eql({msg: 'Hello World'});
      done();
    });
  });
  it('should 404', (done) => {
    request('localhost:3000')
      .get('/doesnotexist')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        var html = fs.readFileSync(__dirname + '/../lib/404.html', 'utf8');
        expect(res.text).to.eql(html);
        done();
      });
  });
});
