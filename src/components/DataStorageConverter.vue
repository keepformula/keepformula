<template>
  <q-page class="q-pa-lg border-top">
    <div>
      <h4 class="q-my-md">{{ $t('data_storage_converter')}}
        <a
          href=https://en.wikipedia.org/wiki/Byte#Unit_symbol
          target="_blank"
          :title="$t('data_storage_wiki_icon')">
          <q-icon
          class="text-warning"
          name="help"
          />
        </a>
      </h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row">
                  <div class="col-8 col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                    <q-input type="number" v-model="value" :float-label="$t('value_label')"/>
                  </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                      <q-select
                         v-model="inputUnit"
                         :float-label="$t('input_unit')"
                         :options="unit.digital"
                         :separator="true"
                         radio
                         />
                    </div>
                  <div class="col-8 col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                    </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                      <q-select
                         v-model="outputUnit"
                         :float-label="$t('output_unit')"
                         :options="unit.digital"
                         :separator="true"
                         radio
                         />
                    </div>
                </div>
                <q-field class="q-pt-lg q-mt-sm q-ml-sm q-headline">{{ dataStorageConvert }}</q-field>
                <div class="q-mt-lg">
                  <q-btn @click="reset" :label="$t('Reset')"/>
                    <q-btn @click="back" :label="$t('Back')"/>
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
      inputUnit: 'KB',
      outputUnit: 'MB'
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
