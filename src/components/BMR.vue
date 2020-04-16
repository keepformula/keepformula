<template>
  <div>
    <div class="row">
      <div class="col-md-8 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
        <q-input ref="input" type="text" v-model="height" :float-label="$t('height_label')"/>
      </div>
        <div class="col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 col-xs-6 q-pr-md">
          <q-select
            v-model="heightUnit"
            :float-label="$t('height_unit')"
            :options="unit.lengthBMI"
            :separator="true"
            radio
            />
        </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
        <q-input type="text" v-model="weight" :float-label="$t('weight_label')"/>
      </div>
        <div class="col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 col-xs-6 q-pr-md">
          <q-select
            v-model="weightUnit"
            :float-label="$t('weight_unit')"
            :options="unit.weightBMI"
            :separator="true"
            radio
            />
        </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
        <q-input ref="input" type="text" v-model="age" :float-label="$t('age_label')"/>
      </div>
        <div class="col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 col-xs-6 q-pr-md">
          <q-btn-toggle
            v-model="gender"
            class="q-mt-md"
            text-color="primary"
            :options="unit.gender"
            />
        </div>
    </div>
      <br>
      <transition-group
        enter-active-class="animated fadeIn"
        v-if="this.height && this.weight">
        <div class="q-mt-md q-mb-md" key="head">
          <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
          <q-item-main>
            <div class="parent animate-scale" key="text">
              <q-list inset-separator class="q-mt-xs no-border-left-right">
                <q-item>
                    <q-item-side color="black" left>
                      <span> BMR </span>
                    </q-item-side>
                    <q-item-main color="">
                      <span> {{ bmr }} kcal/day </span>
                    </q-item-main>
                    <q-item-side right>
                      <q-btn class="absolute-right q-mr-sm"
                             id="copy-btn"
                             size="md"
                             flat
                             outline
                             color="grey"
                             icon="file_copy"
                             v-clipboard="() => this.bmr">
                      </q-btn>
                    </q-item-side>
                  </q-item>
                  <q-item-separator />
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
  name: 'BMR',
  mixins: [mixin],
  data () {
    return {
      unit: Unit,
      gender: 'male',
      height: null,
      weight: null,
      age: null,
      weightUnit: this.$config.defaultUnits.weight,
      heightUnit: this.$config.defaultUnits.height,
    }
  },
  computed: {
    weightInKG () {
      return Knowledge.convert(this.weight, this.weightUnit, 'kg')
    },
    heightInMeter () {
      return Knowledge.convert(this.height, this.heightUnit, 'm')
    },
    heightInCentimeter () {
      return Knowledge.convert(this.height, this.heightUnit, 'cm')
    },
    bmr () {
      // Main Formula
      // NOTE: calculate based on KG, Centimeter
      let out = null
      if (this.weight && this.height && this.age && this.gender === 'male') {
          out = 10 * this.weightInKG + 6.25 * this.heightInCentimeter - 5 * this.age + 5
      }
      else if (this.weight && this.height && this.age && this.gender === 'female') {
          out = 10 * this.weightInKG + 6.25 * this.heightInCentimeter - 5 * this.age - 161
      }
      return out
    },
  },
  methods: {
  }
}
</script>
