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
   res.status(200).json({ allExcuses: excuses });
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
};

const createExcuse = async (req, res) => {
  try {
    const { http_code, tag, message } = req.body;
    console.log("requête:", http_code, tag, message);
    const newExcuse = await service.create({
      http_code,
      tag,
      message
    });
    if (newExcuse.error) throw newExcuse.error;
    if (!newExcuse.data) {
     // Si l'enregistrement n'est pas correct, renvoyer l'erreur 500
      return res.status(500).json({
        message: "L'excuse n'a pas pu être créée.",
        success: false
      });
    }
    return res.status(200).json({
      data: newExcuse.data,
      message: newExcuse.message,
      success: true
    });
  } catch (error) {
    res.status(400).json(error);
  }
};


const getHttp_codeController = async (req, res) => {
  const http_code = req.params.http_code; 
 
  try {
    const result = await service.getHttp_code_Service(http_code);
    res.json(result); 
  } catch (error) {
    
    res.status(500).json({ error: 'Erreur de serveur' });
  }
};

module.exports = {
 getRandomExcuses,
 getAllExcusesController,
 createExcuse,
 getHttp_codeController,
}
