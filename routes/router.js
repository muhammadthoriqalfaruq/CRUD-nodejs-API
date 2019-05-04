const express = require('express');
 
const router = express.Router();
 
router.get('/', (req, res, next) => {
    let kodertext = "Text ini dikirim dari server."
    res.render('index', {kodertext});
});
 
module.exports = router;