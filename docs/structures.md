# Structures

## Post / Image data

Posts will have the following structure. Certain fields may not appear in all responses. Some images may not have an `artist` or `approver`. Pending images will not have `comments`, `likes`, or `favorites`, but will have `pending: true`.

```json
{
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

## User Data

Users will have the following structure. Fields such as `verified`, `savedTags`, `favorites`, and `likes` may not appear in all responses.

```json
{
	"createdAt": "2017-03-10T04:44:53.870Z",
	"favorites": ["S16W9DayG", "Sk-2ob6wz", "Sk71MXpPf", "r1CT2r1iM", "H1R5hH1iz", "H1jFAnOcf", "BJrqoC9jM", ...],
	"favoritesReceived": 322,
	"id": "BkCBy21se",
	"likes": ["SJcAAsh5b", "Sy1zqzx2Z", "SkGSF_Jkf", "HyjjIdkJG", "rJOuxDdQf", "S1zzesoPz", "ryKe58owM", ...],
	"likesReceived": 1258,
	"roles": ["admin"],
	"savedTags": ["embarrassed", "enmaided", "frills", "glasses", "nervous", "paw pose", "pout", ...],
	"uploads": 599,
	"username": "brussell",
	"verified": true,
	"email": "..."
}
```