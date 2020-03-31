<template>
  <q-page>
    <div>
      <div class="row mobile-search-margin">
        <q-search
           @keydown.enter="oneResult"
           class="q-my-lg q-mx-auto col-12 col-xl-4 col-lg-6 col-md-7 col-sm-8
           search-style"
           hide-underline
           ref='focusMe'
           placeholder="Search (e.g., Speed, Volume , Time, Frequency)"
           v-model="searchQuery" />
      </div>
    </div>
    <div class="row">
      <div class="q-mx-auto col-12 col-xl-8 col-lg-8 col-md-10 col-sm-10 q-pa-xs">
        <!-- eslint-disable-next-line vue/valid-v-model -->
        <div class="row" v-model="noResult">
             <p  class="q-display-1 text-center full-width q-mt-lg text-weight-light"
                 v-if="handleSearchNoResult">
               No Result!
             </p>
          <div
             v-for="(item, index) in searchResult"
             v-bind:key="index"
             class="q-pa-sm col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2 main-card" >
             <router-link
             :key="index"
             :to="{ name: item.name }" >
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
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      calculators: [
        {
          name: 'BMI',
          route: 'BMI',
          description: 'Calculate Body Mass Index',
          icon: 'bmi',
          tag: 'health , weight , height , mass , body',
          category: 'Health'
        },
        {
          name: 'Golden Ratio',
          route: 'Golden.Ratio',
          description: 'Calculate Golden Ratio',
          icon: 'goldenRatio',
          tag: 'math , rectangle , ratio',
          category: 'Math'
        },
        {
          name: 'Radix',
          route: 'Radix.Converter',
          description: 'Number base conversion calculator',
          icon: 'baseConverter',
          tag: 'number , numerical convertion , convert',
          category: 'Convertion'
        },
        {
          name: 'Data Storage',
          route: 'Data.Storage.Converter',
          description: 'Conversion units for the Data Storage',
          icon: 'dataStorageConverter',
          tag: 'storage , kilobyte , megabyte , gigabye ,terabyte',
          category: 'Convertion'
        },
        {
          name: 'Length',
          route: 'Length.Converter',
          description: 'Length conversion calculator',
          icon: 'lengthConverter',
          tag: 'number , length convertion , convert',
          category: 'Convertion'
        },
        {
          name: 'Weight',
          route: 'Weight.Converter',
          description: 'Weight conversion calculator',
          icon: 'weightConverter',
          tag: 'weight , mass convertion , convert',
          category: 'Convertion'
        },
        {
          name: 'Area',
          route: 'Area.Converter',
          description: 'Area conversion calculator',
          icon: 'areaConverter',
          tag: 'area , area convertion , convert , hectare , squad',
          category: 'Convertion'
        },
        {
          name: 'Volume',
          route: 'Volume.Converter',
          description: 'Volume conversion calculator',
          icon: 'volumeConverter',
          tag: 'volume , volume convertion , convert , liquid , cubic',
          category: 'Convertion'
        },
        {
          name: 'Pressure',
          route: 'Pressure.Converter',
          description: 'Pressure conversion calculator',
          icon: 'pressureConverter',
          tag: 'pressure , pressure convertion , convert , atmosphere , pascal',
          category: 'Convertion'
        },
        {
          name: 'Speed',
          route: 'Speed.Converter',
          description: 'Speed conversion calculator',
          icon: 'speedConverter',
          tag: 'speed , speed convertion , convert , metre per hour , knot',
          category: 'Convertion'
        },
        {
          name: 'Time',
          route: 'Time.Converter',
          description: 'Time conversion calculator',
          icon: 'timeConverter',
          tag: 'time , time convertion , convert , second , minute , hour ',
          category: 'Convertion'
        },
        {
          name: 'Angle',
          route: 'Angle.Converter',
          description: 'Angle conversion calculator',
          icon: 'angleConverter',
          tag: 'angle , angle convertion , convert , degrees , radian , gradian ',
          category: 'Convertion'
        },
        {
          name: 'Energy',
          route: 'Energy.Converter',
          description: 'Energy conversion calculator',
          icon: 'energyConverter',
          tag: 'energy , energy convertion , convert , watt , joule ',
          category: 'Convertion'
        },
        {
          name: 'Frequency',
          route: 'Frequency.Converter',
          description: 'Frequency conversion calculator',
          icon: 'frequencyConverter',
          tag: 'frequency , frequency convertion , convert , rpm , hz , mhz',
          category: 'Convertion'
        },
        {
          name: 'Density',
          route: 'Density.Converter',
          description: 'Density conversion calculator',
          icon: 'densityConverter',
          tag: 'density , density convertion , convert',
          category: 'Convertion'
        },
        {
          name: 'Force',
          route: 'Force.Converter',
          description: 'Force conversion calculator',
          icon: 'forceConverter',
          tag: 'force , force convertion , convert , newton',
          category: 'Convertion'
        },
        {
          name: 'Flow Rate',
          route: 'Flow.Rate.Converter',
          description: 'Flow rate conversion calculator',
          icon: 'flowRateConverter',
          tag: 'flow , flow rate convertion , volume , convertion',
          category: 'Convertion'
        },
        {
          name: 'Temperature',
          route: 'Temperature.Converter',
          description: 'Temperature conversion calculator',
          icon: 'temperatureConverter',
          tag: 'temperature , temp convertion , centigrade , celsius , kelvin , convertion',
          category: 'Convertion'
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
      if (this.searchQuery) {
        this.calculators.forEach((item) => {
          if (item.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1) {
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
    oneResult () {
      let calci = this.searchResult.length
      if (calci === 1) {
        this.searchResult.forEach((item) => {
          // window.location.pathname = window.location.pathname + item.route
          this.$router.push(item.route)
        }
        )
      }
    }
  },
  mounted () {
    if (window.screen.width > 768) {
      setTimeout(() => {
        this.$refs.focusMe.focus()
      }, 0)
    }
  }
}
</script>
