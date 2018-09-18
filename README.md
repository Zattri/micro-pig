# micro-pig

A micro-services playground project made at work to develop an understanding of how to create a project utilising micro-services and API controllers.

In order to run this project you will have to have the following installed -

- angular cli
- node
- nodemon
- npm
- docker
- docker-compose (recommended)

It is recommended that you build the container through docker-compose with `docker-compose up` in the node-app folder.

This container contains -

- The node app, running through nodemon
- An Elasticsearch instance
- A mongoDB instance 

It is recommended to serve the angular site through angular cli with `ng serve` in the angular-app folder.

This contains the front-end API for interacting with the user and microservices
