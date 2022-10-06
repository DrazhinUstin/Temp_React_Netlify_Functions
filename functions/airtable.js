require('dotenv').config();
const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

exports.handler = async function (event, context) {
    try {
        const entries = await client.getEntries({
            content_type: 'eCommerceReact',
        });
        return {
            statusCode: 200,
            body: JSON.stringify(entries.items),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server error',
        };
    }
};
