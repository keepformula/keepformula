<template>
  <q-page id="q-page">
    <div class="container-main">
      <h3 class="q-mb-lg">Golden Ratio</h3>
      <div class="container-input">
        <div id="input">
          <q-input type="number" v-model="number" float-label="Number" />
            <br>
            <q-field class="field">Shorter is : {{ ShorterSection }}</q-field>
            <br>
            <q-field class="field">Longer is : {{ LongerSection }}</q-field>
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
  name: 'GoldenRatio',
  data () {
    return {
      number: null,
      counter: ''
    }
  },
  props: {
  },
  computed: {
    ShorterSection () {
      return this.number / 1.61803398875
    },
    LongerSection () {
      return this.number * 1.61803398875
    }
  },
  methods: {
    Reset: function () {
      this.number = ''
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
