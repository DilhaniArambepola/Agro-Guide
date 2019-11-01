# AgroGuide

## Introduction
Agroguide is an agricultural web application for organic farmers, organic vegetable sellers and seeds and plant sellers. This application provides step by step guidance to farming from the crop selection stage to harvesting according to farmer’s climate zone. Some of the core features include the ability to find places to buy organic fruits and vegetables and also seeds and plant shops in your area. Sellers can add/remove/update selling items after logged in to their profiles. The administrator can manage crop details and update them. Farmers will get email notifications if there is some disease spreading throughout the country related to their selected crops and when necessary.   

## Tools and Technologies
Technology: HTML, CSS, NG Bootstrap, Angular 7, Nodejs, Express.js<br/>
Database: MySQL

## Usage and Configuration

### Step 1: Clone
git clone https://github.com/DilhaniArambepola/Agro-Guide.git 

### Step 2: Configure Backend
Backend server developed using node.js and express.js server and MySQL. To run the server, you need <br />
•	Install Node.js in your machine <br />
•	MySQL 8.0 or above

### Step 3: Database Configuration
1.	Create the database called ‘agroguide’ <br />
2.	Restore database file ‘agroguide.sql’ <br />
3.	Open server.js and add your username and password for MySQL in the line <br />

`const db = mysql.createConnection ({` <br />
  `user: <username>,`<br />
  `password: <password>,`<br />
`});`

To run the server run this command <br />
1.	npm install  <br />
2.	node server.js <br />

### Step 4: Configure Frontend
Front-end application developed using Angular 7, To run the application you need, <br />
•	Angular CLI:7 or above <br />

To run the frontend run this command<br />
1.	ng serve –o

Now the browser will automatically open the application <br />

Homepage URL : http://localhost:4200/home <br />
Admin URL : http://localhost:4200/admindashboard <br />

You can login to the admin using <br />
Email : admin@gmail.com <br />
Password : admin123 <br />

You can signup and login to other profiles (Farmer, Seller) <br />



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
