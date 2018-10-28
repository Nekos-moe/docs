# Images / Posts

These routes allow you to access and modify posts.

## Get image

Returns an [Image](structures.html#post-image-data) matching the given ID.

```http
GET /images/{id}
```

**Ratelimit:** 5/10s

**Possible responses:**

```http
200 OK
Content-Type: application/json

{
	"image": Image
}
```

## Get random images

Returns the requested number of random [Images](structures.html#post-image-data).

Query parameters:

|Name|Value|Default|Required|
|---|---|---|---|
|nsfw|Boolean|undefined|false|
|count|Number 1-100|1|false|

```http
GET /random/image
```

**Ratelimit:** 5/10s

**Possible responses:**

```http
200 OK
Content-Type: application/json

{
	"images": [Image]
}
```

## Search images

Search for [Images](structures.html#post-image-data).

Body fields:

| Name | Value | Default | Required |
| ---- | ----- | ------- | -------- |
| id | String | | false |
| nsfw | Boolean | | false |
| uploader | String \| Object | | false |
| artist | String | | false |
| tags | Array\<String\> | | false |
| sort | String* | "newest" | false |
| posted_before | Number (milliseconds) | | false |
| posted_after | Number (milliseconds) | | false |
| skip | Number 0-2500 | 0 | false |
| limit | Number 1-50 | 20 | false |
*Sort methods: newest, likes, oldest, relevance

```http
POST /images/search
Content-Type: application/json

{ ... }
```

**Ratelimit:** 5/10s

**Possible responses:**

```http
200 OK
Content-Type: application/json

{
	"images": [Image]
}
```

## Upload image

Creates a new [Pending Image](structures.html#post-image-data).

Form fields:

| Name | Value | Required |
| ---- | ----- | -------- |
| image | File | true |
| nsfw | Boolean | true |
| artist | String | false |
| tags | Array\<String\> | true |

*Image can be up to 3 MB and must be a png or jpg/jpeg file   \
*Artist can be up to 60 characters long   \
*Tags can be up to 50 characters long and there can be up to 120 tags

```http
POST /images
Authorization: <token>
Content-Type: multipart/form-data

...
```

**Ratelimit:** 2/10s

**Possible responses:**

```http
200 OK
Content-Type: application/json

{
	"image": PendingImage,
	"image_url": "https://nekos.moe/image/{image.id}.jpg",
	"post_url": "https://nekos.moe/post/{image.id}"
}
```

```http
400 Bad Request
Content-Type: application/json

{
	"message": "..." // Explanation for rejection
}
```

```http
403 Forbidden
Content-Type: application/json

{
	"message": "You must have a verified account to post images"
}
```

```http
409 Conflict
Content-Type: application/json

{
	"message": "Image already uploaded",
	"id": Image.id
}
```
