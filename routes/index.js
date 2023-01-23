const express = require('express');
const router = express.Router();

// get data
// http://localhost:8080/contacts
// http://localhost:8080/contacts/id

router.use('/contacts', require('./contacts.js'));
router.use('/', require('./swagger.js'));

module.exports = router;