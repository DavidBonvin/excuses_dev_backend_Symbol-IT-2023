const service = require ('../service/excusesServices.js');

const getRandomExcuses = async (req, res) => {
  try {
    const randomExcuse = await service.getRandomExcuse(); 
    res.status(200).json({ excuse: randomExcuse });
  } catch (error) {
    res.status(400).json({ message: error.message });
}
}

const getAllExcusesController = async (req, res) => {
 try {
   const excuses = await service.getAllExcuses();
   res.status(200).json({ users: excuses });
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
};

const createExcuse = async (req, res) => {
  try {
    const {http_code , tag , message } = req.body;
    console.log ("entra petition en controller",http_code, tag, message);
    const newExcuse = await service.create({
      http_code,
      tag,
      message
    });
    if ( newExcuse.error) throw newExcuse.error;
    return newExcuse.data, newExcuse.message, console.log("successfully created excuse");
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
 getRandomExcuses,
 getAllExcusesController,
 createExcuse,
}
