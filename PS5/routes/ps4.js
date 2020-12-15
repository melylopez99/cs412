const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
//const FETCHCONFIG = require('../config/fetchConfig')

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);

client.flushdb((err, success) => {
    if (err) {
        throw new Error(err)
    }
});

router.route('/')
    .post(async (req,res,next) => {
        // get the Github username
        let gname = req.body.gname;
        console.log(gname);
        // check cache
        let match = await existsAsync(gname);
        if (match) {
            let value = await getAsync(gname);
            let response = [{
                githubName: gname,
                repos: value,
                cached: true
            }, {githubName: gname,
                    repos: value,
                    cached: true
                }]
            res.send(response);
        } else {
            let githubInfo = await fetch('https://api.github.com/users/' + gname);
            let githubInfoJson = await githubInfo.json();
            let status = await setAsync(gname, githubInfoJson.public_repos);
            status = await expireAsync(gname, 15)
            let response = [{
                githubName: gname,
                repos: githubInfoJson.public_repos,
                cached: false
            },{
                githubName: gname,
                repos: githubInfoJson.public_repos,
                cached: false}]
            res.send(response)
        }
    });

module.exports = router;
