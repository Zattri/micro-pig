# micro-pig

A micro-services playground project made at work to develop an understanding of how to create a project utilising micro-services and API controllers.

In order to run this project you will have to have the following installed -

- angular cli
- node
- nodemon
- npm
- docker
- docker-compose (recommended)

It is recommended that you build and run the container through docker-compose with `docker-compose build` and `docker-compose up` in the root directory.

This container contains -

- The node app, running through nodemon
- An Elasticsearch instance
- A mongoDB instance 

It is recommended to serve the angular site through angular cli with `ng serve` in the `angular-app` folder.

This contains the front-end API for interacting with the user and microservices

Robo 3T works well as an interface for managing and inserting sample data into the Mongo databases, as well as running basic queries against the data. You can find it here - https://robomongo.org/

The database structure is as follows
- It is recommended you use this structure as the API is hard-coded to ask for data from this configuration

```
Database:
  customer
  |
  |-->
      Collections:
      |
      |--> accounts


Database:
  product
  |
  |-->
      Collections:
      |
      |--> stock
```


I regret naming this project micro-pig (it's awful to type), but I'm stuck with it now...

Let this be a lesson to future me.
