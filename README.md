#### Authentication & Authorization 

##

<p align="center">
 Refresh Token
</p>

<p align="center">
    <IMG height="400" src="https://user-images.githubusercontent.com/69175890/202930289-61665a3d-f0d7-49a6-aa5d-1d02986a19d9.png">
</p>

##

<p align="center">
 Routes
</p>



###### Login user 

#### - When a new user is created, his credentials are stored in a common token and his session is in a token called refresh-token, in which is only the e-mail or id of the session owner (user).

- The common token is returned in the body of the response and the refresh-token is sent by the cookie, which is automatically saved by the browser (by configuring the feth or axios module).

```js
userRoutes.post(
  '/create',
  AuthMiddleware,
  dtoValidator(CreateUserDto, 'BODY'),
  HttpAdapter(UserController.create, 'add-user-infos'),
);
```

##

###### Refresh Token 

#### - In this route, the user's session token ( refresh-token ) is checked if it is still valid, if it is valid, a new common token is generated and returned in the server's response.

- Your session is automatically sent in the cookie to the server by the module used in the front-end ( fetch or axios ).

```js 

userRoutes.post(
  '/refresh-token',
  RefreshTokenMiddleware,
  HttpAdapter(UserController.refreshToken, 'add-user-infos'),
);

```



