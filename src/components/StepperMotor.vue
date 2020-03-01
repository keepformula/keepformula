<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-sm-10 col-xl-9 col-lg-9 col-md-10">
      <h4 class="q-mt-xs">{{ $t('stepperMotor') }}
        <a
          href='https://en.wikipedia.org/wiki/Stepper_motor'
          target="_blank"
          :title="$t('stepperMotor_wiki_icon')">
          <q-icon
          class="text-warning"
          name="help"
          />
        </a>
      </h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                <div class="row q-mt-md">
                  <div class="col-12 col-md-6 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.speed"
                           :separator="true"
                           radio
                           />
                  </div>
                      <div class="col-5 col-md-6 col-sm-8 col-xs-6 q-mb-md q-pr-md">
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.speed"
                           :separator="true"
                           radio
                           />
                      </div>
                    <div class="col-5 col-md-6 col-sm-8 col-xs-6 q-mb-md q-pr-md">
                      <q-input autofocus ref="input" type="text" v-model="angle" :float-label="$t('stepperMotor_label')"/>
                    </div>
                    <div class="col-5 col-md-6 col-sm-8 col-xs-6 q-mb-md q-pr-md">
                      <q-select
                         v-model="inputUnit"
                         :float-label="$t('input_unit')"
                         :options="unit.speed"
                         :separator="true"
                         radio
                         />
                    </div>
                    <div class="col-5 col-md-6 col-sm-8 col-xs-6 q-mb-md q-pr-md">
                      <q-input type="text" v-model="driverMicroSteppig" :float-label="$t('stepperMotor_label')"/>
                    </div>
                </div>
                  <div class="q-mt-md q-ml-md">
                    <q-btn @click="reset" :label="$t('reset')"/>
                      <q-btn @click="back" :label="$t('back')"/>
                  </div>
                      </q-card-main>
           </q-card>
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
  name: 'StepperMotor',
  data () {
    return {
      unit: Unit
    }
  },
  methods: {
    openURL,
    reset () {
      //      this = null
      //     this = null
      //      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
