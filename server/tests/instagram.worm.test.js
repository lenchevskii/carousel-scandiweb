const { getInstagramCollection }    = require('../utils/instagram.worm')

const { head }                      = require('lodash/fp')

const { PORT }                      = require('dotenv').config().parsed

const multipleImageUrl              = "https://www.instagram.com/p/B_xfntNJleV/"

const singleImageUrl                = "https://www.instagram.com/p/Bo8e6FsgLlK/"

const videoImageMixedUrl            = "https://www.instagram.com/p/CGDADokpb1X/"

const singleVideoUrl                = "https://www.instagram.com/p/CIoa4oWFISU/"

const localhost                     = `https://localhost:${PORT}/instagram-worm`

const realMoon                      = [

	{
		"src": "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/95715752_272475547130098_3584185748222201861_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=s4XlOHSH0dEAX-0hKuN&tp=1&oh=e0ec6feb5fdbcf7b8b308dce9d80c9c9&oe=600D6AF8",
		"config_width": 1080,
		"config_height": 1080
	},
	{
		"src": "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/95729898_237111044039765_1437024917198257818_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Yp8rHTBa6QsAX8G2WM_&tp=1&oh=e6a506739365a1cd4fdd3aa9f08c3cdf&oe=600E2A99",
		"config_width": 1080,
		"config_height": 1080
	},
	{
		"src": "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/95481785_670294690416554_1907379562588979251_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=b6f0jT-HODMAX8iWKsW&tp=1&oh=8ceba910dcfe241d96449fa335ed50f8&oe=600F563B",
		"config_width": 1080,
		"config_height": 1080
	},
	{
		"src": "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/95437653_872315149949691_8768018403799412485_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=wOADXpO5koQAX9svjRJ&tp=1&oh=6ab4170623f65478d8c1f1cde6877645&oe=600C1064",
		"config_width": 1080,
		"config_height": 1080
	},
	{
		"src": "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/95664480_850370165448514_7517911056616657279_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=vC1CeZddlbsAX904oIn&tp=1&oh=031219f84fb86b9316649d1bcebb20dd&oe=600D587D",
		"config_width": 1080,
		"config_height": 1080
	}
]

const realEngineer                  = [
	{
		"src": "https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/43914853_950008155183946_9094264551367023346_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=oTxiQGQDbb8AX-zKD_Y&tp=1&oh=640df227e9f2ee1f73fcd3780c79f919&oe=600ED05F",
		"config_width": 1080,
		"config_height": 1080
	}
]

const realNewbieSurprise            = []

const realLego                      = []

it(`Instagram. Steal Saturn's icy moon Mimas (multi-image post).  URL: ${multipleImageUrl}`,    async () => {

	const stolenMoon                  = await getInstagramCollection(multipleImageUrl)

  expect(stolenMoon.map(x => trimToken(x.src)))
  .toEqual(realMoon.map(x => trimToken(x.src)))
})

it(`Instagram. Steal Scandiweb engineer (single image post).      URL: ${singleImageUrl}`,      async () => {
	
	const stolenEngineer              = await getInstagramCollection(singleImageUrl)

  expect(stolenEngineer.map(x => trimToken(x.src)))
  .toEqual(realEngineer.map(x => trimToken(x.src)))
})

it(`Instagram. Steal newbie' surprises (video & image post).      URL: ${videoImageMixedUrl}`,  async () => {
	
	const stolenNewbieSurprise        = await getInstagramCollection(videoImageMixedUrl)

  expect(stolenNewbieSurprise.map(x => trimToken(x.src)))
  .toEqual(realNewbieSurprise.map(x => trimToken(x.src)))
})

it(`Instagram. Steal Lego from a boy (single video post).         URL: ${singleVideoUrl}`,      async () => {
	
	const stolenLego                  = await getInstagramCollection(singleVideoUrl)

  expect(stolenLego.map(x => trimToken(x.src)))
  .toEqual(realLego.map(x => trimToken(x.src)))
})


// HELPERS

// Trim time-dependent generated tokens (or whatever) from URL when the access was recieved

const trimToken                     = (url) => head(url.match(/.*(_n\.jpg\?)/))