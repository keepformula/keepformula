<template>
  <q-page class="border-top">
    <div class="row q-pt-md mobile-header-padding">
      <div class="q-pa-sm q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="row col-6 col-xs-12 col-lg-6 relative-position">
          <div class="mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
            {{ $t('pressure_converter') }}
            </p>
          </div>
          <q-btn @click="back"
                 icon="arrow_back_ios"
                 class="back-btn-style absolute-right"
                 color="secondary"
                 outline
                 dense
                 :label="$t('back')"/>
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
                           :options="unit.pressure"
                           :separator="true"
                           radio
                           />
                      </div>
                            <div class="col-12 col-md-12 relative-position q-pa-xs">
                              <q-btn @click="btnClick"
                                 icon="cached"
                                 dense
                                 round
                                 flat
                                 color="primary"
                                 class="unit-changer-button absolute-right" />
                            </div>
                      <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      </div>
                        <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12
                          q-pr-md q-mb-xl">
                          <q-select
                             v-model="outputUnit"
                             :float-label="$t('output_unit')"
                             :options="unit.pressure"
                             :separator="true"
                             radio
                             />
                        </div>
                  </div>
                  <div v-if='this.value'>
                    <q-list-header class="q-body-1 q-mt-md">Result</q-list-header>
                    <q-item class="q-pr-none" tag="label">
                      <q-item-main>
                        <q-item-tile label>
                          <div class="parent">
                            <div class="div1"> {{ value }} {{ inputUnit }} </div>
                            <div class="div2 relative-position"> {{ pressureConvert }} {{ outputUnit }}
                              <q-btn class="absolute-right q-my-md q-mr-sm"
                                     id="copy-btn"
                                     size="md"
                                     color="grey"
                                     flat
                                     outline
                                     icon="file_copy"
                                     v-clipboard="() => this.pressureConvert">
                              </q-btn>
                            </div>
                          </div>
                        </q-item-tile>
                      </q-item-main>
                    </q-item>
                  </div>
                      </q-card-main>
                    </q-card>
            <div class="q-mt-sm">
              <q-btn @click="reset" icon="refresh" class="reset-btn-style" dense outline color="secondary" :label="$t('reset')" />
            </div>
          </div>
        <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
          <blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://en.wikipedia.org/wiki/Pressure">Pressure</a></h4><p>Pressure (symbol: p or P) is the force applied perpendicular to the surface of an object per unit area over which that force is distributed. Gauge pressure (also spelled gage pressure) is the pressure relative to the ambient pressure. Various units are used to express pressure.</p></blockquote>
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
  name: 'PressureConverter',
  data () {
    return {
      unit: Unit,
      value: null,
      icon: 'pressureConverter',
      inputUnit: this.$config.defaultUnits.inputUnitPressureConverter,
      outputUnit: this.$config.defaultUnits.outputUnitPressureConverter
    }
  },
  computed: {
    pressureConvert () {
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
<style scoped>
.parent {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  font-size: 16px;
}
.div1 { grid-area: 1 / 1 / 2 / 3;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
.div2 { grid-area: 1 / 2 / 2 / 3;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
.div3 { grid-area: 1 / 1 / 2 / 3; }
</style>
