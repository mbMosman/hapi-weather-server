'use strict';

const Weather = require('../modules/weather');

const Hapi = require('hapi');
const server = new Hapi.Server({ host: 'mighty-brushlands-35956.herokuapp.com/', port: 8080});

server.start()
  .then( () => { console.log(`Listening on ${server.info.uri}`)} )
  .catch( (error) => { console.log(`Failed to start server: ${error}`)} );

server.route({
  method: 'GET',
  path: '/',
  handler: function( request, h){
    return("Hello, world");
  }
});

server.route({
  method: 'GET',
  path: '/current/{zip}',
  handler: function(request, h){
    let obj = {};
    if( request.params.zip != null ){
      return Weather.getCurrent(request.params.zip);
    }
    else {
      obj.error = "Zip code is required.";
    }
    return obj;
  }
});
