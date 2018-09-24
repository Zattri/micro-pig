# micro-pig

A micro-services playground project made at work to develop an understanding of how to create a project utilising micro-services and API controllers.


## Required Installs
In order to run this project you will have to have the following installed -

- angular cli
- node
- npm
- docker


## Optional installs

#### docker-compose (highly recommended) 

Though this is not fully necessary it is highly recommended that you install docker-compose as this saves you time when building and re-building images, as well as running multiple images concurrently. 

**The project is supposed to be built this way**

The installation guide can be found here - https://docs.docker.com/compose/install/

#### Robo 3T - 
I used this as an interface for managing and inserting sample data into the Mongo databases and it works well.  It also has the ability to running basic queries against the data and allows basic CRUD functionality and probably some more advanced stuff I don't know about.

You can find it here - https://robomongo.org/


## Running instructions

### Docker containers
It is recommended that you build and run the container through docker-compose 

First run `docker-compose build` in command line when in the root directory to build each image locally on your machine. This may take some time initially as this project will have to fetch the remote MongoDB image and also install all npm packages.

Then use `docker-compose up` in the root directory to run each of the images in a container. 

The containers are then viewable using the command `docker ps -a`

### Angular web-app
It is recommended to serve the angular site through angular cli 
Change directory into the `angular-app` folder and use the command `ng serve` to serve the web-app. By default this will run on port `4200` at the address `localhost:4200/`


## Database Setup 

It is recommended you use this structure as the API is hard-coded to ask for data from this configuration

The database structure is as follows - 

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

You can use Robo 3T (mentioned in the other applications section) to manage the databases and insert the sample data.

The generator used to make the sample data can be found here - https://www.generatedata.com/

The people and products in the sample data are generated and are not real, please don't try using the names, numbers or email addresses listed in the sample data.


#### Credits

I regret naming this project micro-pig (it's awful to type), but I'm stuck with it now...

Let this be a lesson to future me.
