<template>
  <q-page class="border-top">
    <div class="row q-pt-md mobile-header-padding">
      <div class="q-pa-sm q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
          <div class="row col-6 col-xs-12 col-lg-6 relative-position">
          <q-btn @click="back"
                 icon="arrow_back_ios"
                 class="back-btn-style q-mb-sm"
                 color="secondary"
                 outline
                 :label="$t('back')"/>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <div class="row q-pt-md">
          <div class="q-ml-sm col-1 mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
             {{ $t('base_converter') }}
            </p>
          </div>
          </div>
              <q-card-separator />
                <q-card-main>
                  <div class="row q-mt-md">
                    <div class="col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md" >
                      <q-input ref="input" type="text" v-model="value" :float-label="$t('value_label')" />
                    </div>
                       <div class="col-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pr-md">
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.numericalBases"
                           />
                      </div>
                            <div class="col-12 col-md-12 relative-position q-pa-xs">
                              <q-btn @click="btnClick"
                                 icon="cached"
                                 dense
                                 round
                                 flat
                                 color="primary"
                                 class="unit-changer-button absolute-right" />
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
                        </div>
                  </div>
                  <transition-group
                    enter-active-class="animated fadeIn"
                    v-if='this.value'
                    >
                    <div class="q-mt-md" key="head">
                          <q-list-header class="q-body-1 q-mt-md">Result</q-list-header>
                            <q-item-main>
                                <div class="parent animate-scale" key="text">
                                  <div class="div1"> {{ value }} <sub> {{ inputUnit }} </sub> </div>
                                  <div class="div2 relative-position"> {{ toBase }} <sub> {{ outputUnit }} </sub>
                                    <q-btn class="absolute-right q-my-md q-mr-sm"
                                           size="md"
                                           id="copy-btn"
                                           outline
                                           flat
                                           color="grey"
                                           icon="file_copy"
                                           v-clipboard="() => this.toBase">
                                    </q-btn>
                                  </div>
                                </div>
                            </q-item-main>
                        </div>
                  </transition-group>
              </q-card-main>
            </q-card>
            <div class="q-mt-sm">
              <q-btn @click="reset" icon="refresh" class="reset-btn-style" outline color="secondary" :label="$t('reset')" />
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
      value: null,
      icon: 'baseConverter',
      wiki: 'https://en.wikipedia.org/wiki/Positional_notation#Base_conversion',
      inputUnit: this.$config.defaultUnits.inputUnitBaseConverter,
      outputUnit: this.$config.defaultUnits.outputUnitBaseConverter
    }
  },
  computed: {
    toBase () {
      let out = null
      if (this.value) {
        out = Knowledge.baseConverter(this.value, this.inputUnit, this.outputUnit)
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
