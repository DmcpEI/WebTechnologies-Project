const express = require('express');
const router = express.Router();
const { getAllCodes, getCode, createCode, deleteCodeById, updateCodeById, getCodesByLanguage } = require('../database/codes');

// Get all code snippets
router.get('/', async (req, res) => {
  const codes = await getAllCodes();
  res.send({ status: 'OK', data: codes });
});

// GET endpoint to get all code snippets with a specific language
router.get('/:language', async (req, res) => {
  try {
    const codes = await getCodesByLanguage(req.params.language);

    if (codes.length === 0) {
      res.status(404).send({ status: 'FAILED', error: 'Code snippets not found' });
      return;
    }

    res.send({ status: 'OK', data: codes });
  } catch (e) {
    res.status(401).send({ status: 'FAILED', error: e.message });
  }
});

// Get code snippet with a certain id
router.get('/code/:codeId', async (req, res) => {
  try {
    const code = await getCode(req.params.codeId);

    if (!code) {
      res.status(404).send({ status: 'FAILED', error: 'Code snippet not found' });
      return;
    }

    res.send({ status: 'OK', data: code });
  } catch (e) {
    res.status(401).send({ status: 'FAILED', error: e.message });
  }
});

// Create/Share a code snippet
router.post('/', async (req, res) => {
  try {
    const codeData = req.body;

    if (!codeData.name || !codeData.language || !codeData.code) {
      return res.status(400).send({ status: 'FAILED', error: 'Missing required fields' });
    }

    const newCode = await createCode(codeData);

    res.status(201).send({ status: 'OK', data: newCode });
  } catch (error) {
    res.status(500).send({ status: 'FAILED', error: 'Internal server error' });
  }
});

// Update a code snippet by ID
router.put('/:codeId', async (req, res) => {
  try {
    const codeId = req.params.codeId;
    const updatedCodeData = req.body;

    if (!updatedCodeData.name || !updatedCodeData.language || !updatedCodeData.code) {
      return res.status(400).send({ status: 'FAILED', error: 'Missing required fields' });
    }

    const updatedCode = await updateCodeById(codeId, updatedCodeData);

    if (!updatedCode) {
      return res.status(404).send({ status: 'FAILED', error: 'Code snippet not found' });
    }

    res.send({ status: 'OK', data: updatedCode });
  } catch (error) {
    res.status(500).send({ status: 'FAILED', error: 'Internal server error' });
  }
});

// Delete a code snippet by ID
router.delete('/code/:codeId', async (req, res) => {
  try {
    const codeId = req.params.codeId;
    const result = await deleteCodeById(codeId);

    if (!result) {
      return res.status(404).send({ status: 'FAILED', error: 'Code snippet not found' });
    }

    res.send({ status: 'OK', message: 'Code snippet deleted successfully' });
  } catch (error) {
    res.status(500).send({ status: 'FAILED', error: 'Internal server error' });
  }
});

module.exports = router;
