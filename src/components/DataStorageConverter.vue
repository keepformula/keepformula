<template>
  <q-page class="q-pa-lg">
    <div>
      <h4 class="q-mb-md">Data Storage Converter</h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row">
                  <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md" >
                    <q-input type="number" v-model="value" float-label="Enter value"/>
                  </div>
                    <div class="col-3 col-xs-auto q-ml-lg">
                      <q-select
                         v-model="inputUnit"
                         float-label="Unit"
                         :options="unit.digital"
                         :separator="true"
                         radio
                         />
                    </div>
                    <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md">
                    </div>
                    <div class="col-3 col-xs-auto q-ml-lg">
                      <q-select
                         v-model="outputUnit"
                         float-label="Unit"
                         :options="unit.digital"
                         :separator="true"
                         radio
                         />
                    </div>
                </div>
                <q-field class="q-mt-sm q-pl-lg q-headline">{{ dataStorageConvert }}</q-field>
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
import Unit from '@/units'
import Converter from 'convert-units'
import UnitConverter from '@/units-converter'
export default {
  name: 'DataStorageConverter',
  data () {
    return {
      unit: Unit,
      value: null,
      inputUnit: 'Kb',
      outputUnit: 'Mb'
    }
  },
  computed: {
    dataStorageConvert () {
      let out = null
      if (this.value) {
        out = Converter(this.value).from(this.inputUnit).to(this.outputUnit) + ' ' + this.outputUnit
      }
      return out
    }
  },
  methods: {
    reset () {
      this.value = null
    },
    back () {
      this.$router.go(-1)
    }

  }
}
</script>
