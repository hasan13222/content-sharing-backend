## CSM Content Share Task (Backend)

### Follow the below instructions to run the application in your local machine

- First clone the github repository or download the zip file
- run "npm install" command. Thus you can get all the required dependencies required for the application
- create a .env file in the project root directory
- write .env following field as per your choice
  ```
    PORT=5000
    NODE_ENV="development"
    SALT="12"
    ACCESS_TOKEN_SECRET_KEY=""
    REFRESH_TOKEN_SECRET_KEY=""
    ACCESS_TOKEN_EXPIRY_TIME=""
    REFRESH_TOKEN_EXPIRY_TIME=""

    DATABASE_URL="postgresql url"
    DB_USERNAME=
    DB_PASSWORD=
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=
  ```
- then run "npm start" command to run the application as development mode in your machine