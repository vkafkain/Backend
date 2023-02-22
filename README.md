# Contracting Vueling Profiles


## Challenge description
**Vueling** wants the Handling process to be more data-driven with the objective of minimizing costs while ensuring a robust operation. Handling is defined as all ground operations tasks required to serve a flight.

**Valencia airport (VLC)** will be used as proof of concept for this project. Moreover, the scope of this first iteration is restricted to three types of tasks: Jardinera, Equipaje y Coordinación. Jardinera refers to the buses that take the passengers from the airport lounge to the planes. Equipaje involves carrying customers luggage into the plane, and Coordinación is the supervisor managing all ground handling tasks.

**Vueling** has a list of scheduled flights, where each of them has its specific handing tasks that must be performed by the airport workers. You can find this information in the input-ground-handling-optimization.csv dataset. Columns definitions are as follows:

- dt_flight: Flight date in YYYY-MM-DD format
- cd_flight_number: Numeric code of the flight
- cd_airport_dep: IATA code of the departure airport
- cd_airport_arr: IATA code of the arrival airport
- handling_function: Name of the handling task
- ts_operation_start_utc: Start datetime of the handling task
- ts_operation_end_utc: End datetime of the handling task
- required_employees: Required number of employees to perform the task

There are two types of workers, full-time and part-time. Each one has specific contractual conditions and costs depending on the handling function to be performed.

The problem consists of finding the best combination of people to contract with minimal cost, ensuring that all handling operations are covered, and all contractual constraints are met.

**- Restrictions:**

 - Airport operations schedule is from 6am to 11pm.
 - Every hour must be covered by at least one worker, independently of demand requirements.
 - There are two shifts for full-time workers: morning and afternoon. Morning starts at 6am and Afternoon starts at 3pm.
 - Full-time workers must perform shifts of 9h, which includes a 1h break after 4 hours from shift start.
 - Part-time workers perform 4 hours shifts with no breaks
Achieve the optimal solution following the next steps:

**1.Obtain the optimal solution for one handling area and one day.**

**Tips**

- You can use Excel, Python, R, etc. Probably, it will be best for you to start visualizing data in Excel and play with its Solver function and then move on to a programming language.
- First, you will need to compute the required employees per hour, this is the demand constraint.
- Finally, you need to define the objective function (minimize the cost) and other constraints.
**2. Find the optimal configuration considering all the handling areas, for one day.**

**Tips-**If you used a tool like Excel, probably you will need to switch to a programming language. For instance, solvers for python like PuLP or gurobipy.

3. Find the optimal configuration considering all the handling areas and all week.

Tips- If you managed to solve the previous task, this should be straightforward.

If you are having trouble with some constraint, consider going forward with a simpler solution. Give your best and come up with a solution.

**Backend and fronts requirements**

There are 2 principal use cases that we need to implement for the Ground Handling Optimization problem

- Administrative interface that allows to configure the parameters to execute the model of optimization. Parameters like shift durations, hourly cost of each type of handling function and contractual conditions, Airport Schedule an others. This interface is required as a WEB application.
- Executive interface, that shows the results of the optimized model (the table above). This interface should have filters, export to Excel and other functionality that will allow a clear understanding of the resulting optimization. Graphs and statistics are always welcome. Non functional requirements:
Some RBAC functionality. There must be authentication and only some roles should be able to access the administrative interface.
Observability features like logging, tracing, metrics
Extra/Optional/pluses Architecture diagram of the system for a real production scenario Unit Testing at front and back Static code analysis report of front and back.

TIPS La infraestructura para el desarrollo y demos será con los propios equipos de los participantes, por lo que hay que estar preparados para trabajar en un entorno maquina con maquina lo cual ofrece sus retos, por lo que se recomienda:

Trabajar orientados a mocks. Empezar por establecer los contratos entre cada capa front --> back --> Data y trabajar con mocks de esto contratos para no estar a la espera de las otras capas. Hay muchas herramientas para hacer mocks como por ejemplo: www.mockable.io o el propio postman o SOAPui (o su familia)

Si en el equipo hay conocimiento, se recomienda trabajar con docker / docker-compose para montar todo el stack y que el mismo funcione sin problemas al pasar de maquina en maquina

Para el caso de uso de cambio de parametros desde la UI para re ejecutar el modelo. Una opción sencilla de integración es que sea a través de archivos/carpetas. Donde el back deja un archivo en una carpeta data, que un demonio/script o similar este revisando para ejecutar el modelo y dejar los resultados en otra carpeta, un poco lo que se haría con S3/Blob a nivel de AWS/Azure

This is the datset you must check for the solution of the challenge: VUELING DATASET

FRONT DEV

HTTP Interceptors

Error handling interceptor

To control HTTP request errors we have implemented an HTTP interceptor that listens for all these requests and in case of an error triggers the Sweet Alert Modal  that displays an error message indicating the error code.

Before triggering the snack bar the HTTP interceptor does a retry twice to make sure that the request does not give an answer. 

Ngx-spinner interceptor

To control the timeout during the loading of API requests a spinner has been implemented using the ngx-spinner Angular library, this spinner is imported into the module and here, in the interceptor, and also includes its own stylesheet in the angular.json file. To be able to use it in all requests, we intercept every Http request through the interceptor and start the spinner. When the request finishes, which we control by finalize, we stop the spinner.



## Requirements

_For the application to function properly, it is recommended to have this programs installed and configured correctly:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MySQL](https://www.mysql.com/downloads/)

## Install

_Clone this repository to your local repository, run the following command in terminal to install the dependencies and for the project to work correctly:_

```
npm install
```

## Enviroment variables

_In order for everything to work, we have to enable the environment variables. To do this, you have to create a file with the name `.env` and enter the data you have in the `.env-templates` file._

## Run the application

_Once we have the programs and dependencies installed, run the following command in terminal:_ 

```
npm start
```

## Database

### Entity-Relationship database model

_We have created the database in MySQL with the entity-relationship model, in large volumes of data having a structured database gives us stability.


## Technologies


* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/en/docs/) - Server-side JavaScript runtime environment.
* [MySQL](https://dev.mysql.com/doc/) - MySQL is a relational database management system based on SQL – Structured Query Language.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables.
* [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more.
* [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [JWT](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. 
* [Angular](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started) - Front end framework
* [Bootstrap 5.2](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started) - Front end css framework


Codefactor : 
[![CodeFactor](https://www.codefactor.io/repository/github/yasmingimenezm/vueling-hackaton-team5/badge)](https://www.codefactor.io/repository/github/yasmingimenezm/vueling-hackaton-team5)
