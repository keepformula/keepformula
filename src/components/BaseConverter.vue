<template>
  <q-page class="q-pa-lg">
    <div>
      <h3 class="q-mb-md">Base Converter</h3>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row q-mt-lg">
                  <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md">
                    <q-input type="number" v-model="inputValue" float-label="Enter Number" />
                  </div>
                  <div class="col-3 col-xs-auto q-ml-lg">
                    <q-select
                       v-model="inputUnit"
                       float-label="from base"
                       :options="items"
                       />
                  </div>
                  <div class="col-8 col-md-7 col-sm-6 col-xs-5 q-mb-md">
                    </div>
                  <div class="col-3 col-xs-auto q-ml-lg">
                    <q-select
                       v-model="outputUnit"
                       float-label="to base"
                       :options="items"
                       />
                  </div>
                  <q-field class="q-mt-xl q-ml-sm q-title">{{ outputValue }}</q-field>
                </div>
                <div class="q-mt-md">
                  <q-btn @click="reset" label="Reset"/>
                  <q-btn @click="back" label="Back"/>
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
  name: 'BaseConvrter',
  data () {
    return {
      inputValue: '',
      inputUnit: 'dec',
      outputUnit: '',
      base: '',
      items: [
        {
          label: 'decimal',
          value: 'dec'
        },
        {
          label: 'binary',
          value: 'bin'
        },
        {
          label: 'octal',
          value: 'oct'
        },
        {
          label: 'hex',
          value: 'hex'
        }
      ]
    }
  },
  computed: {
    outputValue () {
      let decToBin
      let decToOct
      let decToHex
      let binToDec
      let binToHex
      let binToOct
      let octToDec
      let octToHex
      let octToBin
      let hexToDec
      let hexToBin
      let hexToOct
      if (this.inputValue == null) {
        return ('')
      } else if (this.inputUnit === 'dec' && this.outputUnit === 'bin') {
        decToBin = (this.inputValue.toString(2))
        return 'Binary is ' + decToBin
      } else if (this.inputUnit === 'dec' && this.outputUnit === 'oct') {
        decToOct = (this.inputValue.toString(8))
        return 'Octal is ' + decToOct
      } else if (this.inputUnit === 'dec' && this.outputUnit === 'hex') {
        decToHex = (this.inputValue.toString(16))
        return 'Hex is ' + decToHex
      } else if (this.inputUnit === 'dec' && this.outputUnit === 'dec') {
        return 'Please Select Another Unit!!'
      } else if (this.inputUnit === 'bin' && this.outputUnit === 'dec') {
        binToDec = (parseInt(this.inputValue, 2).toString(10))
        return 'Decimal is ' + binToDec
      } else if (this.inputUnit === 'bin' && this.outputUnit === 'oct') {
        binToOct = (parseInt(this.inputValue, 2).toString(8))
        return 'Octal is ' + binToOct
      } else if (this.inputUnit === 'bin' && this.outputUnit === 'hex') {
        binToHex = (parseInt(this.inputValue, 2).toString(16))
        return 'Hex is ' + binToHex
      } else if (this.inputUnit === 'bin' && this.outputUnit === 'bin') {
        return 'Please Select Another Unit!!'
      } else if (this.inputUnit === 'oct' && this.outputUnit === 'dec') {
        octToDec = (parseInt(this.inputValue, 8).toString(10))
        return 'Decimal is ' + octToDec
      } else if (this.inputUnit === 'oct' && this.outputUnit === 'bin') {
        octToBin = (this.inputValue.toString(2))
        return 'Binary is ' + octToBin
      } else if (this.inputUnit === 'oct' && this.outputUnit === 'hex') {
        octToHex = (parseInt(this.inputValue, 8).toString(16))
        return 'Hex is ' + octToHex
      } else if (this.inputUnit === 'oct' && this.outputUnit === 'oct') {
        return 'Please Select Another Unit!!'
      } else if (this.inputUnit === 'hex' && this.outputUnit === 'dec') {
        hexToDec = (parseInt(this.inputValue, 16).toString(10))
        return 'Decimal is ' + hexToDec
      } else if (this.inputUnit === 'hex' && this.outputUnit === 'bin') {
        hexToBin = (parseInt(this.inputValue, 16).toString(2))
        return 'Binary is ' + hexToBin
      } else if (this.inputUnit === 'hex' && this.outputUnit === 'oct') {
        hexToOct = (parseInt(this.inputValue, 16).toString(8))
        return 'Octal is ' + hexToOct
      } else if (this.inputUnit === 'hex' && this.outputUnit === 'hex') {
        return 'Please Select Another Unit!!'
      }
    }
  },
  methods: {
    reset () {
      this.inputValue = null
      this.outputUnit = null
    },
    back () {
      window.location ='/'
    }
  }
}
</script>
