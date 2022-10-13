require('dotenv').config();
const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

exports.handler = async function (event, context) {
    const { id } = event.queryStringParameters;
    if (id) {
        try {
            const entry = await client.getEntry(id);
            return {
                statusCode: 200,
                body: JSON.stringify(entry),
            };
        } catch (error) {
            return {
                statusCode: 404,
                body: `Product with id: ${id} not found`,
            };
        }
    }
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
