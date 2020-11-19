const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
const FETCHCONFIG = require('../config/fetchConfig')

router.route('/')
    .post((req,res,next) => {
    let githubInfo = doRequest(req.body.gname)
        .then(cleanReturnValue => {
            res.render('ps4',{'name': req.body.gname, 'num_repo': cleanReturnValue.public_repos,
            'git_url': cleanReturnValue.html_url});
        });
    })

const doRequest = async value => {
    let rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url + value);
    let cleanReturnValue = await rawReturnValue.json();
    return cleanReturnValue;

};

module.exports = router;