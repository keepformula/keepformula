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
        <q-scroll-area
          horizontal
          style="height: 46px; width: 100%;">
          <div class="row no-wrap">
              <q-chip
                v-for="cat in categories"
                :key="cat"
                @click="setCurrentCategory(cat)"
                @hide="setCurrentCategory(cat)"
                :closable="currentCategories.includes(cat)"
                class="q-mr-xs q-ml-xs cursor-pointer"
                :color="(currentCategories.length === 0 || currentCategories.includes(cat)) ? 'primary' : 'light'">
                {{ $t(`categories.${cat}`) }}
              </q-chip>
          </div>
        </q-scroll-area>
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
import Widgets from '@/widgets'
import { mixin } from '@/mixins/mixin'

export default {
  name: 'PageHome',
  mixins: [mixin],
  data () {
    return {
      currentCategories: [],
      categories: [ 'conversion', 'design', 'health', 'threedPrinter' ],
      calculators: Widgets,
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
      const index = this.currentCategories.indexOf(cat)
      if (index > -1) {
        this.currentCategories.splice(index, 1)
      } else {
        this.currentCategories = []
        this.currentCategories.push(cat)
      }
      this.$forceUpdate()
    },
    oneResult () {
      let result = this.searchResult.length
      if (result === 1) {
        this.searchResult.forEach((item) => {
          this.$router.push({ name: item.route })
        }
        )
      }
    }
  }
}
</script>
