const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res, next) => {
        res.render('ps3', { string: 'cs412 is a great class!' });

    })

    .post((req,res,next) => {
    //console.log(`Got ${req.body.name} on ${req.url} (${req.method})`);
    //req.params.name=req.body.name;
    res.render('ps3c',{'name': req.body.name, 'length': req.body.name.length});
    })


module.exports = router;