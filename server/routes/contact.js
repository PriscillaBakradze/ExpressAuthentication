const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}


// GET Route for the Book List page - READ OPERATION
router.get('/', contactController.displayContactList);

// GET Route for displaying the Add page - CREATE OPERATION
router.get('/add', requireAuth, contactController.displayAddPage);

// POST Route for processing the Add page - CREATE OPERATION
router.post('/add', requireAuth, contactController.processAddPage);

// GET Route for displaying the Edit page - UPDATE OPERATION
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// POST Route for processing the Edit page - UPDATE OPERATION
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// GET Route to perform Deletion - DELETE OPERATION
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;