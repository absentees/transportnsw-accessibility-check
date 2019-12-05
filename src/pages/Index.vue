<template>
  <Layout>
    <h1>There are {{ $static.metadata.totalAccessible }} wheelchair accessible stations out of a total {{ $static.metadata.totalStations }} in NSW right now. That's {{ $static.metadata.percentageAccessible }}%.</h1>
    <p><br/>"By the end of 2017, 90 per cent of the stations are supposed to be accessible... By 2022, 100 per cent of the stations are supposed to be accessible." <a href="https://www.abc.net.au/news/2018-08-29/the-unconscionable-state-of-australias-train-stations/10147174">abc.net.au</a></p>
    

    <!-- <form action="" method="get">
      <label for="stationName">Station Name:</label>
      <input v-model="form.stationName" type="text" name="stationName" id="stationName">
      <button type="submit">Look up</button>
    </form> -->

    <StationList/>

  </Layout>
</template>

<static-query>
  query {
    metadata {
      totalAccessible,
      percentageAccessible,
      totalStations
    }
  }
</static-query>

<script>
import StationList from '~/components/StationList.vue'


export default {
  components: {
    StationList
  },
  metaInfo: {
    title: 'Station check'
  },
  data () {
    return {
      form: {
        stationName: ''
      }
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
