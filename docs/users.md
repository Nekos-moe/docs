# Users

These routes allow you to get data on users.

## Get user

Returns a [User](structures.html#user-data) matching the given ID. To get the current user, use `@me`

```http
GET /user/{id}
```

**Ratelimit:** 10/10s

**Possible responses:**

```http
200 OK
Content-Type: application/json

{
	"user": User
}
```

## Search users

Returns a list of [Users](structures.html#user-data) sorted by their popularity. The `query` field can be used to search by username.

Body fields:

| Name | Value | Default | Required |
| ---- | ----- | ------- | -------- |
| query | String | | false |
| skip | Number | 0 | false |
| limit | Number 0-100 | 20 | false |

```http
POST /users/search
Content-Type: application/json

{ ... }
```

**Ratelimit:** 10/10s

**Possible responses:**

```http
200 OK
Content-Type: application/json

{
	"users": [User]
}
```
