<template>
  <q-page class="q-pa-lg">
    <div>
      <h3 class="q-mb-md">Golden Ratio</h3>
      <div class="row">
        <div class="col-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row q-mt-lg">
                  <div class="col-8">
                    <q-input type="number" v-model="number" float-label="Enter Number" />
                  </div>
                  <div class="col-3 q-ml-xl">
                    <q-select
                       v-model="inputUnitSelect"
                       float-label="Unit"
                       :options="inputUnitOptions"
                       />
                  </div>
                  <div class="col-12">
                    <q-field class="q-mt-sm q-headline">{{ shorterSection }} {{inputUnitSelect}}</q-field>
                  </div>
                  <div class ="col-12">
                    <q-field class="q-mt-sm q-headline">{{ longerSection }} {{inputUnitSelect}}</q-field>
                  </div>
                </div>
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
      number: null,
      inputUnitSelect: 'm',
      inputUnitOptions: [
        {
          label: 'cm',
          value: 'cm'
        },
        {
          label: 'm',
          value: 'm'
        },
        {
          label: 'feet',
          value: 'feet'
        }
      ]
    }
  },
  props: {
  },
  computed: {
    shorterSection () {
      if (this.number != null) {
        return ('Shorter is : ' + this.number / 1.61803398875)
      }
    },
    longerSection () {
      if (this.number != null) {
        return ('Longer is : ' + this.number * 1.61803398875)
      }
    },
//    numberUnitCalculator() {
//    if(this.inputUnitSelect === 'cm')
//      return this.number = (this.number / 100)
//    }
  },
  methods: {
    reset: function () {
      this.number = null
    }
  }
}
</script>
