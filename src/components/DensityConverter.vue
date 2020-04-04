<template>
  <q-page class="border-top">
    <div class="row mobile-header-padding q-pt-sm">
      <div class="q-pa-xs q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <div class="row q-pt-md q-mt-md mobile-size-no-margin">
                <div class="q-ml-md col-1 mobile-size-component-header q-mb-md q-mr-xs">
                  <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
                </div>
                <div class="">
                  <p class="q-display-1 mobile-size-component-header">
                  {{ $t('density_converter') }}
                  </p>
                </div>
              </div>
                <q-card-main>
                  <div class="row">
                    <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      <q-input type="text" ref="input" v-model="value" :float-label="$t('value_label')"/>
                    </div>
                      <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
                        <q-select
                           v-model="inputUnit"
                           :float-label="$t('input_unit')"
                           :options="unit.density"
                           :separator="true"
                           radio
                           />
                      </div>
                      <div class="col-8 col-md-8 col-sm-8 col-lg-6 col-xl-7 col-xs-12 q-mb-md q-pr-md" >
                      </div>
                        <div class="col-4 col-lg-6 col-xl-5 col-md-4 col-xm-4 col-sm-4 col-xs-12
                          q-pr-md q-mb-lg">
                          <q-select
                             v-model="outputUnit"
                             :float-label="$t('output_unit')"
                             :options="unit.density"
                             :separator="true"
                             radio
                             />
                        </div>
                            <div class="col-12 col-md-12 relative-position q-pa-md">
                              <q-btn @click="changeUnits"
                                 icon="cached"
                                 dense
                                 round
                                 flat
                                 color="primary"
                                 class="unit-changer-button q-mr-md absolute-right" />
                           </div>
                  </div>
                  <transition-group
                    enter-active-class="animated fadeIn"
                    v-if='this.value' >
                    <div class="q-mt-md q-mb-md" key="head">
                      <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
                      <q-item-main>
                        <div class="parent animate-scale" key="text">
                          <q-list inset-separator class="q-mt-xs no-border-left-right">
                            <q-item>
                              <q-item-side color="black" left>
                                <span> {{ value }} {{ inputUnit }} </span>
                              </q-item-side>
                              <q-item-main color="">
                                <span> {{ densityConvert }} {{ outputUnit }} </span>
                              </q-item-main>
                              <q-item-side right>
                                <q-btn class="absolute-right q-mr-sm"
                                       id="copy-btn"
                                       size="md"
                                       flat
                                       outline
                                       color="grey"
                                       icon="file_copy"
                                       v-clipboard="() => this.densityConvert">
                                </q-btn>
                              </q-item-side>
                            </q-item>
                          </q-list>
                        </div>
                      </q-item-main>
                    </div>
                  </transition-group>
              </q-card-main>
            </q-card>
            <div class="q-mt-sm">
              <q-btn @click="back"
                 icon="arrow_back_ios"
                 class="back-btn-style q-mr-sm"
                 color="secondary"
                 outline
                 :label="$t('back')"/>

                <q-btn @click="reset"
                 icon="refresh"
                 class="reset-btn-style"
                 outline
                 color="secondary"
                 :label="$t('reset')" />
            </div>
          </div>
        <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
          <blockquote class="embedly-card" data-card-controls="0"><h4><a v-bind:href=this.wiki>Density</a></h4><p> {{ $t('density_wiki') }}</p></blockquote>
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
import { mixin } from '@/mixins/mixin'

export default {
  name: 'DensityConverter',
  mixins: [mixin],
  data () {
    return {
      unit: Unit,
      value: null,
      icon: 'densityConverter',
      wiki: 'https://en.m.wikipedia.org/wiki/Density',
      inputUnit: this.$config.defaultUnits.inputUnitDensityConverter,
      outputUnit: this.$config.defaultUnits.outputUnitDensityConverter
    }
  },
  computed: {
    densityConvert () {
      let out = null
      if (this.value) {
        out = Knowledge.convert(this.value, this.inputUnit, this.outputUnit)
      }
      return out
    }
  }
}
</script>
