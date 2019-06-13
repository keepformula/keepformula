<template>
  <q-page id="q-page">
    <div class="container-main">
      <h3>Body Mass Index</h3>
      <div class="row">
        <div class="col-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <q-input type="number" v-model="height" float-label="height (cm)" />
                <q-input type="number" v-model="weight" float-label="weight (Kg)" />
                <q-btn-toggle
                  v-model="model"
                  class="q-mt-lg"
                  color="white"
                  text-color="primary"
                  :options="[
                  {label: 'Male', value: 'one'},
                  {label: 'Female', value: 'two'}
                  ]"
                  />
                <q-field class="field">{{ bmi }}</q-field>
                <q-field class="field">{{ bmiCalculate }}</q-field>
                <q-field class="field">{{ bestweight }}</q-field>
                <div class="btn-reset">
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
      model: 'one',
      height: null,
      weight: null,
      bmiMessage: {
        normal: 'You are Under weight',
        underWeight: '',
        overWeight: ''
      }
    }
  },
  computed: {
    bmi () {
      return this.weight / Math.pow(this.height / 100, 2)
    },
    bmiCalculate () {
      let out = null
      let bmi = this.bmi
      if (bmi < 18.5 && (this.height && this.weight) !== null) {
        out = this.bmiMessage.normal
      } else if (bmi >= 18.5 && bmi < 25) {
        out = 'You are Normal'
      } else if (bmi >= 25 && bmi < 30) {
        out = 'You are Overweight'
      } else if (bmi >= 30 && bmi < 35) {
        out = 'You are Obesity'
      } else if (bmi >= 35) {
        out = 'You are Severe obesity'
      }
      return out
    },
    bestweight () {
      let x = (18.5 * Math.pow(this.height / 100, 2)).toFixed(1)
      let y = (25 * Math.pow(this.height / 100, 2)).toFixed(1)
      if ((this.height && this.weight) !== null) {
        return 'Your best weight is between ' + x + ' Kg ~ ' + y + ' Kg'
      } else return null
    }
  },
  methods: {
    reset: function () {
      this.weight = ''
      this.height = ''
    }
  }
}
</script>
