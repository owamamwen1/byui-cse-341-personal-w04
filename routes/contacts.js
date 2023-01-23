const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts.js');

// GET All data
router.get('/', contactsController.getAllContact);

// GET by Id
router.get('/:id', contactsController.getSingleContact);
// POST
router.post('/', contactsController.createContact);
// PUT
router.put('/:id', contactsController.updateContact);
// DELETE
router.delete('/:id', contactsController.deleteContact);

module.exports = router;