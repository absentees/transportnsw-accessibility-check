const lib = require("./lib.js").default;

exports.handler = async (event, context, callback) => {
    try {
        const stationName = event.queryStringParameters.name;

        
        const stationAccess = await lib.getStationAccessibilityByName(
            stationName
        );

        return {
            id: station.id,
            name: stationName,
            wheelchairAccess: stationAccess
        };
    } catch (e) {
        callback(null, {
            statusCode: 300,
            body: JSON.stringify({ message: `Error occured ${e.message}` })
        });
    }
};
