### LB Code Challenge

##### Get Started:

Follow the steps below to properly set up the application.

1. Install dependencies: from CLI: **'npm install'**
1. Create Psql Database: from CLI: **'createdb yourDatabaseName'**
1. Create environment file: from CLI: **'touch .env'** and follow the structure provided in **nv-example file.**
1. Migrate and seed database: from CLI: **'knex migrate:latest && knex seed:run'**
1. Start server: from CLI run: **'nodemon'**
1. Enjoy!

##### API Commands:

**GET all notes:**
curl -i -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes

**GET one note:**
curl -i -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes/ INSERT ID (ex.1)

**Search notes by Keyword:**
curl -i -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes?query= INSERT KEYWORD (ex. TPS)

**Create new note:**
curl -i -H "Content-Type: application/json" -X POST -d '{"body" : "Pick up milk!"}' http://localhost:3000/api/notes
