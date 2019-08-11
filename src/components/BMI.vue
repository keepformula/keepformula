<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-xl-9 col-lg-9 col-md-10">
      <h4 class="q-mt-xs">{{ $t('body_mass_index') }}
        <a
          href=https://en.wikipedia.org/wiki/Body_mass_index
          target="_blank"
          :title="$t('bmi_wiki_icon')">
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
                  <div class="col-12 col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                    <q-input autofocus ref="input" type="text" v-model="height" :float-label="$t('height_label')"/>
                  </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                      <q-select
                         v-model="heightUnit"
                         :float-label="$t('height_unit')"
                         :options="unit.lengthBMI"
                         :separator="true"
                         radio
                         />
                    </div>
                </div>
                <div class="row">
                  <div class="col-8 col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md">
                    <q-input type="text" v-model="weight" :float-label="$t('weight_label')"/>
                  </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                    <q-select
                       v-model="weightUnit"
                         :float-label="$t('weight_unit')"
                       :options="unit.weightBMI"
                       :separator="true"
                       radio
                       />
                  </div>
                </div>
                <q-btn-toggle
                       v-model="gender"
                       class="q-mt-lg"
                       text-color="primary"
                       :options="unit.gender"
                       />
                  <div v-if='this.height && this.weight'>
                  <q-list-header class="q-mt-md">Result</q-list-header>
                  <q-item tag="label">
                      <q-item-main>
                        <q-item-tile label>BMI is: {{ bmi }}</q-item-tile>
                      </q-item-main>
                    </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile label>{{ bmiMessageCalculate }}</q-item-tile>
                        </q-item-main>
                      </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile label> Your Normal weight is between {{ minNormalWeight
                            }} {{ weightUnit }} to {{ maxNormalWeight }} {{ weightUnit }}

                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile label>{{ robinsonFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"
                              size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile label>{{ millerFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"
                              size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile label>{{ hamwiFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Hamwi_method')"
                            size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile label>{{ devineFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"
                              size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                  </div>
                  <div class="q-mt-md">
                    <q-btn @click="reset" :label="$t('Reset')"/>
                      <q-btn @click="back" :label="$t('Back')"/>
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
import { openURL } from 'quasar'
import Unit from '@/units'
import Converter from 'convert-units'
import UnitConverter from '@/units-converter'

export default {
  name: 'BMI',
  data () {
    return {
      unit: Unit,
      gender: 'male',
      height: null,
      weight: null,
      weightUnit: this.$config.defaultUnits.weight,
      heightUnit: this.$config.defaultUnits.height,
      seen: false,
      // TODO: i18n
      bmiMessage: {
        underWeight: this.$t('bmi_underWeight'), // 'You are Under weight',
        normal: this.$t('bmi_normal'), // 'You are Normal',
        overWeight: this.$t('bmi_overWeight'), // 'You are Overweight',
        obesity: this.$t('bmi_obesity'), // 'You are Obesity',
        severeObesity: this.$t('bmi_severeObesity') // 'You are Severe obesity'
      }
    }
  },
  computed: {
    weightInKG () {
      return Converter(this.weight).from(this.weightUnit).to('kg')
    },
    heightInMeter () {
      return Converter(this.height).from(this.heightUnit).to('m')
    },
    heightInCentimeter () {
      return Converter(this.height).from(this.heightUnit).to('cm')
    },
    bmi () {
      let out = null
      if (this.weight && this.height) {
        // Main Formula
        // NOTE: calculate based on KG, Meter
        out = this.weightInKG / Math.pow(this.heightInMeter, 2)
      }
      return out
    },
    bmiMessageCalculate () {
      let out = null
      let bmi = this.weightInKG / Math.pow(this.heightInMeter, 2)
      if (bmi < 18.5 && (this.height && this.weight)) {
        out = this.bmiMessage.underWeight
      } else if (bmi >= 18.5 && bmi < 25) {
        out = this.bmiMessage.normal
      } else if (bmi >= 25 && bmi < 30) {
        out = this.bmiMessage.overWeight
      } else if (bmi >= 30 && bmi < 35) {
        out = this.bmiMessage.obesity
      } else if (bmi >= 35) {
        out = this.bmiMessage.severeObesity
      }
      return out
    },
    // Main Formula
    // NOTE: calculate based on KG, Meter
    minNormalWeight () {
      let minNormWeight = 18.5 * Math.pow(this.heightInMeter, 2)
      return Converter(minNormWeight).from('kg').to(this.weightUnit)
    },
    maxNormalWeight () {
      let maxNormWeight = 25 * Math.pow(this.heightInMeter, 2)
      return Converter(maxNormWeight).from('kg').to(this.weightUnit)
    },
    robinsonFormula () {
      let out = null
      // NOTE: calculate based on KG, Centimeter
      let man = (((this.heightInCentimeter - 152.4) / 2.54) * 1.9) + 52
      let women = (((this.heightInCentimeter - 152.4) / 2.54) * 1.7) + 49
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Robinson Formula: ' + Converter(man).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Robinson Formula: ' + Converter(women).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    millerFormula () {
      let out = null
      let man = (((this.heightInCentimeter - 152.4) / 2.54) * 1.41) + 56.2
      let women = (((this.heightInCentimeter - 152.4) / 2.54) * 1.36) + 53.1
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Miller Formula: ' + Converter(man).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Miller Formula: ' + Converter(women).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    hamwiFormula () {
      let out = null
      let man = (((this.heightInCentimeter - 152.4) / 2.54) * 2.7) + 48
      let women = (((this.heightInCentimeter - 152.4) / 2.54) * 2.2) + 45.4
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Hamwi Formula: ' + Converter(man).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Hamwi Formula: ' + Converter(women).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    devineFormula () {
      let out = null
      let man = (((this.heightInCentimeter - 152.4) / 2.54) * 2.3) + 50
      let women = (((this.heightInCentimeter - 152.4) / 2.54) * 2.3) + 45.5
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Devine Formula: ' + Converter(man).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Devine Formula: ' + Converter(women).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    }
  },
  methods: {
    openURL,
    reset () {
      this.weight = null
      this.height = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
a {
  text-decoration : none;
}
</style>
