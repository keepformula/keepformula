<template>
  <q-page id="q-page">
    <div class="container-main">
      <h3 class="q-mb-lg">Body Mass Index</h3>
      <div class="container-input">
        <div id="input">
          <q-input type="number" v-model="Height" float-label="Height (cm)" />
            <q-input type="number" v-model="Weight" float-label="Weight (Kg)" />
              <br>
              <div>
                <q-btn-toggle
                                                    v-model="model"
                                                    class="my-custom-toggle"
                                                    no-caps
                                                    rounded
                                                    unelevated
                                                    toggle-color="primary"
                                                    color="white"
                                                    text-color="primary"
                                                    :options="[
                                                    {label: 'Male', value: 'one'},
                                                    {label: 'Female', value: 'two'}
                                                    ]"
                                                    />
              </div>
              <q-field class="field">{{BmiNumber}}</q-field>
              <q-field class="field">{{ BmiCalculate}}</q-field>
              <q-field class="field">{{ BestWeight}}</q-field>
        </div>
        <div class="btn-reset">
          <q-btn @click="Reset" style="background: #2468a3; color: white" label="Reset" size="22px"/>
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
      Height: null,
      Weight: null
    }
  },
  props: {
  },
  computed: {
    BmiCalculate () {
      var bmi = (this.Weight / Math.pow(this.Height / 100, 2))
      if (bmi < 18.5 && (this.Height && this.Weight) !== null) {
        return 'You are Under Weight'
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'You are Normal'
      } else if (bmi >= 25 && bmi < 30) {
        return 'You are Overweight'
      } else if (bmi >= 30 && bmi < 35) {
        return 'You are Obesity'
      } else if (bmi >= 35) {
        return 'You are Severe obesity'
      } else return null
    },
    BmiNumber () {
      if ((this.Height && this.Weight) !== null) {
        return 'Your BMI is ' + ((this.Weight / Math.pow(this.Height / 100, 2)).toFixed(2))
      } else return null
    },
    BestWeight () {
      var x = (18.5 * Math.pow(this.Height / 100, 2)).toFixed(1)
      var y = (25 * Math.pow(this.Height / 100, 2)).toFixed(1)
      if ((this.Height && this.Weight) !== null) {
        return 'Your best weight is between ' + x + ' Kg ~ ' + y + ' Kg'
      } else return null
    }
  },
  methods: {
    Reset: function () {
      this.Weight = ''
      this.Height = ''
    }
  }
}
</script>
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
