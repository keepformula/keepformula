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
                  <div class="col-8">
                    <q-input type="number" v-model="height" float-label="Your height"/>
                  </div>
                  <div class="col-3 q-ml-xl">
                    <q-select
                       v-model="heightUnit"
                       float-label="Choose Unit"
                       :options="inputHeightUnit"
                       />
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <q-input type="number" v-model="weight" float-label="Your weight"/>
                  </div>
                  <div class="col-3 q-ml-xl">
                    <q-select
                       v-model="weightUnit"
                       float-label="Choose Unit"
                       :options="inputWeightUnit"
                       />
                  </div>
                </div>
                <q-btn-toggle
                       v-model="gender"
                       class="q-mt-lg"
                       text-color="primary"
                       :options="genderInput"
                       />
                  <q-field class="q-mt-sm q-headline">{{ bmi | toFixed }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ bmiCalculate }}</q-field>
                  <q-field class="q-mt-sm q-headline">{{ bestWeight }}</q-field>
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
export default {
  name: 'BMI',
  data () {
    return {
      gender: 'male',
      height: null,
      weight: null,
      weightUnit: 'kg',
      heightUnit: 'cm',
      bmiMessage: {
        underWeight: 'You are Under weight',
        normal: 'You are Normal',
        overWeight: 'You are Overweight',
        obesity: 'You are Obesity',
        severeObesity: 'You are Severe obesity'
      },
      inputHeightUnit: [
        {
          label: 'cm',
          value: 'cm'
        },
        {
          label: 'm',
          value: 'm'
        },
        {
          label: 'feet',
          value: 'feet'
        }
      ],
      inputWeightUnit: [
        {
          label: 'gr',
          value: 'gr'
        },
        {
          label: 'kg',
          value: 'kg'
        },
        {
          label: 'pound',
          value: 'pound'
        }
      ],
      genderInput: [
        {
          label: 'Male',
          value: 'male'
        },
        {
          label: 'Female',
          value: 'female'
        }
      ]
    }
  },
  computed: {
    bmi () {
      if ((this.height && this.weight != null) && this.heightUnit === 'cm' &&
        this.weightUnit === 'kg') {
        return this.weight / Math.pow(this.height / 100, 2)
      } else if (this.height && this.weight != null && this.heightUnit === 'cm' &&
        this.weightUnit === 'gr') {
        return (this.weight / 1000) / Math.pow(this.height / 100, 2)
      } else if (this.height && this.weight != null && this.heightUnit === 'cm' &&
        this.weightUnit === 'pound') {
        return (this.weight / 2.2046) / Math.pow(this.height / 100, 2)
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' &&
        this.weightUnit === 'kg') {
        return this.weight / Math.pow(this.height, 2)
      } else if (this.height && this.weight != null && this.heightUnit === 'm' &&
        this.weightUnit === 'gr') {
        return (this.weight / 1000) / Math.pow(this.height, 2)
      } else if (this.height && this.weight != null && this.heightUnit === 'm' &&
        this.weightUnit === 'pound') {
        return (this.weight / 2.2046) / Math.pow(this.height, 2)
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' &&
        this.weightUnit === 'kg') {
        return this.weight / Math.pow(this.height / 3.2808, 2)
      } else if (this.height && this.weight != null && this.heightUnit === 'feet' &&
        this.weightUnit === 'gr') {
        return (this.weight / 1000) / Math.pow(this.height / 3.2808, 2)
      } else if (this.height && this.weight != null && this.heightUnit === 'feet' &&
        this.weightUnit === 'pound') {
        return (this.weight / 2.2046) / Math.pow(this.height / 3.2808, 2)
      }
    },
    bmiCalculate () {
      let out = null
      let bmi = this.bmi
      if (bmi < 18.5 && (this.height && this.weight) !== null) {
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
    bestWeight () {
      let cmDown = (18.5 * Math.pow((this.height / 100), 2)).toFixed(2)
      let cmUp = (25 * Math.pow((this.height / 100), 2)).toFixed(2)
      let mDown = (18.5 * Math.pow(this.height, 2)).toFixed(2)
      let mUp = (25 * Math.pow(this.height, 2)).toFixed(2)
      let footDown = (18.5 * Math.pow((this.height / 3.2808), 2)).toFixed(2)
      let footUp = (25 * Math.pow((this.height / 3.2808), 2)).toFixed(2)
      if ((this.height && this.weight !== null) && this.weightUnit === 'kg') {
        return 'Your best weight is between ' + cmDown + ' Kg ~ ' + cmUp + ' Kg'
      } else if ((this.height && this.weight) !== null && this.weightUnit === 'gr') {
        return 'Your best weight is between ' + mDown + ' gr ~ ' + mUp + ' gr'
      } else if ((this.height && this.weight) !== null && this.weightUnit === 'pound') {
        return 'Your best weight is between ' + feetDown + ' pounds ~ ' + feetUp + ' pounds'
      }
    },
    robinsonFormula () {
      let manCm = (((this.height - 152.4) / 2.54) * 1.9) + 52
      let manM = (((this.height * 100 - 152.4) / 2.54) * 1.9) + 52
      let womenCm = (((this.height - 152.4) / 2.54) * 1.7) + 49
      let womenM = (((this.height * 100 - 152.4) / 2.54) * 1.7) + 49
      let manFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 1.9) + 52
      let womenFeet = (((this.height * 3.2808 - 152.4) / 2.54) * 1.7) + 49
      if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'male') {
        return 'Robinson Formula: ' + manCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'male') {
        return 'Robinson Formula: ' + manM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'cm' && this.gender ===
        'female') {
        return 'Robinson Formula: ' + womenCm + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'm' && this.gender ===
        'female') {
        return 'Robinson Formula: ' + womenM + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'male') {
        return 'Robinson Formula: ' + manFeet + ' kg'
      } else if ((this.height && this.weight != null) && this.heightUnit === 'feet' && this.gender ===
        'female') {
        return 'Robinson Formula: ' + womenFeet + ' kg'
      }
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
    reset: function () {
      this.weight = null,
      this.height = null
    }
  }
}
</script>
