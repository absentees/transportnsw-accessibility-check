const stations = require("../ten.js");
var Xray = require("x-ray");
var x = Xray();

var accessibilityRegex = new RegExp("(is not wheelchair accessible)", "g");

async function getAllStations() {
    try {
        const promises = stations.map(async station => {
            const stationAccess = await lib.getStationAccessibilityById(
                station.id
            );
            return {
                stationName: station.station,
                wheelchairAccess: stationAccess
            };
        });

        const result = await Promise.all(promises);

        return result;
    } catch (e) {
        return e;
    }
}

async function getStationAccessibilityById(stationId) {
    try {
        var results = await x(
            `https://transportnsw.info/stop?q=${stationId}`,
            "#main-content",
            [
                {
                    accessibility: ".stop-accessibility ul li:nth-child(1)"
                }
            ]
        );

        if (accessibilityRegex.test(results[0].accessibility)) {
            return Promise.resolve(false);
        } else {
            return Promise.resolve(true);
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

async function getStationAccessibilityByName(stationName) {
    try {
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getStationAccessibilityById,
    getAllStations
};
