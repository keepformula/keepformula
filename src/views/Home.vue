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
          <router-link :to="{ name: item.name }" >
          {{ item.name }}
          </router-link>
        </q-card-title>
        <q-card-main>
          <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
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
          route: 'BMI'
        }
      ],
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ],
      search: null,
      select: null
    }
  }
}

</script>
