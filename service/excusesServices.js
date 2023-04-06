const { default: mongoose } = require('mongoose');
const Excuse = require('../model/excusesModel');




const getRandomExcuse = async () => {
  try {
    
    const excuses = await Excuse.find();
    
    const randomIndex = Math.floor(Math.random() * excuses.length);
    const randomExcuse = excuses[randomIndex];
  
    return randomExcuse;
  } catch (error) {
    throw new Error('Error al obtener una excusa aleatoria: ' + error.message);
  }
};

const getAllExcuses = async () => {
  try {
    const excuses = await Excuse.find();
    return excuses;

  } catch (error) {
    return {error};
  }
}

const create = async ({ http_code , tag , message }) => {
  try {
    const newExcuses = new Excuse(
      {
        http_code: http_code,
        tag: tag,
        message: message
      }
    );
    
    const excusesCreate = await newExcuses.save();
    return {data: excusesCreate, message: "success createExcuse"};
  } catch ( error) {
    console.log("error create excuses", error);
    return (error);
  }
}

module.exports = {
  getRandomExcuse,
  getAllExcuses,
  create,
};
