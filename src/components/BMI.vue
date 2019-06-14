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
                  <q-input type="number" v-model="height" float-label="Your height (cm)"
                                                          class="col-10"/>
                    <q-btn-dropdown  @click="handlerFunction" class="col-2">
                      <!-- dropdown content -->
                      <q-list link>
                        <q-item v-close-overlay>
                          <q-item-section>
                            <q-item-label>cm</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item v-close-overlay>
                          <q-item-section>
                            <q-item-label>m</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item v-close-overlay>
                          <q-item-section>
                            <q-item-label>inches</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                </div>
                <div class="row">
                  <q-input type="number" v-model="weight" float-label="Your weight (Kg)"
                                                          class="col-10"/>
                    <q-btn-dropdown @click="handlerFunction" class="col-2" >
                      <q-list link>
                        <q-item v-close-overlay>
                          <q-item-section>
                            <q-item-label>gr</q-item-label>
                          </q-item-section>
                        </q-item >
                        <q-item v-close-overlay>
                          <q-item-section>
                            <q-item-label>kg</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item v-close-overlay>
                          <q-item-section>
                            <q-item-label>pounds</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                </div>
                <q-btn-toggle
                  v-model="gender"
                  class="q-mt-lg"
                  text-color="primary"
                  :options="[
                  {label: 'Male', value: 'male'},
                  {label: 'Female', value: 'female'}
                  ]"
                  />

                <q-field class="q-mt-sm q-headline">{{ bmi | toFixed }}</q-field>
                <q-field class="q-mt-sm q-headline">{{ bmiCalculate }}</q-field>
                <q-field class="q-mt-sm q-headline">{{ bestWeight }}</q-field>
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
    bmi () {
      if (this.height && this.weight != null) {
        return this.weight / Math.pow(this.height / 100, 2)
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
      let x = (18.5 * Math.pow(this.height / 100, 2)).toFixed(1)
      let y = (25 * Math.pow(this.height / 100, 2)).toFixed(1)
      if ((this.height && this.weight) !== null) {
        return 'Your best weight is between ' + x + ' Kg ~ ' + y + ' Kg'
      } else return null
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
