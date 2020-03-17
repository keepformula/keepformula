<template>
  <q-page class="border-top">
    <div class="row q-pt-md mobile-header-padding">
      <div class="q-pa-sm q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
            {{ $t('base_converter') }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <q-card-separator />
                <q-card-main>
                  <div class="row q-mt-md">
                    <div class="col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                      <q-input ref="input" type="text" v-model="inputValue" :float-label="$t('value_label')" />
                    </div>
                       <div class="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pr-md">
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.numericalBases"
                           />
                      </div>
                            <div class="col-12 col-md-12 relative-position q-pa-xs">
                              <q-btn @click="btnClick" icon="cached" dense round flat
                                color="primary" class="absolute-right" />
                            </div>
                      <div class="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xs-12 q-mb-md q-pr-md" >
                      </div>
                        <div class="col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md
                          q-mb-xl">
                          <q-select
                             v-model="outputUnit"
                             :float-label="$t('output_unit')"
                             :options="unit.numericalBases"
                             />
                            <!--<div class="q-mt-md">-->
                              <!--<q-btn @click="btnClick" icon="cached" round outline color="primary" class="float-right" />-->
                            <!--</div>-->
                        </div>
                        <div v-if='this.inputValue'>
                          <q-list-header class="q-mt-md">Result</q-list-header>
                          <q-item tag="label">
                            <q-item-main>
                              <q-item-tile label>
                                {{ this.inputValue }}<sub>{{ this.inputUnit }}</sub> = {{ toBase }}<sub>{{ this.outputUnit }}</sub>
                              </q-item-tile>
                            </q-item-main>
                          </q-item>
                        </div>
                  </div>
              </q-card-main>
            </q-card>
            <div class="q-mt-sm">
              <q-btn @click="back" icon="arrow_back_ios" class="back-reset-btn-style" color="secondary" outline :label="$t('back')"/>
                <q-btn @click="reset" icon="refresh" class="q-ml-xs back-reset-btn-style" outline color="secondary" />
            </div>
          </div>
        <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
          <blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://en.wikipedia.org/wiki/Radix">Radix</a></h4><p>In digital numeral systems, the radix or base is the number of unique digits, including the digit zero, used to represent numbers in a positional numeral system. For example, for the decimal/denary system (the most common system in use today) the radix (base number) is ten, because it uses the ten digits from 0 through 9.</p></blockquote>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Knowledge from '@/knowledge'
import Unit from '@/units'

export default {
  name: 'BaseConvrter',
  data () {
    return {
      unit: Unit,
      inputValue: null,
      icon: 'baseConverter',
      wiki: 'https://en.wikipedia.org/wiki/Positional_notation#Base_conversion',
      inputUnit: this.$config.defaultUnits.inputUnitBaseConverter,
      outputUnit: this.$config.defaultUnits.outputUnitBaseConverter
    }
  },
  computed: {
    toBase () {
      let out = null
      if (this.inputValue) {
        out = Knowledge.baseConverter(this.inputValue, this.inputUnit, this.outputUnit)
      }
      return out
    }
  },
  methods: {
    reset () {
      this.inputValue = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    },
    btnClick () {
      let x = this.inputUnit
      let y = this.outputUnit
      this.inputUnit = y
      this.outputUnit = x
    }
  },
  mounted () {
    if (window.screen.width > 768) {
      setTimeout(() => {
        this.$refs.input.focus()
      }, 500)
    }
  }
}
</script>
