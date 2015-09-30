Todo test app
=============
This application supposed to be used as an exercise for the following tech stack:
* NodeJS + Express
* MongoDB + Mongoose
* Backbone
* RequireJS
* REST for client-server communication

Project setup
=============
1. Install NodeJS
2. Install MongoDB
3. Start MongoDB
4. Run "npm install" command from the app root folder
5. Run "node app" command from the app root folder
Once you'll able to start NodeJS sever - you should see the following in your console:
* App listening at http://:::3000
* mongodb has been started

Test data
=============
Note that once you'll run app - there will be created some test data. You may remove it to achieve your goals.

Project structure
=============
* todo-test-app/
* app.js - entry point for NodeJS app
* /public/
* /public/css/ - stylesheets
* /public/js/
* /public/js/main.js - entry point for RequireJS
* /public/js/router.js - Backbone router
* /public/js/models/ - Backbone models and collections
* /public/js/views/ - Backbone views
* /public/templates/ - Underscore templates
* /routes/ - contains NodeJS routes API
* /routes/models/ - contains MongoDB models definition
* /views/ - contains server side views (Handlebars as a view-engine)

------------------------------------

http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/