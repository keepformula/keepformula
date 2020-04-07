<template>
  <div>
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
  </div>
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
