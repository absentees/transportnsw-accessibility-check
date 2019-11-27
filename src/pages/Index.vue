<template>
  <Layout>
    <h2>There are {{ $static.metadata.totalAccessible }} wheelchair accessible stations in NSW. That's {{ $static.metadata.percentageAccessible }}%.<br/>"By 2022, 100 per cent of the stations are supposed to be accessible."</h2>
    <a href="http://https://www.abc.net.au/news/2018-08-29/the-unconscionable-state-of-australias-train-stations/10147174">abc.net.au</a>

    <!-- <form action="" method="get">
      <label for="stationName">Station Name:</label>
      <input v-model="form.stationName" type="text" name="stationName" id="stationName">
      <button type="submit">Look up</button>
    </form> -->

    <p>{{ form.stationName }}</p>

    <StationList/>
  </Layout>
</template>

<static-query>
  query {
    metadata {
      totalAccessible,
      percentageAccessible
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
