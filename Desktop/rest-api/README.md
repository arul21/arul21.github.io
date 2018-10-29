# REST API with Authentication

### Demo App with with basic REST API.

## REST API



List of user routes:

Route | HTTP | Description
------|-------|----------
/api/signup/ | POST | Sign up with new user info
/api/signin/ | POST | Sign in while get an access token based on credentials
/api/users | GET | Get all user info (admin only)
/api/users/:id | GET | Get a single user info (admin and authenticated user)
/api/users/ | POST | Create a user(admin only)
/api/users/:id | DELETE | Update a user with new info (admin and authenticated user)



## Usage

### With only npm:

```javascript
npm install
npm start
```
Sign Up:
 ``````
name    : <input_name>       # your name
email   : <input_email>      # is unique
password: <input_password>   # not unique and can be anything
role    : <input_role>       # input role
``````

Sign In:
 ``````
email   : <email>       
password: <input_password>   
``````
 

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`.