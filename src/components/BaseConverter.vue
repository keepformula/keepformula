<template>
  <q-page class="q-pa-lg">
    <div>
      <h3 class="q-mb-md">Base Converter</h3>
      <div class="row">
        <div class="col-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div>
                  <div class="q-mt-md text-weight-bold q-headline"> Decimal To Binary </div>
                  <q-input type="number" v-model="decimal" float-label="Decimal Value" />
                    <q-field class="q-mt-sm q-title">Binary is: {{decimalToBinary}} </q-field>
                </div>
                <div>
                  <div class="q-mt-md text-weight-bold  q-headline"> Binary to Decimal </div>
                  <q-input type="number"  v-model="binary" float-label="Binary Value" />
                    <q-field class="q-mt-sm q-title">Decimal is: {{binaryToDecimal}} </q-field>
                </div>
                <div>
                  <div class="q-mt-md  text-weight-bold q-headline"> Octal To Binary </div>
                  <q-input type="number" v-model="octal" float-label="Octal Value" />
                    <q-field class="q-mt-sm q-title">Binary is: {{octalToBinary}} </q-field>
                </div>
                <div>
                  <div class="q-mt-md text-weight-bold q-headline"> Binary to Octal </div>
                  <q-input type="number"  v-model="binary" float-label="Binary Value" />
                    <q-field class="q-mt-sm q-title">Octal is: {{binaryToOctal}} </q-field>
                </div>
                <div class="q-mt-md">
                  <q-btn @click="reset" label="Reset"/>
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
      decimal: '',
      binary: '',
      octal: ''
    }
  },
  computed: {
    decimalToBinary () {
      if (this.decimal == null) {
        return ('')
      } else {
        return (this.decimal.toString(2))
      }
    },
    binaryToDecimal () {
      if (this.binary !== '') {
        return (parseInt(this.binary, 2).toString(10))
      } else {
        return ('')
      }
    },
    octalToBinary () {
      if (this.octal == null) {
        return ('')
      } else {
        return (this.octal.toString(2))
      }
    },
    binaryToOctal () {
      if (this.binary !== '') {
        return (parseInt(this.binary, 2).toString(8))
      } else {
        return ('')
      }
    }
  },
  methods: {
    reset: function () {
      this.binary = ''
      this.decimal = null
    }
  }
}
</script>
