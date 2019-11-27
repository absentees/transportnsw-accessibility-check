// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');


module.exports = function (api) {
  // Setup variables for total count
  let totalAccessible = 0;
  let totalStations = 0;

  api.loadSource(async actions => {
    const { data } = await axios.get('http://localhost:34567/.netlify/functions/getAllStations');

    // const collection = actions.addCollection('Train')

    // for (const item of data) {
    //   collection.addNode({
    //     id: item.id,
    //     name: item.name,
    //     wheelchairAccess: item.wheelchairAccess
    //   })
    // }

    const collection = actions.addCollection('TrainStation')

  
    for (const item of data) {
      collection.addNode({
        id: item.id,
        name: item.name,
        wheelchairAccess: item.wheelchairAccess
      })
      
      if (item.wheelchairAccess) totalAccessible++; 
    }

    totalStations = data.length;

    
  })

  api.loadSource(async store => {
    store.addMetadata('totalAccessible', totalAccessible);

    store.addMetadata('percentageAccessible', totalAccessible/totalStations*100);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
