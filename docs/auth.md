# Auth

These routes allow you to obtain and reset an account's token.

## Get token

```http
POST /auth
Content-Type: application/json

{
	"username": "ilovecatgirls",
	"password": "^nyaa321^"
}
```

**Possible responses**

```http
200 OK
Content-Type: application/json

{
	"token": "abcdefghhijklmnopqrstuvwxyz1234567890"
}
```

```http
400 Bad Request
Content-Type: application/json

{
	"message": "Username and password are required"
}
```

```http
403 Forbidden
Content-Type: application/json

{
	"message": "You must verify your email"
}
```

```http
401 Unauthorized
Content-Type: application/json

{
	"message": "Incorrect username or password"
}
```

## Regenerate token

```http
POST /auth/regen
Authorization: <token_here>
```

**Possible responses**

```http
204 No Content
```

```http
400 Bad Request
Content-Type: application/json

{
	"message": "Authentication required"
}
```

```http
401 Unauthorized
Content-Type: application/json

{
	"message": "Invalid token"
}
```
