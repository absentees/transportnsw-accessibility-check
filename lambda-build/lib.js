const stations = require("../nsw-train-stations.js");
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
        console.log("Finding accessibility of station:" + stationId);
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

async function getStationId(stationName) {
    try {
        for (let i = 0; i < stations.length; i++) {
            if (stations[i].alt.toLowerCase() === stationName.toLowerCase) {
                console.log(`Station name ${stationName} has id: ${stations[id].id}`)
                return Promise.resolve(stations[i].id);
            } else {
                console.log(`Station name ${stationName} doesnt have id: ${stations[id].id}`)
            }
        }
        return Promise.reject(`Station name: ${stationName} could not be found`);
    } catch (error) {
        return Promise.reject(error.message);
    }
}

module.exports = {
    getStationAccessibilityById,
    getAllStations,
    getStationId
};
