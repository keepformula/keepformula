<template>
  <q-page class="border-top">
    <div class="row q-pt-md mobile-header-padding">
      <div class="q-pa-sm q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
            {{ $t('temperature_converter') }}
            <a
              href="https://en.wikipedia.org/wiki/Temperature"
              target="_blank"
              :title="$t('temperature_converter_wiki_icon')">
              <q-icon
                class="text-primary"
                name="help"
                />
            </a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <q-card-separator />
                <q-card-main>
                  <div class="row q-mt-md">
                    <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      <q-input ref="input" type="text" v-model="value" :float-label="$t('value_label')"/>
                    </div>
                      <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.temperature"
                           :separator="true"
                           radio
                           />
                      </div>
                      <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      </div>
                        <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                          <q-select
                             v-model="outputUnit"
                             :float-label="$t('output_unit')"
                             :options="unit.temperature"
                             :separator="true"
                             radio
                             />
                            <div class="q-mt-md">
                              <q-btn @click="btnClick" icon="cached" round color="primary" class="float-right" />
                            </div>
                        </div>
                  </div>
                  <div v-if='this.value'>
                    <q-list-header class="q-mt-md">Result</q-list-header>
                    <q-item tag="label">
                      <q-item-main>
                        <q-item-tile label>
                          {{ value }} {{ inputUnit }} =  {{ temperatureConvert }} {{ outputUnit }}
                        </q-item-tile>
                      </q-item-main>
                    </q-item>
                  </div>
                  <div class="q-mt-lg">
                    <q-btn @click="reset" :label="$t('reset')"/>
                      <q-btn @click="back" :label="$t('back')"/>
                  </div>
               </q-card-main>
            </q-card>
          </div>
        <div class="col-12 col-md-12 col-lg-6">
          <blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://en.wikipedia.org/wiki/Temperature">Temperature</a></h4><p>Temperature Two thermometers showing temperature in Celsius and Fahrenheit. T SI unit K °C, °F, °R Intensive? yes Derivations fromother quantities , Dimension Θ Temperature is a measure of the average kinetic energy of the atoms or molecules in the system.</p></blockquote>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import Unit from '@/units'
import Knowledge from '@/knowledge'

export default {
  name: 'TemperatureConverter',
  data () {
    return {
      unit: Unit,
      value: null,
      icon: 'temperatureConverter',
      inputUnit: this.$config.defaultUnits.inputUnitTemperatureConverter,
      outputUnit: this.$config.defaultUnits.outputUnitTemperatureConverter
    }
  },
  computed: {
    temperatureConvert () {
      let out = null
      if (this.value) {
        out = Knowledge.convert(this.value, this.inputUnit, this.outputUnit)
      }
      return out
    }
  },
  methods: {
    reset () {
      this.value = null
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
  },
  mounted () {
    if (window.screen.width > 768) {
      setTimeout(() => {
        this.$refs.input.focus()
      }, 500)
    }
  }
}
</script>
