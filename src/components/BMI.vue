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
          {{ $t('body_mass_index') }}
          <a
            href="https://en.wikipedia.org/wiki/Body_mass_index"
            target="_blank"
            :title="$t('bmi_wiki_icon')">
            <q-icon
              class="text-primary"
              name="help" />
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
                       class="q-mt-md"
                       text-color="primary"
                       :options="unit.gender"
                       />
                  <br>
                  <transition-group
                    enter-active-class="animated fadeIn"
                    v-if="this.height && this.weight"
                    >
                    <div class="border q-mt-md" key="head">
                    <q-list-header class="q-ma-sm q-pl-none">Result</q-list-header>
                  <div class="parent animate-scale q-pa-sm" key="text">
                    <div class="div1"> BMI : </div>
                      <div class="div2"> {{ bmi}} </div>
                      <div class="div3"> Status : </div>
                      <div class="div4"> {{ bmiMessageCalculate }} </div>
                      <div class="div5"> Normal weight : </div>
                      <div class="div6"> {{ minNormalWeight }} {{ weightUnit }} to {{ maxNormalWeight }} {{ weightUnit }}</div>
                      <div class="div7"> Robinson Formula : </div>
                      <div class="div8"> {{ robinsonFormula }} </div>
                      <div class="div9"> Miller Formula : </div>
                      <div class="div10"> {{ millerFormula }} </div>
                      <div class="div11"> Hamwi Formula : </div>
                      <div class="div12"> {{ hamwiFormula }} </div>
                      <div class="div13"> Devine Formula : </div>
                      <div class="div14"> {{ devineFormula }} </div>
                  </div>
                    </div>
                  </transition-group>
                  <!--<div class="animate-scale" v-if='this.height && this.weight'>-->
                  <!--<q-item tag="label">-->
                      <!--<q-item-main>-->
                        <!--<q-item-tile class="q-title" label>BMI is: {{ bmi }}</q-item-tile>-->
                      <!--</q-item-main>-->
                    <!--</q-item>-->
                    <!--<q-item tag="label">-->
                        <!--<q-item-main>-->
                          <!--<q-item-tile class="q-title" label>{{ bmiMessageCalculate }}</q-item-tile>-->
                        <!--</q-item-main>-->
                      <!--</q-item>-->
                    <!--<q-item tag="label">-->
                        <!--<q-item-main>-->
                          <!--<q-item-tile class="q-title" label> Your Normal weight is between {{ minNormalWeight-->
                            <!--}} {{ weightUnit }} to {{ maxNormalWeight }} {{ weightUnit }}-->

                          <!--</q-item-tile>-->
                        <!--</q-item-main>-->
                        <!--</q-item>-->
                    <!--<q-item tag="label">-->
                        <!--<q-item-main>-->
                          <!--<q-item-tile class="q-title" label>{{ robinsonFormula }}-->
                            <!--<q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"-->
                              <!--size= "2rem" name="info" />-->
                          <!--</q-item-tile>-->
                        <!--</q-item-main>-->
                        <!--</q-item>-->
                    <!--<q-item tag="label">-->
                        <!--<q-item-main>-->
                          <!--<q-item-tile class="q-title" label>{{ millerFormula }}-->
                            <!--<q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"-->
                              <!--size= "2rem" name="info" />-->
                          <!--</q-item-tile>-->
                        <!--</q-item-main>-->
                        <!--</q-item>-->
                    <!--<q-item tag="label">-->
                        <!--<q-item-main>-->
                          <!--<q-item-tile class="q-title" label>{{ hamwiFormula }}-->
                            <!--<q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Hamwi_method')"-->
                            <!--size= "2rem" name="info" />-->
                          <!--</q-item-tile>-->
                        <!--</q-item-main>-->
                        <!--</q-item>-->
                    <!--<q-item tag="label">-->
                        <!--<q-item-main>-->
                          <!--<q-item-tile class="q-title" label>{{ devineFormula }}-->
                            <!--<q-icon class="cursor-pointer" @click.native="openURL('https://en.wikipedia.org/wiki/Human_body_weight#Devine_formula')"-->
                              <!--size= "2rem" name="info" />-->
                          <!--</q-item-tile>-->
                        <!--</q-item-main>-->
                        <!--</q-item>-->
                  <!--</div>-->
                  <div class="q-mt-md">
                    <q-btn @click="reset" :label="$t('reset')"/>
                      <q-btn @click="back" :label="$t('back')"/>
                  </div>
              </q-card-main>
           </q-card>
        </div>
        <div class="col-12 col-md-12 col-lg-6">
          <blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://en.wikipedia.org/wiki/Body_mass_index">Body mass index</a></h4><p>Body mass index ( BMI) is a value derived from the mass ( weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m 2, resulting from mass in kilograms and height in metres.</p></blockquote>
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
      icon: 'bmi',
      visible: false,
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
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (window.screen.width > 768) {
      setTimeout(() => {
        this.$refs.input.focus()
      }, 500)
    }
  },
  toggleVisibility () {
    this.visible = !this.visible
  }
}
</script>

<style>
a {
  text-decoration : none;
}
.parent {
display: grid;
grid-template-columns: 4fr 5fr;
grid-template-rows: repeat(7, 1fr);
grid-row-gap: 13px;
}
.div1 { grid-area: 1 / 1 / 2 / 2;
border-bottom: 1px solid black;
padding: 5px;
}
.div2 { grid-area: 1 / 2 / 2 / 3;
border-bottom: 1px solid black;
padding: 5px;
}
.div3 { grid-area: 2 / 1 / 3 / 2;
border-bottom: 1px solid black;
padding: 5px;
}
.div4 { grid-area: 2 / 2 / 3 / 3;
border-bottom: 1px solid black;
padding: 5px;
}
.div5 { grid-area: 3 / 1 / 4 / 2;
border-bottom: 1px solid black;
padding: 5px;
}
.div6 { grid-area: 3 / 2 / 4 / 3;
border-bottom: 1px solid black;
padding: 5px;
}
.div7 { grid-area: 4 / 1 / 5 / 2;
border-bottom: 1px solid black;
padding: 5px;
}
.div8 { grid-area: 4 / 2 / 5 / 3;
border-bottom: 1px solid black;
padding: 5px;
}
.div9 { grid-area: 5 / 1 / 6 / 2;
border-bottom: 1px solid black;
padding: 5px;
}
.div10 { grid-area: 5 / 2 / 6 / 3;
border-bottom: 1px solid black;
padding: 5px;
}
.div11 { grid-area: 6 / 1 / 7 / 2;
border-bottom: 1px solid black;
padding: 5px;
}
.div12 { grid-area: 6 / 2 / 7 / 3;
border-bottom: 1px solid black;
padding: 5px;
}
.div13 { grid-area: 7 / 1 / 8 / 2;
padding: 5px;
}
.div14 { grid-area: 7 / 2 / 8 / 3;
padding: 15px;
}

.border {
border: 2px solid rgba(105,102,105,0.09);
-webkit-box-shadow: inset 4px 10px 76px -2px rgba(105,102,105,0.05);
-moz-box-shadow: inset 4px 10px 76px -2px rgba(105,102,105,0.05);
box-shadow: inset 4px 10px 76px -2px rgba(105,102,105,0.05);
}
</style>
