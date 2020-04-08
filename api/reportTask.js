const mongoInterface = require('../mongoInterface');
const ObjectId = require('mongodb').ObjectId;

module.exports = (request, response) => {
  let id = request.body._id;
  if (id == null) {
    console.error("_id field not found in request");
    response.status(400).json({
      "error" : "_id or helperID field not found in request"
    });
    return;
  }
  let helperReport = request.body.helperReport //null se il report è riferito al needer
  if(helperReport) {
    mongoInterface.Task.findByIdAndUpdate(id, { '$set': { helperReport : helperReport} }).then(
        () => {
          response.send(200);
        }
      ).catch(
        (error) => {
          response.send(400);
        }
      );
  }
  else {
    mongoInterface.Task.findByIdAndUpdate(id, { '$set': { neederReport : report.body.neederReport} }).then(
        () => {
          response.send(200);
        }
      ).catch(
        (error) => {
          response.send(400);
        }
      );
  }
  
};
