# Common Errors

To avoid listing every possible response throughout the docs, common non-200 responses are listed here.

## Auth errors

Any endpoint requiring an `Authorization` header may return these responses.

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

## Resource not found

```http
404 Not Found
Content-Type: application/json

{
	"message": "Image/User/Post/... not found"
}
```

## Body required

Returned by endpoints that require a body to be sent

```http
400 Bad Request
Content-Type: application/json

{
	"message": "No body"
}
```
