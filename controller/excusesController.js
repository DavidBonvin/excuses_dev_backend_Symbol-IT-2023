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
    const { http_code, tag, message } = req.body;
    console.log("entra petition en controller", http_code, tag, message);
    const newExcuse = await service.create({
      http_code,
      tag,
      message
    });
    if (newExcuse.error) throw newExcuse.error;
    if (!newExcuse.data) {
      // Si no se guarda correctamente, retornar un error 500
      return res.status(500).json({
        message: "No se pudo crear la excusa",
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
    
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
 getRandomExcuses,
 getAllExcusesController,
 createExcuse,
 getHttp_codeController,
}
