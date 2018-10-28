# Introduction

The [Nekos.moe](https://nekos.moe/) API allows developers to provide the same features in their applications as we do on the site. Nekos.moe is an open-source website, so if you wish to see exactly how things work visit the [API repo](https://github.com/brussell98/catgirls-api).

## Using the API

::: warning
The Nekos.moe API is still in development. Breaking changes may happen with little warning
:::

All API request use the base URL `https://nekos.moe/api/{version}/`

|API version|Status|
|---|---|
|v1|Pre-release|

All 3rd-party applications using the API should set a user agent that identifies their application.   \
Example: `User-Agent: NekosBot (nekosbot.com, v1.2.4)`

## Ratelimits

The Nekos.moe API enforces ratelimits to prevent API abuse. Ratelimit information is provided in the headers of all responses to ratelimited endpoints.

**Examples:**

```http
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 3
```

```http
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 0
Retry-After: 1354
```

## Authentication

Some requests require authentication. To authenticate with the API you must [create an account](https://nekos.moe/register) and obtain it's token.

To obtain your token through the API jump to [Auth Routes](auth.md). An easier method is to log in to that account and grab the token from your browser's local storage.

API tokens should be sent in the `Authorization` header of requests.
