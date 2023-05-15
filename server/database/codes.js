const { ObjectId } = require('mongodb');
const db = require('./db');

const getAllCodes = async () => {
  return await db.codes.find().toArray();
};

const getCode = async (id) => {
  return await db.codes.findOne({ _id: new ObjectId(id) });
};

const createCode = async (code) => {
  const result = await db.codes.insertOne(code);
  return { ...code, _id: result.insertedId };
};

const deleteCodeById = async (id) => {
  const result = await db.codes.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
};

const updateCodeById = async (codeId, updatedCodeData) => {
  const code = await getCode(codeId);

  if (!code) {
    return null;
  }

  const updatedCode = { ...code, ...updatedCodeData };
  const result = await db.codes.updateOne({ _id: new ObjectId(codeId) }, { $set: updatedCode });

  if (result.modifiedCount === 0) {
    return null;
  }

  return updatedCode;
};

// Get all code snippets with a specific language
const getCodesByLanguage = async (language) => {
  const codes = await getAllCodes();
  const filteredCodes = codes.filter((code) => code.language === language);
  return filteredCodes;
};

module.exports = {
  getAllCodes,
  getCode,
  createCode,
  deleteCodeById,
  updateCodeById,
  getCodesByLanguage,
};
