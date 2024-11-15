// Create web server
// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle requests
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);
router.post('/:id/delete', commentController.comment_delete_post);

// Export the router
module.exports = router;
