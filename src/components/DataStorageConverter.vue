<template>
  <q-page id="q-page">
    <div class="container-main">
      <h3 class="q-mb-lg">Data Storage Converter</h3>
      <div class="container-input">
        <div id="input">
        </div>
        <div class="btn-reset">
          <q-btn @click="Reset" style="background: #2468a3; color: white" label="Reset" size="22px"/>
        </div>
      </div>
    </div>
          </q-page>
</template>

<script>
export default {
  name: 'DataStorageConverter',
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    Reset: function () {
      this.byte = ''
    }
  }
}
</script>
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
