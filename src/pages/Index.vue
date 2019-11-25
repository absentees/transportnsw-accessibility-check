<template>
  <Layout>
    <h1>Station check</h1>

    <form action="" method="get">
      <label for="stationName">Station Name:</label>
      <input v-model="form.stationName" type="text" name="stationName" id="stationName">
      <button type="submit">Look up</button>
    </form>

    <p>{{ form.stationName }}</p>
  </Layout>
</template>

<script>
export default {
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
