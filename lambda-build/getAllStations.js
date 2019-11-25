const lib = require("./lib.js").default;


exports.handler = async (event, context, callback) => {
    try {
        const result = await lib.getAllStations();

        callback(null, {
            statusCode: 200,
            body: JSON.stringify(result)
        });
    } catch (e) {
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({message: `Error occured ${e.message}`})
        });
    }
};