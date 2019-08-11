<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-xl-9 col-lg-9 col-md-10">
        <h4 class="q-mt-xs">{{ $t('time_converter')}}
          <a
            href="https://en.wikipedia.org/wiki/Time"
            target="_blank"
            :title="$t('time_converter_wiki_icon')">
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
                    <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      <q-input autofocus ref="input" type="text" v-model="value" :float-label="$t('value_label')"/>
                    </div>
                      <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.time"
                           :separator="true"
                           radio
                           />
                      </div>
                    <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      </div>
                      <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                          <q-select
                             v-model="outputUnit"
                             :float-label="$t('output_unit')"
                             :options="unit.time"
                             :separator="true"
                             radio
                             />
                        </div>
                  </div>
                  <div v-if='this.value'>
                    <q-list-header class="q-mt-md">Result</q-list-header>
                    <q-item tag="label">
                      <q-item-main>
                        <q-item-tile label>
                          {{ value }} {{ inputUnit }} =  {{ timeConvert }} {{ outputUnit }}
                        </q-item-tile>
                      </q-item-main>
                    </q-item>
                  </div>
                  <div class="q-mt-lg">
                    <q-btn @click="reset" :label="$t('Reset')"/>
                      <q-btn @click="back" :label="$t('Back')"/>
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
import Converter from 'convert-units'
import UnitConverter from '@/units-converter'

export default {
  name: 'TimeConverter',
  data () {
    return {
      unit: Unit,
      value: null,
      inputUnit: 'd',
      outputUnit: 'min'
    }
  },
  computed: {
    timeConvert () {
      let out = null
      if (this.value) {
        out = Converter(this.value).from(this.inputUnit).to(this.outputUnit)
      }
      return out
    }
  },
  methods: {
    reset () {
      this.value = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
