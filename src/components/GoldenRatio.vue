<template>
  <q-page class="q-pa-lg">
    <div>
      <h4 class="q-mb-md">Golden Ratio</h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row q-mt-lg">
                  <div class="col-10 q-mb-md">
                    <q-input type="number" v-model="number" float-label="Enter Number" />
                  </div>
                  <div class="col-12">
                    <q-field class="q-mt-sm q-headline">{{ shorterSection }}</q-field>
                  </div>
                  <div class ="col-12">
                    <q-field class="q-mt-sm q-headline">{{ longerSection }}</q-field>
                  </div>
                </div>
                <div class="q-mt-md">
                  <q-btn @click="reset" label="Reset"/>
                  <q-btn @click="back" label="Back"/>
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
  computed: {
    shorterSection () {
      let out = null
      if (this.number != null) {
        out = ('Shorter is : ' + this.number / 1.61803398875)
      }
      return out
    },
    longerSection () {
      let out = null
      if (this.number != null) {
        out = ('Longer is : ' + this.number * 1.61803398875)
      }
      return out
    }
  },
  methods: {
    reset () {
      this.number = null
    },
    back () {
      window.location = '/'
    }
  }
}
</script>
