<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-12 col-sm-12 col-xs-12 q-mb-md q-pr-md " >
        <q-field
          label="Select your Material type"
          >
          <q-select
            color="primary"
            float-label="Material type"
            v-model="select"
            :options="listOptions"
            />
        </q-field>
      </div>
      <div class="col-md-9 col-sm-9 col-xs-12 q-mb-md q-pr-md" >
        <q-input type="text" ref="input" suffix="mm" v-model="diameter" :float-label="$t('filament_diameter')"/>
      </div>
        <div class="col-3 col-lg-3 col-md-3 col-xm-3 col-sm-3 col-xs-12 q-pr-md q-mb-lg">
          <q-select
            v-model="diameterUnit"
            :float-label="$t('output_unit')"
            :options="unit.length"
            :separator="true"
            />
        </div>
      <div class="col-md-9 col-sm-9 col-xs-12 q-mb-md q-pr-md" >
        <q-input type="text" ref="input" suffix="cm" v-model="length" :float-label="$t('filament_length')"/>
      </div>
        <div class="col-3 col-lg-3 col-md-3 col-xm-3 col-sm-3 col-xs-12 q-pr-md q-mb-lg">
          <q-select
            v-model="lengthUnit"
            :float-label="$t('output_unit')"
            :options="unit.length"
            :separator="true"
            />
        </div>
      <div class="col-md-9 col-sm-9 col-xs-12 q-mb-md q-pr-md" >
        <q-input type="text" ref="input" suffix="$ / kg" v-model="price" :float-label="$t('filament_price')"/>
      </div>
      <div class="col-md-9 col-sm-9 col-xs-12 q-mb-md q-pr-md" >
        <q-input type="text" ref="input" suffix="hrs" v-model="time" :float-label="$t('prining_time')"/>
      </div>
        <div class="col-3 col-lg-3 col-md-3 col-xm-3 col-sm-3 col-xs-12 q-pr-md q-mb-lg">
          <q-select
            v-model="timeUnit"
            :float-label="$t('output_unit')"
            :options="unit.time"
            :separator="true"
            />
        </div>
      <div class="col-md-9 col-sm-9 col-xs-12 q-mb-md q-pr-md" >
        <q-input type="text" ref="input" suffix="$/h" v-model="cost" :float-label="$t('cost_per_hour')"/>
      </div>
      <div class="col-md-9 col-sm-9 col-xs-12 q-mb-md q-pr-md" >
        <q-input type="text" ref="input" suffix="%" v-model="markup" :float-label="$t('markup')"/>
      </div>
    </div>
    <transition-group
      enter-active-class="animated fadeIn"
      v-if='this.materialCost' >
      <div class="q-mt-md q-mr-md" key="head">
        <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
        <q-list
          dense
          bordered
          padding
          class="rounded-borders">
          <q-item
            class="q-my-sm cursor-pointer"
            clickable
            v-clipboard="() => this.materialCost"
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
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ finalPrice }}
              </q-avatar>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Knowledge from '@/knowledge'
import Unit from '@/units'
import { mixin } from '@/mixins/mixin'

export default {
  name: 'ThreeDPrintCostCalculator',
  mixins: [mixin],
  data () {
    return {
      unit: Unit,
      diameter: '',
      length: '',
      price: '',
      time: '',
      cost: '',
      diameterUnit: 'mm',
      lengthUnit: 'cm',
      timeUnit: 'h',
      select: 1.05,
      markup: 10,
      listOptions: [
        {
          label: 'ABS (Acrylonitrile Butadiene Styrene)',
          value: 1.05
        },
        {
          label: 'PLA (Polylactic Acid)',
          value: 1.27
        },
        {
          label: 'PETG (Polyethylene Terephthalate)',
          value: 1.25
        },
        {
          label: 'PETT (T-Glase filament)',
          value: 1.45
        },
        {
          label: 'HIPS (High Impact Polystyrene)',
          value: 1.04
        },
        {
          label: 'TPU (Thermoplastic Polyurethane)',
          value: 1.30
        }
      ]
    }
  },
  computed: {
    diameterToMM () {
      return Knowledge.convert(this.diameter, this.diameterUnit, 'mm')
    },
    lengthToCm () {
      return Knowledge.convert(this.length, this.lengthUnit, 'cm')
    },
    timeInHour () {
      return Knowledge.convert(this.time, this.timeUnit, 'h')
    },
    materialCost () {
      return this.select * 3.14159265359 * Math.pow(this.diameterToMM / 100 / 2, 2) *
        this.lengthToCm / 1000 * this.price
    },
    laborCost () {
      return this.timeInHour * this.cost
    },
    finalPrice () {
      return (this.materialCost + this.laborCost) * ((this.markup + 100) / 100)
    }
  }
}
</script>
