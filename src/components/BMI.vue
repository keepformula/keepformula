<template>
  <q-page id="q-page">
    <div class="container-main">
      <h3 class="q-mb-lg">Body Mass Index</h3>
      <div class="container-input">
        <div id="input">
          <q-input type="number" v-model="Height" float-label="Height (cm)" />
            <q-input type="number" v-model="Weight" float-label="Weight (Kg)" />
              <br>
              <q-field class="field">Your BMI is {{BmiNumber}}</q-field>
              <q-field class="field">You are {{ BmiCalculate}}</q-field>
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
      Height: null,
      Weight: null
    }
  },
  props: {
  },
  computed: {
    BmiCalculate () {
      var bmi = (this.Weight / Math.pow(this.Height / 100, 2))
      if (bmi < 18.5) {
        return 'Under Weight'
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal'
      } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight'
      } else if (bmi >= 30 && bmi < 35) {
        return 'Obesity'
      } else if (bmi >= 35) {
        return 'Severe obesity'
      } else return null
    },
    BmiNumber () {
      if ((this.Height && this.Weight) !== null) {
        return ((this.Weight / Math.pow(this.Height / 100, 2)).toFixed(2))
      } else return ''
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
