<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      description: 'Keep Formula is a simple app to make your calculations easier!'
    }
  },
  metaInfo () {
    return {
      title: `Keep Formula`,
      meta: [
        {
          vmid: 'decription',
          name: 'description',
          content: this.description
        },
        {
          vmid: 'twitter-title',
          name: 'twitter:title',
          content: `Keep Formula`
        },
        {
          vmid: 'og-title',
          property: 'og:title',
          content: `Keep Formula`
        },
        {
          vmid: 'twitter-description',
          name: 'twitter:description',
          content: this.description
        },
        {
          vmid: 'og-description',
          property: 'og:description',
          content: this.description
        }
      ]
    }
  }
}

</script>

<style>
</style>
