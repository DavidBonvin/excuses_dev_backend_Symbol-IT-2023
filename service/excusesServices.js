const { default: mongoose } = require('mongoose');
const Excuse = require('../model/excusesModel');


const getRandomExcuse = async () => {
  try {
    
    const excuses = await Excuse.find();
    
    const randomIndex = Math.floor(Math.random() * excuses.length);
    const randomExcuse = excuses[randomIndex];
  
    return randomExcuse;
  } catch (error) {
    throw new Error("Erreur d'obtention d'une excuse aléatoire :" + error.message);
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
        "tag ": tag,
        "message ": message
      }
    );
    
    const excusesCreate = await newExcuses.save();
    return {data: excusesCreate, message: "success createExcuse"};
  } catch ( error) {
    console.log("error create excuses", error);
    return (error);
  }
}

const getHttp_code_Service = async (http_code) => {
  try {
    const result = await Excuse.findOne({ http_code }); 
    if (!result) {
      throw new Error('Objet non trouvé'); 
    }
    return result; 
  } catch (error) {
    throw new Error('Erreur de service'); 
  }
};

module.exports = {
  getRandomExcuse,
  getAllExcuses,
  create,
  getHttp_code_Service,
};
