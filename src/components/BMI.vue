<template>
  <q-page class="border-top q-mb-md">
    <div class="row mobile-header-padding q-pt-sm">
      <div class="q-pa-xs q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <div class="row q-pt-md q-mt-md mobile-size-no-margin">
          <div class="q-ml-md col-1 mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
             {{ $t('body_mass_index') }}
            </p>
          </div>
          </div>
              <q-card-main>
                  <div class="row">
                  <div class="col-md-8 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
                    <q-input ref="input" type="text" v-model="height" :float-label="$t('height_label')"/>
                  </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 col-xs-6 q-pr-md">
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
                  <div class="col-md-8 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
                    <q-input type="text" v-model="weight" :float-label="$t('weight_label')"/>
                  </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 col-xs-6 q-pr-md">
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
                       class="q-mt-md q-mb-md"
                       text-color="primary"
                       :options="unit.gender"
                       />
                  <br>
                  <transition-group
                    enter-active-class="animated fadeIn"
                    v-if="this.height && this.weight">
                    <div class="q-mt-md q-mb-md" key="head">
                      <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
                      <q-item-main>
                        <div class="parent animate-scale" key="text">
                          <q-list inset-separator class="q-mt-xs no-border-left-right">
                            <q-item>
                              <q-item-side color="black" left>
                                <span> Status </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ bmiMessageCalculate }} </span>
                              </q-item-main>
                            </q-item>
                            <q-item-separator />
                            <q-item>
                              <q-item-side color="black" left>
                                <span> BMI </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ bmi}} </span>
                              </q-item-main>
                              <q-item-side right>
                                <q-btn class="absolute-right q-mr-sm"
                                       id="copy-btn"
                                       size="md"
                                       flat
                                       outline
                                       color="grey"
                                       icon="file_copy"
                                       v-clipboard="() => this.bmi">
                                </q-btn>
                              </q-item-side>
                            </q-item>
                            <q-item-separator />
                            <q-item>
                              <q-item-side color="black" left>
                                <span> Normal weight  </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ minNormalWeight }} {{ weightUnit }} to {{ maxNormalWeight }} {{ weightUnit }} </span>
                              </q-item-main>
                            </q-item>
                            <q-item-separator />
                            <q-item>
                              <q-item-side color="black" left>
                                <span> Robinson Formula </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ robinsonFormula }} </span>
                              </q-item-main>
                              <q-item-side right>
                                <q-btn class="absolute-right q-mr-sm"
                                       id="copy-btn"
                                       size="md"
                                       flat
                                       outline
                                       color="grey"
                                       icon="file_copy"
                                       v-clipboard="() => this.robinsonFormula">
                                </q-btn>
                              </q-item-side>
                            </q-item>
                            <q-item-separator />
                            <q-item>
                              <q-item-side color="black" left>
                                <span> Miller Formula </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ millerFormula }} </span>
                              </q-item-main>
                              <q-item-side right>
                                <q-btn class="absolute-right q-mr-sm"
                                       id="copy-btn"
                                       size="md"
                                       flat
                                       outline
                                       color="grey"
                                       icon="file_copy"
                                       v-clipboard="() => this.millerFormula">
                                </q-btn>
                              </q-item-side>
                            </q-item>
                            <q-item-separator />
                            <q-item>
                              <q-item-side color="black" left>
                                <span> Hamwi Formula </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ hamwiFormula }} </span>
                              </q-item-main>
                              <q-item-side right>
                                <q-btn class="absolute-right q-mr-sm"
                                       id="copy-btn"
                                       size="md"
                                       flat
                                       outline
                                       color="grey"
                                       icon="file_copy"
                                       v-clipboard="() => this.hamwiFormula">
                                </q-btn>
                              </q-item-side>
                            </q-item>
                            <q-item-separator />
                            <q-item>
                              <q-item-side color="black" left>
                                <span> Devine Formula </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ devineFormula }} </span>
                              </q-item-main>
                              <q-item-side right>
                                <q-btn class="absolute-right q-mr-sm"
                                       id="copy-btn"
                                       size="md"
                                       flat
                                       outline
                                       color="grey"
                                       icon="file_copy"
                                       v-clipboard="() => this.devineFormula">
                                </q-btn>
                              </q-item-side>
                            </q-item>
                          </q-list>
                        </div>
                      </q-item-main>
                    </div>
                  </transition-group>
              </q-card-main>
           </q-card>
           <div class="q-mt-sm">
             <q-btn @click="back"
                icon="arrow_back_ios"
                class="back-btn-style q-mr-sm"
                color="secondary"
                outline
                :label="$t('back')"/>

               <q-btn @click="reset"
                icon="refresh"
                class="reset-btn-style"
                outline
                color="secondary"
                :label="$t('reset')" />
           </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
          <blockquote class="embedly-card" data-card-controls="0"><h4><a v-bind:href=this.wiki>Body mass index</a></h4><p>{{ $t('bmi_wiki') }} </p></blockquote>
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
import { mixin } from '@/mixins/mixin'

export default {
  name: 'BMI',
  mixins: [mixin],
  data () {
    return {
      unit: Unit,
      gender: 'male',
      height: null,
      weight: null,
      weightUnit: this.$config.defaultUnits.weight,
      heightUnit: this.$config.defaultUnits.height,
      seen: false,
      icon: 'bmi',
      wiki: 'https://en.wikipedia.org/wiki/Body_mass_index',
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
      return Knowledge.convert(minNormWeight, 'kg', this.weightUnit).toFixed(2)
    },
    maxNormalWeight () {
      let maxNormWeight = Knowledge.maximumNormalWeight(this.heightInMeter)
      return Knowledge.convert(maxNormWeight, 'kg', this.weightUnit).toFixed(2)
    },
    robinsonFormula () {
      let out = null
      // NOTE: calculate based on KG, Centimeter
      let man = Knowledge.robinsonFormulaMan(this.heightInCentimeter)
      let women = Knowledge.robinsonFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    millerFormula () {
      let out = null
      let man = Knowledge.millerFormulaMan(this.heightInCentimeter)
      let women = Knowledge.millerFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    hamwiFormula () {
      let out = null
      let man = Knowledge.hamwiFormulaMan(this.heightInCentimeter)
      let women = Knowledge.hamwiFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    devineFormula () {
      let out = null
      let man = Knowledge.devineFormulaMan(this.heightInCentimeter)
      let women = Knowledge.devineFormulaWomen(this.heightInCentimeter)
      if ((this.height && this.weight) && this.gender === 'male') {
        out = Knowledge.convert(man, 'kg', this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = Knowledge.convert(women, 'kg', this.weightUnit) + ' ' +
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
    }
  }
}
</script>
