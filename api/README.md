# Endpoints

## Users

### /user/add POST
Create a user
```
#JSON
{ 
"name": "their name",
"role": "team role",
"email": "rit email",
"phone": "phone number",
"team": "team name in app"
}
```

### /user/all GET

List of all users in JSON
```
#JSON
[
  {
  "name": "their name",
  "role": "their role",
  "email": "their email",
  "phone": "their phone",
  "uuid": "unique ID for each user"
  },
  ...
]
```

### /user/modify UPDATE

Updates any of the following provided parameters for a user
```
#JSON, uuid required
{
"uuid": "user uuid",
"email": "change email to this",
"name": "change name to this",
"phone": "change phone to this",
"role": "change role to this",
}
```

### /user/delete DELETE

Deletes a user
```
#JSON
{
"uuid": "user's uuid"
}
```

## Teams

### /team/add POST
Create a team
```
{
"name": "team name to add"
}
```

### /team/members GET

List of a teams members
```
#JSON request
{
"name": "team name"
}

#JSON response
[
  {
    USER
  },
  {
    USER
  },
  ...
]
# refer above for user json respresentation
```
  
