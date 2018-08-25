var should = require('chai').should()
  , assert = require('chai').assert
  , testDb = 'workspace/test.db'
  , fs = require('fs')
  , path = require('path')
  , Logger = require('../index')
  , Datastore = new require('pwdb')
  , db
  ;
  
describe('pwdb Logger basic', function () {

  beforeEach(function() {
    if (fs.existsSync(testDb)) { fs.unlinkSync(testDb); }
    fs.existsSync(testDb).should.equal(false);
    db = null;
  });
  
  it("Can insert without a callback", function (done) {
    var logger = new Logger({ filename: testDb });
        
    logger.insert({ hello: "world" });
    setTimeout(function () {
      assert.isNotNull(fs.readFileSync(testDb, 'utf8').match(/^{"hello":"world","_id":"[a-zA-Z0-9]{16}"}\n$/));
      
      db = new Datastore({ filename: testDb, autoload: true });
      db.find({}, function (err, docs) {
        assert.isNull(err);
        docs.length.should.equal(1);
        docs[0].hello.should.equal("world");
        done();
      });
    }, 100);
  });


});