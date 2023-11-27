const db = require("../model");
const Test = db.tables.Test;

exports.create = async (req, res) => {
    try {
      const { name,email ,address } = req.body;
      const test = new Test({ name ,email , address });
      await test.save();
      res.status(201).json(test);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  


  // Update a test document by ID\
  exports.put = async (req, res) => {
    try {
      const test = await Test.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!test) {
        return res.status(404).send('Test not found');
      }
      res.json(test);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

  // Get all test documents
  exports.get = async  (req, res) => {
    try {
      const tests = await Test.find();
      res.json(tests);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
 
  
  // Delete a test document by ID
  exports.delete =  async (req, res) => {
    try {
      const test = await Test.findByIdAndDelete(req.params.id);
      if (!test) {
        return res.status(404).send('Test not found');
      }
      res.send('Test deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };