<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-xl-9 col-lg-9 col-md-10">
        <h4 class="q-mt-xs">{{ $t('base_converter') }}
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
                  <div class="row q-mt-md">
                    <div class="col-8 col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                      <q-input autofocus ref="input" type="text" v-model="inputValue" :float-label="$t('value_label')" />
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
                            <div class="q-mt-md">
                              <q-btn @click="btnClick" icon="cached" round color="primary" class="float-right" />
                            </div>
                        </div>
                        <div v-if='this.inputValue'>
                          <q-list-header class="q-mt-md">Result</q-list-header>
                          <q-item tag="label">
                            <q-item-main>
                              <q-item-tile label>
                                {{ this.inputValue }}<sub>{{ this.inputUnit }}</sub> = {{ toBase }}<sub>{{ this.outputUnit }}</sub>
                              </q-item-tile>
                            </q-item-main>
                          </q-item>
                        </div>
                  </div>
                  <div class="q-mt-lg">
                    <q-btn @click="reset" :label="$t('reset')"/>
                      <q-btn @click="back" :label="$t('back')"/>
                  </div>
              </q-card-main>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Knowledge from '@/knowledge'
import Unit from '@/units'

export default {
  name: 'BaseConvrter',
  data () {
    return {
      unit: Unit,
      inputValue: null,
      inputUnit: this.$config.defaultUnits.inputUnitBaseConverter,
      outputUnit: this.$config.defaultUnits.outputUnitBaseConverter
    }
  },
  computed: {
    toBase () {
      let out = null
      if (this.inputValue) {
        out = Knowledge.baseConverter(this.inputValue, this.inputUnit, this.outputUnit)
      }
      return out
    }
  },
  methods: {
    reset () {
      this.inputValue = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    },
    btnClick () {
      let x = this.inputUnit
      let y = this.outputUnit
      this.inputUnit = y
      this.outputUnit = x
    }
  }
}
</script>
