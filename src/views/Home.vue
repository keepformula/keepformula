<template>
  <q-page class="mobile-size-right-left-padding">
    <div>
      <div class="row mobile-search-margin">
        <q-search
           @keydown.enter="oneResult"
           class="q-my-lg q-mx-auto col-12 col-xl-4 col-lg-6 col-md-7 col-sm-8
           search-style"
           hide-underline
           ref="input"
           placeholder="Search (e.g., Speed, Volume , Time, Frequency)"
           v-model="searchQuery" />
      </div>
    </div>
    <div class="row">
      <div class="q-mb-lg q-mx-auto col-12 col-xl-8 col-lg-8 col-md-10 col-sm-10 q-pa-xs">
        <q-chip 
          v-for="cat in categories" 
          @click="setCurrentCategory(cat)"
          @hide="setCurrentCategory(cat)"
          :closable="currentCategories.includes(cat)"
          class="q-mr-sm q-ml-sm cursor-pointer"
          :color="(currentCategories.length === 0 || currentCategories.includes(cat)) ? 'primary' : 'light'">
          {{ $t(`categories.${cat}`) }}
        </q-chip>
        <!-- eslint-disable-next-line vue/valid-v-model -->
        <div class="row q-pt-sm" v-model="noResult">
             <p class="q-display-1 text-center full-width q-mt-lg text-weight-light"
                 v-if="handleSearchNoResult">
             {{ $t('noResult') }}
             </p>
          <div
             v-for="(item, index) in searchResult"
             v-bind:key="index"
             class="q-pa-sm col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 main-card" >
             <router-link
             :key="index"
             :to="{ name: item.route }" >
             <q-card
             class="card-hover text-center calculator-cards w-100 cursor-pointer"
             inline>
               <q-card-media
             class="q-py-lg flex flex-center card-image">
                 <img :src="`/icon/${item.icon}.svg`" style="width: 80px;" />
               </q-card-media>
               <q-card-title class="text-justisfy">
                 {{ item.name }}
               </q-card-title>
            <q-card-main>
              <p class="text-faded flex flex-center text-center q-caption"> {{ item.description }} </p>
            </q-card-main>
             </q-card>
             </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="text-love" >
      <span>
        Made for you with <img width="10" src="/img/heart.svg"> by Open Source community
      </span>
    </div>
  </q-page>
</template>

<script>
import { mixin } from '@/mixins/mixin'

export default {
  name: 'PageHome',
  mixins: [mixin],
  data () {
    return {
      currentCategories: [],
      categories: ['threedPrinter', 'design', 'math', 'health', 'conversion' ],
      calculators: [
        {
          name: 'BMI',
          route: 'BMI',
          description: 'Calculate Body Mass Index',
          icon: 'bmi',
          tag: 'health , weight , height , mass , body',
          category: 'health'
        },
        {
          name: 'Aspect Ratio',
          route: 'AspectRatio',
          description: 'Calculate Body Mass Index',
          icon: 'AspectRatio',
          tag: 'math , rectangle , ratio',
          category: 'design'
        },
        {
          name: 'Golden Ratio',
          route: 'GoldenRatio',
          description: 'Calculate Golden Ratio',
          icon: 'goldenRatio',
          tag: 'math , rectangle , ratio',
          category: 'design'
        },
        {
          name: 'Radix',
          route: 'RadixConverter',
          description: 'Number base conversion',
          icon: 'baseConverter',
          tag: 'number , numerical conversion , convert',
          category: 'conversion'
        },
        {
          name: 'Data Storage',
          route: 'DataStorageConverter',
          description: 'Conversion units for the Data Storage',
          icon: 'dataStorageConverter',
          tag: 'storage , kilobyte , megabyte , gigabyte ,terabyte',
          category: 'conversion'
        },
        {
          name: 'Length',
          route: 'LengthConverter',
          description: 'Length conversion',
          icon: 'lengthConverter',
          tag: 'number , length conversion , convert',
          category: 'conversion'
        },
        {
          name: 'Weight',
          route: 'WeightConverter',
          description: 'Weight conversion',
          icon: 'weightConverter',
          tag: 'weight , mass conversion , convert',
          category: 'conversion'
        },
        {
          name: 'Area',
          route: 'AreaConverter',
          description: 'Area conversion',
          icon: 'areaConverter',
          tag: 'area , area conversion , convert , hectare , squad',
          category: 'conversion'
        },
        {
          name: 'Volume',
          route: 'VolumeConverter',
          description: 'Volume conversion',
          icon: 'volumeConverter',
          tag: 'volume , volume conversion , convert , liquid , cubic',
          category: 'conversion'
        },
        {
          name: 'Pressure',
          route: 'PressureConverter',
          description: 'Pressure conversion',
          icon: 'pressureConverter',
          tag: 'pressure , pressure conversion , convert , atmosphere , pascal',
          category: 'conversion'
        },
        {
          name: 'Speed',
          route: 'SpeedConverter',
          description: 'Speed conversion',
          icon: 'speedConverter',
          tag: 'speed , speed conversion , convert , metre per hour , knot',
          category: 'conversion'
        },
        {
          name: 'Time',
          route: 'TimeConverter',
          description: 'Time conversion',
          icon: 'timeConverter',
          tag: 'time , time conversion , convert , second , minute , hour ',
          category: 'conversion'
        },
        {
          name: 'Angle',
          route: 'AngleConverter',
          description: 'Angle conversion',
          icon: 'angleConverter',
          tag: 'angle , angle conversion , convert , degrees , radian , gradient ',
          category: 'conversion'
        },
        {
          name: 'Energy',
          route: 'EnergyConverter',
          description: 'Energy conversion',
          icon: 'energyConverter',
          tag: 'energy , energy conversion , convert , watt , joule ',
          category: 'conversion'
        },
        {
          name: 'Frequency',
          route: 'FrequencyConverter',
          description: 'Frequency conversion',
          icon: 'frequencyConverter',
          tag: 'frequency , frequency conversion , convert , rpm , hz , mhz',
          category: 'conversion'
        },
        {
          name: 'Density',
          route: 'DensityConverter',
          description: 'Density conversion',
          icon: 'densityConverter',
          tag: 'density , density conversion , convert',
          category: 'conversion'
        },
        {
          name: 'Force',
          route: 'ForceConverter',
          description: 'Force conversion',
          icon: 'forceConverter',
          tag: 'force , force conversion , convert , newton',
          category: 'conversion'
        },
        {
          name: 'Flow Rate',
          route: 'FlowRateConverter',
          description: 'Flow rate conversion',
          icon: 'flowRateConverter',
          tag: 'flow , flow rate conversion , volume , conversion',
          category: 'conversion'
        },
        {
          name: 'Temperature',
          route: 'TemperatureConverter',
          description: 'Temperature conversion',
          icon: 'temperatureConverter',
          tag: 'temperature , temp conversion , centigrade , celsius , kelvin , conversion',
          category: 'conversion'
        },
        {
          name: 'QRCode',
          route: 'QRCode',
          description: 'Generate QR code from text',
          icon: 'qrCode',
          tag: 'qr-code',
          category: 'utility'
        },
        {
          name: '3D Print Stepper Calibration',
          route: '3dPrintStepperCalibration',
          description: '3d print stepper motors calibration',
          icon: '3dPrintCalibration',
          tag: '3D Print, calibration, stepper motors',
          category: 'threedPrinter'
        }
      ],
      searchQuery: null,
      select: null,
      noResult: false
    }
  },
  computed: {
    searchResult () {
      let out = []
      if (this.searchQuery || this.currentCategories.length > 0) {
        this.calculators.forEach((item) => {
          if (this.currentCategories.includes(item.category)) {
            out.push(item)
          }
          if (this.searchQuery && item.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1) {
            out.push(item)
          }
        })
      } else {
        out = this.calculators
      }
      return out
    },
    handleSearchNoResult () {
      if (this.searchResult.length === 0) {
        return this.noResult === false
      }
      return this.noResult
    }
  },
  methods: {
    setCurrentCategory (cat) {
      const index = this.currentCategories.indexOf(cat);
      if (index > -1) {
        this.currentCategories.splice(index, 1);
      } else {
        this.currentCategories = []
        this.currentCategories.push(cat)
      }
      this.$forceUpdate()
    },
    oneResult () {
      let calci = this.searchResult.length
      if (calci === 1) {
        this.searchResult.forEach((item) => {
          // window.location.pathname = window.location.pathname + item.route

          this.$router.push({ name: item.route })
        }
        )
      }
    }
  }
}
</script>
