<template>
  <div>
    <div class="row">
      <div class="col-md-8 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
        <q-input
          ref="input"
          type="text"
          v-model="value"
          :float-label="$t('width_label')"/>
      </div>
        <div class="col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 col-xs-6 q-pr-md">
          <q-select
            v-model="inputUnit"
            :float-label="$t('aspect_ratio_unit')"
            :options="unit.aspectRatio"
            :separator="true"
            radio
            />
        </div>
    </div>
    <br>
    <transition-group
      enter-active-class="animated fadeIn"
      v-if="this.inputUnit && this.value">
      <div class="q-mt-md q-mr-md" key="head">
        <q-list-header
          class="q-body-1 q-mt-md">
          {{ $t('result') }}
        </q-list-header>
        <q-list
          dense
          bordered
          padding
          class="rounded-borders">
          <q-item
            class="q-my-sm cursor-pointer"
            clickable
            v-clipboard="() => this.calculatedValue"
            v-ripple>
            <q-item-section side top>
              <q-btn class="q-my-md q-mr-sm"
                     size="md"
                     id="copy-btn"
                     outline
                     flat
                     color="grey"
                     icon="file_copy">
              </q-btn>
            </q-item-section>
            <q-item-section>
              {{ $t('height') }}
            </q-item-section>
            <q-item-section class="q-pl-lg">
              {{  calculatedValue }}
            </q-item-section>
          </q-item>
        </q-list>
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
  name: 'AspectRatio',
  mixins: [mixin],
  data () {
    return {
      unit: Unit,
      value: null,
      height: null,
      wiki: 'https://en.wikipedia.org/wiki/Aspect_ratio',
      inputUnit: this.$config.defaultUnits.inputUnit
    }
  },
  computed: {
    calculatedValue () {
      let out = this.value
      if (this.inputUnit === `4:3`) {
        out = Math.round(out * 3 / 4)
      }
      if (this.inputUnit === `16:9`) {
        out = Math.round(out * 9 / 16)
      }
      if (this.inputUnit === `16:10`) {
        out = Math.round(out * 10 / 16)
      }
      if (this.inputUnit === `5:3`) {
        out = Math.round(out * 3 / 5)
      }
      if (this.inputUnit === `5:4`) {
        out = Math.round(out * 4 / 5)
      }
      if (this.inputUnit === `17:10`) {
        out = Math.round(out * 10 / 17)
      }
      return out
    }
  }
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-template-rows: repeat(7, 1fr);
  font-size: 16px;
}
.div1 { grid-area: 1 / 1 / 2 / 2;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
.div2 { grid-area: 1 / 2 / 2 / 3;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
</style>
