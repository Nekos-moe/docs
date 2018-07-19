# Auth

These routes allow you to obtain and reset an account's token.

## Get token

Allows you to get an account's token from their username and password.

```http
POST /auth
Content-Type: application/json

{
	"username": "ilovecatgirls",
	"password": "^nyaa321^"
}
```

**Ratelimit:** 10/60s

**Possible responses:**

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

Will generate a new token for the authorized account. The new token will not be returned, so your application must auth again.

```http
POST /auth/regen
Authorization: <token>
```

**Ratelimit:** 1/10s

**Possible responses:**

```http
204 No Content
```
