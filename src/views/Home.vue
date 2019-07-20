<template>
  <q-page class="q-pa-lg">
    <q-search
          class="q-mb-lg"
          v-model="searchQuery" />
      <div class="row">
        <div 
           v-for="(item, index) in searchResult"
           class="q-pa-sm col-12 col-md-4 col-lg-3" >
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
        }
      ],
      searchQuery: null,
      select: null
    }
  },
  computed: {
    searchResult () {
      let out =  []
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
