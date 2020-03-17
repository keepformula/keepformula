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
            {{ $t('force_converter') }}
            <a
              href="https://en.wikipedia.org/wiki/force"
              target="_blank"
              :title="$t('force_converter_wiki_icon')">
              <q-icon
                class="text-primary"
                name="help"
                />
            </a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <q-card-separator />
                <q-card-main>
                  <div class="row q-mt-md">
                    <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      <q-input ref="input" type="text" v-model="value" :float-label="$t('value_label')"/>
                    </div>
                      <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.force"
                           :separator="true"
                           radio
                           />
                      </div>
                            <div class="col-12 col-md-12 relative-position q-pa-xs">
                              <q-btn @click="btnClick" icon="cached" dense round flat
                                color="primary" class="absolute-right" />
                            </div>
                      <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      </div>
                        <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12
                          q-pr-md q-mb-xl">
                          <q-select
                             v-model="outputUnit"
                             :float-label="$t('output_unit')"
                             :options="unit.force"
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
                          {{ value }} {{ inputUnit }} =  {{ forceConvert }} {{ outputUnit }}
                        </q-item-tile>
                      </q-item-main>
                    </q-item>
                  </div>
              </q-card-main>
            </q-card>
            <div class="q-mt-sm">
              <q-btn @click="back" icon="arrow_back_ios" class="back-reset-btn-style" color="secondary" outline :label="$t('back')"/>
                <q-btn @click="reset" icon="refresh" class="q-ml-xs back-reset-btn-style" outline color="secondary" />
            </div>
          </div>
        <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
          <blockquote class="embedly-card" data-card-controls="0"><h4><a href="https://en.wikipedia.org/wiki/force">Force</a></h4><p>In physics, a force is any interaction that, when unopposed, will change the motion of an object. A force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate. Force can also be described intuitively as a push or a pull.</p></blockquote>
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
  name: 'ForceConverter',
  data () {
    return {
      unit: Unit,
      value: null,
      icon: 'forceConverter',
      inputUnit: this.$config.defaultUnits.inputUnitForceConverter,
      outputUnit: this.$config.defaultUnits.outputUnitForceConverter
    }
  },
  computed: {
    forceConvert () {
      let out = null
      if (this.value) {
        out = Knowledge.convert(this.value, this.inputUnit, this.outputUnit)
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
