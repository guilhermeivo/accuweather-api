const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors())

const apikey = process.env.API_KEY;
const baseUrl = 'http://dataservice.accuweather.com/';

app.get('/api/geoposition', async (request, response, next) => {
    let query = require('url').parse(request.url, true).query;

    const queries = {
        'apikey': apikey,
        'q': query.q,
        'language': query.language,
        'details': false,
        'toplevel': true
    }

    let url = `${baseUrl}locations/v1/cities/geoposition/search?apikey=${queries.apikey}&q=${queries.q}&language=${queries.language}&details=${queries.details}&toplevel=${queries.toplevel}`;

    const fetchResponse = await fetch(url, { 'method': 'GET' });
    const json = await fetchResponse.json();  

    response.json(json);  
});

app.get('/api/hourly-forecast', async (request, response, next) => {
    let query = require('url').parse(request.url, true).query;

    const queries = {
        'key': query.key,
        'apikey': apikey,
        'language': query.language,
        'details': false
    }
    

    let url = `${baseUrl}forecasts/v1/hourly/12hour/${queries.key}?apikey=${queries.apikey}&language=${queries.language}&details=${queries.details}`;

    const fetchResponse = await fetch(url, { 'method': 'GET' });
    const json = await fetchResponse.json();
    
    response.json(json);
});


app.all('*', (request, response) => {
    response.redirect('/');
});

module.exports = app;