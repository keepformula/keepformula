<template>
  <q-page class="q-pa-md">
    <div class="row">
    <q-search
          class="q-my-md q-mx-auto col-12 col-xl-8 col-lg-8 col-md-9 col-sm-10 search-style"
          hide-underline
          autofocus
          v-model="searchQuery" />
    </div>
    <div class="row">
      <div class="q-mx-auto col-12 col-xl-8 col-lg-8 col-md-9 col-sm-10">
        <div class="row">
        <div
           v-for="(item, index) in searchResult"
           v-bind:key="item"
           class="q-pa-sm col-12 col-md-6 col-lg-4 col-xl-4" >
           <router-link
           :key="index"
           :to="{ name: item.name }" >
           <q-card
           class="card-hover calculator-cards w-100 cursor-pointer"
           inline>
             <q-card-media
           class="q-py-lg flex flex-center">
               <img :src="`/icon/${item.icon}.svg`" style="width: 90px;"  />
             </q-card-media>
             <q-card-title class="text-center">
               {{ item.name }}
             </q-card-title>
          <q-card-main>
            <p class="text-faded flex flex-center q-caption"> {{ item.description }} </p>
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
          icon: 'bmi'
        },
        {
          name: 'Golden Ratio',
          route: 'Golden.Ratio',
          description: 'Calculate Golden Ratio',
          icon: 'goldenRatio'
        },
        {
          name: 'Base Converter',
          route: 'Base.Converter',
          description: 'Number base conversion calculator',
          icon: 'baseConverter'
        },
        {
          name: 'Data Storage Converter',
          route: 'Data.Storage.Converter',
          description: 'Conversion units for the Data Storage',
          icon: 'dataStorageConverter'
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
