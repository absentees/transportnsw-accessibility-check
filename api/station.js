var Xray = require("x-ray");
var x = Xray();
const stations = require("../nsw-train-stations.js");

var accessibilityRegex = new RegExp("(is not wheelchair accessible)", "g");
// Erskine 10101324
// Central 10101100

module.exports = async (req, res) => {
    try {
        var result = await getStationAccessibilityById(10101324);
        res.end(`result: ${result}`);
    } catch (e) {
        console.log(e.message);
    }
};

async function getStationAccessibilityById(stationId) {
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
        console.log(`Station id: ${stationId} is false`);
        return Promise.resolve(false);
    } else {
        console.log(`Station id: ${stationId} is true`);
        return Promise.resolve(true);
    }
}
