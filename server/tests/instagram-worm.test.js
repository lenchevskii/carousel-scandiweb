/* eslint-env jest */
/* eslint-disable */

const { getInstagramCollection }  = require('../utils/instagram-worm')

const { PORT }                    = require('dotenv').config().parsed

const copied_anna_url             = "https://www.instagram.com/p/Bo8e6FsgLlK/?utm_source=ig_web_copy_link"

const moon_url                    = "https://www.instagram.com/p/B_xfntNJleV/?__a=1"

const anna_url                    = "https://www.instagram.com/p/Bo8e6FsgLlK/?__a=1"

const localhost                   = `https://localhost:${PORT}/instagram-worm`
          
const realMoonData                = {
    graphql: {
      shortcode_media: {
        __typename: 'GraphImage',
        id: '1890521876829092170',
        shortcode: 'Bo8e6FsgLlK',
        dimensions: [Object],
        gating_info: null,
        fact_check_overall_rating: null,
        fact_check_information: null,
        sensitivity_friction_info: null,
        sharing_friction_info: [Object],
        media_overlay_info: null,
        media_preview: 'ACoqrwzsqBVPGatR3DjDZBwMf596oKw4Ap0cIbc3PBxxxz1/IVld92a8t+hsC8B6j6YqF7ticDgVVU8fhQ7d/wC7ik5y7i5V2JWuHK5A4J6/SovtTeif5/GkzuGF4yRx0z/hUO2QdwPx/wDrUKUu4nFFRZgAPUUJcsoYLj5zkZ+n86ok1YhXepHTHNaqKYuZlxZgigcnt7e/51IJRIccjJA56fnVJZOOOO//AOqkDknmsrF3NMyBBkfX/JqPzweT3+tVUkPX0p5dfQUrDuZdWEcIvuarinGuhGA9PTGadTUpakZKCcUfNT/4akHSk1Ye5//Z',
        display_url: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/e35/43914853_950008155183946_9094264551367023346_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=HF3o5mtAeUsAX9_umJL&tp=1&oh=a4e66456fbd65eb25084ab46eff80ca5&oe=600ED05F',
        display_resources: [Array],
        accessibility_caption: 'Photo by Anna Bicevska in Sigulda. Image may contain: 1 person.',
        is_video: false,
        tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjpmYWxzZSwidXVpZCI6ImRjNjdhOWFmNGE2YTQwZGZiMThiNjZiMDcwMDkzZGJjMTg5MDUyMTg3NjgyOTA5MjE3MCJ9LCJzaWduYXR1cmUiOiIifQ==',
        edge_media_to_tagged_user: [Object],
        edge_media_to_caption: [Object],
        caption_is_edited: false,
        has_ranked_comments: false,
        edge_media_to_parent_comment: [Object],
        edge_media_to_hoisted_comment: [Object],
        edge_media_preview_comment: [Object],
        comments_disabled: false,
        commenting_disabled_for_viewer: false,
        taken_at_timestamp: 1539587791,
        edge_media_preview_like: [Object],
        edge_media_to_sponsor_user: [Object],
        location: [Object],
        viewer_has_liked: false,
        viewer_has_saved: false,
        viewer_has_saved_to_collection: false,
        viewer_in_photo_of_you: false,
        viewer_can_reshare: true,
        owner: [Object],
        is_ad: false,
        edge_web_media_to_related_media: [Object],
        edge_related_profiles: [Object]
      }
    }
}

// jest.mock('node-fetch')

it('Instagram', async () => {

  const fetchedMoonData = await getInstagramCollection(moon_url)

  expect(fetchedMoonData).toBe(realMoonData)
})
