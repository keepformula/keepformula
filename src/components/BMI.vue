<template>
  <q-page class="q-pa-lg">
    <div>
      <h3 class="q-mb-md">Body Mass Index</h3>
      <div class="row">
        <div class="col-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row">
                  <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md" >
                    <q-input type="number" v-model="height" float-label="Your height"/>
                  </div>
                  <div class="col-3 col-xs-auto q-ml-lg">
                    <q-select
                       v-model="heightUnit"
                       float-label="Unit"
                       :options="unit.length"
                       :separator="true"
                       radio
                       />
                  </div>
                </div>
                <div class="row">
                  <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md">
                    <q-input type="number" v-model="weight" float-label="Your weight"/>
                  </div>
                  <div class="col-3 col-xs-auto q-ml-lg">
                    <q-select
                       v-model="weightUnit"
                       float-label="Unit"
                       :options="unit.weight"
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
                  <q-field class="q-mt-sm q-headline">{{ bmi }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ bmiMessageCalculate }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ normWeight }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ robinsonFormula }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ millerFormula }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ hamwiFormula }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ devineFormula }}</q-field>
                  <div class="q-mt-md">
                    <q-btn
                       @click="reset"
                       label="reset"/>
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
  name: 'BMI',
  data () {
    return {
      unit: Unit,
      gender: 'male',
      height: null,
      weight: null,
      weightUnit: 'kg',
      heightUnit: 'cm',
      // TODO: i18n
      bmiMessage: {
        underWeight: 'You are Under weight',
        normal: 'You are Normal',
        overWeight: 'You are Overweight',
        obesity: 'You are Obesity',
        severeObesity: 'You are Severe obesity'
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
      let bmi = this.bmi
      if (bmi < 18.5 && (this.height && this.weight)) {
        out = this.bmiMessage.underWeight
      } else if (bmi >= 18.5 && bmi < 25) {
        out = this.bmiMessage.normal
      } else if (bmi >= 25 && bmi < 30) {
        out = this.bmiMessage.overWeight
      } else if (bmi >= 30 && bmi < 35) {
        out = this.bmiMessage.obisity
      } else if (bmi >= 35) {
        out = this.bmiMessage.severeObesity
      }
      return out
    },
    minNormWeightConvert () {
      let minNormWeight = 18.5 * Math.pow(this.heightInMeter, 2)
      return Converter(minNormWeight).from('kg').to(this.weightUnit)
    },
    maxNormWeightConvert () {
      let maxNormWeight = 25 * Math.pow(this.heightInMeter, 2)
      return Converter(maxNormWeight).from('kg').to(this.weightUnit)
    },
    normWeight () {
      let out = null
      if (this.height && this.weight) {
        out = 'Your Normal weight is between ' + this.minNormWeightConvert + ' ' +
          this.weightUnit + ' to ' + this.maxNormWeightConvert + ' ' + this.weightUnit
        return out
      }
    },
    robinsonFormula () {
      let out = null
      let man = (((this.heightInMeter * 100 - 152.4) / 2.54) * 1.9) + 52
      let women = (((this.heightInMeter * 100 - 152.4) / 2.54) * 1.7) + 49
      if ((this.height && this.weight != null) && this.gender === 'male') {
        out = 'Robinson Formula: ' + Converter(man).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      } else if ((this.height && this.weight) && this.gender === 'female') {
        out = 'Robinson Formula: ' + Converter(women).from('kg').to(this.weightUnit) + ' ' +
          this.weightUnit
      }
      return out
    },
    millerFormula () {
      let manCm = (((this.height - 152.4) / 2.54) * 1.41) + 56.2
      let manM = (((this.height * 100 - 152.4) / 2.54) * 1.41) + 56.2
      let womenCm = (((this.height - 152.4) / 2.54) * 1.36) + 53.1
      let womenM = (((this.height * 100 - 152.4) / 2.54) * 1.36) + 53.1
      let manFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 1.41) + 56.2
      let womenFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 1.36) + 53.1
      if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'male') {
        return 'Miller Formula: ' + manCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'male') {
        return 'Miller Formula: ' + manM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'female') {
        return 'Miller Formula: ' + womenCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'female') {
        return 'Miller Formula: ' + womenM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'male') {
        return 'Miller Formula: ' + manFeet + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'female') {
        return 'Miller Formula: ' + womenFeet + ' kg'
      }
    },
    hamwiFormula () {
      let manCm = (((this.height - 152.4) / 2.54) * 2.7) + 48
      let manM = (((this.height * 100 - 152.4) / 2.54) * 2.7) + 48
      let womenCm = (((this.height - 152.4) / 2.54) * 2.2) + 45.4
      let womenM = (((this.height * 100 - 152.4) / 2.54) * 2.2) + 45.4
      let manFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 2.7) + 48
      let womenFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 2.2) + 45.4
      if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'male') {
        return 'Hamwi Formula: ' + manCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'male') {
        return 'Hamwi Formula: ' + manM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'female') {
        return 'Hamwi Formula: ' + womenCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'female') {
        return 'Hamwi Formula: ' + womenM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'male') {
        return 'Hamwi Formula: ' + manFeet + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'female') {
        return 'Hamwi Formula: ' + womenFeet + ' kg'
      }
    },
    devineFormula () {
      let manCm = (((this.height - 152.4) / 2.54) * 2.3) + 50
      let manM = (((this.height * 100 - 152.4) / 2.54) * 2.3) + 50
      let womenCm = (((this.height - 152.4) / 2.54) * 2.3) + 45.5
      let womenM = (((this.height * 100 - 152.4) / 2.54) * 2.3) + 45.5
      let manFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 2.3) + 50
      let womenFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 2.3) + 45.5
      if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'male') {
        return 'Devine Formula: ' + manCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'male') {
        return 'Devine Formula: ' + manM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'female') {
        return 'Devine Formula: ' + womenCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'female') {
        return 'Devine Formula: ' + womenM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'male') {
        return 'Devine Formula: ' + manFeet + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'female') {
        return 'Devine Formula: ' + womenFeet + ' kg'
      }
    }
  },
  methods: {
    reset () {
      this.weight = null
      this.height = null
    }
  }
}
</script>
