<template>
  <q-page class="q-pa-lg border-top">
    <div>
      <h4 class="q-my-md">{{ $t('base_converter') }}
        <a
          href=https://en.wikipedia.org/wiki/Positional_notation#Base_conversion
          target="_blank"
          :title="$t('base_converter_wiki_icon')">
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
                <div class="row q-mt-lg">
                  <div class="col-8 col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                    <q-input type="text" v-model="inputValue" :float-label="$t('value_label')" />
                  </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                    <q-select
                       v-model="inputUnit"
                       :float-label="$t('input_unit')"
                       :options="unit.numericalBases"
                       />
                  </div>
                  <div class="col-8 col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                    </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                    <q-select
                       v-model="outputUnit"
                       :float-label="$t('output_unit')"
                       :options="unit.numericalBases"
                       />
                  </div>
                  <q-field v-if='this.inputValue' class="q-mt-xl q-ml-sm q-title">
                    {{ this.inputValue }}<sub>{{ this.inputUnit }}</sub> = {{ toBase }}<sub>{{ this.outputUnit }}</sub>
                  </q-field>
                </div>
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
import Converter from 'bases'
import Unit from '@/units'
export default {
  name: 'BaseConvrter',
  data () {
    return {
      unit: Unit,
      inputValue: '',
      inputUnit: '10',
      outputUnit: ''
    }
  },
  computed: {
    toBase () {
      let out = null
      if (this.inputValue) {
        let from = Converter.fromBase(this.inputValue, this.inputUnit)
        out = Converter.toBase(from, this.outputUnit)
      }
      return out
    }
  },
  methods: {
    reset () {
      this.inputValue = null
      this.outputUnit = null
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
