<template>
  <q-page class="q-pa-lg">
    <div>
      <h3 class="q-mb-md">Golden Ratio</h3>
      <div class="row">
        <div class="col-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <q-input type="number" v-model="number" float-label="Enter Number" />
                  <q-field class="q-mt-sm q-headline">{{ shorterSection }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ longerSection }}</q-field>
                  <div class="q-mt-md">
                    <q-btn @click="reset" label="Reset"/>
                  </div>
                    </q-card-main>
                </q-card>
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
      number: null
    }
  },
  props: {
  },
  computed: {
    shorterSection () {
      if (this.number != null) {
        let x = ('Shorter is :' + this.number / 1.61803398875)
      }
      return x
    },
    longerSection () {
      if (this.number != null) {
        let y = ('Longer is :' + this.number * 1.61803398875)
      }
      return y
    }
  },
  methods: {
    reset: function () {
      this.number = null
    }
  }
}
</script>
