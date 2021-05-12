<template>
  <form @submit.prevent="calculate">
    <div>
      <div class="row">
        <div class="col-8 col-md-6 col-sm-4 col-xs-12 q-mb-md q-pr-md" >
          <q-input ref="input" type="number" v-model="originalNumerator" :float-label="$t('value_label') + ' (Original Numerator)'"/>
        </div>

        <div class="col-4 col-lg-6 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
          <q-input type="number" v-model="matchNumerator" :float-label="$t('value_label') + ' (Match Numerator)'"/>
        </div>
      </div>

      <div class="row">
        <div class="col-8 col-md-6 col-sm-4 col-xs-12 q-mb-md q-pr-md" >
          <q-input type="number" v-model="originalDenominator" :float-label="$t('value_label') + ' (Original Denominator)'"/>
        </div>

        <div class="col-4 col-lg-6 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md">
          <q-input type="number" v-model="matchDenominator" :float-label="$t('value_label') + ' (Match Denominator)'"/>
        </div>
      </div>

      <div class="col-12 col-md-12 relative-position q-pa-md">
          <q-btn
            type="submit"
            :loading="submitting"
            label="Calculate"
            class="unit-changer-button q-mr-md absolute-right"
            color="primary" />
      </div>

      <transition-group
        enter-active-class="animated fadeIn"
        v-if='this.proportionalityConstant' >
        <div class="q-mt-md q-mb-md" key="head">
          <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
          <q-item-main>
            <div class="parent animate-scale" key="text">
              <q-list inset-separator class="q-mt-xs no-border-left-right">

                <q-item>
                  <q-item-side color="black" left>
                    <span> Proportionality Constant: </span>
                  </q-item-side>
                  <q-item-main color="">
                    <span> {{ proportionalityConstant }} </span>
                  </q-item-main>
                  <q-item-side right>
                    <q-btn class="absolute-right q-mr-sm"
                          id="copy-btn"
                          size="md"
                          flat
                          outline
                          color="grey"
                          icon="file_copy"
                          v-clipboard="() => this.proportionalityConstant">
                    </q-btn>
                  </q-item-side>
                </q-item>

              </q-list>
            </div>
          </q-item-main>
        </div>
      </transition-group>
    </div>
  </form>
</template>

<script>
import { openURL } from 'quasar'
import { mixin } from '@/mixins/mixin'

export default {
  name: 'Proportionality',
  mixins: [mixin],
  data () {
    return {
      originalNumerator: null,
      originalDenominator: null,
      matchNumerator: null,
      matchDenominator: null
    }
  },
  computed: {
    proportionalityConstant () {
      let proportionalityConstant = null
      if (this.originalNumerator && this.originalDenominator) {
        proportionalityConstant = this.originalNumerator / this.originalDenominator
      } else if (this.originalNumerator === 0) {
        proportionalityConstant = '0'
      } else if (this.originalDenominator === 0) {
        proportionalityConstant = 'Undefined'
      }
      return proportionalityConstant
    }
  },
  methods: {
    calculate () {
      if (this.matchNumerator) {
        this.matchDenominator = this.matchNumerator * this.originalDenominator / this.originalNumerator
      } else {
        this.matchNumerator = this.matchDenominator * this.originalNumerator / this.originalDenominator
      }
    }
  }
}
</script>
