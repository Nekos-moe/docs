module.exports = {
	title: 'Nekos.moe API Docs',
	description: 'An API for getting images of characters with cat-like appearances',
	head: [
		['link', {
			rel: 'icon',
			href: `/logo.jpg`
		}],
		['meta', {
			name: 'theme-color',
			content: '#96abec'
		}],
		['meta', {
			name: 'apple-mobile-web-app-capable',
			content: 'yes'
		}],
		['meta', {
			name: 'apple-mobile-web-app-status-bar-style',
			content: 'black'
		}],
		['link', {
			rel: 'apple-touch-icon',
			href: `/icons/apple-touch-icon.png`
		}]
	],
	themeConfig: {
		repo: 'Nekos-moe/docs',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		nav: [{
				text: 'Docs',
				link: '/',
			}
		],
		sidebar: {
			'/': genSidebarConfig()
		}
	}
}

function genSidebarConfig() {
	return [
		{
			title: 'Docs',
			collapsable: false,
			children: [
				'',
				'structures',
				'errors',
				'auth',
				'images'
			]
		}
	]
}
