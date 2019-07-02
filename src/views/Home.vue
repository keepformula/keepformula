<template>
  <q-page class="q-pa-lg">
    <q-search
      class="q-mb-lg"
      v-model="search" />
      <q-card
        class="q-ma-sm"
        v-for="item in calculators"
        v-bind:key="item"
        inline
        style="width: 300px">
        <q-card-media
          class="q-py-lg flex flex-center">
          <q-icon
            class="text-primary"
            style="font-size: 100px;"
            name="place" />
        </q-card-media>
        <q-card-title>
          <router-link class="flex flex-center" :to="{ name: item.name }">
          {{ item.name }}
          </router-link>
        </q-card-title>
        <q-card-main>
          <p class="text-faded flex flex-center"> {{ item.description }} </p>
        </q-card-main>
        </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      calculators: [
        {
          name: 'BMI',
          route: 'BMI',
          description: 'Calculate Body Mass Index'
        },
        {
          name: 'GoldenRatio',
          route: 'Golden.Ratio',
          description: 'Calculate Golden Ratio'
        },
        {
          name: 'BaseConverter',
          route: 'Base.Converter',
          description: 'Number base conversion calculator'
        }
      ],
      search: null,
      select: null
    }
  }
}

</script>
