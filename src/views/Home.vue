<template>
  <q-page class="q-pa-md">
    <q-search
          class="q-mb-md"
          v-model="searchQuery" />
      <div class="row">
        <div
           v-for="(item, index) in searchResult"
           v-bind:key="item"
           class="q-pa-sm col-12 col-md-6 col-lg-4 col-xl-3" >
           <router-link
           :key="index"
           :to="{ name: item.name }" >
           <q-card
           class="card-hover calculator-cards w-100 q-ma-0 cursor-pointer"
           inline>
             <q-card-media
           class="q-py-lg flex flex-center">
               <img :src="`/icon/${item.icon}.svg`" width="100" style="width: 100px;"  />
             </q-card-media>
             <q-card-title class="text-center">
               {{ item.name }}
             </q-card-title>
          <q-card-main>
            <p class="text-faded flex flex-center"> {{ item.description }} </p>
          </q-card-main>
           </q-card>
           </router-link>
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
          name: 'Base Converter',
          route: 'Base.Converter',
          description: 'Number base conversion calculator',
          icon: 'baseConverter',
          tag: 'number , numerical convertion , convert',
          category: 'Convertion'
        },
        {
          name: 'Data Storage Converter',
          route: 'Data.Storage.Converter',
          description: 'Conversion units for the Data Storage',
          icon: 'dataStorageConverter',
          tag: 'storage , kilobyte , megabyte , gigabye ,terabyte',
          category: 'Convertion'
        }
      ],
      searchQuery: null,
      select: null
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
    }
  }
}
</script>
