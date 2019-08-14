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
                       class="q-mt-md q-ml-md"
                       text-color="primary"
                       :options="unit.gender"
                       />
                  <div v-if='this.height && this.weight'>
                  <q-list-header class="q-mt-md q-subheading">Result</q-list-header>
                  <q-item tag="label">
                      <q-item-main>
                        <q-item-tile class="q-title" label>BMI is: {{ bmi }}</q-item-tile>
                      </q-item-main>
                    </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile class="q-title" label>{{ bmiMessageCalculate }}</q-item-tile>
                        </q-item-main>
                      </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile class="q-title" label> Your Normal weight is between {{ minNormalWeight
                            }} {{ weightUnit }} to {{ maxNormalWeight }} {{ weightUnit }}

                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile class="q-title" label>{{ robinsonFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"
                              size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile class="q-title" label>{{ millerFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"
                              size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile class="q-title" label>{{ hamwiFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Hamwi_method')"
                            size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                    <q-item tag="label">
                        <q-item-main>
                          <q-item-tile class="q-title" label>{{ devineFormula }}
                            <q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"
                              size= "2rem" name="info" />
                          </q-item-tile>
                        </q-item-main>
                        </q-item>
                  </div>
                  <div class="q-mt-md q-ml-md">
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
import { openURL } from 'quasar'
import Unit from '@/units'
import Knowledge from '@/knowledge'

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
      return Knowledge.convert(this.weight, this.weightUnit, 'kg')
    },
    heightInMeter () {
      return Knowledge.convert(this.height, this.heightUnit, 'm')
    },
    heightInCentimeter () {
      return Knowledge.convert(this.height, this.heightUnit, 'cm')
    },
    bmi () {
      let out = null
      if (this.weight && this.height) {
        // Main Formula
        // NOTE: calculate based on KG, Meter
        out = Knowledge.bmi(this.weightInKG, this.heightInMeter)
      }
      return out
    },
    bmiMessageCalculate () {
      let out = null
      let bmi = Knowledge.bmi(this.weightInKG, this.heightInMeter)
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
      let minNormWeight = Knowledge.minimumNormalWeight(this.heightInMeter)
      return Knowledge.convert(minNormWeight, 'kg', this.weightUnit)
    },
    maxNormalWeight () {
      let maxNormWeight = Knowledge.maximumNormalWeight(this.heightInMeter)
      return Knowledge.convert(maxNormWeight, 'kg', this.weightUnit)
    },
    robinsonFormula () {
      let out = null
      // NOTE: calculate based on KG, Centimeter
      let man = Knowledge.robinsonFormulaMan(this.heightInCentimeter)
      let women = Knowledge.robinsonFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Robinson Formula: ' + Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Robinson Formula: ' + Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    millerFormula () {
      let out = null
      let man = Knowledge.millerFormulaMan(this.heightInCentimeter)
      let women = Knowledge.millerFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Miller Formula: ' + Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Miller Formula: ' + Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    hamwiFormula () {
      let out = null
      let man = Knowledge.hamwiFormulaMan(this.heightInCentimeter)
      let women = Knowledge.hamwiFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Hamwi Formula: ' + Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Hamwi Formula: ' + Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    devineFormula () {
      let out = null
      let man = Knowledge.devineFormulaMan(this.heightInCentimeter)
      let women = Knowledge.devineFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = 'Devine Formula: ' + Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Devine Formula: ' + Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
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
