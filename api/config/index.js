module.exports = async function (context, req) {
    context.res = {
        body: {
            apiUrl: process.env.API_URL || 'http://localhost:8080'
        }
    };
};