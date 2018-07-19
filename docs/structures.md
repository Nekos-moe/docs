# Structures

## Post / Image data

Posts will have the following structure. Certain fields may not appear in all responses. Some images may not have an `artist` or `approver`. Pending images will not have `comments`, `likes`, or `favorites`, but will have `pending: true`.

```json
"image": {
	"id": "ry7gPEpg7",
	"artist": "karasusou nano",
	"nsfw": false,
	"tags": [":d","1 girl","animal ears","beachball","bikini","blue background","blush","body blush","bow","bow bikini","breasts","brown eyes","fang","from side","halter top","halterneck","heart","inubashiri momiji","looking at viewer","medium breasts","open mouth","paw print","red bikini","red bow","short hair","smile","solo","swimsuit","tail","touhou","white hair","wolf ears","wolf tail"],
	"likes": 1,
	"favorites": 0,
	"uploader": {
		"id": "BkCBy21se",
		"username": "brussell"
	},
	"approver": {
		"id": "BkCBy21se",
		"username": "brussell"
	},
	"comments": [],
	"createdAt": "2018-06-12T12:04:58.998Z"
}
```
